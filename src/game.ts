import { createCity } from "./Scenes/city";
import utils from "../node_modules/decentraland-ecs-utils/index";

/* Neo Dragon City: 
 *    [1] Create City Objects
 *    [2] Load City Music
 *    [3] Create Tour Drone
 *    [4] Create Pyramid in Sky
 */


// ----- [1] CREATE CITY OBJECTS FROM BUILDER -----
// ------------------------------------------------
createCity();

// ----- [2] LOAD CITY MUSIC -----
// -------------------------------


// ----- [3] CREATE TOUR DRONE -----
// ---------------------------------

// ----- Configurables -----
// -------------------------

// Drone speed
let speed = 0.128
// -------------------------

// ----- Quadcopter setup -----
// ----------------------------
let physicsCast = PhysicsCast.instance
let rayFromCamera = physicsCast.getRayFromCamera(1)
var dir = rayFromCamera.direction

const tourDrone = new Entity('vehicleQuadcopter')
engine.addEntity(tourDrone)
const quadcopterTransform = new Transform({
  position: new Vector3(10.8, 0.5, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0, 1.0, 1.0)
})
tourDrone.addComponentOrReplace(quadcopterTransform)
const quadcopterShape = new GLTFShape("models/Vehicle_Quadcopter.glb")
quadcopterShape.withCollisions = true
quadcopterShape.visible = true
tourDrone.addComponentOrReplace(quadcopterShape)

// Animate each rotor blade
let spinAnim1 = new AnimationState("Spin1")
let spinAnim2 = new AnimationState("Spin2")
let spinAnim3 = new AnimationState("Spin3")
let spinAnim4 = new AnimationState("Spin4")

tourDrone.addComponent(new Animator())

tourDrone.getComponent(Animator).addClip(spinAnim1)
tourDrone.getComponent(Animator).addClip(spinAnim2)
tourDrone.getComponent(Animator).addClip(spinAnim3)
tourDrone.getComponent(Animator).addClip(spinAnim4)

tourDrone.getComponent(Animator).getClip("Spin1").stop()
tourDrone.getComponent(Animator).getClip("Spin2").stop()
tourDrone.getComponent(Animator).getClip("Spin3").stop()
tourDrone.getComponent(Animator).getClip("Spin4").stop()

const audioClip = new AudioClip("sounds/quadcopter_pictures_of_the_floating_world.mp3")
audioClip.loop = true
const audioSource = new AudioSource(audioClip)
tourDrone.addComponent(audioSource)


// let songChoice = "sounds/Quadcopter.mp3" // Choices: Deep_Under.mp3, Forgotten.mp3

// const musicEntity = new Entity()
// //musicEntity.addComponent(new Transform({ position: new Vector3(-246, 40, -49)})) // Position 3D sound at goal so it gets louder as you near it
// let song = new AudioClip(songChoice)
// let music = new AudioSource(song)

// music.playing = true
// music.loop = true
// music.volume = 1.0
// musicEntity.addComponent(music)
// engine.addEntity(musicEntity)

// ----- FLY TOUR DRONE -----
// --------------------------

// Distance to our player setup
const camera = Camera.instance

// Returns the squared distance from player to tour drone (no need to square root since exact distance measurement not needed)
function distance(pos1: Vector3, pos2: Vector3): number {
    const a = pos1.x - pos2.x
    const b = pos1.z - pos2.z
    let c = pos1.y - pos2.y
    c = c * c
    if (c > 99999) {
        c = 999
    } else {
        c = 0
    }
    return a * a + b * b + c
}

// Drone timer
let droneCounter = 0

// Is drone flying
let droneFlying = 0

// If user looks down long enough (~2 seconds), start flying downward
let look_down_duration = 0

// User flying down
let flyDown = false

// Is in bounds (5m padding)
function inBounds(x: number, y: number, z: number)
{
    if (x < 6 || x > 74 || y > 92 || z < 6 || z > 89)
        return false
    return true
}

