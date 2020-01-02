import { createChannel } from '../../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../../c5cbd030-54d0-4f28-9158-d27401c691b1/src/item"
import Script2 from "../../ab743f36-176b-4e74-897e-19e28cc6e425/src/item"
import Script3 from "../../28352c3a-cc20-4ab4-b4b8-a4562a6b0d4d/src/item"
import Script4 from "../../a56ac3e0-aef8-48b9-b55b-844b3fa77056/src/item"
import Script5 from "../../f7573b6c-f5d3-403c-ad74-2657adbe4a54/src/item"
import Script6 from "../../58dc566a-2add-4326-b61c-0fdf46903195/src/item"
import Script7 from "../../76d3a347-02b1-4c74-bbf3-7787ede6a3b1/src/item"
import Script8 from "../../89d3e0e7-b9cd-406e-bd95-8abba3b37cc6/src/item"
import Script9 from "../../1ab2733f-1782-4521-9eda-6aa8ad684277/src/item"
import Script10 from "../../683aa047-8043-40f8-8d31-beb7ab1b138c/src/item"
import Script11 from "../../68986c60-c95c-41ab-adf0-d0e02f5b5440/src/item"
import Script12 from "../../2b9d39a4-980f-489b-8e0b-46f72552ea47/src/item"
import Script13 from "../../267c8583-606f-4b5a-a00d-b5f7f993766e/src/item"
import Script14 from "../../7e78cd70-5414-4ec4-be5f-198ec9879a5e/src/item"
//import utils from "../../node_modules/decentraland-ecs-utils/index";

