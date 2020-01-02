export type Props = {
  onClick?: Actions
  onOpen?: Actions
  onClose?: Actions
}

export default class Button implements IScript<Props> {
  openClip = new AudioClip('f7573b6c-f5d3-403c-ad74-2657adbe4a54/sounds/open.mp3')
  closeClip = new AudioClip('f7573b6c-f5d3-403c-ad74-2657adbe4a54/sounds/close.mp3')

  active: Record<string, boolean> = {}

  init() {}

  toggle(entity: Entity, value: boolean, playSound = true) {
    if (this.active[entity.name] === value) return

    if (playSound) {
      const source = new AudioSource(value ? this.openClip : this.closeClip)
      entity.addComponentOrReplace(source)
      source.playing = true
    }

    const animator = entity.getComponent(Animator)
    const openClip = animator.getClip('open')
    const closeClip = animator.getClip('close')
    openClip.stop()
    closeClip.stop()
    const clip = value ? openClip : closeClip
    clip.play()

    const collider = Object.keys(entity.children).map(
      key => entity.children[key]
    )[0]
    if (collider) {
      collider.addComponentOrReplace(
        new Transform({
          scale: value ? new Vector3(0, 0, 0) : new Vector3(1, 1, 1)
        })
      )
    }

    this.active[entity.name] = value
  }

  spawn(host: Entity, props: Props, channel: IChannel) {
    const door = new Entity(host.name + '-door')
    door.setParent(host)

    const animator = new Animator()
    const closeClip = new AnimationState('close', { looping: false })
    const openClip = new AnimationState('open', { looping: false })
    animator.addClip(closeClip)
    animator.addClip(openClip)
    door.addComponent(animator)
    openClip.stop()

    door.addComponent(new GLTFShape('f7573b6c-f5d3-403c-ad74-2657adbe4a54/models/Door_SciFi_Vertical.glb'))

    // collider
    const collider = new Entity(door.name + '-collider')
    collider.setParent(door)
    collider.addComponent(new GLTFShape('f7573b6c-f5d3-403c-ad74-2657adbe4a54/models/Door_SciFi_collider.glb'))

    this.active[door.name] = false

    // handle actions
    channel.handleAction('open', ({ sender }) => {
      this.toggle(door, true)
      if (sender === channel.id) {
        channel.sendActions(props.onOpen)
      }
    })
    channel.handleAction('close', ({ sender }) => {
      this.toggle(door, false)
      if (sender === channel.id) {
        channel.sendActions(props.onClose)
      }
    })
    channel.handleAction('toggle', ({ sender }) => {
      const newValue = !this.active[door.name]
      this.toggle(door, newValue)
      if (sender === channel.id) {
        channel.sendActions(newValue ? props.onOpen : props.onClose)
      }
    })

    // sync initial values
    channel.request<boolean>('isOpen', isOpen =>
      this.toggle(door, isOpen, false)
    )
    channel.reply<boolean>('isOpen', () => this.active[door.name])
  }
}
