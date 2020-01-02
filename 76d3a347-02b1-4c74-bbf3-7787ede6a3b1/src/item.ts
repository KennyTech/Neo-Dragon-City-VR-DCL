export type Props = {
  onClick?: Actions
}

export default class Button implements IScript<Props> {
  clip = new AudioClip('76d3a347-02b1-4c74-bbf3-7787ede6a3b1/sounds/click.mp3')

  init() {}

  play(entity: Entity) {
    const source = new AudioSource(this.clip)
    entity.addComponentOrReplace(source)
    source.playing = true

    const animator = entity.getComponent(Animator)
    const clip = animator.getClip('trigger')
    clip.stop()
    clip.play()
  }

  spawn(host: Entity, props: Props, channel: IChannel) {
    const button = new Entity()
    button.setParent(host)

    button.addComponent(new GLTFShape('76d3a347-02b1-4c74-bbf3-7787ede6a3b1/models/Green_Button.glb'))

    const animator = new Animator()
    const clip = new AnimationState('trigger', { looping: false })
    animator.addClip(clip)
    button.addComponent(animator)

    button.addComponent(
      new OnPointerDown(() => {
        this.play(button)
        channel.sendActions(props.onClick)
      })
    )
  }
}