export function createCity(): void {
    const _scene = new Entity('_scene')
    engine.addEntity(_scene)
    const transform = new Transform({
      position: new Vector3(0, 0, 0),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    _scene.addComponentOrReplace(transform)
    
    const concrete = new Entity('concrete')
    engine.addEntity(concrete)
    concrete.setParent(_scene)
    const gltfShape = new GLTFShape("models/FloorBaseConcrete_01/FloorBaseConcrete_01.glb")
    gltfShape.withCollisions = true
    gltfShape.visible = true
    concrete.addComponentOrReplace(gltfShape)
    const transform2 = new Transform({
      position: new Vector3(8, 0, 8),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete.addComponentOrReplace(transform2)
    
    const concrete2 = new Entity('concrete2')
    engine.addEntity(concrete2)
    concrete2.setParent(_scene)
    concrete2.addComponentOrReplace(gltfShape)
    const transform3 = new Transform({
      position: new Vector3(24, 0, 8),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete2.addComponentOrReplace(transform3)
    
    const concrete3 = new Entity('concrete3')
    engine.addEntity(concrete3)
    concrete3.setParent(_scene)
    concrete3.addComponentOrReplace(gltfShape)
    const transform4 = new Transform({
      position: new Vector3(40, 0, 8),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete3.addComponentOrReplace(transform4)
    
    const concrete4 = new Entity('concrete4')
    engine.addEntity(concrete4)
    concrete4.setParent(_scene)
    concrete4.addComponentOrReplace(gltfShape)
    const transform5 = new Transform({
      position: new Vector3(56, 0, 8),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete4.addComponentOrReplace(transform5)
    
    const concrete5 = new Entity('concrete5')
    engine.addEntity(concrete5)
    concrete5.setParent(_scene)
    concrete5.addComponentOrReplace(gltfShape)
    const transform6 = new Transform({
      position: new Vector3(72, 0, 8),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete5.addComponentOrReplace(transform6)
    
    const concrete6 = new Entity('concrete6')
    engine.addEntity(concrete6)
    concrete6.setParent(_scene)
    concrete6.addComponentOrReplace(gltfShape)
    const transform7 = new Transform({
      position: new Vector3(8, 0, 24),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete6.addComponentOrReplace(transform7)
    
    const concrete7 = new Entity('concrete7')
    engine.addEntity(concrete7)
    concrete7.setParent(_scene)
    concrete7.addComponentOrReplace(gltfShape)
    const transform8 = new Transform({
      position: new Vector3(24, 0, 24),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete7.addComponentOrReplace(transform8)
    
    const concrete8 = new Entity('concrete8')
    engine.addEntity(concrete8)
    concrete8.setParent(_scene)
    concrete8.addComponentOrReplace(gltfShape)
    const transform9 = new Transform({
      position: new Vector3(40, 0, 24),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete8.addComponentOrReplace(transform9)
    
    const concrete9 = new Entity('concrete9')
    engine.addEntity(concrete9)
    concrete9.setParent(_scene)
    concrete9.addComponentOrReplace(gltfShape)
    const transform10 = new Transform({
      position: new Vector3(56, 0, 24),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete9.addComponentOrReplace(transform10)
    
    const concrete10 = new Entity('concrete10')
    engine.addEntity(concrete10)
    concrete10.setParent(_scene)
    concrete10.addComponentOrReplace(gltfShape)
    const transform11 = new Transform({
      position: new Vector3(72, 0, 24),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete10.addComponentOrReplace(transform11)
    
    const concrete11 = new Entity('concrete11')
    engine.addEntity(concrete11)
    concrete11.setParent(_scene)
    concrete11.addComponentOrReplace(gltfShape)
    const transform12 = new Transform({
      position: new Vector3(8, 0, 40),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete11.addComponentOrReplace(transform12)
    
    const concrete12 = new Entity('concrete12')
    engine.addEntity(concrete12)
    concrete12.setParent(_scene)
    concrete12.addComponentOrReplace(gltfShape)
    const transform13 = new Transform({
      position: new Vector3(24, 0, 40),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete12.addComponentOrReplace(transform13)
    
    const concrete13 = new Entity('concrete13')
    engine.addEntity(concrete13)
    concrete13.setParent(_scene)
    concrete13.addComponentOrReplace(gltfShape)
    const transform14 = new Transform({
      position: new Vector3(40, 0, 40),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete13.addComponentOrReplace(transform14)
    
    const concrete14 = new Entity('concrete14')
    engine.addEntity(concrete14)
    concrete14.setParent(_scene)
    concrete14.addComponentOrReplace(gltfShape)
    const transform15 = new Transform({
      position: new Vector3(56, 0, 40),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete14.addComponentOrReplace(transform15)
    
    const concrete15 = new Entity('concrete15')
    engine.addEntity(concrete15)
    concrete15.setParent(_scene)
    concrete15.addComponentOrReplace(gltfShape)
    const transform16 = new Transform({
      position: new Vector3(72, 0, 40),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete15.addComponentOrReplace(transform16)
    
    const concrete16 = new Entity('concrete16')
    engine.addEntity(concrete16)
    concrete16.setParent(_scene)
    concrete16.addComponentOrReplace(gltfShape)
    const transform17 = new Transform({
      position: new Vector3(8, 0, 56),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete16.addComponentOrReplace(transform17)
    
    const concrete17 = new Entity('concrete17')
    engine.addEntity(concrete17)
    concrete17.setParent(_scene)
    concrete17.addComponentOrReplace(gltfShape)
    const transform18 = new Transform({
      position: new Vector3(24, 0, 56),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete17.addComponentOrReplace(transform18)
    
    const concrete18 = new Entity('concrete18')
    engine.addEntity(concrete18)
    concrete18.setParent(_scene)
    concrete18.addComponentOrReplace(gltfShape)
    const transform19 = new Transform({
      position: new Vector3(40, 0, 56),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete18.addComponentOrReplace(transform19)
    
    const concrete19 = new Entity('concrete19')
    engine.addEntity(concrete19)
    concrete19.setParent(_scene)
    concrete19.addComponentOrReplace(gltfShape)
    const transform20 = new Transform({
      position: new Vector3(56, 0, 56),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete19.addComponentOrReplace(transform20)
    
    const concrete20 = new Entity('concrete20')
    engine.addEntity(concrete20)
    concrete20.setParent(_scene)
    concrete20.addComponentOrReplace(gltfShape)
    const transform21 = new Transform({
      position: new Vector3(72, 0, 56),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete20.addComponentOrReplace(transform21)
    
    const concrete21 = new Entity('concrete21')
    engine.addEntity(concrete21)
    concrete21.setParent(_scene)
    concrete21.addComponentOrReplace(gltfShape)
    const transform22 = new Transform({
      position: new Vector3(8, 0, 72),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete21.addComponentOrReplace(transform22)
    
    const concrete22 = new Entity('concrete22')
    engine.addEntity(concrete22)
    concrete22.setParent(_scene)
    concrete22.addComponentOrReplace(gltfShape)
    const transform23 = new Transform({
      position: new Vector3(24, 0, 72),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete22.addComponentOrReplace(transform23)
    
    const concrete23 = new Entity('concrete23')
    engine.addEntity(concrete23)
    concrete23.setParent(_scene)
    concrete23.addComponentOrReplace(gltfShape)
    const transform24 = new Transform({
      position: new Vector3(40, 0, 72),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete23.addComponentOrReplace(transform24)
    
    const concrete24 = new Entity('concrete24')
    engine.addEntity(concrete24)
    concrete24.setParent(_scene)
    concrete24.addComponentOrReplace(gltfShape)
    const transform25 = new Transform({
      position: new Vector3(56, 0, 72),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete24.addComponentOrReplace(transform25)
    
    const concrete25 = new Entity('concrete25')
    engine.addEntity(concrete25)
    concrete25.setParent(_scene)
    concrete25.addComponentOrReplace(gltfShape)
    const transform26 = new Transform({
      position: new Vector3(72, 0, 72),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete25.addComponentOrReplace(transform26)
    
    const concrete26 = new Entity('concrete26')
    engine.addEntity(concrete26)
    concrete26.setParent(_scene)
    concrete26.addComponentOrReplace(gltfShape)
    const transform27 = new Transform({
      position: new Vector3(8, 0, 88),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete26.addComponentOrReplace(transform27)
    
    const concrete27 = new Entity('concrete27')
    engine.addEntity(concrete27)
    concrete27.setParent(_scene)
    concrete27.addComponentOrReplace(gltfShape)
    const transform28 = new Transform({
      position: new Vector3(24, 0, 88),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete27.addComponentOrReplace(transform28)
    
    const concrete28 = new Entity('concrete28')
    engine.addEntity(concrete28)
    concrete28.setParent(_scene)
    concrete28.addComponentOrReplace(gltfShape)
    const transform29 = new Transform({
      position: new Vector3(40, 0, 88),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete28.addComponentOrReplace(transform29)
    
    const concrete29 = new Entity('concrete29')
    engine.addEntity(concrete29)
    concrete29.setParent(_scene)
    concrete29.addComponentOrReplace(gltfShape)
    const transform30 = new Transform({
      position: new Vector3(56, 0, 88),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete29.addComponentOrReplace(transform30)
    
    const concrete30 = new Entity('concrete30')
    engine.addEntity(concrete30)
    concrete30.setParent(_scene)
    concrete30.addComponentOrReplace(gltfShape)
    const transform31 = new Transform({
      position: new Vector3(72, 0, 88),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    concrete30.addComponentOrReplace(transform31)
    
    const buildingTowerV14 = new Entity('buildingTowerV14')
    engine.addEntity(buildingTowerV14)
    buildingTowerV14.setParent(_scene)
    const gltfShape2 = new GLTFShape("models/Building_Tower_v1.glb")
    gltfShape2.withCollisions = true
    gltfShape2.visible = true
    buildingTowerV14.addComponentOrReplace(gltfShape2)
    const transform32 = new Transform({
      position: new Vector3(5, 0, 15.500007629394531),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingTowerV14.addComponentOrReplace(transform32)
    
    const buildingTowerV16 = new Entity('buildingTowerV16')
    engine.addEntity(buildingTowerV16)
    buildingTowerV16.setParent(_scene)
    buildingTowerV16.addComponentOrReplace(gltfShape2)
    const transform33 = new Transform({
      position: new Vector3(60.5, 0, 17.000001907348633),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingTowerV16.addComponentOrReplace(transform33)
    
    const buildingWallV15 = new Entity('buildingWallV15')
    engine.addEntity(buildingWallV15)
    buildingWallV15.setParent(_scene)
    const transform34 = new Transform({
      position: new Vector3(67.5, 0, 16.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingWallV15.addComponentOrReplace(transform34)
    const gltfShape3 = new GLTFShape("models/Building_Wall_v1.glb")
    gltfShape3.withCollisions = true
    gltfShape3.visible = true
    buildingWallV15.addComponentOrReplace(gltfShape3)
    
    const buildingWallV1 = new Entity('buildingWallV1')
    engine.addEntity(buildingWallV1)
    buildingWallV1.setParent(_scene)
    buildingWallV1.addComponentOrReplace(gltfShape3)
    const transform35 = new Transform({
      position: new Vector3(53.5, 0, 16.500001907348633),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingWallV1.addComponentOrReplace(transform35)
    
    const buildingWallV13 = new Entity('buildingWallV13')
    engine.addEntity(buildingWallV13)
    buildingWallV13.setParent(_scene)
    buildingWallV13.addComponentOrReplace(gltfShape3)
    const transform36 = new Transform({
      position: new Vector3(25, 0, 15.500003814697266),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingWallV13.addComponentOrReplace(transform36)
    
    const buildingWallV14 = new Entity('buildingWallV14')
    engine.addEntity(buildingWallV14)
    buildingWallV14.setParent(_scene)
    buildingWallV14.addComponentOrReplace(gltfShape3)
    const transform37 = new Transform({
      position: new Vector3(12, 0, 15.000005722045898),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingWallV14.addComponentOrReplace(transform37)
    
    const buildingTowerV13 = new Entity('buildingTowerV13')
    engine.addEntity(buildingTowerV13)
    buildingTowerV13.setParent(_scene)
    buildingTowerV13.addComponentOrReplace(gltfShape2)
    const transform38 = new Transform({
      position: new Vector3(18.5, 0, 14.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingTowerV13.addComponentOrReplace(transform38)
    
    const buildingTowerV15 = new Entity('buildingTowerV15')
    engine.addEntity(buildingTowerV15)
    buildingTowerV15.setParent(_scene)
    buildingTowerV15.addComponentOrReplace(gltfShape2)
    const transform39 = new Transform({
      position: new Vector3(32.5, 0, 16.000003814697266),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingTowerV15.addComponentOrReplace(transform39)
    
    const buildingTowerV17 = new Entity('buildingTowerV17')
    engine.addEntity(buildingTowerV17)
    buildingTowerV17.setParent(_scene)
    buildingTowerV17.addComponentOrReplace(gltfShape2)
    const transform40 = new Transform({
      position: new Vector3(46.5, 0, 16.000003814697266),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingTowerV17.addComponentOrReplace(transform40)
    
    const grassTile = new Entity('grassTile')
    engine.addEntity(grassTile)
    grassTile.setParent(_scene)
    const transform41 = new Transform({
      position: new Vector3(78, 0, 48),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 1, 48)
    })
    grassTile.addComponentOrReplace(transform41)
    const gltfShape4 = new GLTFShape("models/FloorBlock_05/FloorBlock_05.glb")
    gltfShape4.withCollisions = true
    gltfShape4.visible = true
    grassTile.addComponentOrReplace(gltfShape4)
    
    const grassTile2 = new Entity('grassTile2')
    engine.addEntity(grassTile2)
    grassTile2.setParent(_scene)
    grassTile2.addComponentOrReplace(gltfShape4)
    const transform42 = new Transform({
      position: new Vector3(1.999997615814209, 0, 48),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 1, 48)
    })
    grassTile2.addComponentOrReplace(transform42)
    
    const buildingTowerV1 = new Entity('buildingTowerV1')
    engine.addEntity(buildingTowerV1)
    buildingTowerV1.setParent(_scene)
    buildingTowerV1.addComponentOrReplace(gltfShape2)
    const transform43 = new Transform({
      position: new Vector3(75.0, 0, 16.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingTowerV1.addComponentOrReplace(transform43)
    
    const buildingWallV17 = new Entity('buildingWallV17')
    engine.addEntity(buildingWallV17)
    buildingWallV17.setParent(_scene)
    buildingWallV17.addComponentOrReplace(gltfShape3)
    const transform44 = new Transform({
      position: new Vector3(76.0, 0, 23.5),
      rotation: new Quaternion(-1.94558004621803e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingWallV17.addComponentOrReplace(transform44)
    
    const buildingWallV18 = new Entity('buildingWallV18')
    engine.addEntity(buildingWallV18)
    buildingWallV18.setParent(_scene)
    buildingWallV18.addComponentOrReplace(gltfShape3)
    const transform45 = new Transform({
      position: new Vector3(76.0, 0, 38),
      rotation: new Quaternion(-1.94558004621803e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingWallV18.addComponentOrReplace(transform45)
    
    const buildingWallV19 = new Entity('buildingWallV19')
    engine.addEntity(buildingWallV19)
    buildingWallV19.setParent(_scene)
    buildingWallV19.addComponentOrReplace(gltfShape3)
    const transform46 = new Transform({
      position: new Vector3(76.0, 0, 52),
      rotation: new Quaternion(-1.94558004621803e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingWallV19.addComponentOrReplace(transform46)
    
    const buildingTowerV18 = new Entity('buildingTowerV18')
    engine.addEntity(buildingTowerV18)
    buildingTowerV18.setParent(_scene)
    buildingTowerV18.addComponentOrReplace(gltfShape2)
    const transform47 = new Transform({
      position: new Vector3(75.0, 0, 30.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingTowerV18.addComponentOrReplace(transform47)
    
    const buildingTowerV19 = new Entity('buildingTowerV19')
    engine.addEntity(buildingTowerV19)
    buildingTowerV19.setParent(_scene)
    buildingTowerV19.addComponentOrReplace(gltfShape2)
    const transform48 = new Transform({
      position: new Vector3(75.0, 0, 45),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingTowerV19.addComponentOrReplace(transform48)
    
    const buildingTowerV110 = new Entity('buildingTowerV110')
    engine.addEntity(buildingTowerV110)
    buildingTowerV110.setParent(_scene)
    buildingTowerV110.addComponentOrReplace(gltfShape2)
    const transform49 = new Transform({
      position: new Vector3(75.0, 0, 59),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingTowerV110.addComponentOrReplace(transform49)
    
    const buildingWallV110 = new Entity('buildingWallV110')
    engine.addEntity(buildingWallV110)
    buildingWallV110.setParent(_scene)
    buildingWallV110.addComponentOrReplace(gltfShape3)
    const transform50 = new Transform({
      position: new Vector3(76.0, 0, 65.5),
      rotation: new Quaternion(-1.94558004621803e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingWallV110.addComponentOrReplace(transform50)
    
    const buildingTowerV111 = new Entity('buildingTowerV111')
    engine.addEntity(buildingTowerV111)
    buildingTowerV111.setParent(_scene)
    buildingTowerV111.addComponentOrReplace(gltfShape2)
    const transform51 = new Transform({
      position: new Vector3(75.0, 0, 72.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingTowerV111.addComponentOrReplace(transform51)
    
    const buildingWallV111 = new Entity('buildingWallV111')
    engine.addEntity(buildingWallV111)
    buildingWallV111.setParent(_scene)
    buildingWallV111.addComponentOrReplace(gltfShape3)
    const transform52 = new Transform({
      position: new Vector3(76.0, 0, 79.5),
      rotation: new Quaternion(-1.94558004621803e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingWallV111.addComponentOrReplace(transform52)
    
    const buildingTowerV112 = new Entity('buildingTowerV112')
    engine.addEntity(buildingTowerV112)
    buildingTowerV112.setParent(_scene)
    buildingTowerV112.addComponentOrReplace(gltfShape2)
    const transform53 = new Transform({
      position: new Vector3(75.0, 0, 86),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingTowerV112.addComponentOrReplace(transform53)
    
    const buildingWallV16 = new Entity('buildingWallV16')
    engine.addEntity(buildingWallV16)
    buildingWallV16.setParent(_scene)
    buildingWallV16.addComponentOrReplace(gltfShape3)
    const transform54 = new Transform({
      position: new Vector3(4.999999523162842, 0, 23.500001907348633),
      rotation: new Quaternion(-1.94558004621803e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingWallV16.addComponentOrReplace(transform54)
    
    const buildingTowerV12 = new Entity('buildingTowerV12')
    engine.addEntity(buildingTowerV12)
    buildingTowerV12.setParent(_scene)
    buildingTowerV12.addComponentOrReplace(gltfShape2)
    const transform55 = new Transform({
      position: new Vector3(5, 0, 30.50000762939453),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingTowerV12.addComponentOrReplace(transform55)
    
    const buildingWallV112 = new Entity('buildingWallV112')
    engine.addEntity(buildingWallV112)
    buildingWallV112.setParent(_scene)
    buildingWallV112.addComponentOrReplace(gltfShape3)
    const transform56 = new Transform({
      position: new Vector3(4.999999523162842, 0, 38),
      rotation: new Quaternion(-1.94558004621803e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingWallV112.addComponentOrReplace(transform56)
    
    const buildingTowerV113 = new Entity('buildingTowerV113')
    engine.addEntity(buildingTowerV113)
    buildingTowerV113.setParent(_scene)
    buildingTowerV113.addComponentOrReplace(gltfShape2)
    const transform57 = new Transform({
      position: new Vector3(5, 0, 45.00000762939453),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingTowerV113.addComponentOrReplace(transform57)
    
    const buildingWallV113 = new Entity('buildingWallV113')
    engine.addEntity(buildingWallV113)
    buildingWallV113.setParent(_scene)
    buildingWallV113.addComponentOrReplace(gltfShape3)
    const transform58 = new Transform({
      position: new Vector3(4.999999523162842, 0, 52),
      rotation: new Quaternion(-1.94558004621803e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingWallV113.addComponentOrReplace(transform58)
    
    const buildingTowerV114 = new Entity('buildingTowerV114')
    engine.addEntity(buildingTowerV114)
    buildingTowerV114.setParent(_scene)
    buildingTowerV114.addComponentOrReplace(gltfShape2)
    const transform59 = new Transform({
      position: new Vector3(5, 0, 72.50000762939453),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingTowerV114.addComponentOrReplace(transform59)
    
    const buildingWallV114 = new Entity('buildingWallV114')
    engine.addEntity(buildingWallV114)
    buildingWallV114.setParent(_scene)
    buildingWallV114.addComponentOrReplace(gltfShape3)
    const transform60 = new Transform({
      position: new Vector3(4.999999523162842, 0, 66.5),
      rotation: new Quaternion(-1.94558004621803e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingWallV114.addComponentOrReplace(transform60)
    
    const buildingTowerV115 = new Entity('buildingTowerV115')
    engine.addEntity(buildingTowerV115)
    buildingTowerV115.setParent(_scene)
    buildingTowerV115.addComponentOrReplace(gltfShape2)
    const transform61 = new Transform({
      position: new Vector3(5, 0, 59.00000762939453),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingTowerV115.addComponentOrReplace(transform61)
    
    const buildingWallV115 = new Entity('buildingWallV115')
    engine.addEntity(buildingWallV115)
    buildingWallV115.setParent(_scene)
    buildingWallV115.addComponentOrReplace(gltfShape3)
    const transform62 = new Transform({
      position: new Vector3(4.999999523162842, 0, 80),
      rotation: new Quaternion(-1.94558004621803e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingWallV115.addComponentOrReplace(transform62)
    
    const buildingTowerV116 = new Entity('buildingTowerV116')
    engine.addEntity(buildingTowerV116)
    buildingTowerV116.setParent(_scene)
    buildingTowerV116.addComponentOrReplace(gltfShape2)
    const transform63 = new Transform({
      position: new Vector3(5, 0, 86.50000762939453),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingTowerV116.addComponentOrReplace(transform63)
    
    const buildingWallV116 = new Entity('buildingWallV116')
    engine.addEntity(buildingWallV116)
    buildingWallV116.setParent(_scene)
    buildingWallV116.addComponentOrReplace(gltfShape3)
    const transform64 = new Transform({
      position: new Vector3(12, 0, 86.50000762939453),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingWallV116.addComponentOrReplace(transform64)
    
    const buildingWallV117 = new Entity('buildingWallV117')
    engine.addEntity(buildingWallV117)
    buildingWallV117.setParent(_scene)
    buildingWallV117.addComponentOrReplace(gltfShape3)
    const transform65 = new Transform({
      position: new Vector3(67.5, 0, 86),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingWallV117.addComponentOrReplace(transform65)
    
    const buildingTowerV117 = new Entity('buildingTowerV117')
    engine.addEntity(buildingTowerV117)
    buildingTowerV117.setParent(_scene)
    buildingTowerV117.addComponentOrReplace(gltfShape2)
    const transform66 = new Transform({
      position: new Vector3(60, 0, 86),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingTowerV117.addComponentOrReplace(transform66)
    
    const buildingTowerV118 = new Entity('buildingTowerV118')
    engine.addEntity(buildingTowerV118)
    buildingTowerV118.setParent(_scene)
    buildingTowerV118.addComponentOrReplace(gltfShape2)
    const transform67 = new Transform({
      position: new Vector3(33.5, 0, 86.00000762939453),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingTowerV118.addComponentOrReplace(transform67)
    
    const buildingWallV118 = new Entity('buildingWallV118')
    engine.addEntity(buildingWallV118)
    buildingWallV118.setParent(_scene)
    buildingWallV118.addComponentOrReplace(gltfShape3)
    const transform68 = new Transform({
      position: new Vector3(40, 0, 86),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingWallV118.addComponentOrReplace(transform68)
    
    const buildingWallV119 = new Entity('buildingWallV119')
    engine.addEntity(buildingWallV119)
    buildingWallV119.setParent(_scene)
    buildingWallV119.addComponentOrReplace(gltfShape3)
    const transform69 = new Transform({
      position: new Vector3(53.5, 0, 86),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingWallV119.addComponentOrReplace(transform69)
    
    const buildingTowerV119 = new Entity('buildingTowerV119')
    engine.addEntity(buildingTowerV119)
    buildingTowerV119.setParent(_scene)
    buildingTowerV119.addComponentOrReplace(gltfShape2)
    const transform70 = new Transform({
      position: new Vector3(47, 0, 86),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingTowerV119.addComponentOrReplace(transform70)
    
    const buildingRoadV1 = new Entity('buildingRoadV1')
    engine.addEntity(buildingRoadV1)
    buildingRoadV1.setParent(_scene)
    const gltfShape5 = new GLTFShape("models/Building_Road_v1.glb")
    gltfShape5.withCollisions = true
    gltfShape5.visible = true
    buildingRoadV1.addComponentOrReplace(gltfShape5)
    const transform71 = new Transform({
      position: new Vector3(31.845592498779297, 0.11461257934570312, 86.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV1.addComponentOrReplace(transform71)
    
    const buildingRoadV12 = new Entity('buildingRoadV12')
    engine.addEntity(buildingRoadV12)
    buildingRoadV12.setParent(_scene)
    buildingRoadV12.addComponentOrReplace(gltfShape5)
    const transform72 = new Transform({
      position: new Vector3(26.845592498779297, 0.11461257934570312, 86.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV12.addComponentOrReplace(transform72)
    
    const buildingRoadV13 = new Entity('buildingRoadV13')
    engine.addEntity(buildingRoadV13)
    buildingRoadV13.setParent(_scene)
    buildingRoadV13.addComponentOrReplace(gltfShape5)
    const transform73 = new Transform({
      position: new Vector3(31.845592498779297, 0.11461257934570312, 81.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV13.addComponentOrReplace(transform73)
    
    const buildingRoadV14 = new Entity('buildingRoadV14')
    engine.addEntity(buildingRoadV14)
    buildingRoadV14.setParent(_scene)
    buildingRoadV14.addComponentOrReplace(gltfShape5)
    const transform74 = new Transform({
      position: new Vector3(26.845592498779297, 0.11461257934570312, 81.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV14.addComponentOrReplace(transform74)
    
    const buildingRoadV15 = new Entity('buildingRoadV15')
    engine.addEntity(buildingRoadV15)
    buildingRoadV15.setParent(_scene)
    buildingRoadV15.addComponentOrReplace(gltfShape5)
    const transform75 = new Transform({
      position: new Vector3(31.845592498779297, 0.11461257934570312, 91.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV15.addComponentOrReplace(transform75)
    
    const buildingRoadV16 = new Entity('buildingRoadV16')
    engine.addEntity(buildingRoadV16)
    buildingRoadV16.setParent(_scene)
    buildingRoadV16.addComponentOrReplace(gltfShape5)
    const transform76 = new Transform({
      position: new Vector3(26.845592498779297, 0.11461257934570312, 91.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV16.addComponentOrReplace(transform76)
    
    const buildingRoadV17 = new Entity('buildingRoadV17')
    engine.addEntity(buildingRoadV17)
    buildingRoadV17.setParent(_scene)
    buildingRoadV17.addComponentOrReplace(gltfShape5)
    const transform77 = new Transform({
      position: new Vector3(31.845592498779297, 0.11461257934570312, 96),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV17.addComponentOrReplace(transform77)
    
    const buildingRoadV18 = new Entity('buildingRoadV18')
    engine.addEntity(buildingRoadV18)
    buildingRoadV18.setParent(_scene)
    buildingRoadV18.addComponentOrReplace(gltfShape5)
    const transform78 = new Transform({
      position: new Vector3(26.845592498779297, 0.11461257934570312, 96),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV18.addComponentOrReplace(transform78)
    
    const buildingRoadV19 = new Entity('buildingRoadV19')
    engine.addEntity(buildingRoadV19)
    buildingRoadV19.setParent(_scene)
    buildingRoadV19.addComponentOrReplace(gltfShape5)
    const transform79 = new Transform({
      position: new Vector3(26.845592498779297, 0.11461257934570312, 76.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV19.addComponentOrReplace(transform79)
    
    const buildingRoadV110 = new Entity('buildingRoadV110')
    engine.addEntity(buildingRoadV110)
    buildingRoadV110.setParent(_scene)
    buildingRoadV110.addComponentOrReplace(gltfShape5)
    const transform80 = new Transform({
      position: new Vector3(31.845592498779297, 0.11461257934570312, 76.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV110.addComponentOrReplace(transform80)
    
    const buildingRoadV111 = new Entity('buildingRoadV111')
    engine.addEntity(buildingRoadV111)
    buildingRoadV111.setParent(_scene)
    buildingRoadV111.addComponentOrReplace(gltfShape5)
    const transform81 = new Transform({
      position: new Vector3(39.8455924987793, 0.11461257934570312, 5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV111.addComponentOrReplace(transform81)
    
    const buildingRoadV112 = new Entity('buildingRoadV112')
    engine.addEntity(buildingRoadV112)
    buildingRoadV112.setParent(_scene)
    buildingRoadV112.addComponentOrReplace(gltfShape5)
    const transform82 = new Transform({
      position: new Vector3(44.8455924987793, 0.11461257934570312, 5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV112.addComponentOrReplace(transform82)
    
    const buildingRoadV113 = new Entity('buildingRoadV113')
    engine.addEntity(buildingRoadV113)
    buildingRoadV113.setParent(_scene)
    buildingRoadV113.addComponentOrReplace(gltfShape5)
    const transform83 = new Transform({
      position: new Vector3(44.8455924987793, 0.11461257934570312, 10),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV113.addComponentOrReplace(transform83)
    
    const buildingRoadV114 = new Entity('buildingRoadV114')
    engine.addEntity(buildingRoadV114)
    buildingRoadV114.setParent(_scene)
    buildingRoadV114.addComponentOrReplace(gltfShape5)
    const transform84 = new Transform({
      position: new Vector3(39.8455924987793, 0.11461257934570312, 10),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV114.addComponentOrReplace(transform84)
    
    const buildingRoadV115 = new Entity('buildingRoadV115')
    engine.addEntity(buildingRoadV115)
    buildingRoadV115.setParent(_scene)
    buildingRoadV115.addComponentOrReplace(gltfShape5)
    const transform85 = new Transform({
      position: new Vector3(44.8455924987793, 0.11461257934570312, 15),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV115.addComponentOrReplace(transform85)
    
    const buildingRoadV116 = new Entity('buildingRoadV116')
    engine.addEntity(buildingRoadV116)
    buildingRoadV116.setParent(_scene)
    buildingRoadV116.addComponentOrReplace(gltfShape5)
    const transform86 = new Transform({
      position: new Vector3(39.8455924987793, 0.11461257934570312, 15),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV116.addComponentOrReplace(transform86)
    
    const buildingRoadV117 = new Entity('buildingRoadV117')
    engine.addEntity(buildingRoadV117)
    buildingRoadV117.setParent(_scene)
    buildingRoadV117.addComponentOrReplace(gltfShape5)
    const transform87 = new Transform({
      position: new Vector3(39.8455924987793, 0.11461257934570312, 20),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV117.addComponentOrReplace(transform87)
    
    const buildingRoadV118 = new Entity('buildingRoadV118')
    engine.addEntity(buildingRoadV118)
    buildingRoadV118.setParent(_scene)
    buildingRoadV118.addComponentOrReplace(gltfShape5)
    const transform88 = new Transform({
      position: new Vector3(44.8455924987793, 0.11461257934570312, 20),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV118.addComponentOrReplace(transform88)
    
    const buildingRoadV119 = new Entity('buildingRoadV119')
    engine.addEntity(buildingRoadV119)
    buildingRoadV119.setParent(_scene)
    buildingRoadV119.addComponentOrReplace(gltfShape5)
    const transform89 = new Transform({
      position: new Vector3(29.845592498779297, 0.11461257934570312, 30),
      rotation: new Quaternion(-4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV119.addComponentOrReplace(transform89)
    
    const buildingRoadV120 = new Entity('buildingRoadV120')
    engine.addEntity(buildingRoadV120)
    buildingRoadV120.setParent(_scene)
    buildingRoadV120.addComponentOrReplace(gltfShape5)
    const transform90 = new Transform({
      position: new Vector3(44.8455924987793, 0.11461257934570312, 25),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV120.addComponentOrReplace(transform90)
    
    const buildingRoadV22 = new Entity('buildingRoadV22')
    engine.addEntity(buildingRoadV22)
    buildingRoadV22.setParent(_scene)
    const gltfShape6 = new GLTFShape("models/Building_Road_v2.glb")
    gltfShape6.withCollisions = true
    gltfShape6.visible = true
    buildingRoadV22.addComponentOrReplace(gltfShape6)
    const transform91 = new Transform({
      position: new Vector3(32.035709381103516, 0.10243606567382812, 71.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV22.addComponentOrReplace(transform91)
    
    const buildingRoadV121 = new Entity('buildingRoadV121')
    engine.addEntity(buildingRoadV121)
    buildingRoadV121.setParent(_scene)
    buildingRoadV121.addComponentOrReplace(gltfShape5)
    const transform92 = new Transform({
      position: new Vector3(37, 0.11461257934570312, 66.5),
      rotation: new Quaternion(-8.839015915307607e-16, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV121.addComponentOrReplace(transform92)
    
    const buildingRoadV122 = new Entity('buildingRoadV122')
    engine.addEntity(buildingRoadV122)
    buildingRoadV122.setParent(_scene)
    buildingRoadV122.addComponentOrReplace(gltfShape5)
    const transform93 = new Transform({
      position: new Vector3(36.8455924987793, 0.11461257934570312, 61.5),
      rotation: new Quaternion(-8.839015915307607e-16, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV122.addComponentOrReplace(transform93)
    
    const buildingRoadV123 = new Entity('buildingRoadV123')
    engine.addEntity(buildingRoadV123)
    buildingRoadV123.setParent(_scene)
    buildingRoadV123.addComponentOrReplace(gltfShape5)
    const transform94 = new Transform({
      position: new Vector3(22.345592498779297, 0.11461257934570312, 61.5),
      rotation: new Quaternion(-8.839015915307607e-16, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV123.addComponentOrReplace(transform94)
    
    const buildingRoadV125 = new Entity('buildingRoadV125')
    engine.addEntity(buildingRoadV125)
    buildingRoadV125.setParent(_scene)
    buildingRoadV125.addComponentOrReplace(gltfShape5)
    const transform95 = new Transform({
      position: new Vector3(22.345592498779297, 0.11461257934570312, 66.5),
      rotation: new Quaternion(-8.839015915307607e-16, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV125.addComponentOrReplace(transform95)
    
    const buildingRoadV127 = new Entity('buildingRoadV127')
    engine.addEntity(buildingRoadV127)
    buildingRoadV127.setParent(_scene)
    buildingRoadV127.addComponentOrReplace(gltfShape5)
    const transform96 = new Transform({
      position: new Vector3(41.8455924987793, 0.11461257934570312, 66.5),
      rotation: new Quaternion(-8.839015915307607e-16, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV127.addComponentOrReplace(transform96)
    
    const buildingRoadV128 = new Entity('buildingRoadV128')
    engine.addEntity(buildingRoadV128)
    buildingRoadV128.setParent(_scene)
    buildingRoadV128.addComponentOrReplace(gltfShape5)
    const transform97 = new Transform({
      position: new Vector3(41.8455924987793, 0.11461257934570312, 61.5),
      rotation: new Quaternion(-8.839015915307607e-16, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV128.addComponentOrReplace(transform97)
    
    const buildingRoadV129 = new Entity('buildingRoadV129')
    engine.addEntity(buildingRoadV129)
    buildingRoadV129.setParent(_scene)
    buildingRoadV129.addComponentOrReplace(gltfShape5)
    const transform98 = new Transform({
      position: new Vector3(46.8455924987793, 0.11461257934570312, 66.5),
      rotation: new Quaternion(-8.839015915307607e-16, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV129.addComponentOrReplace(transform98)
    
    const buildingTowerV120 = new Entity('buildingTowerV120')
    engine.addEntity(buildingTowerV120)
    buildingTowerV120.setParent(_scene)
    buildingTowerV120.addComponentOrReplace(gltfShape2)
    const transform99 = new Transform({
      position: new Vector3(19, 0, 86.00000762939453),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingTowerV120.addComponentOrReplace(transform99)
    
    const sidewalkTile = new Entity('sidewalkTile')
    engine.addEntity(sidewalkTile)
    sidewalkTile.setParent(_scene)
    const gltfShape7 = new GLTFShape("models/FloorBlock_01/FloorBlock_01.glb")
    gltfShape7.withCollisions = true
    gltfShape7.visible = true
    sidewalkTile.addComponentOrReplace(gltfShape7)
    const transform100 = new Transform({
      position: new Vector3(24.5, 0.0001, 59),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile.addComponentOrReplace(transform100)
    
    const sidewalkTile6 = new Entity('sidewalkTile6')
    engine.addEntity(sidewalkTile6)
    sidewalkTile6.setParent(_scene)
    sidewalkTile6.addComponentOrReplace(gltfShape7)
    const transform101 = new Transform({
      position: new Vector3(29.5, 0.0001, 59),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile6.addComponentOrReplace(transform101)
    
    const sidewalkTile7 = new Entity('sidewalkTile7')
    engine.addEntity(sidewalkTile7)
    sidewalkTile7.setParent(_scene)
    sidewalkTile7.addComponentOrReplace(gltfShape7)
    const transform102 = new Transform({
      position: new Vector3(34.5, 0.0001, 59),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile7.addComponentOrReplace(transform102)
    
    const sidewalkTile8 = new Entity('sidewalkTile8')
    engine.addEntity(sidewalkTile8)
    sidewalkTile8.setParent(_scene)
    sidewalkTile8.addComponentOrReplace(gltfShape7)
    const transform103 = new Transform({
      position: new Vector3(39.5, 0.0001, 59),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile8.addComponentOrReplace(transform103)
    
    const sidewalkTile9 = new Entity('sidewalkTile9')
    engine.addEntity(sidewalkTile9)
    sidewalkTile9.setParent(_scene)
    sidewalkTile9.addComponentOrReplace(gltfShape7)
    const transform104 = new Transform({
      position: new Vector3(19.5, 0.0001, 59),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile9.addComponentOrReplace(transform104)
    
    const buildingRoadV25 = new Entity('buildingRoadV25')
    engine.addEntity(buildingRoadV25)
    buildingRoadV25.setParent(_scene)
    buildingRoadV25.addComponentOrReplace(gltfShape6)
    const transform105 = new Transform({
      position: new Vector3(51.93421936035156, 0.08193588256835938, 66.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV25.addComponentOrReplace(transform105)
    
    const buildingRoadV27 = new Entity('buildingRoadV27')
    engine.addEntity(buildingRoadV27)
    buildingRoadV27.setParent(_scene)
    buildingRoadV27.addComponentOrReplace(gltfShape6)
    const transform106 = new Transform({
      position: new Vector3(46.8153076171875, 0.08193588256835938, 56.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV27.addComponentOrReplace(transform106)
    
    const buildingRoadV28 = new Entity('buildingRoadV28')
    engine.addEntity(buildingRoadV28)
    buildingRoadV28.setParent(_scene)
    buildingRoadV28.addComponentOrReplace(gltfShape6)
    const transform107 = new Transform({
      position: new Vector3(46.8153076171875, 0.08193588256835938, 51.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV28.addComponentOrReplace(transform107)
    
    const buildingRoadV29 = new Entity('buildingRoadV29')
    engine.addEntity(buildingRoadV29)
    buildingRoadV29.setParent(_scene)
    buildingRoadV29.addComponentOrReplace(gltfShape6)
    const transform108 = new Transform({
      position: new Vector3(51.8153076171875, 0.08193588256835938, 56.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV29.addComponentOrReplace(transform108)
    
    const buildingRoadV210 = new Entity('buildingRoadV210')
    engine.addEntity(buildingRoadV210)
    buildingRoadV210.setParent(_scene)
    buildingRoadV210.addComponentOrReplace(gltfShape6)
    const transform109 = new Transform({
      position: new Vector3(51.8153076171875, 0.08193588256835938, 51.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV210.addComponentOrReplace(transform109)
    
    const buildingRoadV130 = new Entity('buildingRoadV130')
    engine.addEntity(buildingRoadV130)
    buildingRoadV130.setParent(_scene)
    buildingRoadV130.addComponentOrReplace(gltfShape5)
    const transform110 = new Transform({
      position: new Vector3(51.8455924987793, 0.11461257934570312, 66.5),
      rotation: new Quaternion(-8.839015915307607e-16, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV130.addComponentOrReplace(transform110)
    
    const buildingRoadV212 = new Entity('buildingRoadV212')
    engine.addEntity(buildingRoadV212)
    buildingRoadV212.setParent(_scene)
    buildingRoadV212.addComponentOrReplace(gltfShape6)
    const transform111 = new Transform({
      position: new Vector3(46.8153076171875, 0.08193588256835938, 66.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV212.addComponentOrReplace(transform111)
    
    const buildingRoadV131 = new Entity('buildingRoadV131')
    engine.addEntity(buildingRoadV131)
    buildingRoadV131.setParent(_scene)
    buildingRoadV131.addComponentOrReplace(gltfShape5)
    const transform112 = new Transform({
      position: new Vector3(56.8455924987793, 0.11461257934570312, 66.5),
      rotation: new Quaternion(-8.839015915307607e-16, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV131.addComponentOrReplace(transform112)
    
    const buildingRoadV132 = new Entity('buildingRoadV132')
    engine.addEntity(buildingRoadV132)
    buildingRoadV132.setParent(_scene)
    buildingRoadV132.addComponentOrReplace(gltfShape5)
    const transform113 = new Transform({
      position: new Vector3(56.8455924987793, 0.11461257934570312, 61.5),
      rotation: new Quaternion(-8.839015915307607e-16, -0.7071068286895752, 8.429368847373553e-8, -0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV132.addComponentOrReplace(transform113)
    
    const buildingMediumV12 = new Entity('buildingMediumV12')
    engine.addEntity(buildingMediumV12)
    buildingMediumV12.setParent(_scene)
    const gltfShape8 = new GLTFShape("models/Building_Medium_v1.glb")
    gltfShape8.withCollisions = true
    gltfShape8.visible = true
    buildingMediumV12.addComponentOrReplace(gltfShape8)
    const transform114 = new Transform({
      position: new Vector3(50, 0, 79.45562744140625),
      rotation: new Quaternion(5.640024995225514e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.6837198734283447, 1.140493392944336, 1)
    })
    buildingMediumV12.addComponentOrReplace(transform114)
    
    const sidewalkTile12 = new Entity('sidewalkTile12')
    engine.addEntity(sidewalkTile12)
    sidewalkTile12.setParent(_scene)
    sidewalkTile12.addComponentOrReplace(gltfShape7)
    const transform115 = new Transform({
      position: new Vector3(39.5, 0.0001, 74),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile12.addComponentOrReplace(transform115)
    
    const sidewalkTile13 = new Entity('sidewalkTile13')
    engine.addEntity(sidewalkTile13)
    sidewalkTile13.setParent(_scene)
    sidewalkTile13.addComponentOrReplace(gltfShape7)
    const transform116 = new Transform({
      position: new Vector3(34.5, 0.0001, 74),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile13.addComponentOrReplace(transform116)
    
    const sidewalkTile14 = new Entity('sidewalkTile14')
    engine.addEntity(sidewalkTile14)
    sidewalkTile14.setParent(_scene)
    sidewalkTile14.addComponentOrReplace(gltfShape7)
    const transform117 = new Transform({
      position: new Vector3(34.5, 0.0001, 79),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile14.addComponentOrReplace(transform117)
    
    const sidewalkTile15 = new Entity('sidewalkTile15')
    engine.addEntity(sidewalkTile15)
    sidewalkTile15.setParent(_scene)
    sidewalkTile15.addComponentOrReplace(gltfShape7)
    const transform118 = new Transform({
      position: new Vector3(34.5, 0.0001, 81.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile15.addComponentOrReplace(transform118)
    
    const sidewalkTile16 = new Entity('sidewalkTile16')
    engine.addEntity(sidewalkTile16)
    sidewalkTile16.setParent(_scene)
    sidewalkTile16.addComponentOrReplace(gltfShape7)
    const transform119 = new Transform({
      position: new Vector3(19.5, 0.0001, 74),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile16.addComponentOrReplace(transform119)
    
    const sidewalkTile17 = new Entity('sidewalkTile17')
    engine.addEntity(sidewalkTile17)
    sidewalkTile17.setParent(_scene)
    sidewalkTile17.addComponentOrReplace(gltfShape7)
    const transform120 = new Transform({
      position: new Vector3(14.5, 0.0001, 74),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile17.addComponentOrReplace(transform120)
    
    const sidewalkTile18 = new Entity('sidewalkTile18')
    engine.addEntity(sidewalkTile18)
    sidewalkTile18.setParent(_scene)
    sidewalkTile18.addComponentOrReplace(gltfShape7)
    const transform121 = new Transform({
      position: new Vector3(9.5, 0.0001, 74),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile18.addComponentOrReplace(transform121)
    
    const sidewalkTile19 = new Entity('sidewalkTile19')
    engine.addEntity(sidewalkTile19)
    sidewalkTile19.setParent(_scene)
    sidewalkTile19.addComponentOrReplace(gltfShape7)
    const transform122 = new Transform({
      position: new Vector3(7, 0.0001, 74),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile19.addComponentOrReplace(transform122)
    
    const sidewalkTile20 = new Entity('sidewalkTile20')
    engine.addEntity(sidewalkTile20)
    sidewalkTile20.setParent(_scene)
    sidewalkTile20.addComponentOrReplace(gltfShape7)
    const transform123 = new Transform({
      position: new Vector3(19.5, 0.0001, 79),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile20.addComponentOrReplace(transform123)
    
    const sidewalkTile21 = new Entity('sidewalkTile21')
    engine.addEntity(sidewalkTile21)
    sidewalkTile21.setParent(_scene)
    sidewalkTile21.addComponentOrReplace(gltfShape7)
    const transform124 = new Transform({
      position: new Vector3(19.5, 0.0001, 84),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile21.addComponentOrReplace(transform124)
    
    const sidewalkTile22 = new Entity('sidewalkTile22')
    engine.addEntity(sidewalkTile22)
    sidewalkTile22.setParent(_scene)
    sidewalkTile22.addComponentOrReplace(gltfShape7)
    const transform125 = new Transform({
      position: new Vector3(44.5, 0.0001, 74),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile22.addComponentOrReplace(transform125)
    
    const sidewalkTile23 = new Entity('sidewalkTile23')
    engine.addEntity(sidewalkTile23)
    sidewalkTile23.setParent(_scene)
    sidewalkTile23.addComponentOrReplace(gltfShape7)
    const transform126 = new Transform({
      position: new Vector3(49.5, 0.0001, 74),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile23.addComponentOrReplace(transform126)
    
    const sidewalkTile24 = new Entity('sidewalkTile24')
    engine.addEntity(sidewalkTile24)
    sidewalkTile24.setParent(_scene)
    sidewalkTile24.addComponentOrReplace(gltfShape7)
    const transform127 = new Transform({
      position: new Vector3(54.5, 0.0001, 74),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile24.addComponentOrReplace(transform127)
    
    const propFenceV16 = new Entity('propFenceV16')
    engine.addEntity(propFenceV16)
    propFenceV16.setParent(_scene)
    const gltfShape9 = new GLTFShape("models/Prop_Fence_v1.glb")
    gltfShape9.withCollisions = true
    gltfShape9.visible = true
    propFenceV16.addComponentOrReplace(gltfShape9)
    const transform128 = new Transform({
      position: new Vector3(7, 0, 54),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.5, 1.5, 2.572266101837158)
    })
    propFenceV16.addComponentOrReplace(transform128)
    
    const propFenceV12 = new Entity('propFenceV12')
    engine.addEntity(propFenceV12)
    propFenceV12.setParent(_scene)
    propFenceV12.addComponentOrReplace(gltfShape9)
    const transform129 = new Transform({
      position: new Vector3(17.5, 0, 54),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.5, 1.5, 2.572266101837158)
    })
    propFenceV12.addComponentOrReplace(transform129)
    
    const buildingCornerBot = new Entity('buildingCornerBot')
    engine.addEntity(buildingCornerBot)
    buildingCornerBot.setParent(_scene)
    const transform130 = new Transform({
      position: new Vector3(42.5, 0, 82),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingCornerBot.addComponentOrReplace(transform130)
    const gltfShape10 = new GLTFShape("models/Building_Corner_Bot.glb")
    gltfShape10.withCollisions = true
    gltfShape10.visible = true
    buildingCornerBot.addComponentOrReplace(gltfShape10)
    
    const buildingCornerMid = new Entity('buildingCornerMid')
    engine.addEntity(buildingCornerMid)
    buildingCornerMid.setParent(_scene)
    const transform131 = new Transform({
      position: new Vector3(37.5, 3, 82),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingCornerMid.addComponentOrReplace(transform131)
    const gltfShape11 = new GLTFShape("models/Building_Corner_Mid.glb")
    gltfShape11.withCollisions = true
    gltfShape11.visible = true
    buildingCornerMid.addComponentOrReplace(gltfShape11)
    
    const buildingCornerMid2 = new Entity('buildingCornerMid2')
    engine.addEntity(buildingCornerMid2)
    buildingCornerMid2.setParent(_scene)
    buildingCornerMid2.addComponentOrReplace(gltfShape11)
    const transform132 = new Transform({
      position: new Vector3(37.5, 6, 82),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingCornerMid2.addComponentOrReplace(transform132)
    
    const buildingCornerMid3 = new Entity('buildingCornerMid3')
    engine.addEntity(buildingCornerMid3)
    buildingCornerMid3.setParent(_scene)
    buildingCornerMid3.addComponentOrReplace(gltfShape11)
    const transform133 = new Transform({
      position: new Vector3(37.5, 9, 82),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingCornerMid3.addComponentOrReplace(transform133)
    
    const buildingCubeRoofV = new Entity('buildingCubeRoofV')
    engine.addEntity(buildingCubeRoofV)
    buildingCubeRoofV.setParent(_scene)
    const transform134 = new Transform({
      position: new Vector3(49.5, 12, 79.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(0.9999999403953552, 0.009999999776482582, 0.9999998807907104)
    })
    buildingCubeRoofV.addComponentOrReplace(transform134)
    const gltfShape12 = new GLTFShape("models/Building_Cube_Roof_v1.glb")
    gltfShape12.withCollisions = true
    gltfShape12.visible = true
    buildingCubeRoofV.addComponentOrReplace(gltfShape12)
    
    const buildingCubeRoofV2 = new Entity('buildingCubeRoofV2')
    engine.addEntity(buildingCubeRoofV2)
    buildingCubeRoofV2.setParent(_scene)
    buildingCubeRoofV2.addComponentOrReplace(gltfShape12)
    const transform135 = new Transform({
      position: new Vector3(44.5, 12, 79.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(0.9999999403953552, 0.009999999776482582, 0.9999998807907104)
    })
    buildingCubeRoofV2.addComponentOrReplace(transform135)
    
    const buildingRoadV221 = new Entity('buildingRoadV221')
    engine.addEntity(buildingRoadV221)
    buildingRoadV221.setParent(_scene)
    buildingRoadV221.addComponentOrReplace(gltfShape6)
    const transform136 = new Transform({
      position: new Vector3(40.035709381103516, 0.08193588256835938, 30),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV221.addComponentOrReplace(transform136)
    
    const buildingRoadV222 = new Entity('buildingRoadV222')
    engine.addEntity(buildingRoadV222)
    buildingRoadV222.setParent(_scene)
    buildingRoadV222.addComponentOrReplace(gltfShape6)
    const transform137 = new Transform({
      position: new Vector3(45.035709381103516, 0.08193588256835938, 30),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV222.addComponentOrReplace(transform137)
    
    const buildingRoadV223 = new Entity('buildingRoadV223')
    engine.addEntity(buildingRoadV223)
    buildingRoadV223.setParent(_scene)
    buildingRoadV223.addComponentOrReplace(gltfShape6)
    const transform138 = new Transform({
      position: new Vector3(45.035709381103516, 0.08193588256835938, 35),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV223.addComponentOrReplace(transform138)
    
    const buildingRoadV224 = new Entity('buildingRoadV224')
    engine.addEntity(buildingRoadV224)
    buildingRoadV224.setParent(_scene)
    buildingRoadV224.addComponentOrReplace(gltfShape6)
    const transform139 = new Transform({
      position: new Vector3(40.035709381103516, 0.08193588256835938, 35),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV224.addComponentOrReplace(transform139)
    
    const buildingRoadV133 = new Entity('buildingRoadV133')
    engine.addEntity(buildingRoadV133)
    buildingRoadV133.setParent(_scene)
    buildingRoadV133.addComponentOrReplace(gltfShape5)
    const transform140 = new Transform({
      position: new Vector3(39.8455924987793, 0.11461257934570312, 25),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV133.addComponentOrReplace(transform140)
    
    const buildingRoadV134 = new Entity('buildingRoadV134')
    engine.addEntity(buildingRoadV134)
    buildingRoadV134.setParent(_scene)
    buildingRoadV134.addComponentOrReplace(gltfShape5)
    const transform141 = new Transform({
      position: new Vector3(29.845592498779297, 0.11461257934570312, 35),
      rotation: new Quaternion(-4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV134.addComponentOrReplace(transform141)
    
    const buildingRoadV135 = new Entity('buildingRoadV135')
    engine.addEntity(buildingRoadV135)
    buildingRoadV135.setParent(_scene)
    buildingRoadV135.addComponentOrReplace(gltfShape5)
    const transform142 = new Transform({
      position: new Vector3(24.845592498779297, 0.11461257934570312, 35),
      rotation: new Quaternion(-4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV135.addComponentOrReplace(transform142)
    
    const buildingRoadV136 = new Entity('buildingRoadV136')
    engine.addEntity(buildingRoadV136)
    buildingRoadV136.setParent(_scene)
    buildingRoadV136.addComponentOrReplace(gltfShape5)
    const transform143 = new Transform({
      position: new Vector3(24.845592498779297, 0.11461257934570312, 30),
      rotation: new Quaternion(-4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV136.addComponentOrReplace(transform143)
    
    const buildingRoadV137 = new Entity('buildingRoadV137')
    engine.addEntity(buildingRoadV137)
    buildingRoadV137.setParent(_scene)
    buildingRoadV137.addComponentOrReplace(gltfShape5)
    const transform144 = new Transform({
      position: new Vector3(19.845592498779297, 0.11461257934570312, 35),
      rotation: new Quaternion(-4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV137.addComponentOrReplace(transform144)
    
    const buildingRoadV138 = new Entity('buildingRoadV138')
    engine.addEntity(buildingRoadV138)
    buildingRoadV138.setParent(_scene)
    buildingRoadV138.addComponentOrReplace(gltfShape5)
    const transform145 = new Transform({
      position: new Vector3(15.345592498779297, 0.11461257934570312, 30),
      rotation: new Quaternion(-4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV138.addComponentOrReplace(transform145)
    
    const buildingRoadV139 = new Entity('buildingRoadV139')
    engine.addEntity(buildingRoadV139)
    buildingRoadV139.setParent(_scene)
    buildingRoadV139.addComponentOrReplace(gltfShape5)
    const transform146 = new Transform({
      position: new Vector3(19.845592498779297, 0.11461257934570312, 30),
      rotation: new Quaternion(-4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV139.addComponentOrReplace(transform146)
    
    const buildingRoadV140 = new Entity('buildingRoadV140')
    engine.addEntity(buildingRoadV140)
    buildingRoadV140.setParent(_scene)
    buildingRoadV140.addComponentOrReplace(gltfShape5)
    const transform147 = new Transform({
      position: new Vector3(15.345592498779297, 0.11461257934570312, 35),
      rotation: new Quaternion(-4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV140.addComponentOrReplace(transform147)
    
    const sidewalkTile28 = new Entity('sidewalkTile28')
    engine.addEntity(sidewalkTile28)
    sidewalkTile28.setParent(_scene)
    sidewalkTile28.addComponentOrReplace(gltfShape7)
    const transform148 = new Transform({
      position: new Vector3(9.5, 0.0001, 32.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile28.addComponentOrReplace(transform148)
    
    const sidewalkTile29 = new Entity('sidewalkTile29')
    engine.addEntity(sidewalkTile29)
    sidewalkTile29.setParent(_scene)
    sidewalkTile29.addComponentOrReplace(gltfShape7)
    const transform149 = new Transform({
      position: new Vector3(9.5, 0.0001, 27.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile29.addComponentOrReplace(transform149)
    
    const sidewalkTile34 = new Entity('sidewalkTile34')
    engine.addEntity(sidewalkTile34)
    sidewalkTile34.setParent(_scene)
    sidewalkTile34.addComponentOrReplace(gltfShape7)
    const transform150 = new Transform({
      position: new Vector3(9.5, 0.0001, 37.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile34.addComponentOrReplace(transform150)
    
    const sidewalkTile36 = new Entity('sidewalkTile36')
    engine.addEntity(sidewalkTile36)
    sidewalkTile36.setParent(_scene)
    sidewalkTile36.addComponentOrReplace(gltfShape7)
    const transform151 = new Transform({
      position: new Vector3(14.5, 0.0001, 37.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile36.addComponentOrReplace(transform151)
    
    const sidewalkTile35 = new Entity('sidewalkTile35')
    engine.addEntity(sidewalkTile35)
    sidewalkTile35.setParent(_scene)
    sidewalkTile35.addComponentOrReplace(gltfShape7)
    const transform152 = new Transform({
      position: new Vector3(14.5, 0.0001, 40),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile35.addComponentOrReplace(transform152)
    
    const buildingRoadV225 = new Entity('buildingRoadV225')
    engine.addEntity(buildingRoadV225)
    buildingRoadV225.setParent(_scene)
    buildingRoadV225.addComponentOrReplace(gltfShape6)
    const transform153 = new Transform({
      position: new Vector3(17.035709381103516, 0.08193588256835938, 35),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV225.addComponentOrReplace(transform153)
    
    const buildingRoadV226 = new Entity('buildingRoadV226')
    engine.addEntity(buildingRoadV226)
    buildingRoadV226.setParent(_scene)
    buildingRoadV226.addComponentOrReplace(gltfShape6)
    const transform154 = new Transform({
      position: new Vector3(17.035709381103516, 0.08193588256835938, 30),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV226.addComponentOrReplace(transform154)
    
    const sidewalkTile37 = new Entity('sidewalkTile37')
    engine.addEntity(sidewalkTile37)
    sidewalkTile37.setParent(_scene)
    sidewalkTile37.addComponentOrReplace(gltfShape7)
    const transform155 = new Transform({
      position: new Vector3(19.5, 0.0001, 37.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile37.addComponentOrReplace(transform155)
    
    const sidewalkTile38 = new Entity('sidewalkTile38')
    engine.addEntity(sidewalkTile38)
    sidewalkTile38.setParent(_scene)
    sidewalkTile38.addComponentOrReplace(gltfShape7)
    const transform156 = new Transform({
      position: new Vector3(24.5, 0.0001, 37.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile38.addComponentOrReplace(transform156)
    
    const sidewalkTile39 = new Entity('sidewalkTile39')
    engine.addEntity(sidewalkTile39)
    sidewalkTile39.setParent(_scene)
    sidewalkTile39.addComponentOrReplace(gltfShape7)
    const transform157 = new Transform({
      position: new Vector3(29.5, 0.0001, 37.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile39.addComponentOrReplace(transform157)
    
    const sidewalkTile40 = new Entity('sidewalkTile40')
    engine.addEntity(sidewalkTile40)
    sidewalkTile40.setParent(_scene)
    sidewalkTile40.addComponentOrReplace(gltfShape7)
    const transform158 = new Transform({
      position: new Vector3(34.5, 0.0001, 37.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile40.addComponentOrReplace(transform158)
    
    const sidewalkTile41 = new Entity('sidewalkTile41')
    engine.addEntity(sidewalkTile41)
    sidewalkTile41.setParent(_scene)
    sidewalkTile41.addComponentOrReplace(gltfShape7)
    const transform159 = new Transform({
      position: new Vector3(39.5, 0.0001, 37.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile41.addComponentOrReplace(transform159)
    
    const sidewalkTile42 = new Entity('sidewalkTile42')
    engine.addEntity(sidewalkTile42)
    sidewalkTile42.setParent(_scene)
    sidewalkTile42.addComponentOrReplace(gltfShape7)
    const transform160 = new Transform({
      position: new Vector3(44.5, 0.0001, 37.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile42.addComponentOrReplace(transform160)
    
    const sidewalkTile43 = new Entity('sidewalkTile43')
    engine.addEntity(sidewalkTile43)
    sidewalkTile43.setParent(_scene)
    sidewalkTile43.addComponentOrReplace(gltfShape7)
    const transform161 = new Transform({
      position: new Vector3(47, 0.0001, 37.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile43.addComponentOrReplace(transform161)
    
    const buildingRoadV141 = new Entity('buildingRoadV141')
    engine.addEntity(buildingRoadV141)
    buildingRoadV141.setParent(_scene)
    buildingRoadV141.addComponentOrReplace(gltfShape5)
    const transform162 = new Transform({
      position: new Vector3(44.8455924987793, 0.11461257934570312, 35),
      rotation: new Quaternion(-4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV141.addComponentOrReplace(transform162)
    
    const buildingRoadV142 = new Entity('buildingRoadV142')
    engine.addEntity(buildingRoadV142)
    buildingRoadV142.setParent(_scene)
    buildingRoadV142.addComponentOrReplace(gltfShape5)
    const transform163 = new Transform({
      position: new Vector3(44.8455924987793, 0.11461257934570312, 30),
      rotation: new Quaternion(-4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    buildingRoadV142.addComponentOrReplace(transform163)
    
    const buildingRoadV227 = new Entity('buildingRoadV227')
    engine.addEntity(buildingRoadV227)
    buildingRoadV227.setParent(_scene)
    buildingRoadV227.addComponentOrReplace(gltfShape6)
    const transform164 = new Transform({
      position: new Vector3(55.035709381103516, 0.08193588256835938, 35),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV227.addComponentOrReplace(transform164)
    
    const buildingRoadV228 = new Entity('buildingRoadV228')
    engine.addEntity(buildingRoadV228)
    buildingRoadV228.setParent(_scene)
    buildingRoadV228.addComponentOrReplace(gltfShape6)
    const transform165 = new Transform({
      position: new Vector3(55.035709381103516, 0.08193588256835938, 30),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV228.addComponentOrReplace(transform165)
    
    const sidewalkTile44 = new Entity('sidewalkTile44')
    engine.addEntity(sidewalkTile44)
    sidewalkTile44.setParent(_scene)
    sidewalkTile44.addComponentOrReplace(gltfShape7)
    const transform166 = new Transform({
      position: new Vector3(52, 0.0001, 37.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile44.addComponentOrReplace(transform166)
    
    const sidewalkTile45 = new Entity('sidewalkTile45')
    engine.addEntity(sidewalkTile45)
    sidewalkTile45.setParent(_scene)
    sidewalkTile45.addComponentOrReplace(gltfShape7)
    const transform167 = new Transform({
      position: new Vector3(57, 0.0001, 37.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile45.addComponentOrReplace(transform167)
    
    const sidewalkTile46 = new Entity('sidewalkTile46')
    engine.addEntity(sidewalkTile46)
    sidewalkTile46.setParent(_scene)
    sidewalkTile46.addComponentOrReplace(gltfShape7)
    const transform168 = new Transform({
      position: new Vector3(57, 0.0001, 32.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile46.addComponentOrReplace(transform168)
    
    const sidewalkTile47 = new Entity('sidewalkTile47')
    engine.addEntity(sidewalkTile47)
    sidewalkTile47.setParent(_scene)
    sidewalkTile47.addComponentOrReplace(gltfShape7)
    const transform169 = new Transform({
      position: new Vector3(57, 0.0001, 27.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile47.addComponentOrReplace(transform169)
    
    const sidewalkTile48 = new Entity('sidewalkTile48')
    engine.addEntity(sidewalkTile48)
    sidewalkTile48.setParent(_scene)
    sidewalkTile48.addComponentOrReplace(gltfShape7)
    const transform170 = new Transform({
      position: new Vector3(54.5, 0.0001, 59),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile48.addComponentOrReplace(transform170)
    
    const sidewalkTile49 = new Entity('sidewalkTile49')
    engine.addEntity(sidewalkTile49)
    sidewalkTile49.setParent(_scene)
    sidewalkTile49.addComponentOrReplace(gltfShape7)
    const transform171 = new Transform({
      position: new Vector3(54.5, 0.0001, 54),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile49.addComponentOrReplace(transform171)
    
    const sidewalkTile50 = new Entity('sidewalkTile50')
    engine.addEntity(sidewalkTile50)
    sidewalkTile50.setParent(_scene)
    sidewalkTile50.addComponentOrReplace(gltfShape7)
    const transform172 = new Transform({
      position: new Vector3(54.5, 0.0001, 49),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile50.addComponentOrReplace(transform172)
    
    const sidewalkTile51 = new Entity('sidewalkTile51')
    engine.addEntity(sidewalkTile51)
    sidewalkTile51.setParent(_scene)
    sidewalkTile51.addComponentOrReplace(gltfShape7)
    const transform173 = new Transform({
      position: new Vector3(54.5, 0.0001, 44),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile51.addComponentOrReplace(transform173)
    
    const sidewalkTile52 = new Entity('sidewalkTile52')
    engine.addEntity(sidewalkTile52)
    sidewalkTile52.setParent(_scene)
    sidewalkTile52.addComponentOrReplace(gltfShape7)
    const transform174 = new Transform({
      position: new Vector3(54.5, 0.0001, 41.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile52.addComponentOrReplace(transform174)
    
    const buildingMediumV15 = new Entity('buildingMediumV15')
    engine.addEntity(buildingMediumV15)
    buildingMediumV15.setParent(_scene)
    buildingMediumV15.addComponentOrReplace(gltfShape8)
    const transform175 = new Transform({
      position: new Vector3(14, 0, 80.45562744140625),
      rotation: new Quaternion(5.640024995225514e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.6837198734283447, 1.140493392944336, 1)
    })
    buildingMediumV15.addComponentOrReplace(transform175)
    
    const buildingMediumV16 = new Entity('buildingMediumV16')
    engine.addEntity(buildingMediumV16)
    buildingMediumV16.setParent(_scene)
    buildingMediumV16.addComponentOrReplace(gltfShape8)
    const transform176 = new Transform({
      position: new Vector3(14, 12, 80.45562744140625),
      rotation: new Quaternion(5.640024995225514e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.6837198734283447, 1.140493392944336, 1)
    })
    buildingMediumV16.addComponentOrReplace(transform176)
    
    const ambientSound = new Entity('ambientSound')
    engine.addEntity(ambientSound)
    ambientSound.setParent(_scene)
    const transform177 = new Transform({
      position: new Vector3(35.5, 10.5, 61.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(8, 11.5, 7.5)
    })
    ambientSound.addComponentOrReplace(transform177)
    
    const signpostTree = new Entity('signpostTree')
    engine.addEntity(signpostTree)
    signpostTree.setParent(_scene)
    const transform178 = new Transform({
      position: new Vector3(18.5, 0, 60.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.5, 1.5, 1.5)
    })
    signpostTree.addComponentOrReplace(transform178)
    
    const signpostTree2 = new Entity('signpostTree2')
    engine.addEntity(signpostTree2)
    signpostTree2.setParent(_scene)
    const transform179 = new Transform({
      position: new Vector3(13, 1, 56.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.75, 1.75, 1.75)
    })
    signpostTree2.addComponentOrReplace(transform179)
    
    const faceAccessCard = new Entity('faceAccessCard')
    engine.addEntity(faceAccessCard)
    faceAccessCard.setParent(_scene)
    const transform180 = new Transform({
      position: new Vector3(24.5, 3.5, 48),
      rotation: new Quaternion(0.3826834559440613, 2.220446049250313e-16, -4.561941935321556e-8, 0.9238795638084412),
      scale: new Vector3(2, 3.707106590270996, 2.207106828689575)
    })
    faceAccessCard.addComponentOrReplace(transform180)
    
    const vehicleTaxiV18 = new Entity('vehicleTaxiV18')
    engine.addEntity(vehicleTaxiV18)
    vehicleTaxiV18.setParent(_scene)
    const gltfShape13 = new GLTFShape("models/Vehicle_Taxi_v1.glb")
    gltfShape13.withCollisions = true
    gltfShape13.visible = true
    vehicleTaxiV18.addComponentOrReplace(gltfShape13)
    const transform181 = new Transform({
      position: new Vector3(27.262210845947266, 17.50774574279785, 20.90526580810547),
      rotation: new Quaternion(2.3392545962013455e-16, 0.38268351554870605, -4.5619415800501883e-8, -0.9238795042037964),
      scale: new Vector3(1, 1, 1)
    })
    vehicleTaxiV18.addComponentOrReplace(transform181)
    
    const propChargingStatio = new Entity('propChargingStatio')
    engine.addEntity(propChargingStatio)
    propChargingStatio.setParent(_scene)
    const transform182 = new Transform({
      position: new Vector3(38.5, 0, 55.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    propChargingStatio.addComponentOrReplace(transform182)
    const gltfShape14 = new GLTFShape("models/Prop_Charging_Station.glb")
    gltfShape14.withCollisions = true
    gltfShape14.visible = true
    propChargingStatio.addComponentOrReplace(gltfShape14)
    
    const propChargingStatio2 = new Entity('propChargingStatio2')
    engine.addEntity(propChargingStatio2)
    propChargingStatio2.setParent(_scene)
    propChargingStatio2.addComponentOrReplace(gltfShape14)
    const transform183 = new Transform({
      position: new Vector3(35, 0, 55.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    propChargingStatio2.addComponentOrReplace(transform183)
    
    const propDumpster = new Entity('propDumpster')
    engine.addEntity(propDumpster)
    propDumpster.setParent(_scene)
    const transform184 = new Transform({
      position: new Vector3(69.5, 0, 81.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(3, 3, 3)
    })
    propDumpster.addComponentOrReplace(transform184)
    const gltfShape15 = new GLTFShape("models/Prop_Dumpster.glb")
    gltfShape15.withCollisions = true
    gltfShape15.visible = true
    propDumpster.addComponentOrReplace(gltfShape15)
    
    const propDumpster2 = new Entity('propDumpster2')
    engine.addEntity(propDumpster2)
    propDumpster2.setParent(_scene)
    propDumpster2.addComponentOrReplace(gltfShape15)
    const transform185 = new Transform({
      position: new Vector3(61.5, 0, 81.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(3, 3, 3)
    })
    propDumpster2.addComponentOrReplace(transform185)
    
    const propCablePillar = new Entity('propCablePillar')
    engine.addEntity(propCablePillar)
    propCablePillar.setParent(_scene)
    const transform186 = new Transform({
      position: new Vector3(36, 0, 73),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 2.5, 2)
    })
    propCablePillar.addComponentOrReplace(transform186)
    const gltfShape16 = new GLTFShape("models/Prop_Cable_Pillar.glb")
    gltfShape16.withCollisions = true
    gltfShape16.visible = true
    propCablePillar.addComponentOrReplace(gltfShape16)
    
    const propCablePillar2 = new Entity('propCablePillar2')
    engine.addEntity(propCablePillar2)
    propCablePillar2.setParent(_scene)
    propCablePillar2.addComponentOrReplace(gltfShape16)
    const transform187 = new Transform({
      position: new Vector3(36, 0, 60),
      rotation: new Quaternion(-5.772643037952989e-15, -1, 1.1920928244535389e-7, 0),
      scale: new Vector3(2, 2.5, 2)
    })
    propCablePillar2.addComponentOrReplace(transform187)
    
    const propCableRail = new Entity('propCableRail')
    engine.addEntity(propCableRail)
    propCableRail.setParent(_scene)
    const transform188 = new Transform({
      position: new Vector3(36, 9, 61),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 2, 2.2331337928771973)
    })
    propCableRail.addComponentOrReplace(transform188)
    const gltfShape17 = new GLTFShape("models/Prop_Cable_Rail.glb")
    gltfShape17.withCollisions = true
    gltfShape17.visible = true
    propCableRail.addComponentOrReplace(gltfShape17)
    
    const buildingNoodleShop = new Entity('buildingNoodleShop')
    engine.addEntity(buildingNoodleShop)
    buildingNoodleShop.setParent(_scene)
    const transform189 = new Transform({
      position: new Vector3(61, 0, 63.5),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1.6889004707336426, 1.5862258672714233, 2.1575205326080322)
    })
    buildingNoodleShop.addComponentOrReplace(transform189)
    const gltfShape18 = new GLTFShape("models/Building_NoodleShop.glb")
    gltfShape18.withCollisions = true
    gltfShape18.visible = true
    buildingNoodleShop.addComponentOrReplace(gltfShape18)
    
    const propBillboard = new Entity('propBillboard')
    engine.addEntity(propBillboard)
    propBillboard.setParent(_scene)
    const transform190 = new Transform({
      position: new Vector3(58.0762825012207, 3.3022541999816895, 63.5),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(2, 2, 2.500000476837158)
    })
    propBillboard.addComponentOrReplace(transform190)
    const gltfShape19 = new GLTFShape("models/Prop_Billboard.glb")
    gltfShape19.withCollisions = true
    gltfShape19.visible = true
    propBillboard.addComponentOrReplace(gltfShape19)
    
    const propNoodles = new Entity('propNoodles')
    engine.addEntity(propNoodles)
    propNoodles.setParent(_scene)
    const transform191 = new Transform({
      position: new Vector3(57.56486511230469, 1.6962614059448242, 62.5),
      rotation: new Quaternion(-1.9532351064788407e-15, -0.7730104923248291, 9.21500173944878e-8, 0.6343932151794434),
      scale: new Vector3(1.1666533946990967, 0.9084958434104919, 0.9228513836860657)
    })
    propNoodles.addComponentOrReplace(transform191)
    const gltfShape20 = new GLTFShape("models/Prop_Noodles.glb")
    gltfShape20.withCollisions = true
    gltfShape20.visible = true
    propNoodles.addComponentOrReplace(gltfShape20)
    
    const propNoodles2 = new Entity('propNoodles2')
    engine.addEntity(propNoodles2)
    propNoodles2.setParent(_scene)
    propNoodles2.addComponentOrReplace(gltfShape20)
    const transform192 = new Transform({
      position: new Vector3(57.56486511230469, 1.6853437423706055, 64),
      rotation: new Quaternion(-1.943829652632529e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071067094802856),
      scale: new Vector3(1.2641985416412354, 0.9084958434104919, 0.9132442474365234)
    })
    propNoodles2.addComponentOrReplace(transform192)
    
    const propAdvertisements = new Entity('propAdvertisements')
    engine.addEntity(propAdvertisements)
    propAdvertisements.setParent(_scene)
    const transform193 = new Transform({
      position: new Vector3(54.5, 0, 78),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 2, 2)
    })
    propAdvertisements.addComponentOrReplace(transform193)
    const gltfShape21 = new GLTFShape("models/Prop_Advertisements.glb")
    gltfShape21.withCollisions = true
    gltfShape21.visible = true
    propAdvertisements.addComponentOrReplace(gltfShape21)
    
    const propAdvertisements2 = new Entity('propAdvertisements2')
    engine.addEntity(propAdvertisements2)
    propAdvertisements2.setParent(_scene)
    propAdvertisements2.addComponentOrReplace(gltfShape21)
    const transform194 = new Transform({
      position: new Vector3(19.5, 0, 74),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 2, 2)
    })
    propAdvertisements2.addComponentOrReplace(transform194)
    
    const propATM = new Entity('propATM')
    engine.addEntity(propATM)
    propATM.setParent(_scene)
    const transform195 = new Transform({
      position: new Vector3(33.5, 0, 41.5),
      rotation: new Quaternion(-4.905325769194316e-15, -1, 1.1920928244535389e-7, 0),
      scale: new Vector3(2.5, 2.5, 2)
    })
    propATM.addComponentOrReplace(transform195)
    const gltfShape22 = new GLTFShape("models/Prop_ATM.glb")
    gltfShape22.withCollisions = true
    gltfShape22.visible = true
    propATM.addComponentOrReplace(gltfShape22)
    
    const sidewalkTile53 = new Entity('sidewalkTile53')
    engine.addEntity(sidewalkTile53)
    sidewalkTile53.setParent(_scene)
    sidewalkTile53.addComponentOrReplace(gltfShape7)
    const transform196 = new Transform({
      position: new Vector3(27, 0.0001, 40),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile53.addComponentOrReplace(transform196)
    
    const propChargingStatio3 = new Entity('propChargingStatio3')
    engine.addEntity(propChargingStatio3)
    propChargingStatio3.setParent(_scene)
    const transform197 = new Transform({
      position: new Vector3(10.5, 0, 42.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(3, 3, 3)
    })
    propChargingStatio3.addComponentOrReplace(transform197)
    propChargingStatio3.addComponentOrReplace(gltfShape14)
    
    const propChargingStatio4 = new Entity('propChargingStatio4')
    engine.addEntity(propChargingStatio4)
    propChargingStatio4.setParent(_scene)
    propChargingStatio4.addComponentOrReplace(gltfShape14)
    const transform198 = new Transform({
      position: new Vector3(8.49999713897705, 0, 42.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(3, 3, 3)
    })
    propChargingStatio4.addComponentOrReplace(transform198)
    
    const propAdvertisements3 = new Entity('propAdvertisements3')
    engine.addEntity(propAdvertisements3)
    propAdvertisements3.setParent(_scene)
    propAdvertisements3.addComponentOrReplace(gltfShape21)
    const transform199 = new Transform({
      position: new Vector3(19, 0, 42),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 2, 2)
    })
    propAdvertisements3.addComponentOrReplace(transform199)
    
    const propAdvertisements4 = new Entity('propAdvertisements4')
    engine.addEntity(propAdvertisements4)
    propAdvertisements4.setParent(_scene)
    propAdvertisements4.addComponentOrReplace(gltfShape21)
    const transform200 = new Transform({
      position: new Vector3(40, 0, 42),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 2, 2)
    })
    propAdvertisements4.addComponentOrReplace(transform200)
    
    const propAirConditionin2 = new Entity('propAirConditionin2')
    engine.addEntity(propAirConditionin2)
    propAirConditionin2.setParent(_scene)
    const transform201 = new Transform({
      position: new Vector3(50, 1.5, 77),
      rotation: new Quaternion(3.1755625181566303e-15, 1, -1.1920926823449918e-7, 5.960464477539063e-8),
      scale: new Vector3(1, 1, 1)
    })
    propAirConditionin2.addComponentOrReplace(transform201)
    const gltfShape23 = new GLTFShape("models/Prop_Air_Conditioning.glb")
    gltfShape23.withCollisions = true
    gltfShape23.visible = true
    propAirConditionin2.addComponentOrReplace(gltfShape23)
    
    const propAirConditionin3 = new Entity('propAirConditionin3')
    engine.addEntity(propAirConditionin3)
    propAirConditionin3.setParent(_scene)
    propAirConditionin3.addComponentOrReplace(gltfShape23)
    const transform202 = new Transform({
      position: new Vector3(14, 1.5, 78),
      rotation: new Quaternion(3.1755625181566303e-15, 1, -1.1920926823449918e-7, 5.960464477539063e-8),
      scale: new Vector3(1, 1, 1)
    })
    propAirConditionin3.addComponentOrReplace(transform202)
    
    const grassTile3 = new Entity('grassTile3')
    engine.addEntity(grassTile3)
    grassTile3.setParent(_scene)
    const transform203 = new Transform({
      position: new Vector3(54, 0, 92.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(22, 2.5, 3.5000007152557373)
    })
    grassTile3.addComponentOrReplace(transform203)
    grassTile3.addComponentOrReplace(gltfShape4)
    
    const grassTile4 = new Entity('grassTile4')
    engine.addEntity(grassTile4)
    grassTile4.setParent(_scene)
    grassTile4.addComponentOrReplace(gltfShape4)
    const transform204 = new Transform({
      position: new Vector3(12.831398963928223, 0, 92.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(9, 2.5, 3.5)
    })
    grassTile4.addComponentOrReplace(transform204)
    
    const greenSycamoreTree = new Entity('greenSycamoreTree')
    engine.addEntity(greenSycamoreTree)
    greenSycamoreTree.setParent(_scene)
    const transform205 = new Transform({
      position: new Vector3(70.0113754272461, 0, 92.37678527832031),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5, 2.5, 2.5)
    })
    greenSycamoreTree.addComponentOrReplace(transform205)
    const gltfShape24 = new GLTFShape("models/TreeSycamore_03/TreeSycamore_03.glb")
    gltfShape24.withCollisions = true
    gltfShape24.visible = true
    greenSycamoreTree.addComponentOrReplace(gltfShape24)
    
    const greenSycamoreTree2 = new Entity('greenSycamoreTree2')
    engine.addEntity(greenSycamoreTree2)
    greenSycamoreTree2.setParent(_scene)
    greenSycamoreTree2.addComponentOrReplace(gltfShape24)
    const transform206 = new Transform({
      position: new Vector3(52.5, 0, 91.68299865722656),
      rotation: new Quaternion(-1.1102230246251565e-16, -1.4901161193847656e-8, 8.881784197001252e-16, 1),
      scale: new Vector3(3, 3, 2.5)
    })
    greenSycamoreTree2.addComponentOrReplace(transform206)
    
    const greenSycamoreTree3 = new Entity('greenSycamoreTree3')
    engine.addEntity(greenSycamoreTree3)
    greenSycamoreTree3.setParent(_scene)
    greenSycamoreTree3.addComponentOrReplace(gltfShape24)
    const transform207 = new Transform({
      position: new Vector3(36.25250244140625, 0, 92.60284423828125),
      rotation: new Quaternion(0, -0.09801715612411499, 1.1684552880808496e-8, 0.9951847195625305),
      scale: new Vector3(2, 2, 2)
    })
    greenSycamoreTree3.addComponentOrReplace(transform207)
    
    const greenSycamoreTree4 = new Entity('greenSycamoreTree4')
    engine.addEntity(greenSycamoreTree4)
    greenSycamoreTree4.setParent(_scene)
    greenSycamoreTree4.addComponentOrReplace(gltfShape24)
    const transform208 = new Transform({
      position: new Vector3(13.345630645751953, 0, 91.35155487060547),
      rotation: new Quaternion(1.5602629784193705e-17, 0.008631367236375809, -1.0289392671225528e-9, 0.9999627470970154),
      scale: new Vector3(2.2626912593841553, 2.475341320037842, 2.3553993701934814)
    })
    greenSycamoreTree4.addComponentOrReplace(transform208)
    
    const burgerHologramV2 = new Entity('burgerHologramV2')
    engine.addEntity(burgerHologramV2)
    burgerHologramV2.setParent(_scene)
    const transform209 = new Transform({
      position: new Vector3(39.44715881347656, 11, 79.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    burgerHologramV2.addComponentOrReplace(transform209)
    const gltfShape25 = new GLTFShape("models/Burger_Hologram_v2.glb")
    gltfShape25.withCollisions = true
    gltfShape25.visible = true
    burgerHologramV2.addComponentOrReplace(gltfShape25)
    
    const buildingVRClub = new Entity('buildingVRClub')
    engine.addEntity(buildingVRClub)
    buildingVRClub.setParent(_scene)
    const transform210 = new Transform({
      position: new Vector3(59, 0, 40),
      rotation: new Quaternion(1.1038385137852273e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
      scale: new Vector3(1.9720120429992676, 2.163656711578369, 0.6236032843589783)
    })
    buildingVRClub.addComponentOrReplace(transform210)
    const gltfShape26 = new GLTFShape("models/Building_VR_Club.glb")
    gltfShape26.withCollisions = true
    gltfShape26.visible = true
    buildingVRClub.addComponentOrReplace(gltfShape26)
    
    const sidewalkTile26 = new Entity('sidewalkTile26')
    engine.addEntity(sidewalkTile26)
    sidewalkTile26.setParent(_scene)
    sidewalkTile26.addComponentOrReplace(gltfShape7)
    const transform211 = new Transform({
      position: new Vector3(57, 0.0001, 22.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.5209105014801025, 1, 2.549273729324341)
    })
    sidewalkTile26.addComponentOrReplace(transform211)
    
    const propVRBooth = new Entity('propVRBooth')
    engine.addEntity(propVRBooth)
    propVRBooth.setParent(_scene)
    const transform212 = new Transform({
      position: new Vector3(67, 0, 25),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.5, 1.5, 1.5)
    })
    propVRBooth.addComponentOrReplace(transform212)
    const gltfShape27 = new GLTFShape("models/Prop_VR_Booth.glb")
    gltfShape27.withCollisions = true
    gltfShape27.visible = true
    propVRBooth.addComponentOrReplace(gltfShape27)
    
    const propVRBooth2 = new Entity('propVRBooth2')
    engine.addEntity(propVRBooth2)
    propVRBooth2.setParent(_scene)
    propVRBooth2.addComponentOrReplace(gltfShape27)
    const transform213 = new Transform({
      position: new Vector3(63, 0, 25),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.5, 1.5, 1.5)
    })
    propVRBooth2.addComponentOrReplace(transform213)
    
    const propVRBooth3 = new Entity('propVRBooth3')
    engine.addEntity(propVRBooth3)
    propVRBooth3.setParent(_scene)
    propVRBooth3.addComponentOrReplace(gltfShape27)
    const transform214 = new Transform({
      position: new Vector3(63, 0, 34.5),
      rotation: new Quaternion(8.040673704114154e-15, -1, 1.1920928244535389e-7, -2.2351741790771484e-8),
      scale: new Vector3(1.5, 1.5, 1.5)
    })
    propVRBooth3.addComponentOrReplace(transform214)
    
    const propVRBooth4 = new Entity('propVRBooth4')
    engine.addEntity(propVRBooth4)
    propVRBooth4.setParent(_scene)
    propVRBooth4.addComponentOrReplace(gltfShape27)
    const transform215 = new Transform({
      position: new Vector3(66.5, 0, 34.5),
      rotation: new Quaternion(8.040673704114154e-15, -1, 1.1920928244535389e-7, -2.2351741790771484e-8),
      scale: new Vector3(1.5, 1.5, 1.5)
    })
    propVRBooth4.addComponentOrReplace(transform215)
    
    const propCablePillar3 = new Entity('propCablePillar3')
    engine.addEntity(propCablePillar3)
    propCablePillar3.setParent(_scene)
    const transform216 = new Transform({
      position: new Vector3(21.5, 0, 56),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    propCablePillar3.addComponentOrReplace(transform216)
    propCablePillar3.addComponentOrReplace(gltfShape16)
    
    const buildingRoadV2 = new Entity('buildingRoadV2')
    engine.addEntity(buildingRoadV2)
    buildingRoadV2.setParent(_scene)
    buildingRoadV2.addComponentOrReplace(gltfShape6)
    const transform217 = new Transform({
      position: new Vector3(32.035709381103516, 0.10243606567382812, 67),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV2.addComponentOrReplace(transform217)
    
    const buildingRoadV23 = new Entity('buildingRoadV23')
    engine.addEntity(buildingRoadV23)
    buildingRoadV23.setParent(_scene)
    buildingRoadV23.addComponentOrReplace(gltfShape6)
    const transform218 = new Transform({
      position: new Vector3(27.535709381103516, 0.10243606567382812, 67),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV23.addComponentOrReplace(transform218)
    
    const buildingRoadV24 = new Entity('buildingRoadV24')
    engine.addEntity(buildingRoadV24)
    buildingRoadV24.setParent(_scene)
    buildingRoadV24.addComponentOrReplace(gltfShape6)
    const transform219 = new Transform({
      position: new Vector3(17.361658096313477, 0.10243606567382812, 66.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV24.addComponentOrReplace(transform219)
    
    const buildingRoadV214 = new Entity('buildingRoadV214')
    engine.addEntity(buildingRoadV214)
    buildingRoadV214.setParent(_scene)
    buildingRoadV214.addComponentOrReplace(gltfShape6)
    const transform220 = new Transform({
      position: new Vector3(27.535709381103516, 0.10243606567382812, 71.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV214.addComponentOrReplace(transform220)
    
    const buildingRoadV211 = new Entity('buildingRoadV211')
    engine.addEntity(buildingRoadV211)
    buildingRoadV211.setParent(_scene)
    buildingRoadV211.addComponentOrReplace(gltfShape6)
    const transform221 = new Transform({
      position: new Vector3(17.361658096313477, 0.10243606567382812, 71.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV211.addComponentOrReplace(transform221)
    
    const buildingRoadV213 = new Entity('buildingRoadV213')
    engine.addEntity(buildingRoadV213)
    buildingRoadV213.setParent(_scene)
    buildingRoadV213.addComponentOrReplace(gltfShape6)
    const transform222 = new Transform({
      position: new Vector3(17.361658096313477, 0.10243606567382812, 61.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV213.addComponentOrReplace(transform222)
    
    const propFenceV17 = new Entity('propFenceV17')
    engine.addEntity(propFenceV17)
    propFenceV17.setParent(_scene)
    propFenceV17.addComponentOrReplace(gltfShape9)
    const transform223 = new Transform({
      position: new Vector3(17.5, 0, 48.73918151855469),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.5, 1.5, 2.572266101837158)
    })
    propFenceV17.addComponentOrReplace(transform223)
    
    const propFenceV18 = new Entity('propFenceV18')
    engine.addEntity(propFenceV18)
    propFenceV18.setParent(_scene)
    propFenceV18.addComponentOrReplace(gltfShape9)
    const transform224 = new Transform({
      position: new Vector3(7, 0, 48.86327362060547),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.5, 1.5, 2.572266101837158)
    })
    propFenceV18.addComponentOrReplace(transform224)
    
    const propFenceV19 = new Entity('propFenceV19')
    engine.addEntity(propFenceV19)
    propFenceV19.setParent(_scene)
    propFenceV19.addComponentOrReplace(gltfShape9)
    const transform225 = new Transform({
      position: new Vector3(9.44723892211914, 0, 46.5),
      rotation: new Quaternion(2.220446049250313e-16, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
      scale: new Vector3(1.5, 1.5, 2.572266101837158)
    })
    propFenceV19.addComponentOrReplace(transform225)
    
    const propFenceV110 = new Entity('propFenceV110')
    engine.addEntity(propFenceV110)
    propFenceV110.setParent(_scene)
    propFenceV110.addComponentOrReplace(gltfShape9)
    const transform226 = new Transform({
      position: new Vector3(14.588024139404297, 0, 46.5),
      rotation: new Quaternion(2.220446049250313e-16, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
      scale: new Vector3(1.5, 1.5, 2.572266101837158)
    })
    propFenceV110.addComponentOrReplace(transform226)
    
    const buildingRoadV26 = new Entity('buildingRoadV26')
    engine.addEntity(buildingRoadV26)
    buildingRoadV26.setParent(_scene)
    buildingRoadV26.addComponentOrReplace(gltfShape6)
    const transform227 = new Transform({
      position: new Vector3(17.361658096313477, 0.10243606567382812, 56.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV26.addComponentOrReplace(transform227)
    
    const buildingRoadV215 = new Entity('buildingRoadV215')
    engine.addEntity(buildingRoadV215)
    buildingRoadV215.setParent(_scene)
    buildingRoadV215.addComponentOrReplace(gltfShape6)
    const transform228 = new Transform({
      position: new Vector3(12.361658096313477, 0.10243606567382812, 56.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV215.addComponentOrReplace(transform228)
    
    const buildingRoadV220 = new Entity('buildingRoadV220')
    engine.addEntity(buildingRoadV220)
    buildingRoadV220.setParent(_scene)
    buildingRoadV220.addComponentOrReplace(gltfShape6)
    const transform229 = new Transform({
      position: new Vector3(17.361658096313477, 0.10243606567382812, 51.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV220.addComponentOrReplace(transform229)
    
    const vehicleTaxiV19 = new Entity('vehicleTaxiV19')
    engine.addEntity(vehicleTaxiV19)
    vehicleTaxiV19.setParent(_scene)
    vehicleTaxiV19.addComponentOrReplace(gltfShape13)
    const transform230 = new Transform({
      position: new Vector3(9, 0, 50),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.1198112964630127, 1.1162562370300293, 1.0949456691741943)
    })
    vehicleTaxiV19.addComponentOrReplace(transform230)
    
    const buildingRoadV217 = new Entity('buildingRoadV217')
    engine.addEntity(buildingRoadV217)
    buildingRoadV217.setParent(_scene)
    buildingRoadV217.addComponentOrReplace(gltfShape6)
    const transform231 = new Transform({
      position: new Vector3(12.361658096313477, 0.10243606567382812, 51.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV217.addComponentOrReplace(transform231)
    
    const buildingRoadV229 = new Entity('buildingRoadV229')
    engine.addEntity(buildingRoadV229)
    buildingRoadV229.setParent(_scene)
    buildingRoadV229.addComponentOrReplace(gltfShape6)
    const transform232 = new Transform({
      position: new Vector3(12.361658096313477, 0.10243606567382812, 61.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV229.addComponentOrReplace(transform232)
    
    const buildingRoadV230 = new Entity('buildingRoadV230')
    engine.addEntity(buildingRoadV230)
    buildingRoadV230.setParent(_scene)
    buildingRoadV230.addComponentOrReplace(gltfShape6)
    const transform233 = new Transform({
      position: new Vector3(12.361658096313477, 0.10243606567382812, 71.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV230.addComponentOrReplace(transform233)
    
    const buildingRoadV231 = new Entity('buildingRoadV231')
    engine.addEntity(buildingRoadV231)
    buildingRoadV231.setParent(_scene)
    buildingRoadV231.addComponentOrReplace(gltfShape6)
    const transform234 = new Transform({
      position: new Vector3(12.361658096313477, 0.10243606567382812, 66.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.0387396812438965, 1, 2.0352981090545654)
    })
    buildingRoadV231.addComponentOrReplace(transform234)
    
    const verticalHallwayDoo = new Entity('verticalHallwayDoo')
    engine.addEntity(verticalHallwayDoo)
    verticalHallwayDoo.setParent(_scene)
    const transform235 = new Transform({
      position: new Vector3(46.7281379699707, 0.8818659782409668, 54),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(0.5099999308586121, 1.130212664604187, 0.9999999403953552)
    })
    verticalHallwayDoo.addComponentOrReplace(transform235)
    
    const buildingFloor = new Entity('buildingFloor')
    engine.addEntity(buildingFloor)
    buildingFloor.setParent(_scene)
    const transform236 = new Transform({
      position: new Vector3(65, 5.5, 63.5),
      rotation: new Quaternion(-1.5014858600494022e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
      scale: new Vector3(1.4815266132354736, 1.500000238418579, 1.49886155128479)
    })
    buildingFloor.addComponentOrReplace(transform236)
    const gltfShape28 = new GLTFShape("models/Building_Floor.glb")
    gltfShape28.withCollisions = true
    gltfShape28.visible = true
    buildingFloor.addComponentOrReplace(gltfShape28)
    
    const buildingFloor2 = new Entity('buildingFloor2')
    engine.addEntity(buildingFloor2)
    buildingFloor2.setParent(_scene)
    buildingFloor2.addComponentOrReplace(gltfShape28)
    const transform237 = new Transform({
      position: new Vector3(65, 12.350065231323242, 63.5),
      rotation: new Quaternion(-1.5014858600494022e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
      scale: new Vector3(1.4815266132354736, 1.500000238418579, 1.49886155128479)
    })
    buildingFloor2.addComponentOrReplace(transform237)
    
    const buildingFloor3 = new Entity('buildingFloor3')
    engine.addEntity(buildingFloor3)
    buildingFloor3.setParent(_scene)
    buildingFloor3.addComponentOrReplace(gltfShape28)
    const transform238 = new Transform({
      position: new Vector3(65, 19.187488555908203, 63.5),
      rotation: new Quaternion(-1.5014858600494022e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
      scale: new Vector3(1.4815266132354736, 1.500000238418579, 1.49886155128479)
    })
    buildingFloor3.addComponentOrReplace(transform238)
    
    const buildingFloor4 = new Entity('buildingFloor4')
    engine.addEntity(buildingFloor4)
    buildingFloor4.setParent(_scene)
    buildingFloor4.addComponentOrReplace(gltfShape28)
    const transform239 = new Transform({
      position: new Vector3(65, 26.045095443725586, 63.5),
      rotation: new Quaternion(-1.5014858600494022e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
      scale: new Vector3(1.4815266132354736, 1.500000238418579, 1.49886155128479)
    })
    buildingFloor4.addComponentOrReplace(transform239)
    
    const towerWithInterior = new Entity('towerWithInterior')
    engine.addEntity(towerWithInterior)
    towerWithInterior.setParent(_scene)
    const transform240 = new Transform({
      position: new Vector3(46.72821044921875, 0.1910557746887207, 51.47964859008789),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(0.8425981998443604, 1, 0.9274725914001465)
    })
    towerWithInterior.addComponentOrReplace(transform240)
    const gltfShape29 = new GLTFShape("models/Tower_With_Interior.glb")
    gltfShape29.withCollisions = true
    gltfShape29.visible = true
    towerWithInterior.addComponentOrReplace(gltfShape29)
    
    const buildingCityHall = new Entity('buildingCityHall')
    engine.addEntity(buildingCityHall)
    buildingCityHall.setParent(_scene)
    const transform241 = new Transform({
      position: new Vector3(27, 0, 49),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(0.8385410308837891, 0.8324931263923645, 0.5337336659431458)
    })
    buildingCityHall.addComponentOrReplace(transform241)
    const gltfShape30 = new GLTFShape("models/Building_City_Hall.glb")
    gltfShape30.withCollisions = true
    gltfShape30.visible = true
    buildingCityHall.addComponentOrReplace(gltfShape30)

    // ----- Add date time to City Hall -----
    // ------------------------------------------

    // Init vars
    var timeFrames = 0

    // Create label
    let timeDateLabel = new Entity()
    timeDateLabel.setParent(buildingCityHall)
    timeDateLabel.addComponent(new Billboard())
    const textOffset = new Transform({
      position: new Vector3(0, 6.25, -5.0),
      rotation: new Quaternion(0, 0, 0, 1),
    })
    timeDateLabel.addComponent(textOffset)
    timeDateLabel.addComponent(new TextShape(" "))
    timeDateLabel.getComponent(TextShape).fontSize = 11
    timeDateLabel.getComponent(TextShape).color = Color3.Teal()
    engine.addEntity(timeDateLabel)

    // Create camera (to track player location)
    const camera = Camera.instance

    class updateDateTime {
      update() {
        timeFrames += 1
        // Update the time display every 16 frames
        if (timeFrames % 16 == 0)
        {
          var currentDate = new Date();
          var dateTime = "" + currentDate.getDate() + "/"
                          + (currentDate.getMonth()+1)  + "/" 
                          + (currentDate.getFullYear()+20) + "\n"  
                          + currentDate.getHours() + ":"  
                          + currentDate.getMinutes() + ":" 
                          + currentDate.getSeconds();
  
          //log(dateTime)
          // log('x ' + camera.position.x)
          // log('y ' + camera.position.y)
          // log('z ' + camera.position.z)
          timeDateLabel.getComponent(TextShape).value = dateTime
        }
      }
    }
    engine.addSystem(new updateDateTime())
    // ------------------------------------------
    
    const verticalPlatform = new Entity('verticalPlatform')
    engine.addEntity(verticalPlatform)
    verticalPlatform.setParent(_scene)
    const transform242 = new Transform({
      position: new Vector3(46.73966598510742, 0, 51.34870529174805),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.2436416149139404, 1, 1.291913628578186)
    })
    verticalPlatform.addComponentOrReplace(transform242)
    
    const greenButton = new Entity('greenButton')
    engine.addEntity(greenButton)
    greenButton.setParent(_scene)
    const transform243 = new Transform({
      position: new Vector3(47.123435974121094, 2.5, 48.830833435058594),
      rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(2, 1, 2)
    })
    greenButton.addComponentOrReplace(transform243)
    
    const redButton = new Entity('redButton')
    engine.addEntity(redButton)
    redButton.setParent(_scene)
    const transform244 = new Transform({
      position: new Vector3(46.25177764892578, 2.5, 48.874820709228516),
      rotation: new Quaternion(0.6343933343887329, -1.7511548563623565e-15, -7.562555737194998e-8, 0.7730104327201843),
      scale: new Vector3(1.5, 1.0975451469421387, 1.4903926849365234)
    })
    redButton.addComponentOrReplace(transform244)
    
    const greenButton2 = new Entity('greenButton2')
    engine.addEntity(greenButton2)
    greenButton2.setParent(_scene)
    const transform245 = new Transform({
      position: new Vector3(47.123435974121094, 37.715450286865234, 48.7316780090332),
      rotation: new Quaternion(0.09801717102527618, 8.200559007963165e-16, -1.1684551104451657e-8, 0.9951847195625305),
      scale: new Vector3(2, 1, 2)
    })
    greenButton2.addComponentOrReplace(transform245)
    
    const redButton2 = new Entity('redButton2')
    engine.addEntity(redButton2)
    redButton2.setParent(_scene)
    const transform246 = new Transform({
      position: new Vector3(46.25177764892578, 37.71644592285156, 48.766357421875),
      rotation: new Quaternion(0.09801716357469559, 2.6443678281427244e-15, -1.1684545775381139e-8, 0.9951847195625305),
      scale: new Vector3(1.5, 1.0975451469421387, 1.4903926849365234)
    })
    redButton2.addComponentOrReplace(transform246)
    
    const buildingTallRound = new Entity('buildingTallRound')
    engine.addEntity(buildingTallRound)
    buildingTallRound.setParent(_scene)
    const transform247 = new Transform({
      position: new Vector3(23.5, 0, 21),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.5, 1, 1.5)
    })
    buildingTallRound.addComponentOrReplace(transform247)
    const gltfShape31 = new GLTFShape("models/Building_Tall_Round.glb")
    gltfShape31.withCollisions = true
    gltfShape31.visible = true
    buildingTallRound.addComponentOrReplace(gltfShape31)
    
    const propLandingPad = new Entity('propLandingPad')
    engine.addEntity(propLandingPad)
    propLandingPad.setParent(_scene)
    const transform248 = new Transform({
      position: new Vector3(27.70497703552246, 17, 20.682697296142578),
      rotation: new Quaternion(2.262906752104987e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    propLandingPad.addComponentOrReplace(transform248)
    const gltfShape32 = new GLTFShape("models/Prop_Landing_Pad.glb")
    gltfShape32.withCollisions = true
    gltfShape32.visible = true
    propLandingPad.addComponentOrReplace(gltfShape32)
    
    const buildingFloor5 = new Entity('buildingFloor5')
    engine.addEntity(buildingFloor5)
    buildingFloor5.setParent(_scene)
    buildingFloor5.addComponentOrReplace(gltfShape28)
    const transform249 = new Transform({
      position: new Vector3(65, 32.8751220703125, 63.5),
      rotation: new Quaternion(-1.5014858600494022e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
      scale: new Vector3(1.4815266132354736, 1.500000238418579, 1.49886155128479)
    })
    buildingFloor5.addComponentOrReplace(transform249)
    
    const buildingHouse = new Entity('buildingHouse')
    engine.addEntity(buildingHouse)
    buildingHouse.setParent(_scene)
    const transform250 = new Transform({
      position: new Vector3(9.5, 0, 20.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(0.7147407531738281, 1, 0.6978185176849365)
    })
    buildingHouse.addComponentOrReplace(transform250)
    const gltfShape33 = new GLTFShape("models/Building_House.glb")
    gltfShape33.withCollisions = true
    gltfShape33.visible = true
    buildingHouse.addComponentOrReplace(gltfShape33)
    
    const buildingCubeRoofV5 = new Entity('buildingCubeRoofV5')
    engine.addEntity(buildingCubeRoofV5)
    buildingCubeRoofV5.setParent(_scene)
    const transform251 = new Transform({
      position: new Vector3(26.803668975830078, 1.9236927032470703, 48.53022766113281),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(3, 0.019999990239739418, 2)
    })
    buildingCubeRoofV5.addComponentOrReplace(transform251)
    buildingCubeRoofV5.addComponentOrReplace(gltfShape12)
    
    const propCouch = new Entity('propCouch')
    engine.addEntity(propCouch)
    propCouch.setParent(_scene)
    const transform252 = new Transform({
      position: new Vector3(21.5, 2, 48.5),
      rotation: new Quaternion(-6.692902301134779e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    propCouch.addComponentOrReplace(transform252)
    const gltfShape34 = new GLTFShape("models/Prop_Couch.glb")
    gltfShape34.withCollisions = true
    gltfShape34.visible = true
    propCouch.addComponentOrReplace(gltfShape34)
    
    const propCouch2 = new Entity('propCouch2')
    engine.addEntity(propCouch2)
    propCouch2.setParent(_scene)
    propCouch2.addComponentOrReplace(gltfShape34)
    const transform253 = new Transform({
      position: new Vector3(24, 2, 51.5),
      rotation: new Quaternion(4.985577482265451e-15, 1, -1.1920926823449918e-7, 2.2351741790771484e-8),
      scale: new Vector3(1, 1, 1)
    })
    propCouch2.addComponentOrReplace(transform253)
    
    const propTable = new Entity('propTable')
    engine.addEntity(propTable)
    propTable.setParent(_scene)
    const transform254 = new Transform({
      position: new Vector3(24.380287170410156, 2, 48.339054107666016),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.6195393800735474, 1, 1.2452551126480103)
    })
    propTable.addComponentOrReplace(transform254)
    const gltfShape35 = new GLTFShape("models/Prop_Table.glb")
    gltfShape35.withCollisions = true
    gltfShape35.visible = true
    propTable.addComponentOrReplace(gltfShape35)
    
    const propCouch3 = new Entity('propCouch3')
    engine.addEntity(propCouch3)
    propCouch3.setParent(_scene)
    propCouch3.addComponentOrReplace(gltfShape34)
    const transform255 = new Transform({
      position: new Vector3(31.5, 2, 48.5),
      rotation: new Quaternion(2.1257752096147733e-14, 0.7071068286895752, -8.429370268459024e-8, -0.7071067690849304),
      scale: new Vector3(1, 1, 1)
    })
    propCouch3.addComponentOrReplace(transform255)
    
    const triggerArea = new Entity('triggerArea')
    engine.addEntity(triggerArea)
    triggerArea.setParent(_scene)
    const transform256 = new Transform({
      position: new Vector3(40, 0, 7),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(11, 1, 13.5)
    })
    triggerArea.addComponentOrReplace(transform256)
    
    const tools = new Entity('tools')
    engine.addEntity(tools)
    tools.setParent(_scene)
    const transform257 = new Transform({
      position: new Vector3(48.5, 0, 9),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    tools.addComponentOrReplace(transform257)
    
    const indicatorArrow = new Entity('indicatorArrow')
    engine.addEntity(indicatorArrow)
    indicatorArrow.setParent(_scene)
    const transform258 = new Transform({
      position: new Vector3(40.5, 2, 37),
      rotation: new Quaternion(0, 0, 0.7071068286895752, 0.7071068286895752),
      scale: new Vector3(4.5, 5.5, 4)
    })
    indicatorArrow.addComponentOrReplace(transform258)
    
    const indicatorArrow2 = new Entity('indicatorArrow2')
    engine.addEntity(indicatorArrow2)
    indicatorArrow2.setParent(_scene)
    const transform259 = new Transform({
      position: new Vector3(54.5, 2, 35),
      rotation: new Quaternion(-0.5, -0.5, 0.5000000596046448, 0.4999999403953552),
      scale: new Vector3(4.5, 5.5, 4)
    })
    indicatorArrow2.addComponentOrReplace(transform259)
    
    const indicatorArrow3 = new Entity('indicatorArrow3')
    engine.addEntity(indicatorArrow3)
    indicatorArrow3.setParent(_scene)
    const transform260 = new Transform({
      position: new Vector3(54.5, 2, 48),
      rotation: new Quaternion(-0.5094228386878967, -0.4885184168815613, 0.5094227194786072, 0.4922669231891632),
      scale: new Vector3(4.5, 5.5, 4)
    })
    indicatorArrow3.addComponentOrReplace(transform260)
    
    const indicatorArrow4 = new Entity('indicatorArrow4')
    engine.addEntity(indicatorArrow4)
    indicatorArrow4.setParent(_scene)
    const transform261 = new Transform({
      position: new Vector3(52.5, 2, 60),
      rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
      scale: new Vector3(4.5, 5.5, 4)
    })
    indicatorArrow4.addComponentOrReplace(transform261)
    
    const indicatorArrow5 = new Entity('indicatorArrow5')
    engine.addEntity(indicatorArrow5)
    indicatorArrow5.setParent(_scene)
    const transform262 = new Transform({
      position: new Vector3(40, 2, 58),
      rotation: new Quaternion(-2.9802322387695312e-8, -0.002650626003742218, -0.6935198903083801, 0.7204325795173645),
      scale: new Vector3(4.5, 5.5, 4)
    })
    indicatorArrow5.addComponentOrReplace(transform262)
    
    const indicatorArrow6 = new Entity('indicatorArrow6')
    engine.addEntity(indicatorArrow6)
    indicatorArrow6.setParent(_scene)
    const transform263 = new Transform({
      position: new Vector3(28, 2, 57.5),
      rotation: new Quaternion(-0.5466010570526123, -0.4485838711261749, -0.546600878238678, -0.4485837519168854),
      scale: new Vector3(4.5, 5.5, 4)
    })
    indicatorArrow6.addComponentOrReplace(transform263)
    
    const indicatorArrow7 = new Entity('indicatorArrow7')
    engine.addEntity(indicatorArrow7)
    indicatorArrow7.setParent(_scene)
    const transform264 = new Transform({
      position: new Vector3(28, 4, 53.5),
      rotation: new Quaternion(0.9238795638084412, -7.80633949815741e-15, -1.1013501932666259e-7, 0.3826834559440613),
      scale: new Vector3(4.5, 5.5, 4)
    })
    indicatorArrow7.addComponentOrReplace(transform264)
    
    const indicatorArrow8 = new Entity('indicatorArrow8')
    engine.addEntity(indicatorArrow8)
    indicatorArrow8.setParent(_scene)
    const transform265 = new Transform({
      position: new Vector3(24.5, 3.5, 47.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(4.5, 5.5, 4)
    })
    indicatorArrow8.addComponentOrReplace(transform265)
    
    const buildingGreenBG = new Entity('buildingGreenBG')
    engine.addEntity(buildingGreenBG)
    buildingGreenBG.setParent(_scene)
    const transform266 = new Transform({
      position: new Vector3(7.5, 0, 2.3),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingGreenBG.addComponentOrReplace(transform266)
    const gltfShape36 = new GLTFShape("models/Building_Green_BG.glb")
    gltfShape36.withCollisions = true
    gltfShape36.visible = true
    buildingGreenBG.addComponentOrReplace(gltfShape36)
    
    const buildingGreenBG2 = new Entity('buildingGreenBG2')
    engine.addEntity(buildingGreenBG2)
    buildingGreenBG2.setParent(_scene)
    buildingGreenBG2.addComponentOrReplace(gltfShape36)
    const transform267 = new Transform({
      position: new Vector3(18.787866592407227, 0, 2.3999992847442627),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingGreenBG2.addComponentOrReplace(transform267)
    
    const buildingGreenBG3 = new Entity('buildingGreenBG3')
    engine.addEntity(buildingGreenBG3)
    buildingGreenBG3.setParent(_scene)
    buildingGreenBG3.addComponentOrReplace(gltfShape36)
    const transform268 = new Transform({
      position: new Vector3(14.552902221679688, 0, 3.369301748275757),
      rotation: new Quaternion(-5.67359905191407e-15, -1, 1.1920926823449918e-7, 0),
      scale: new Vector3(1, 1, 1)
    })
    buildingGreenBG3.addComponentOrReplace(transform268)
    
    const buildingGreenBG4 = new Entity('buildingGreenBG4')
    engine.addEntity(buildingGreenBG4)
    buildingGreenBG4.setParent(_scene)
    buildingGreenBG4.addComponentOrReplace(gltfShape36)
    const transform269 = new Transform({
      position: new Vector3(25.052902221679688, 0, 5.169300079345703),
      rotation: new Quaternion(-5.67359905191407e-15, -1, 1.1920926823449918e-7, 0),
      scale: new Vector3(1, 1, 1)
    })
    buildingGreenBG4.addComponentOrReplace(transform269)
    
    const buildingGreenBG5 = new Entity('buildingGreenBG5')
    engine.addEntity(buildingGreenBG5)
    buildingGreenBG5.setParent(_scene)
    buildingGreenBG5.addComponentOrReplace(gltfShape36)
    const transform270 = new Transform({
      position: new Vector3(28.787866592407227, 0, 4.499998092651367),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.5, 1.5, 1)
    })
    buildingGreenBG5.addComponentOrReplace(transform270)
    
    const buildingRedBG = new Entity('buildingRedBG')
    engine.addEntity(buildingRedBG)
    buildingRedBG.setParent(_scene)
    const transform271 = new Transform({
      position: new Vector3(55, 0, 3.1999966621398926),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.1756846904754639, 1.3653895854949951, 0.5486174821853638)
    })
    buildingRedBG.addComponentOrReplace(transform271)
    const gltfShape37 = new GLTFShape("models/Building_Red_BG.glb")
    gltfShape37.withCollisions = true
    gltfShape37.visible = true
    buildingRedBG.addComponentOrReplace(gltfShape37)
    
    const buildingGreenBG6 = new Entity('buildingGreenBG6')
    engine.addEntity(buildingGreenBG6)
    buildingGreenBG6.setParent(_scene)
    buildingGreenBG6.addComponentOrReplace(gltfShape36)
    const transform272 = new Transform({
      position: new Vector3(56.5, 0, 7.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    buildingGreenBG6.addComponentOrReplace(transform272)
    
    const buildingGreenBG7 = new Entity('buildingGreenBG7')
    engine.addEntity(buildingGreenBG7)
    buildingGreenBG7.setParent(_scene)
    buildingGreenBG7.addComponentOrReplace(gltfShape36)
    const transform273 = new Transform({
      position: new Vector3(51.70795822143555, 0, 5.586839199066162),
      rotation: new Quaternion(-5.67359905191407e-15, -1, 1.1920926823449918e-7, 0),
      scale: new Vector3(1.5, 1.5, 1.000000238418579)
    })
    buildingGreenBG7.addComponentOrReplace(transform273)
    
    const buildingRedBG2 = new Entity('buildingRedBG2')
    engine.addEntity(buildingRedBG2)
    buildingRedBG2.setParent(_scene)
    buildingRedBG2.addComponentOrReplace(gltfShape37)
    const transform274 = new Transform({
      position: new Vector3(27, 0, 3.1),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1.2068214416503906, 0.5)
    })
    buildingRedBG2.addComponentOrReplace(transform274)
    
    const buildingGreenBG8 = new Entity('buildingGreenBG8')
    engine.addEntity(buildingGreenBG8)
    buildingGreenBG8.setParent(_scene)
    buildingGreenBG8.addComponentOrReplace(gltfShape36)
    const transform275 = new Transform({
      position: new Vector3(69.28787231445312, 0, 4.499993324279785),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.5, 1.6634767055511475, 1.5)
    })
    buildingGreenBG8.addComponentOrReplace(transform275)
    
    const buildingRedBG3 = new Entity('buildingRedBG3')
    engine.addEntity(buildingRedBG3)
    buildingRedBG3.setParent(_scene)
    buildingRedBG3.addComponentOrReplace(gltfShape37)
    const transform276 = new Transform({
      position: new Vector3(79, 0, 28.99999237060547),
      rotation: new Quaternion(-6.692902301134779e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
      scale: new Vector3(1.345334529876709, 1.3667556047439575, 0.2959129214286804)
    })
    buildingRedBG3.addComponentOrReplace(transform276)
    
    const buildingRedBG4 = new Entity('buildingRedBG4')
    engine.addEntity(buildingRedBG4)
    buildingRedBG4.setParent(_scene)
    buildingRedBG4.addComponentOrReplace(gltfShape37)
    const transform277 = new Transform({
      position: new Vector3(78.5, 0, 56.49999237060547),
      rotation: new Quaternion(-6.692902301134779e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
      scale: new Vector3(0.77549147605896, 1.0568372011184692, 0.2959129214286804)
    })
    buildingRedBG4.addComponentOrReplace(transform277)
    
    const buildingRedBG5 = new Entity('buildingRedBG5')
    engine.addEntity(buildingRedBG5)
    buildingRedBG5.setParent(_scene)
    buildingRedBG5.addComponentOrReplace(gltfShape37)
    const transform278 = new Transform({
      position: new Vector3(79, 0, 69.99999237060547),
      rotation: new Quaternion(-6.692902301134779e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
      scale: new Vector3(1.3816795349121094, 1.5276764631271362, 0.2959129214286804)
    })
    buildingRedBG5.addComponentOrReplace(transform278)
    
    const buildingBase = new Entity('buildingBase')
    engine.addEntity(buildingBase)
    buildingBase.setParent(_scene)
    const transform279 = new Transform({
      position: new Vector3(64.5, 0, 63.5),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1.4613001346588135, 1.3001558780670166, 1.4885423183441162)
    })
    buildingBase.addComponentOrReplace(transform279)
    const gltfShape38 = new GLTFShape("models/Building_Base.glb")
    gltfShape38.withCollisions = true
    gltfShape38.visible = true
    buildingBase.addComponentOrReplace(gltfShape38)
    
    const verticalPlatform2 = new Entity('verticalPlatform2')
    engine.addEntity(verticalPlatform2)
    verticalPlatform2.setParent(_scene)
    const transform280 = new Transform({
      position: new Vector3(68.5, 0, 70.12698364257812),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    verticalPlatform2.addComponentOrReplace(transform280)
    
    const verticalPlatform3 = new Entity('verticalPlatform3')
    engine.addEntity(verticalPlatform3)
    verticalPlatform3.setParent(_scene)
    const transform281 = new Transform({
      position: new Vector3(68.5, 0, 57.05170822143555),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    verticalPlatform3.addComponentOrReplace(transform281)
    
    const greenButton3 = new Entity('greenButton3')
    engine.addEntity(greenButton3)
    greenButton3.setParent(_scene)
    const transform282 = new Transform({
      position: new Vector3(70.90919982910156, 1.5256630182266235, 70.5),
      rotation: new Quaternion(0, 0, -0.7071068286895752, -0.7071068286895752),
      scale: new Vector3(1.8314695358276367, 1.555570363998413, 2)
    })
    greenButton3.addComponentOrReplace(transform282)
    
    const redButton3 = new Entity('redButton3')
    engine.addEntity(redButton3)
    redButton3.setParent(_scene)
    const transform283 = new Transform({
      position: new Vector3(70.90879974365234, 1.5, 69.5),
      rotation: new Quaternion(0, 0, -0.7071068286895752, -0.7071068286895752),
      scale: new Vector3(2, 1, 2)
    })
    redButton3.addComponentOrReplace(transform283)
    
    const greenButton4 = new Entity('greenButton4')
    engine.addEntity(greenButton4)
    greenButton4.setParent(_scene)
    const transform284 = new Transform({
      position: new Vector3(70.90919982910156, 1.5256630182266235, 57.5),
      rotation: new Quaternion(0, 0, -0.7071068286895752, -0.7071068286895752),
      scale: new Vector3(1.8314695358276367, 1.555570363998413, 2)
    })
    greenButton4.addComponentOrReplace(transform284)
    
    const redButton4 = new Entity('redButton4')
    engine.addEntity(redButton4)
    redButton4.setParent(_scene)
    const transform285 = new Transform({
      position: new Vector3(70.90879974365234, 1.5, 56.5),
      rotation: new Quaternion(0, 0, -0.7071068286895752, -0.7071068286895752),
      scale: new Vector3(2, 1, 2)
    })
    redButton4.addComponentOrReplace(transform285)
    
    const greenButton5 = new Entity('greenButton5')
    engine.addEntity(greenButton5)
    greenButton5.setParent(_scene)
    const transform286 = new Transform({
      position: new Vector3(70.90919982910156, 35.025665283203125, 70.5),
      rotation: new Quaternion(0, 0, -0.7071068286895752, -0.7071068286895752),
      scale: new Vector3(1.8314695358276367, 1.555570363998413, 2)
    })
    greenButton5.addComponentOrReplace(transform286)
    
    const redButton5 = new Entity('redButton5')
    engine.addEntity(redButton5)
    redButton5.setParent(_scene)
    const transform287 = new Transform({
      position: new Vector3(70.90879974365234, 35, 69.5),
      rotation: new Quaternion(0, 0, -0.7071068286895752, -0.7071068286895752),
      scale: new Vector3(2, 1, 2)
    })
    redButton5.addComponentOrReplace(transform287)
    
    const greenButton6 = new Entity('greenButton6')
    engine.addEntity(greenButton6)
    greenButton6.setParent(_scene)
    const transform288 = new Transform({
      position: new Vector3(70.90919982910156, 35.025665283203125, 57.5),
      rotation: new Quaternion(0, 0, -0.7071068286895752, -0.7071068286895752),
      scale: new Vector3(1.8314695358276367, 1.555570363998413, 2)
    })
    greenButton6.addComponentOrReplace(transform288)
    
    const redButton6 = new Entity('redButton6')
    engine.addEntity(redButton6)
    redButton6.setParent(_scene)
    const transform289 = new Transform({
      position: new Vector3(70.90879974365234, 35, 56.5),
      rotation: new Quaternion(0, 0, -0.7071068286895752, -0.7071068286895752),
      scale: new Vector3(2, 1, 2)
    })
    redButton6.addComponentOrReplace(transform289)
    
    const buildingCubeRoofV6 = new Entity('buildingCubeRoofV6')
    engine.addEntity(buildingCubeRoofV6)
    buildingCubeRoofV6.setParent(_scene)
    const transform290 = new Transform({
      position: new Vector3(65, 39.5, 63.610023498535156),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.4634506702423096, 0.061283230781555176, 3.374967098236084)
    })
    buildingCubeRoofV6.addComponentOrReplace(transform290)
    buildingCubeRoofV6.addComponentOrReplace(gltfShape12)
    
    const propLandingPad2 = new Entity('propLandingPad2')
    engine.addEntity(propLandingPad2)
    propLandingPad2.setParent(_scene)
    const transform291 = new Transform({
      position: new Vector3(65, 39.5, 67.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    propLandingPad2.addComponentOrReplace(transform291)
    propLandingPad2.addComponentOrReplace(gltfShape32)
    
    const vehicleTaxiV17 = new Entity('vehicleTaxiV17')
    engine.addEntity(vehicleTaxiV17)
    vehicleTaxiV17.setParent(_scene)
    vehicleTaxiV17.addComponentOrReplace(gltfShape13)
    const transform292 = new Transform({
      position: new Vector3(65, 39.9755973815918, 67.5),
      rotation: new Quaternion(0, -0.2902846932411194, 3.4604628496026635e-8, 0.9569403529167175),
      scale: new Vector3(1, 1, 1)
    })
    vehicleTaxiV17.addComponentOrReplace(transform292)
    
    const largeEvergreenTurf5 = new Entity('largeEvergreenTurf5')
    engine.addEntity(largeEvergreenTurf5)
    largeEvergreenTurf5.setParent(_scene)
    const gltfShape39 = new GLTFShape("models/Grass_Module_4M/Grass_Module_4M.glb")
    gltfShape39.withCollisions = true
    gltfShape39.visible = true
    largeEvergreenTurf5.addComponentOrReplace(gltfShape39)
    const transform293 = new Transform({
      position: new Vector3(63, 39.8836555480957, 60),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1.1291193962097168)
    })
    largeEvergreenTurf5.addComponentOrReplace(transform293)
    
    const largeEvergreenTurf6 = new Entity('largeEvergreenTurf6')
    engine.addEntity(largeEvergreenTurf6)
    largeEvergreenTurf6.setParent(_scene)
    largeEvergreenTurf6.addComponentOrReplace(gltfShape39)
    const transform294 = new Transform({
      position: new Vector3(71, 39.8836555480957, 60),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1.1291193962097168)
    })
    largeEvergreenTurf6.addComponentOrReplace(transform294)
    
    const largeEvergreenTurf7 = new Entity('largeEvergreenTurf7')
    engine.addEntity(largeEvergreenTurf7)
    largeEvergreenTurf7.setParent(_scene)
    largeEvergreenTurf7.addComponentOrReplace(gltfShape39)
    const transform295 = new Transform({
      position: new Vector3(67, 39.8836555480957, 60),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1.1291193962097168)
    })
    largeEvergreenTurf7.addComponentOrReplace(transform295)
    
    const largeEvergreenTurf8 = new Entity('largeEvergreenTurf8')
    engine.addEntity(largeEvergreenTurf8)
    largeEvergreenTurf8.setParent(_scene)
    largeEvergreenTurf8.addComponentOrReplace(gltfShape39)
    const transform296 = new Transform({
      position: new Vector3(67, 39.8836555480957, 64.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1.1291193962097168)
    })
    largeEvergreenTurf8.addComponentOrReplace(transform296)
    
    const largeEvergreenTurf9 = new Entity('largeEvergreenTurf9')
    engine.addEntity(largeEvergreenTurf9)
    largeEvergreenTurf9.setParent(_scene)
    largeEvergreenTurf9.addComponentOrReplace(gltfShape39)
    const transform297 = new Transform({
      position: new Vector3(63, 39.8836555480957, 64.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1.1291193962097168)
    })
    largeEvergreenTurf9.addComponentOrReplace(transform297)
    
    const largeEvergreenTurf10 = new Entity('largeEvergreenTurf10')
    engine.addEntity(largeEvergreenTurf10)
    largeEvergreenTurf10.setParent(_scene)
    largeEvergreenTurf10.addComponentOrReplace(gltfShape39)
    const transform298 = new Transform({
      position: new Vector3(71, 39.8836555480957, 64),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1.1291193962097168)
    })
    largeEvergreenTurf10.addComponentOrReplace(transform298)
    
    const largeEvergreenTurf11 = new Entity('largeEvergreenTurf11')
    engine.addEntity(largeEvergreenTurf11)
    largeEvergreenTurf11.setParent(_scene)
    largeEvergreenTurf11.addComponentOrReplace(gltfShape39)
    const transform299 = new Transform({
      position: new Vector3(63, 39.8836555480957, 68.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1.1291193962097168)
    })
    largeEvergreenTurf11.addComponentOrReplace(transform299)
    
    const largeEvergreenTurf12 = new Entity('largeEvergreenTurf12')
    engine.addEntity(largeEvergreenTurf12)
    largeEvergreenTurf12.setParent(_scene)
    largeEvergreenTurf12.addComponentOrReplace(gltfShape39)
    const transform300 = new Transform({
      position: new Vector3(63, 39.8836555480957, 72),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1.1291193962097168)
    })
    largeEvergreenTurf12.addComponentOrReplace(transform300)
    
    const largeEvergreenTurf13 = new Entity('largeEvergreenTurf13')
    engine.addEntity(largeEvergreenTurf13)
    largeEvergreenTurf13.setParent(_scene)
    largeEvergreenTurf13.addComponentOrReplace(gltfShape39)
    const transform301 = new Transform({
      position: new Vector3(67, 39.8836555480957, 72),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1.1291193962097168)
    })
    largeEvergreenTurf13.addComponentOrReplace(transform301)
    
    const largeEvergreenTurf14 = new Entity('largeEvergreenTurf14')
    engine.addEntity(largeEvergreenTurf14)
    largeEvergreenTurf14.setParent(_scene)
    largeEvergreenTurf14.addComponentOrReplace(gltfShape39)
    const transform302 = new Transform({
      position: new Vector3(71, 39.8836555480957, 72),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1.1291193962097168)
    })
    largeEvergreenTurf14.addComponentOrReplace(transform302)
    
    const largeEvergreenTurf15 = new Entity('largeEvergreenTurf15')
    engine.addEntity(largeEvergreenTurf15)
    largeEvergreenTurf15.setParent(_scene)
    largeEvergreenTurf15.addComponentOrReplace(gltfShape39)
    const transform303 = new Transform({
      position: new Vector3(71, 39.8836555480957, 68.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1.1291193962097168)
    })
    largeEvergreenTurf15.addComponentOrReplace(transform303)
    
    const evergreenShrub5 = new Entity('evergreenShrub5')
    engine.addEntity(evergreenShrub5)
    evergreenShrub5.setParent(_scene)
    const gltfShape40 = new GLTFShape("models/Bush_03/Bush_03.glb")
    gltfShape40.withCollisions = true
    gltfShape40.visible = true
    evergreenShrub5.addComponentOrReplace(gltfShape40)
    const transform304 = new Transform({
      position: new Vector3(60, 40, 58),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 2)
    })
    evergreenShrub5.addComponentOrReplace(transform304)
    
    const evergreenShrub6 = new Entity('evergreenShrub6')
    engine.addEntity(evergreenShrub6)
    evergreenShrub6.setParent(_scene)
    evergreenShrub6.addComponentOrReplace(gltfShape40)
    const transform305 = new Transform({
      position: new Vector3(60, 40, 65),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 2)
    })
    evergreenShrub6.addComponentOrReplace(transform305)
    
    const ostrichFerns20 = new Entity('ostrichFerns20')
    engine.addEntity(ostrichFerns20)
    ostrichFerns20.setParent(_scene)
    const gltfShape41 = new GLTFShape("models/Grass_02/Grass_02.glb")
    gltfShape41.withCollisions = true
    gltfShape41.visible = true
    ostrichFerns20.addComponentOrReplace(gltfShape41)
    const transform306 = new Transform({
      position: new Vector3(60, 40, 61.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 3, 2)
    })
    ostrichFerns20.addComponentOrReplace(transform306)
    
    const ostrichFerns21 = new Entity('ostrichFerns21')
    engine.addEntity(ostrichFerns21)
    ostrichFerns21.setParent(_scene)
    ostrichFerns21.addComponentOrReplace(gltfShape41)
    const transform307 = new Transform({
      position: new Vector3(61.5, 40, 60),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 3, 2)
    })
    ostrichFerns21.addComponentOrReplace(transform307)
    
    const ostrichFerns22 = new Entity('ostrichFerns22')
    engine.addEntity(ostrichFerns22)
    ostrichFerns22.setParent(_scene)
    ostrichFerns22.addComponentOrReplace(gltfShape41)
    const transform308 = new Transform({
      position: new Vector3(61.5, 40, 58.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 3, 2)
    })
    ostrichFerns22.addComponentOrReplace(transform308)
    
    const ostrichFerns23 = new Entity('ostrichFerns23')
    engine.addEntity(ostrichFerns23)
    ostrichFerns23.setParent(_scene)
    ostrichFerns23.addComponentOrReplace(gltfShape41)
    const transform309 = new Transform({
      position: new Vector3(61.5, 40, 57),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 3, 2)
    })
    ostrichFerns23.addComponentOrReplace(transform309)
    
    const ostrichFerns24 = new Entity('ostrichFerns24')
    engine.addEntity(ostrichFerns24)
    ostrichFerns24.setParent(_scene)
    ostrichFerns24.addComponentOrReplace(gltfShape41)
    const transform310 = new Transform({
      position: new Vector3(61.5, 40, 61.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 3, 2)
    })
    ostrichFerns24.addComponentOrReplace(transform310)
    
    const evergreenShrub7 = new Entity('evergreenShrub7')
    engine.addEntity(evergreenShrub7)
    evergreenShrub7.setParent(_scene)
    evergreenShrub7.addComponentOrReplace(gltfShape40)
    const transform311 = new Transform({
      position: new Vector3(64, 40, 60),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 2)
    })
    evergreenShrub7.addComponentOrReplace(transform311)
    
    const ostrichFerns25 = new Entity('ostrichFerns25')
    engine.addEntity(ostrichFerns25)
    ostrichFerns25.setParent(_scene)
    ostrichFerns25.addComponentOrReplace(gltfShape41)
    const transform312 = new Transform({
      position: new Vector3(63.5, 40, 57),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 3, 2)
    })
    ostrichFerns25.addComponentOrReplace(transform312)
    
    const ostrichFerns27 = new Entity('ostrichFerns27')
    engine.addEntity(ostrichFerns27)
    ostrichFerns27.setParent(_scene)
    ostrichFerns27.addComponentOrReplace(gltfShape41)
    const transform313 = new Transform({
      position: new Vector3(65.5, 40, 57),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 3, 2)
    })
    ostrichFerns27.addComponentOrReplace(transform313)
    
    const ostrichFerns28 = new Entity('ostrichFerns28')
    engine.addEntity(ostrichFerns28)
    ostrichFerns28.setParent(_scene)
    ostrichFerns28.addComponentOrReplace(gltfShape41)
    const transform314 = new Transform({
      position: new Vector3(67.5, 40, 57),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 3, 2)
    })
    ostrichFerns28.addComponentOrReplace(transform314)
    
    const ostrichFerns30 = new Entity('ostrichFerns30')
    engine.addEntity(ostrichFerns30)
    ostrichFerns30.setParent(_scene)
    ostrichFerns30.addComponentOrReplace(gltfShape41)
    const transform315 = new Transform({
      position: new Vector3(67.5, 40, 60),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 3, 2)
    })
    ostrichFerns30.addComponentOrReplace(transform315)
    
    const ostrichFerns31 = new Entity('ostrichFerns31')
    engine.addEntity(ostrichFerns31)
    ostrichFerns31.setParent(_scene)
    ostrichFerns31.addComponentOrReplace(gltfShape41)
    const transform316 = new Transform({
      position: new Vector3(67.5, 40, 61.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 3, 2)
    })
    ostrichFerns31.addComponentOrReplace(transform316)
    
    const ostrichFerns32 = new Entity('ostrichFerns32')
    engine.addEntity(ostrichFerns32)
    ostrichFerns32.setParent(_scene)
    ostrichFerns32.addComponentOrReplace(gltfShape41)
    const transform317 = new Transform({
      position: new Vector3(65.5, 40, 60),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 3, 2)
    })
    ostrichFerns32.addComponentOrReplace(transform317)
    
    const evergreenShrub8 = new Entity('evergreenShrub8')
    engine.addEntity(evergreenShrub8)
    evergreenShrub8.setParent(_scene)
    evergreenShrub8.addComponentOrReplace(gltfShape40)
    const transform318 = new Transform({
      position: new Vector3(67, 40, 58.5),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.833024263381958, 1, 1.458317518234253)
    })
    evergreenShrub8.addComponentOrReplace(transform318)
    
    const ostrichFerns26 = new Entity('ostrichFerns26')
    engine.addEntity(ostrichFerns26)
    ostrichFerns26.setParent(_scene)
    ostrichFerns26.addComponentOrReplace(gltfShape41)
    const transform319 = new Transform({
      position: new Vector3(65.5, 40, 61.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 3, 2)
    })
    ostrichFerns26.addComponentOrReplace(transform319)
    
    const ostrichFerns29 = new Entity('ostrichFerns29')
    engine.addEntity(ostrichFerns29)
    ostrichFerns29.setParent(_scene)
    ostrichFerns29.addComponentOrReplace(gltfShape41)
    const transform320 = new Transform({
      position: new Vector3(69.5, 40, 57),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 3, 2)
    })
    ostrichFerns29.addComponentOrReplace(transform320)
    
    const ostrichFerns33 = new Entity('ostrichFerns33')
    engine.addEntity(ostrichFerns33)
    ostrichFerns33.setParent(_scene)
    ostrichFerns33.addComponentOrReplace(gltfShape41)
    const transform321 = new Transform({
      position: new Vector3(69.5, 40, 58.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 3, 2)
    })
    ostrichFerns33.addComponentOrReplace(transform321)
    
    const evergreenShrub9 = new Entity('evergreenShrub9')
    engine.addEntity(evergreenShrub9)
    evergreenShrub9.setParent(_scene)
    evergreenShrub9.addComponentOrReplace(gltfShape40)
    const transform322 = new Transform({
      position: new Vector3(70, 40, 62.2547607421875),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 2.4978983402252197)
    })
    evergreenShrub9.addComponentOrReplace(transform322)
    
    const ostrichFerns34 = new Entity('ostrichFerns34')
    engine.addEntity(ostrichFerns34)
    ostrichFerns34.setParent(_scene)
    ostrichFerns34.addComponentOrReplace(gltfShape41)
    const transform323 = new Transform({
      position: new Vector3(60, 40, 68),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 3, 2)
    })
    ostrichFerns34.addComponentOrReplace(transform323)
    
    const ostrichFerns35 = new Entity('ostrichFerns35')
    engine.addEntity(ostrichFerns35)
    ostrichFerns35.setParent(_scene)
    ostrichFerns35.addComponentOrReplace(gltfShape41)
    const transform324 = new Transform({
      position: new Vector3(60, 40, 69.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 3, 2)
    })
    ostrichFerns35.addComponentOrReplace(transform324)
    
    const ostrichFerns36 = new Entity('ostrichFerns36')
    engine.addEntity(ostrichFerns36)
    ostrichFerns36.setParent(_scene)
    ostrichFerns36.addComponentOrReplace(gltfShape41)
    const transform325 = new Transform({
      position: new Vector3(60, 40, 71),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 3, 2)
    })
    ostrichFerns36.addComponentOrReplace(transform325)
    
    const ostrichFerns37 = new Entity('ostrichFerns37')
    engine.addEntity(ostrichFerns37)
    ostrichFerns37.setParent(_scene)
    ostrichFerns37.addComponentOrReplace(gltfShape41)
    const transform326 = new Transform({
      position: new Vector3(69.5, 40, 66),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 3, 2)
    })
    ostrichFerns37.addComponentOrReplace(transform326)
    
    const ostrichFerns38 = new Entity('ostrichFerns38')
    engine.addEntity(ostrichFerns38)
    ostrichFerns38.setParent(_scene)
    ostrichFerns38.addComponentOrReplace(gltfShape41)
    const transform327 = new Transform({
      position: new Vector3(69.5, 40, 67.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 3, 2)
    })
    ostrichFerns38.addComponentOrReplace(transform327)
    
    const ostrichFerns39 = new Entity('ostrichFerns39')
    engine.addEntity(ostrichFerns39)
    ostrichFerns39.setParent(_scene)
    ostrichFerns39.addComponentOrReplace(gltfShape41)
    const transform328 = new Transform({
      position: new Vector3(69.5, 40, 69),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 3, 2)
    })
    ostrichFerns39.addComponentOrReplace(transform328)
    
    const ostrichFerns40 = new Entity('ostrichFerns40')
    engine.addEntity(ostrichFerns40)
    ostrichFerns40.setParent(_scene)
    ostrichFerns40.addComponentOrReplace(gltfShape41)
    const transform329 = new Transform({
      position: new Vector3(69.5, 40, 70.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2, 3, 2)
    })
    ostrichFerns40.addComponentOrReplace(transform329)
    
    const propDumpster3 = new Entity('propDumpster3')
    engine.addEntity(propDumpster3)
    propDumpster3.setParent(_scene)
    propDumpster3.addComponentOrReplace(gltfShape15)
    const transform330 = new Transform({
      position: new Vector3(69, 0, 47),
      rotation: new Quaternion(-1.8504768809662116e-16, 0.7071068286895752, -8.42937097900176e-8, 0.7071067094802856),
      scale: new Vector3(3, 3, 3)
    })
    propDumpster3.addComponentOrReplace(transform330)
    
    const propStreetLight = new Entity('propStreetLight')
    engine.addEntity(propStreetLight)
    propStreetLight.setParent(_scene)
    const transform331 = new Transform({
      position: new Vector3(57.5, 0, 51.5),
      rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1.5, 0.7464230060577393)
    })
    propStreetLight.addComponentOrReplace(transform331)
    const gltfShape42 = new GLTFShape("models/Prop_Street_Light.glb")
    gltfShape42.withCollisions = true
    gltfShape42.visible = true
    propStreetLight.addComponentOrReplace(gltfShape42)
    
    const propStreetLight2 = new Entity('propStreetLight2')
    engine.addEntity(propStreetLight2)
    propStreetLight2.setParent(_scene)
    propStreetLight2.addComponentOrReplace(gltfShape42)
    const transform332 = new Transform({
      position: new Vector3(57.5, 0, 41.5),
      rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1.5, 0.7464230060577393)
    })
    propStreetLight2.addComponentOrReplace(transform332)
    
    const propStreetLight3 = new Entity('propStreetLight3')
    engine.addEntity(propStreetLight3)
    propStreetLight3.setParent(_scene)
    propStreetLight3.addComponentOrReplace(gltfShape42)
    const transform333 = new Transform({
      position: new Vector3(57.5, 0, 76),
      rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1.5, 0.7464230060577393)
    })
    propStreetLight3.addComponentOrReplace(transform333)
    
    const propStreetLight4 = new Entity('propStreetLight4')
    engine.addEntity(propStreetLight4)
    propStreetLight4.setParent(_scene)
    propStreetLight4.addComponentOrReplace(gltfShape42)
    const transform334 = new Transform({
      position: new Vector3(39.5, 0, 55.5),
      rotation: new Quaternion(1.539565179105285e-15, 3.725290298461914e-8, -3.552713678800501e-15, -1),
      scale: new Vector3(1, 1.5, 0.7464230060577393)
    })
    propStreetLight4.addComponentOrReplace(transform334)
    
    const propStreetLight5 = new Entity('propStreetLight5')
    engine.addEntity(propStreetLight5)
    propStreetLight5.setParent(_scene)
    propStreetLight5.addComponentOrReplace(gltfShape42)
    const transform335 = new Transform({
      position: new Vector3(19, 0, 55.5),
      rotation: new Quaternion(1.539565179105285e-15, 3.725290298461914e-8, -3.552713678800501e-15, -1),
      scale: new Vector3(1, 1.5, 0.7464230060577393)
    })
    propStreetLight5.addComponentOrReplace(transform335)
    
    const propStreetLight6 = new Entity('propStreetLight6')
    engine.addEntity(propStreetLight6)
    propStreetLight6.setParent(_scene)
    propStreetLight6.addComponentOrReplace(gltfShape42)
    const transform336 = new Transform({
      position: new Vector3(34, 0, 55.5),
      rotation: new Quaternion(1.539565179105285e-15, 3.725290298461914e-8, -3.552713678800501e-15, -1),
      scale: new Vector3(1, 1.5, 0.7464230060577393)
    })
    propStreetLight6.addComponentOrReplace(transform336)
    
    const propStreetLight7 = new Entity('propStreetLight7')
    engine.addEntity(propStreetLight7)
    propStreetLight7.setParent(_scene)
    propStreetLight7.addComponentOrReplace(gltfShape42)
    const transform337 = new Transform({
      position: new Vector3(13.5, 0, 23.5),
      rotation: new Quaternion(1.539565179105285e-15, 3.725290298461914e-8, -3.552713678800501e-15, -1),
      scale: new Vector3(1, 1.5, 0.7464230060577393)
    })
    propStreetLight7.addComponentOrReplace(transform337)
    
    const propStreetLight8 = new Entity('propStreetLight8')
    engine.addEntity(propStreetLight8)
    propStreetLight8.setParent(_scene)
    propStreetLight8.addComponentOrReplace(gltfShape42)
    const transform338 = new Transform({
      position: new Vector3(33.5, 0, 23.5),
      rotation: new Quaternion(1.539565179105285e-15, 3.725290298461914e-8, -3.552713678800501e-15, -1),
      scale: new Vector3(1, 1.5, 0.7464230060577393)
    })
    propStreetLight8.addComponentOrReplace(transform338)
    
    const propStreetLight9 = new Entity('propStreetLight9')
    engine.addEntity(propStreetLight9)
    propStreetLight9.setParent(_scene)
    propStreetLight9.addComponentOrReplace(gltfShape42)
    const transform339 = new Transform({
      position: new Vector3(46, 0, 23.5),
      rotation: new Quaternion(1.539565179105285e-15, 3.725290298461914e-8, -3.552713678800501e-15, -1),
      scale: new Vector3(1, 1.5, 0.7464230060577393)
    })
    propStreetLight9.addComponentOrReplace(transform339)
    
    const propStreetLight10 = new Entity('propStreetLight10')
    engine.addEntity(propStreetLight10)
    propStreetLight10.setParent(_scene)
    propStreetLight10.addComponentOrReplace(gltfShape42)
    const transform340 = new Transform({
      position: new Vector3(33.5, 0, 23.5),
      rotation: new Quaternion(1.539565179105285e-15, 3.725290298461914e-8, -3.552713678800501e-15, -1),
      scale: new Vector3(1, 1.5, 0.7464230060577393)
    })
    propStreetLight10.addComponentOrReplace(transform340)
    
    const verticalPlatform4 = new Entity('verticalPlatform4')
    engine.addEntity(verticalPlatform4)
    verticalPlatform4.setParent(_scene)
    const transform341 = new Transform({
      position: new Vector3(19.80115509033203, 0, 20.809526443481445),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(2.828258991241455, 1, 2.4674739837646484)
    })
    verticalPlatform4.addComponentOrReplace(transform341)
    
    const greenButton7 = new Entity('greenButton7')
    engine.addEntity(greenButton7)
    greenButton7.setParent(_scene)
    const transform342 = new Transform({
      position: new Vector3(21.289199829101562, 1.5256630182266235, 18.176193237304688),
      rotation: new Quaternion(0.44858378171920776, 0.4485837519168854, 0.5466009974479675, 0.5466009974479675),
      scale: new Vector3(1.8314695358276367, 1.555570363998413, 2)
    })
    greenButton7.addComponentOrReplace(transform342)
    
    const redButton7 = new Entity('redButton7')
    engine.addEntity(redButton7)
    redButton7.setParent(_scene)
    const transform343 = new Transform({
      position: new Vector3(20.308799743652344, 21, 18.052610397338867),
      rotation: new Quaternion(-0.5, -0.5, -0.5, -0.5000001192092896),
      scale: new Vector3(2, 1, 2)
    })
    redButton7.addComponentOrReplace(transform343)
    
    const greenButton8 = new Entity('greenButton8')
    engine.addEntity(greenButton8)
    greenButton8.setParent(_scene)
    const transform344 = new Transform({
      position: new Vector3(21.289199829101562, 21.025663375854492, 18.176193237304688),
      rotation: new Quaternion(0.5, 0.4999999701976776, 0.5000000596046448, 0.5000000596046448),
      scale: new Vector3(1.8314695358276367, 1.555570363998413, 2)
    })
    greenButton8.addComponentOrReplace(transform344)
    
    const redButton8 = new Entity('redButton8')
    engine.addEntity(redButton8)
    redButton8.setParent(_scene)
    const transform345 = new Transform({
      position: new Vector3(20.308799743652344, 1.5, 18.052610397338867),
      rotation: new Quaternion(-0.44858378171920776, -0.5466009378433228, -0.44858378171920776, -0.5466010570526123),
      scale: new Vector3(2, 1, 2)
    })
    redButton8.addComponentOrReplace(transform345)
    
    const redAccessCard = new Entity('redAccessCard')
    engine.addEntity(redAccessCard)
    redAccessCard.setParent(_scene)
    const transform346 = new Transform({
      position: new Vector3(24.51239585876465, 3.499790906906128, 48.71566390991211),
      rotation: new Quaternion(-0.21260754764080048, 0.5132799744606018, 0.3181896507740021, -0.7681778073310852),
      scale: new Vector3(1.5, 1, 1.5)
    })
    redAccessCard.addComponentOrReplace(transform346)
    
    const yellowAccessCard = new Entity('yellowAccessCard')
    engine.addEntity(yellowAccessCard)
    yellowAccessCard.setParent(_scene)
    const transform347 = new Transform({
      position: new Vector3(24.354948043823242, 3.5, 49),
      rotation: new Quaternion(-0.28687843680381775, 0.41443732380867004, 0.4796203374862671, -0.7182666063308716),
      scale: new Vector3(1.5, 1, 1.5)
    })
    yellowAccessCard.addComponentOrReplace(transform347)
    
    const verticalHallwayDoo2 = new Entity('verticalHallwayDoo2')
    engine.addEntity(verticalHallwayDoo2)
    verticalHallwayDoo2.setParent(_scene)
    const transform348 = new Transform({
      position: new Vector3(20.784910202026367, 0, 24),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(0.6739045977592468, 0.8198950290679932, 0.9999999403953552)
    })
    verticalHallwayDoo2.addComponentOrReplace(transform348)
    
    const verticalHallwayDoo3 = new Entity('verticalHallwayDoo3')
    engine.addEntity(verticalHallwayDoo3)
    verticalHallwayDoo3.setParent(_scene)
    const transform349 = new Transform({
      position: new Vector3(59.26315689086914, 0, 30.301891326904297),
      rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.9896049499511719, 0.9768761396408081, 1)
    })
    verticalHallwayDoo3.addComponentOrReplace(transform349)
    
    const propCouch4 = new Entity('propCouch4')
    engine.addEntity(propCouch4)
    propCouch4.setParent(_scene)
    const transform350 = new Transform({
      position: new Vector3(61.5, 5.5, 59),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    propCouch4.addComponentOrReplace(transform350)
    propCouch4.addComponentOrReplace(gltfShape34)
    
    const propTable2 = new Entity('propTable2')
    engine.addEntity(propTable2)
    propTable2.setParent(_scene)
    const transform351 = new Transform({
      position: new Vector3(61.5, 5.5, 61.5),
      rotation: new Quaternion(8.817940676788736e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
      scale: new Vector3(1.5, 1, 0.9999999403953552)
    })
    propTable2.addComponentOrReplace(transform351)
    propTable2.addComponentOrReplace(gltfShape35)
    
    const propCouch5 = new Entity('propCouch5')
    engine.addEntity(propCouch5)
    propCouch5.setParent(_scene)
    propCouch5.addComponentOrReplace(gltfShape34)
    const transform352 = new Transform({
      position: new Vector3(64, 12.5, 64.5),
      rotation: new Quaternion(-1.9455749640203465e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    propCouch5.addComponentOrReplace(transform352)
    
    const propTable3 = new Entity('propTable3')
    engine.addEntity(propTable3)
    propTable3.setParent(_scene)
    propTable3.addComponentOrReplace(gltfShape35)
    const transform353 = new Transform({
      position: new Vector3(61, 12.5, 64.5),
      rotation: new Quaternion(8.817940676788736e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
      scale: new Vector3(1.5, 1, 0.9999999403953552)
    })
    propTable3.addComponentOrReplace(transform353)
    
    const propCouch6 = new Entity('propCouch6')
    engine.addEntity(propCouch6)
    propCouch6.setParent(_scene)
    propCouch6.addComponentOrReplace(gltfShape34)
    const transform354 = new Transform({
      position: new Vector3(61.5, 12.5, 61.5),
      rotation: new Quaternion(1.2682879752611795e-16, 4.470348358154297e-8, -4.440892098500626e-15, -1),
      scale: new Vector3(1, 1, 1)
    })
    propCouch6.addComponentOrReplace(transform354)
    
    const propTableLarge = new Entity('propTableLarge')
    engine.addEntity(propTableLarge)
    propTableLarge.setParent(_scene)
    const transform355 = new Transform({
      position: new Vector3(69.94835662841797, 19.248689651489258, 65.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    propTableLarge.addComponentOrReplace(transform355)
    const gltfShape43 = new GLTFShape("models/Prop_Table_Large.glb")
    gltfShape43.withCollisions = true
    gltfShape43.visible = true
    propTableLarge.addComponentOrReplace(gltfShape43)
    
    const propTableLarge2 = new Entity('propTableLarge2')
    engine.addEntity(propTableLarge2)
    propTableLarge2.setParent(_scene)
    propTableLarge2.addComponentOrReplace(gltfShape43)
    const transform356 = new Transform({
      position: new Vector3(69.58150482177734, 19.237136840820312, 61.807708740234375),
      rotation: new Quaternion(1.6390432695296718e-15, -0.7186346054077148, 8.566792075725971e-8, 0.6953879594802856),
      scale: new Vector3(1, 1, 1)
    })
    propTableLarge2.addComponentOrReplace(transform356)
    
    const propChair = new Entity('propChair')
    engine.addEntity(propChair)
    propChair.setParent(_scene)
    const transform357 = new Transform({
      position: new Vector3(70.5, 19.21765899658203, 62.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    propChair.addComponentOrReplace(transform357)
    const gltfShape44 = new GLTFShape("models/Prop_Chair.glb")
    gltfShape44.withCollisions = true
    gltfShape44.visible = true
    propChair.addComponentOrReplace(gltfShape44)
    
    const propCouch7 = new Entity('propCouch7')
    engine.addEntity(propCouch7)
    propCouch7.setParent(_scene)
    propCouch7.addComponentOrReplace(gltfShape34)
    const transform358 = new Transform({
      position: new Vector3(61.5, 19.262351989746094, 64.5),
      rotation: new Quaternion(-1.7315132211067133e-14, -0.7071068286895752, 8.42937097900176e-8, -0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    propCouch7.addComponentOrReplace(transform358)
    
    const propCouch8 = new Entity('propCouch8')
    engine.addEntity(propCouch8)
    propCouch8.setParent(_scene)
    propCouch8.addComponentOrReplace(gltfShape34)
    const transform359 = new Transform({
      position: new Vector3(62.5, 26.08265495300293, 61.5),
      rotation: new Quaternion(1.2682879752611795e-16, 4.470348358154297e-8, -4.440892098500626e-15, -1),
      scale: new Vector3(1, 1, 1)
    })
    propCouch8.addComponentOrReplace(transform359)
    
    const propCouch9 = new Entity('propCouch9')
    engine.addEntity(propCouch9)
    propCouch9.setParent(_scene)
    propCouch9.addComponentOrReplace(gltfShape34)
    const transform360 = new Transform({
      position: new Vector3(62.5, 26.073524475097656, 67.5),
      rotation: new Quaternion(-3.0010614490445092e-15, 1, -1.1920926823449918e-7, 2.9802322387695312e-8),
      scale: new Vector3(1, 1, 1)
    })
    propCouch9.addComponentOrReplace(transform360)
    
    const propTable4 = new Entity('propTable4')
    engine.addEntity(propTable4)
    propTable4.setParent(_scene)
    propTable4.addComponentOrReplace(gltfShape35)
    const transform361 = new Transform({
      position: new Vector3(62.27073669433594, 26.09543228149414, 64.73046112060547),
      rotation: new Quaternion(8.817940676788736e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
      scale: new Vector3(1.5, 1, 0.9999999403953552)
    })
    propTable4.addComponentOrReplace(transform361)
    
    const propTableLarge3 = new Entity('propTableLarge3')
    engine.addEntity(propTableLarge3)
    propTableLarge3.setParent(_scene)
    propTableLarge3.addComponentOrReplace(gltfShape43)
    const transform362 = new Transform({
      position: new Vector3(69.94835662841797, 33, 65.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    propTableLarge3.addComponentOrReplace(transform362)
    
    const propTableLarge4 = new Entity('propTableLarge4')
    engine.addEntity(propTableLarge4)
    propTableLarge4.setParent(_scene)
    propTableLarge4.addComponentOrReplace(gltfShape43)
    const transform363 = new Transform({
      position: new Vector3(69.58150482177734, 33, 61.807708740234375),
      rotation: new Quaternion(1.6390432695296718e-15, -0.7186346054077148, 8.566792075725971e-8, 0.6953879594802856),
      scale: new Vector3(1, 1, 1)
    })
    propTableLarge4.addComponentOrReplace(transform363)
    
    const propChair2 = new Entity('propChair2')
    engine.addEntity(propChair2)
    propChair2.setParent(_scene)
    propChair2.addComponentOrReplace(gltfShape44)
    const transform364 = new Transform({
      position: new Vector3(70.5, 32.897857666015625, 62.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    propChair2.addComponentOrReplace(transform364)
    
    const propChair3 = new Entity('propChair3')
    engine.addEntity(propChair3)
    propChair3.setParent(_scene)
    propChair3.addComponentOrReplace(gltfShape44)
    const transform365 = new Transform({
      position: new Vector3(60.5, 32.897857666015625, 54.5),
      rotation: new Quaternion(-1.0889929378956156e-16, 0.3826834261417389, -4.5619412247788205e-8, -0.9238795638084412),
      scale: new Vector3(1, 1, 1)
    })
    propChair3.addComponentOrReplace(transform365)
    
    const propCouch10 = new Entity('propCouch10')
    engine.addEntity(propCouch10)
    propCouch10.setParent(_scene)
    propCouch10.addComponentOrReplace(gltfShape34)
    const transform366 = new Transform({
      position: new Vector3(62.5, 33, 61.5),
      rotation: new Quaternion(1.2682879752611795e-16, 4.470348358154297e-8, -4.440892098500626e-15, -1),
      scale: new Vector3(1, 1, 1)
    })
    propCouch10.addComponentOrReplace(transform366)
    
    const propCouch11 = new Entity('propCouch11')
    engine.addEntity(propCouch11)
    propCouch11.setParent(_scene)
    propCouch11.addComponentOrReplace(gltfShape34)
    const transform367 = new Transform({
      position: new Vector3(62.5, 33, 67),
      rotation: new Quaternion(-7.046045265800792e-15, 1, -1.1920927533992653e-7, 1.4901161193847656e-7),
      scale: new Vector3(1, 1, 1)
    })
    propCouch11.addComponentOrReplace(transform367)
    
    const propCouch12 = new Entity('propCouch12')
    engine.addEntity(propCouch12)
    propCouch12.setParent(_scene)
    propCouch12.addComponentOrReplace(gltfShape34)
    const transform368 = new Transform({
      position: new Vector3(59.5, 33, 64.5),
      rotation: new Quaternion(-5.785517938751254e-15, 0.7071067094802856, -8.429367426288081e-8, 0.70710688829422),
      scale: new Vector3(1, 1, 1)
    })
    propCouch12.addComponentOrReplace(transform368)
    
    const propTable5 = new Entity('propTable5')
    engine.addEntity(propTable5)
    propTable5.setParent(_scene)
    propTable5.addComponentOrReplace(gltfShape35)
    const transform369 = new Transform({
      position: new Vector3(62.20737075805664, 32.943626403808594, 64.43514251708984),
      rotation: new Quaternion(8.817940676788736e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
      scale: new Vector3(1.5, 1, 0.9999999403953552)
    })
    propTable5.addComponentOrReplace(transform369)
    
    const buildingGreenBG9 = new Entity('buildingGreenBG9')
    engine.addEntity(buildingGreenBG9)
    buildingGreenBG9.setParent(_scene)
    buildingGreenBG9.addComponentOrReplace(gltfShape36)
    const transform370 = new Transform({
      position: new Vector3(78, 0, 39),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1.5, 1.5, 0.5)
    })
    buildingGreenBG9.addComponentOrReplace(transform370)
    
    const signpostTree3 = new Entity('signpostTree3')
    engine.addEntity(signpostTree3)
    signpostTree3.setParent(_scene)
    const transform371 = new Transform({
      position: new Vector3(70.79084014892578, 2.5, 70),
      rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    signpostTree3.addComponentOrReplace(transform371)
    
    const signpostTree4 = new Entity('signpostTree4')
    engine.addEntity(signpostTree4)
    signpostTree4.setParent(_scene)
    const transform372 = new Transform({
      position: new Vector3(70.79084014892578, 2.5, 57),
      rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(1, 1, 1)
    })
    signpostTree4.addComponentOrReplace(transform372)
    
    const signpostTree5 = new Entity('signpostTree5')
    engine.addEntity(signpostTree5)
    signpostTree5.setParent(_scene)
    const transform373 = new Transform({
      position: new Vector3(46.61872863769531, 3, 49),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.2093408107757568, 1, 1)
    })
    signpostTree5.addComponentOrReplace(transform373)
    
    const propTaxiAnimated = new Entity('propTaxiAnimated')
    engine.addEntity(propTaxiAnimated)
    propTaxiAnimated.setParent(_scene)
    const transform374 = new Transform({
      position: new Vector3(53.5, 38, 49.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    propTaxiAnimated.addComponentOrReplace(transform374)
    const gltfShape45 = new GLTFShape("models/Prop_Taxi_Animated.glb")
    gltfShape45.withCollisions = true
    gltfShape45.visible = true
    propTaxiAnimated.addComponentOrReplace(gltfShape45)
    
    const propTaxiAnimated2 = new Entity('propTaxiAnimated2')
    engine.addEntity(propTaxiAnimated2)
    propTaxiAnimated2.setParent(_scene)
    propTaxiAnimated2.addComponentOrReplace(gltfShape45)
    const transform375 = new Transform({
      position: new Vector3(25.5, 36.5, 67),
      rotation: new Quaternion(-3.8193304279594744e-15, -0.9336947798728943, 1.113050771550661e-7, 0.35806992650032043),
      scale: new Vector3(1, 1, 1)
    })
    propTaxiAnimated2.addComponentOrReplace(transform375)
    
    const propLightGreen2 = new Entity('propLightGreen2')
    engine.addEntity(propLightGreen2)
    propLightGreen2.setParent(_scene)
    const gltfShape46 = new GLTFShape("models/Prop_Light_Green.glb")
    gltfShape46.withCollisions = true
    gltfShape46.visible = true
    propLightGreen2.addComponentOrReplace(gltfShape46)
    const transform376 = new Transform({
      position: new Vector3(25.5, 0.1253986358642578, 61.5),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen2.addComponentOrReplace(transform376)
    
    const propLightGreen = new Entity('propLightGreen')
    engine.addEntity(propLightGreen)
    propLightGreen.setParent(_scene)
    propLightGreen.addComponentOrReplace(gltfShape46)
    const transform377 = new Transform({
      position: new Vector3(22.5, 0.1253986358642578, 61.5),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen.addComponentOrReplace(transform377)
    
    const propLightRed = new Entity('propLightRed')
    engine.addEntity(propLightRed)
    propLightRed.setParent(_scene)
    const transform378 = new Transform({
      position: new Vector3(24, 0.12860393524169922, 61.5051155090332),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed.addComponentOrReplace(transform378)
    const gltfShape47 = new GLTFShape("models/Prop_Light_Red.glb")
    gltfShape47.withCollisions = true
    gltfShape47.visible = true
    propLightRed.addComponentOrReplace(gltfShape47)
    
    const propLightGreen3 = new Entity('propLightGreen3')
    engine.addEntity(propLightGreen3)
    propLightGreen3.setParent(_scene)
    propLightGreen3.addComponentOrReplace(gltfShape46)
    const transform379 = new Transform({
      position: new Vector3(28.5, 0.1253986358642578, 61.5),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen3.addComponentOrReplace(transform379)
    
    const propLightRed2 = new Entity('propLightRed2')
    engine.addEntity(propLightRed2)
    propLightRed2.setParent(_scene)
    propLightRed2.addComponentOrReplace(gltfShape47)
    const transform380 = new Transform({
      position: new Vector3(27, 0.12860393524169922, 61.5051155090332),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed2.addComponentOrReplace(transform380)
    
    const propLightRed3 = new Entity('propLightRed3')
    engine.addEntity(propLightRed3)
    propLightRed3.setParent(_scene)
    propLightRed3.addComponentOrReplace(gltfShape47)
    const transform381 = new Transform({
      position: new Vector3(30, 0.12860393524169922, 61.5051155090332),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed3.addComponentOrReplace(transform381)
    
    const propLightGreen4 = new Entity('propLightGreen4')
    engine.addEntity(propLightGreen4)
    propLightGreen4.setParent(_scene)
    propLightGreen4.addComponentOrReplace(gltfShape46)
    const transform382 = new Transform({
      position: new Vector3(31.5, 0.1253986358642578, 61.5),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen4.addComponentOrReplace(transform382)
    
    const propLightGreen5 = new Entity('propLightGreen5')
    engine.addEntity(propLightGreen5)
    propLightGreen5.setParent(_scene)
    propLightGreen5.addComponentOrReplace(gltfShape46)
    const transform383 = new Transform({
      position: new Vector3(42, 0.1253986358642578, 61),
      rotation: new Quaternion(-7.429307451521747e-16, 0, -1.7763568394002505e-15, 1),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen5.addComponentOrReplace(transform383)
    
    const propLightRed4 = new Entity('propLightRed4')
    engine.addEntity(propLightRed4)
    propLightRed4.setParent(_scene)
    propLightRed4.addComponentOrReplace(gltfShape47)
    const transform384 = new Transform({
      position: new Vector3(42, 0.12860393524169922, 59.5051155090332),
      rotation: new Quaternion(-6.309556894426756e-15, -1, 1.1920928244535389e-7, -4.470348358154297e-8),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed4.addComponentOrReplace(transform384)
    
    const propLightRed5 = new Entity('propLightRed5')
    engine.addEntity(propLightRed5)
    propLightRed5.setParent(_scene)
    propLightRed5.addComponentOrReplace(gltfShape47)
    const transform385 = new Transform({
      position: new Vector3(42, 0.12860393524169922, 47.5051155090332),
      rotation: new Quaternion(-6.309556894426756e-15, -1, 1.1920928244535389e-7, -4.470348358154297e-8),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed5.addComponentOrReplace(transform385)
    
    const propLightGreen6 = new Entity('propLightGreen6')
    engine.addEntity(propLightGreen6)
    propLightGreen6.setParent(_scene)
    propLightGreen6.addComponentOrReplace(gltfShape46)
    const transform386 = new Transform({
      position: new Vector3(42, 0.1253986358642578, 49),
      rotation: new Quaternion(-7.429307451521747e-16, 0, -1.7763568394002505e-15, 1),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen6.addComponentOrReplace(transform386)
    
    const propLightRed6 = new Entity('propLightRed6')
    engine.addEntity(propLightRed6)
    propLightRed6.setParent(_scene)
    propLightRed6.addComponentOrReplace(gltfShape47)
    const transform387 = new Transform({
      position: new Vector3(42, 0.12860393524169922, 50.5051155090332),
      rotation: new Quaternion(-6.309556894426756e-15, -1, 1.1920928244535389e-7, -4.470348358154297e-8),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed6.addComponentOrReplace(transform387)
    
    const propLightGreen7 = new Entity('propLightGreen7')
    engine.addEntity(propLightGreen7)
    propLightGreen7.setParent(_scene)
    propLightGreen7.addComponentOrReplace(gltfShape46)
    const transform388 = new Transform({
      position: new Vector3(42, 0.1253986358642578, 52),
      rotation: new Quaternion(-7.429307451521747e-16, 0, -1.7763568394002505e-15, 1),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen7.addComponentOrReplace(transform388)
    
    const propLightGreen8 = new Entity('propLightGreen8')
    engine.addEntity(propLightGreen8)
    propLightGreen8.setParent(_scene)
    propLightGreen8.addComponentOrReplace(gltfShape46)
    const transform389 = new Transform({
      position: new Vector3(42.25995635986328, 0.1253986358642578, 46.5),
      rotation: new Quaternion(-3.4029519539183954e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen8.addComponentOrReplace(transform389)
    
    const propLightRed7 = new Entity('propLightRed7')
    engine.addEntity(propLightRed7)
    propLightRed7.setParent(_scene)
    propLightRed7.addComponentOrReplace(gltfShape47)
    const transform390 = new Transform({
      position: new Vector3(42, 0.12860393524169922, 53.5051155090332),
      rotation: new Quaternion(-6.309556894426756e-15, -1, 1.1920928244535389e-7, -4.470348358154297e-8),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed7.addComponentOrReplace(transform390)
    
    const propLightRed8 = new Entity('propLightRed8')
    engine.addEntity(propLightRed8)
    propLightRed8.setParent(_scene)
    propLightRed8.addComponentOrReplace(gltfShape47)
    const transform391 = new Transform({
      position: new Vector3(42, 0.12860393524169922, 56.5051155090332),
      rotation: new Quaternion(-6.309556894426756e-15, -1, 1.1920928244535389e-7, -4.470348358154297e-8),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed8.addComponentOrReplace(transform391)
    
    const propLightGreen9 = new Entity('propLightGreen9')
    engine.addEntity(propLightGreen9)
    propLightGreen9.setParent(_scene)
    propLightGreen9.addComponentOrReplace(gltfShape46)
    const transform392 = new Transform({
      position: new Vector3(42, 0.1253986358642578, 55),
      rotation: new Quaternion(-7.429307451521747e-16, 0, -1.7763568394002505e-15, 1),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen9.addComponentOrReplace(transform392)
    
    const propLightGreen10 = new Entity('propLightGreen10')
    engine.addEntity(propLightGreen10)
    propLightGreen10.setParent(_scene)
    propLightGreen10.addComponentOrReplace(gltfShape46)
    const transform393 = new Transform({
      position: new Vector3(42, 0.1253986358642578, 58),
      rotation: new Quaternion(-7.429307451521747e-16, 0, -1.7763568394002505e-15, 1),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen10.addComponentOrReplace(transform393)
    
    const propLightGreen11 = new Entity('propLightGreen11')
    engine.addEntity(propLightGreen11)
    propLightGreen11.setParent(_scene)
    propLightGreen11.addComponentOrReplace(gltfShape46)
    const transform394 = new Transform({
      position: new Vector3(45.33701705932617, 0.1253986358642578, 46.5),
      rotation: new Quaternion(-3.4029519539183954e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen11.addComponentOrReplace(transform394)
    
    const propLightGreen12 = new Entity('propLightGreen12')
    engine.addEntity(propLightGreen12)
    propLightGreen12.setParent(_scene)
    propLightGreen12.addComponentOrReplace(gltfShape46)
    const transform395 = new Transform({
      position: new Vector3(48.23987579345703, 0.1253986358642578, 46.5),
      rotation: new Quaternion(-3.4029519539183954e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen12.addComponentOrReplace(transform395)
    
    const propLightRed9 = new Entity('propLightRed9')
    engine.addEntity(propLightRed9)
    propLightRed9.setParent(_scene)
    propLightRed9.addComponentOrReplace(gltfShape47)
    const transform396 = new Transform({
      position: new Vector3(43.8315315246582, 0.12860393524169922, 46.5051155090332),
      rotation: new Quaternion(-1.3057377953125306e-14, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed9.addComponentOrReplace(transform396)
    
    const propLightRed10 = new Entity('propLightRed10')
    engine.addEntity(propLightRed10)
    propLightRed10.setParent(_scene)
    propLightRed10.addComponentOrReplace(gltfShape47)
    const transform397 = new Transform({
      position: new Vector3(46.80653381347656, 0.12860393524169922, 46.5051155090332),
      rotation: new Quaternion(-1.3057377953125306e-14, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed10.addComponentOrReplace(transform397)
    
    const propLightRed11 = new Entity('propLightRed11')
    engine.addEntity(propLightRed11)
    propLightRed11.setParent(_scene)
    propLightRed11.addComponentOrReplace(gltfShape47)
    const transform398 = new Transform({
      position: new Vector3(49.81728744506836, 0.12860393524169922, 46.5051155090332),
      rotation: new Quaternion(-1.3057377953125306e-14, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed11.addComponentOrReplace(transform398)
    
    const propLightRed12 = new Entity('propLightRed12')
    engine.addEntity(propLightRed12)
    propLightRed12.setParent(_scene)
    propLightRed12.addComponentOrReplace(gltfShape47)
    const transform399 = new Transform({
      position: new Vector3(51.5, 0.12860393524169922, 47.5051155090332),
      rotation: new Quaternion(-6.309556894426756e-15, -1, 1.1920928244535389e-7, -4.470348358154297e-8),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed12.addComponentOrReplace(transform399)
    
    const propLightGreen14 = new Entity('propLightGreen14')
    engine.addEntity(propLightGreen14)
    propLightGreen14.setParent(_scene)
    propLightGreen14.addComponentOrReplace(gltfShape46)
    const transform400 = new Transform({
      position: new Vector3(51.5, 0.1253986358642578, 49),
      rotation: new Quaternion(-7.429307451521747e-16, 0, -1.7763568394002505e-15, 1),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen14.addComponentOrReplace(transform400)
    
    const propLightRed13 = new Entity('propLightRed13')
    engine.addEntity(propLightRed13)
    propLightRed13.setParent(_scene)
    propLightRed13.addComponentOrReplace(gltfShape47)
    const transform401 = new Transform({
      position: new Vector3(51.5, 0.12860393524169922, 50.5051155090332),
      rotation: new Quaternion(-6.309556894426756e-15, -1, 1.1920928244535389e-7, -4.470348358154297e-8),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed13.addComponentOrReplace(transform401)
    
    const propLightRed14 = new Entity('propLightRed14')
    engine.addEntity(propLightRed14)
    propLightRed14.setParent(_scene)
    propLightRed14.addComponentOrReplace(gltfShape47)
    const transform402 = new Transform({
      position: new Vector3(51.5, 0.12860393524169922, 53.5051155090332),
      rotation: new Quaternion(-6.309556894426756e-15, -1, 1.1920928244535389e-7, -4.470348358154297e-8),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed14.addComponentOrReplace(transform402)
    
    const propLightGreen15 = new Entity('propLightGreen15')
    engine.addEntity(propLightGreen15)
    propLightGreen15.setParent(_scene)
    propLightGreen15.addComponentOrReplace(gltfShape46)
    const transform403 = new Transform({
      position: new Vector3(51.5, 0.1253986358642578, 52),
      rotation: new Quaternion(-7.429307451521747e-16, 0, -1.7763568394002505e-15, 1),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen15.addComponentOrReplace(transform403)
    
    const propLightRed15 = new Entity('propLightRed15')
    engine.addEntity(propLightRed15)
    propLightRed15.setParent(_scene)
    propLightRed15.addComponentOrReplace(gltfShape47)
    const transform404 = new Transform({
      position: new Vector3(51.5, 0.12860393524169922, 56.5051155090332),
      rotation: new Quaternion(-6.309556894426756e-15, -1, 1.1920928244535389e-7, -4.470348358154297e-8),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed15.addComponentOrReplace(transform404)
    
    const propLightGreen16 = new Entity('propLightGreen16')
    engine.addEntity(propLightGreen16)
    propLightGreen16.setParent(_scene)
    propLightGreen16.addComponentOrReplace(gltfShape46)
    const transform405 = new Transform({
      position: new Vector3(51.5, 0.1253986358642578, 55),
      rotation: new Quaternion(-7.429307451521747e-16, 0, -1.7763568394002505e-15, 1),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen16.addComponentOrReplace(transform405)
    
    const propLightRed16 = new Entity('propLightRed16')
    engine.addEntity(propLightRed16)
    propLightRed16.setParent(_scene)
    propLightRed16.addComponentOrReplace(gltfShape47)
    const transform406 = new Transform({
      position: new Vector3(51.5, 0.12860393524169922, 59.5051155090332),
      rotation: new Quaternion(-6.309556894426756e-15, -1, 1.1920928244535389e-7, -4.470348358154297e-8),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed16.addComponentOrReplace(transform406)
    
    const propLightGreen17 = new Entity('propLightGreen17')
    engine.addEntity(propLightGreen17)
    propLightGreen17.setParent(_scene)
    propLightGreen17.addComponentOrReplace(gltfShape46)
    const transform407 = new Transform({
      position: new Vector3(51.5, 0.1253986358642578, 58),
      rotation: new Quaternion(-7.429307451521747e-16, 0, -1.7763568394002505e-15, 1),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen17.addComponentOrReplace(transform407)
    
    const propLightRed17 = new Entity('propLightRed17')
    engine.addEntity(propLightRed17)
    propLightRed17.setParent(_scene)
    propLightRed17.addComponentOrReplace(gltfShape47)
    const transform408 = new Transform({
      position: new Vector3(32.5, 0.12860393524169922, 25.005115509033203),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed17.addComponentOrReplace(transform408)
    
    const propLightGreen19 = new Entity('propLightGreen19')
    engine.addEntity(propLightGreen19)
    propLightGreen19.setParent(_scene)
    propLightGreen19.addComponentOrReplace(gltfShape46)
    const transform409 = new Transform({
      position: new Vector3(34, 0.1253986358642578, 25),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen19.addComponentOrReplace(transform409)
    
    const propLightGreen20 = new Entity('propLightGreen20')
    engine.addEntity(propLightGreen20)
    propLightGreen20.setParent(_scene)
    propLightGreen20.addComponentOrReplace(gltfShape46)
    const transform410 = new Transform({
      position: new Vector3(31, 0.1253986358642578, 25),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen20.addComponentOrReplace(transform410)
    
    const propLightRed18 = new Entity('propLightRed18')
    engine.addEntity(propLightRed18)
    propLightRed18.setParent(_scene)
    propLightRed18.addComponentOrReplace(gltfShape47)
    const transform411 = new Transform({
      position: new Vector3(29.5, 0.12860393524169922, 25.005115509033203),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed18.addComponentOrReplace(transform411)
    
    const propLightRed19 = new Entity('propLightRed19')
    engine.addEntity(propLightRed19)
    propLightRed19.setParent(_scene)
    propLightRed19.addComponentOrReplace(gltfShape47)
    const transform412 = new Transform({
      position: new Vector3(26.5, 0.12860393524169922, 25.005115509033203),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed19.addComponentOrReplace(transform412)
    
    const propLightRed20 = new Entity('propLightRed20')
    engine.addEntity(propLightRed20)
    propLightRed20.setParent(_scene)
    propLightRed20.addComponentOrReplace(gltfShape47)
    const transform413 = new Transform({
      position: new Vector3(16.5, 0.12860393524169922, 25.005115509033203),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed20.addComponentOrReplace(transform413)
    
    const propLightGreen21 = new Entity('propLightGreen21')
    engine.addEntity(propLightGreen21)
    propLightGreen21.setParent(_scene)
    propLightGreen21.addComponentOrReplace(gltfShape46)
    const transform414 = new Transform({
      position: new Vector3(28, 0.1253986358642578, 25),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen21.addComponentOrReplace(transform414)
    
    const propLightGreen22 = new Entity('propLightGreen22')
    engine.addEntity(propLightGreen22)
    propLightGreen22.setParent(_scene)
    propLightGreen22.addComponentOrReplace(gltfShape46)
    const transform415 = new Transform({
      position: new Vector3(25, 0.1253986358642578, 25),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen22.addComponentOrReplace(transform415)
    
    const propLightRed21 = new Entity('propLightRed21')
    engine.addEntity(propLightRed21)
    propLightRed21.setParent(_scene)
    propLightRed21.addComponentOrReplace(gltfShape47)
    const transform416 = new Transform({
      position: new Vector3(23.5, 0.12860393524169922, 25.005115509033203),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed21.addComponentOrReplace(transform416)
    
    const propLightGreen23 = new Entity('propLightGreen23')
    engine.addEntity(propLightGreen23)
    propLightGreen23.setParent(_scene)
    propLightGreen23.addComponentOrReplace(gltfShape46)
    const transform417 = new Transform({
      position: new Vector3(18, 0.1253986358642578, 25),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen23.addComponentOrReplace(transform417)
    
    const propLightRed22 = new Entity('propLightRed22')
    engine.addEntity(propLightRed22)
    propLightRed22.setParent(_scene)
    propLightRed22.addComponentOrReplace(gltfShape47)
    const transform418 = new Transform({
      position: new Vector3(13.5, 0.12860393524169922, 25.005115509033203),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed22.addComponentOrReplace(transform418)
    
    const propLightGreen24 = new Entity('propLightGreen24')
    engine.addEntity(propLightGreen24)
    propLightGreen24.setParent(_scene)
    propLightGreen24.addComponentOrReplace(gltfShape46)
    const transform419 = new Transform({
      position: new Vector3(15, 0.1253986358642578, 25),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen24.addComponentOrReplace(transform419)
    
    const propLightGreen25 = new Entity('propLightGreen25')
    engine.addEntity(propLightGreen25)
    propLightGreen25.setParent(_scene)
    propLightGreen25.addComponentOrReplace(gltfShape46)
    const transform420 = new Transform({
      position: new Vector3(45.5, 0.1253986358642578, 25),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen25.addComponentOrReplace(transform420)
    
    const propLightRed23 = new Entity('propLightRed23')
    engine.addEntity(propLightRed23)
    propLightRed23.setParent(_scene)
    propLightRed23.addComponentOrReplace(gltfShape47)
    const transform421 = new Transform({
      position: new Vector3(47, 0.12860393524169922, 25.005115509033203),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed23.addComponentOrReplace(transform421)
    
    const propLightRed24 = new Entity('propLightRed24')
    engine.addEntity(propLightRed24)
    propLightRed24.setParent(_scene)
    propLightRed24.addComponentOrReplace(gltfShape47)
    const transform422 = new Transform({
      position: new Vector3(50, 0.12860393524169922, 25.005115509033203),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed24.addComponentOrReplace(transform422)
    
    const propLightRed25 = new Entity('propLightRed25')
    engine.addEntity(propLightRed25)
    propLightRed25.setParent(_scene)
    propLightRed25.addComponentOrReplace(gltfShape47)
    const transform423 = new Transform({
      position: new Vector3(53, 0.12860393524169922, 25.005115509033203),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8126183748245239, 0.9999999403953552, 0.6139353513717651)
    })
    propLightRed25.addComponentOrReplace(transform423)
    
    const propLightGreen26 = new Entity('propLightGreen26')
    engine.addEntity(propLightGreen26)
    propLightGreen26.setParent(_scene)
    propLightGreen26.addComponentOrReplace(gltfShape46)
    const transform424 = new Transform({
      position: new Vector3(48.5, 0.1253986358642578, 25),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen26.addComponentOrReplace(transform424)
    
    const propLightGreen27 = new Entity('propLightGreen27')
    engine.addEntity(propLightGreen27)
    propLightGreen27.setParent(_scene)
    propLightGreen27.addComponentOrReplace(gltfShape46)
    const transform425 = new Transform({
      position: new Vector3(51.5, 0.1253986358642578, 25),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen27.addComponentOrReplace(transform425)
    
    const propLightGreen28 = new Entity('propLightGreen28')
    engine.addEntity(propLightGreen28)
    propLightGreen28.setParent(_scene)
    propLightGreen28.addComponentOrReplace(gltfShape46)
    const transform426 = new Transform({
      position: new Vector3(54.5, 0.1253986358642578, 25),
      rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen28.addComponentOrReplace(transform426)
    
    // const buildingCubeRoofV3 = new Entity('buildingCubeRoofV3')
    // engine.addEntity(buildingCubeRoofV3)
    // buildingCubeRoofV3.setParent(_scene)
    // const transform427 = new Transform({
    //   position: new Vector3(71.5, 0, 30),
    //   rotation: new Quaternion(0, 0, 0, 1),
    //   scale: new Vector3(0.019999872893095016, 1.5, 1.4999998807907104)
    // })
    // buildingCubeRoofV3.addComponentOrReplace(transform427)
    // buildingCubeRoofV3.addComponentOrReplace(gltfShape12)
    
    const propLightGreen13 = new Entity('propLightGreen13')
    engine.addEntity(propLightGreen13)
    propLightGreen13.setParent(_scene)
    propLightGreen13.addComponentOrReplace(gltfShape46)
    const transform428 = new Transform({
      position: new Vector3(51.23987579345703, 0.1253986358642578, 46.5),
      rotation: new Quaternion(-3.4029519539183954e-16, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen13.addComponentOrReplace(transform428)
    
    const propLightGreen18 = new Entity('propLightGreen18')
    engine.addEntity(propLightGreen18)
    propLightGreen18.setParent(_scene)
    propLightGreen18.addComponentOrReplace(gltfShape46)
    const transform429 = new Transform({
      position: new Vector3(51.5, 0.1253986358642578, 61),
      rotation: new Quaternion(-7.429307451521747e-16, 0, -1.7763568394002505e-15, 1),
      scale: new Vector3(0.8267171382904053, 1, 0.6095938682556152)
    })
    propLightGreen18.addComponentOrReplace(transform429)
    
    const vehicleSweeperV1 = new Entity('vehicleSweeperV1')
    engine.addEntity(vehicleSweeperV1)
    vehicleSweeperV1.setParent(_scene)
    const gltfShape48 = new GLTFShape("models/Vehicle_Sweeper_v1.glb")
    gltfShape48.withCollisions = true
    gltfShape48.visible = true
    vehicleSweeperV1.addComponentOrReplace(gltfShape48)
    const transform430 = new Transform({
      position: new Vector3(15.5, 0, 55.692630767822266),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.4688873291015625, 1.1713098287582397, 1.4989776611328125)
    })
    vehicleSweeperV1.addComponentOrReplace(transform430)
    
    const vehicleSweeperV12 = new Entity('vehicleSweeperV12')
    engine.addEntity(vehicleSweeperV12)
    vehicleSweeperV12.setParent(_scene)
    vehicleSweeperV12.addComponentOrReplace(gltfShape48)
    const transform431 = new Transform({
      position: new Vector3(15.5, 0, 49.692630767822266),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.4688873291015625, 1.1713098287582397, 1.4989776611328125)
    })
    vehicleSweeperV12.addComponentOrReplace(transform431)
    
    // const vehicleTaxiV1 = new Entity('vehicleTaxiV1')
    // engine.addEntity(vehicleTaxiV1)
    // vehicleTaxiV1.setParent(_scene)
    // vehicleTaxiV1.addComponentOrReplace(gltfShape13)
    // const transform432 = new Transform({
    //   position: new Vector3(9, 0, 56.5),
    //   rotation: new Quaternion(0, 0, 0, 1),
    //   scale: new Vector3(1.1198112964630127, 1.1162562370300293, 1.0949456691741943)
    // })
    // vehicleTaxiV1.addComponentOrReplace(transform432)
    
    const vehicleTaxiV12 = new Entity('vehicleTaxiV12')
    engine.addEntity(vehicleTaxiV12)
    vehicleTaxiV12.setParent(_scene)
    vehicleTaxiV12.addComponentOrReplace(gltfShape13)
    const transform433 = new Transform({
      position: new Vector3(12.18309497833252, 0, 50),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1.1198112964630127, 1.1162562370300293, 1.0949456691741943)
    })
    vehicleTaxiV12.addComponentOrReplace(transform433)
    
    // const vehicleTaxiV13 = new Entity('vehicleTaxiV13')
    // engine.addEntity(vehicleTaxiV13)
    // vehicleTaxiV13.setParent(_scene)
    // vehicleTaxiV13.addComponentOrReplace(gltfShape13)
    // const transform434 = new Transform({
    //   position: new Vector3(12.227974891662598, 0, 56.5),
    //   rotation: new Quaternion(0, 0, 0, 1),
    //   scale: new Vector3(1.1198112964630127, 1.1162562370300293, 1.0949456691741943)
    // })
    // vehicleTaxiV13.addComponentOrReplace(transform434)
    
    const channelId = Math.random().toString(16).slice(2)
    const channelBus = new MessageBus()
    const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
    const options = { inventory }
    
    const script1 = new Script1()
    const script2 = new Script2()
    const script3 = new Script3()
    const script4 = new Script4()
    const script5 = new Script5()
    const script6 = new Script6()
    const script7 = new Script7()
    const script8 = new Script8()
    const script9 = new Script9()
    const script10 = new Script10()
    const script11 = new Script11()
    const script12 = new Script12()
    const script13 = new Script13()
    const script14 = new Script14()
    script1.init()
    script2.init()
    script3.init()
    script4.init(options)
    script5.init()
    script6.init()
    script7.init()
    script8.init()
    script9.init()
    script10.init()
    script11.init()
    script12.init(options)
    script13.init(options)
    script14.init()
    script1.spawn(ambientSound, {"sound":"City","active":true,"loop":true}, createChannel(channelId, ambientSound, channelBus))
    script2.spawn(signpostTree, {"text":"Neo Dragon City Parking\n10 MANA / HOUR\n70 MANA / DAY","fontSize":24}, createChannel(channelId, signpostTree, channelBus))
    script3.spawn(signpostTree2, {"text":"Jump on the drone\nLook up to fly up\nMove camera to control","fontSize":15}, createChannel(channelId, signpostTree2, channelBus))
    script4.spawn(faceAccessCard, {"target":"verticalHallwayDoo","onUse":[{"entityName":"verticalHallwayDoo","actionId":"open","values":{}}],"onEquip":[{"entityName":"indicatorArrow","actionId":"deactivate","values":{}},{"entityName":"indicatorArrow2","actionId":"deactivate","values":{}},{"entityName":"indicatorArrow3","actionId":"deactivate","values":{}},{"entityName":"indicatorArrow4","actionId":"deactivate","values":{}},{"entityName":"indicatorArrow5","actionId":"deactivate","values":{}},{"entityName":"indicatorArrow6","actionId":"deactivate","values":{}},{"entityName":"indicatorArrow8","actionId":"deactivate","values":{}}]}, createChannel(channelId, faceAccessCard, channelBus))
    script5.spawn(verticalHallwayDoo, {"onOpen":[{"entityName":"tools","actionId":"print","values":{"message":"Welcome to Dragon Tower. To get a better view, press the green button to go up the elevator.","duration":6,"multiplayer":false}}]}, createChannel(channelId, verticalHallwayDoo, channelBus))
    script6.spawn(verticalPlatform, {"distance":37,"speed":3,"autoStart":false,"onReachEnd":[],"onReachStart":[]}, createChannel(channelId, verticalPlatform, channelBus))
    script7.spawn(greenButton, {"onClick":[{"entityName":"verticalPlatform","actionId":"goToEnd","values":{}}]}, createChannel(channelId, greenButton, channelBus))
    script8.spawn(redButton, {"onClick":[{"entityName":"verticalPlatform","actionId":"goToStart","values":{}}]}, createChannel(channelId, redButton, channelBus))
    script7.spawn(greenButton2, {"onClick":[{"entityName":"verticalPlatform","actionId":"goToStart","values":{}}]}, createChannel(channelId, greenButton2, channelBus))
    script8.spawn(redButton2, {"onClick":[{"entityName":"verticalPlatform","actionId":"goToEnd","values":{}}]}, createChannel(channelId, redButton2, channelBus))
    script9.spawn(triggerArea, {"enabled":true,"onEnter":[{"entityName":"tools","actionId":"print","values":{"message":"Welcome to Neo Dragon City! Have fun exploring the city. \nYou may also take an aerial tour using the quadcopter in the parking lot. It will follow the direction your camera is looking at.","duration":12,"multiplayer":false}},{"entityName":"indicatorArrow","actionId":"activate","values":{}},{"entityName":"indicatorArrow2","actionId":"activate","values":{}},{"entityName":"indicatorArrow3","actionId":"activate","values":{}},{"entityName":"indicatorArrow4","actionId":"activate","values":{}},{"entityName":"indicatorArrow5","actionId":"activate","values":{}},{"entityName":"indicatorArrow6","actionId":"activate","values":{}},{"entityName":"indicatorArrow8","actionId":"activate","values":{}}]}, createChannel(channelId, triggerArea, channelBus))
    script10.spawn(tools, {}, createChannel(channelId, tools, channelBus))
    script11.spawn(indicatorArrow, {"active":false}, createChannel(channelId, indicatorArrow, channelBus))
    script11.spawn(indicatorArrow2, {"active":false}, createChannel(channelId, indicatorArrow2, channelBus))
    script11.spawn(indicatorArrow3, {"active":false}, createChannel(channelId, indicatorArrow3, channelBus))
    script11.spawn(indicatorArrow4, {"active":false}, createChannel(channelId, indicatorArrow4, channelBus))
    script11.spawn(indicatorArrow5, {"active":false}, createChannel(channelId, indicatorArrow5, channelBus))
    script11.spawn(indicatorArrow6, {"active":false}, createChannel(channelId, indicatorArrow6, channelBus))
    script11.spawn(indicatorArrow7, {"active":false}, createChannel(channelId, indicatorArrow7, channelBus))
    script11.spawn(indicatorArrow8, {"active":false}, createChannel(channelId, indicatorArrow8, channelBus))
    script6.spawn(verticalPlatform2, {"distance":32,"speed":3,"autoStart":false,"onReachEnd":[],"onReachStart":[]}, createChannel(channelId, verticalPlatform2, channelBus))
    script6.spawn(verticalPlatform3, {"distance":32,"speed":3,"autoStart":false,"onReachEnd":[],"onReachStart":[]}, createChannel(channelId, verticalPlatform3, channelBus))
    script7.spawn(greenButton3, {"onClick":[{"entityName":"verticalPlatform2","actionId":"goToEnd","values":{}}]}, createChannel(channelId, greenButton3, channelBus))
    script8.spawn(redButton3, {"onClick":[{"entityName":"verticalPlatform2","actionId":"goToStart","values":{}}]}, createChannel(channelId, redButton3, channelBus))
    script7.spawn(greenButton4, {"onClick":[{"entityName":"verticalPlatform3","actionId":"goToEnd","values":{}}]}, createChannel(channelId, greenButton4, channelBus))
    script8.spawn(redButton4, {"onClick":[{"entityName":"verticalPlatform3","actionId":"goToStart","values":{}}]}, createChannel(channelId, redButton4, channelBus))
    script7.spawn(greenButton5, {"onClick":[{"entityName":"verticalPlatform2","actionId":"goToStart","values":{}}]}, createChannel(channelId, greenButton5, channelBus))
    script8.spawn(redButton5, {"onClick":[{"entityName":"verticalPlatform2","actionId":"goToEnd","values":{}}]}, createChannel(channelId, redButton5, channelBus))
    script7.spawn(greenButton6, {"onClick":[{"entityName":"verticalPlatform3","actionId":"goToStart","values":{}}]}, createChannel(channelId, greenButton6, channelBus))
    script8.spawn(redButton6, {"onClick":[{"entityName":"verticalPlatform3","actionId":"goToEnd","values":{}}]}, createChannel(channelId, redButton6, channelBus))
    script6.spawn(verticalPlatform4, {"distance":18,"speed":3,"autoStart":false,"onReachEnd":[],"onReachStart":[]}, createChannel(channelId, verticalPlatform4, channelBus))
    script7.spawn(greenButton7, {"onClick":[{"entityName":"verticalPlatform4","actionId":"goToEnd","values":{}}]}, createChannel(channelId, greenButton7, channelBus))
    script8.spawn(redButton7, {"onClick":[{"entityName":"verticalPlatform4","actionId":"goToEnd","values":{}}]}, createChannel(channelId, redButton7, channelBus))
    script7.spawn(greenButton8, {"onClick":[{"entityName":"verticalPlatform4","actionId":"goToStart","values":{}}]}, createChannel(channelId, greenButton8, channelBus))
    script8.spawn(redButton8, {"onClick":[{"entityName":"verticalPlatform4","actionId":"goToStart","values":{}}]}, createChannel(channelId, redButton8, channelBus))
    script12.spawn(redAccessCard, {"target":"verticalHallwayDoo2","onUse":[{"entityName":"verticalHallwayDoo2","actionId":"open","values":{}}]}, createChannel(channelId, redAccessCard, channelBus))
    script13.spawn(yellowAccessCard, {"target":"verticalHallwayDoo3","onUse":[{"entityName":"verticalHallwayDoo3","actionId":"open","values":{}}]}, createChannel(channelId, yellowAccessCard, channelBus))
    script5.spawn(verticalHallwayDoo2, {"onOpen":[]}, createChannel(channelId, verticalHallwayDoo2, channelBus))
    script5.spawn(verticalHallwayDoo3, {"onOpen":[]}, createChannel(channelId, verticalHallwayDoo3, channelBus))
    script14.spawn(signpostTree3, {"text":"Green: Go Up\nRed: Call Elevator","fontSize":30}, createChannel(channelId, signpostTree3, channelBus))
    script14.spawn(signpostTree4, {"text":"Green: Go Up\nRed: Call Elevator","fontSize":30}, createChannel(channelId, signpostTree4, channelBus))
    script14.spawn(signpostTree5, {"text":"Green: Go up Neo Dragon Tower\nRed: Call Elevator","fontSize":22}, createChannel(channelId, signpostTree5, channelBus))
}