// Distance Update Function
class FlyDrone {
    update() {

            // [Setup] set drone transforms and distance to player calculation
            let transform = tourDrone.getComponent(Transform)
            let dist = distance(transform.position, camera.position)
            let x = camera.position.x
            let y = camera.position.y
            let z = camera.position.z
            // log('dist ' + dist)

            // if (droneCounter % 48 == 0)
            // {
            //     log('x ' + camera.position.x)
            //     log('y ' + camera.position.y)
            //     log('z ' + camera.position.z)
            // }

            // [Start Drone] when player jumps onto it
            if (y > 2 && dist <= 3.0 && droneFlying == 0)
            {
                droneFlying++
                tourDrone.getComponent(Animator).getClip("Spin1").play()
                tourDrone.getComponent(Animator).getClip("Spin2").play()
                tourDrone.getComponent(Animator).getClip("Spin3").play()
                tourDrone.getComponent(Animator).getClip("Spin4").play()

                audioSource.playing = true
                audioSource.loop = true
            }

            // [Fly Drone Loop]
            if (droneFlying >= 1)
            {

                // [Time counter] append counter
                droneCounter += 1

                // Slow start, accelerate after
                if (droneCounter < 256)
                {
                    speed = (droneCounter*0.0006) + (y/2000) // counter*0.0007 reaches speed of 0.1536m displacement per frame max
                }
                else
                {
                    speed = 0.1536 + (y/2000) // y/2000 is a value from 0 to 0.05
                }

                // Ray cast the camera to fly in camera's direction
                let physicsCast = PhysicsCast.instance
                let rayFromCamera = physicsCast.getRayFromCamera(1)
                var dir = rayFromCamera.direction
                //log('ray dir: ' + dir)
                let ray_x = dir.x
                let ray_y = dir.y
                let ray_z = dir.z

                
                // This inner loop runs less often for efficiency (per 4 game loops)
                // Drone will not immediately go down when player looks down in case they just want to look at the scenery, look for 2+ seconds to go down
                if (droneCounter % 4 == 0)
                {
                    // add to look down duration so long as user is looking down, however reset it when user looks up
                    if (ray_y < 0)
                        look_down_duration += 1
                    else 
                    {
                        look_down_duration = 0
                        flyDown = false
                    }
                    
                    if (look_down_duration >= 20)
                    {
                        //log('user looked down long enough to start flying down')
                        flyDown = true
                    }
                }

                // [Underground flight prevention] Do not let drone fly underground or too low
                if (y < 4.25 && ray_y <= 0) 
                {
                    ray_y = 0.0
                }

                // [Delayed fly down effect] Do not allow drone to fly down until flyDown flag is true
                if (flyDown == false && ray_y < 0)
                {
                    ray_y = 0.0
                }

                // [Fly only in bounds] Move the drone towards camera lookAt if in bounds
                if (inBounds(x+ray_x*speed*2,y+ray_y*speed*2,z+ray_z*speed*2))
                {
                    let ray_vec3 = new Vector3(ray_x*speed, ray_y*speed, ray_z*speed)
                    transform.translate(ray_vec3)    
                }
                
                // [End flight / Reset] Reset drone if user jumped/fell off drone
                if (dist > 12) {
                    droneFlying = 0
                    tourDrone.getComponent(Animator).getClip("Spin1").stop()
                    tourDrone.getComponent(Animator).getClip("Spin2").stop()
                    tourDrone.getComponent(Animator).getClip("Spin3").stop()
                    tourDrone.getComponent(Animator).getClip("Spin4").stop()
                    transform.position = new Vector3(10.8, 0.5, 56)

                    audioSource.playing = false
                    droneCounter = 0
                }

            
        }
    }
}

// Run the system
engine.addSystem(new FlyDrone())




// ----- [4] CREATE SKY PYRAMID -----
// ----------------------------------

const pyramid = new Entity('pyramid')
engine.addEntity(pyramid)
const pyramidTransform = new Transform({
  position: new Vector3(25, 67.5, 37.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6, 0.6, 0.6)
})
pyramid.addComponentOrReplace(pyramidTransform)
const pyramidShape = new GLTFShape("models/Prop_Pyramid.glb")
pyramidShape.withCollisions = true
pyramidShape.visible = true
pyramid.addComponentOrReplace(pyramidShape)


// Animate pyramid rotation
let pyramidRotate = new AnimationState("spin")
let pyramidColliderRotate = new AnimationState("spin.001")

pyramid.addComponent(new Animator())

pyramid.getComponent(Animator).addClip(pyramidRotate)
pyramid.getComponent(Animator).addClip(pyramidColliderRotate)

let pyramidAnim1 = pyramid.getComponent(Animator).getClip("spin")
let pyramidAnim2 = pyramid.getComponent(Animator).getClip("spin.001")

pyramidAnim1.play()
pyramidAnim2.play()

pyramidAnim1.speed = 0.08
pyramidAnim2.speed = 0.08


// Props inside pyramid

const couch1 = new Entity('couch1')
engine.addEntity(couch1)
couch1.setParent(pyramid) // make pyramid parent
const couch1Transform = new Transform({
  position: new Vector3(0, 0.1, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.2, 1.6, 1.6)
})
couch1.addComponentOrReplace(couch1Transform)
const couch1Shape = new GLTFShape("models/Prop_Couch.glb")
couch1Shape.withCollisions = true
couch1Shape.visible = true
couch1.addComponentOrReplace(couch1Shape)

// Create NPC Man

const male1 = new Entity('male1')
engine.addEntity(male1)
const male1Transform = new Transform({
  position: new Vector3(4, 0, 36),
  rotation: new Quaternion(0, 1.0, 0, 1),
  scale: new Vector3(0.9, 0.9, 0.9)
})
male1.addComponentOrReplace(male1Transform)
const male1Shape = new GLTFShape("models/Char_Male_1.glb")
male1Shape.withCollisions = true
male1Shape.visible = true
male1.addComponentOrReplace(male1Shape)

let path_3 = []
    path_3[0] = new Vector3(4, 0, 36)
    path_3[1] = new Vector3(27, 0, 36)
    path_3[2] = new Vector3(50, 0, 36)
    path_3[3] = new Vector3(62, 0, 29)
    path_3[4] = new Vector3(70, 0, 28)
    male1.addComponent(new utils.Interval(20100, () => {
        male1.addComponent(new utils.FollowPathComponent(path_3, 20));
    }))
