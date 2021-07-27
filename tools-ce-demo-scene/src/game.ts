import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../2e1c4446-c99a-4698-9e13-819d232ca849/src/item"
import Script2 from "../683aa047-8043-40f8-8d31-ceb7ab1b138c/src/item"
import Script3 from "../68986c60-c95c-41ab-adf0-d0e02f5b5440/src/item"
import Script4 from "../56985185-7512-4359-9d0e-1142dc6b65a6/src/item"
import Script5 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"
import Script6 from "../846479b0-75d3-450d-bbd6-7e6b3355a7a2/src/item"
import Script7 from "../6ff6b3aa-083a-4e8c-bdd8-b4d64e1f2db1/src/item"
import Script8 from "../a186416e-81f1-4d0a-b0cd-a4b0077d264d/src/item"
import Script9 from "../a491051c-8092-4245-ae85-d274e90d8443/src/item"
import Script10 from "../1ab2733f-1782-4521-9eda-6aa8ad684277/src/item"
import Script11 from "../4c9fa249-97ec-4f32-8fb8-b96f69ba8892/src/item"
import Script12 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const blackButton = new Entity('blackButton')
engine.addEntity(blackButton)
blackButton.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(2.2462124824523926, 0.7125768661499023, 3.2002108097076416),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000009536743164, 1.0000009536743164)
})
blackButton.addComponentOrReplace(transform3)

const goldenPigStatue = new Entity('goldenPigStatue')
engine.addEntity(goldenPigStatue)
goldenPigStatue.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(11.5, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
goldenPigStatue.addComponentOrReplace(transform4)
const gltfShape2 = new GLTFShape("models/ChineseStatuePig_02/ChineseStatuePig_02.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
goldenPigStatue.addComponentOrReplace(gltfShape2)

const ballDroid = new Entity('ballDroid')
engine.addEntity(ballDroid)
ballDroid.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(10, 0, 9.25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ballDroid.addComponentOrReplace(transform5)
const gltfShape3 = new GLTFShape("models/Droid_01/Droid_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
ballDroid.addComponentOrReplace(gltfShape3)

const cat = new Entity('cat')
engine.addEntity(cat)
cat.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(6.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
cat.addComponentOrReplace(transform6)
const gltfShape4 = new GLTFShape("models/HWN20_Cat.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
cat.addComponentOrReplace(gltfShape4)

const toolboxCE = new Entity('toolboxCE')
engine.addEntity(toolboxCE)
toolboxCE.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(7.5, 0, 1),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toolboxCE.addComponentOrReplace(transform7)

const blackButton3 = new Entity('blackButton3')
engine.addEntity(blackButton3)
blackButton3.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(12.563014030456543, 2.015226364135742, 3.200209856033325),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000014305114746, 1.0000014305114746)
})
blackButton3.addComponentOrReplace(transform8)

const blackButton4 = new Entity('blackButton4')
engine.addEntity(blackButton4)
blackButton4.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(11.19279670715332, 2.015225887298584, 3.200209856033325),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000011920928955, 1.0000011920928955)
})
blackButton4.addComponentOrReplace(transform9)

const blackButton5 = new Entity('blackButton5')
engine.addEntity(blackButton5)
blackButton5.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(13.890054702758789, 1.9924770593643188, 3.200209617614746),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000028610229492, 1.0000028610229492)
})
blackButton5.addComponentOrReplace(transform10)

const blackButton2 = new Entity('blackButton2')
engine.addEntity(blackButton2)
blackButton2.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(12.581230163574219, 0.7380261421203613, 3.195707321166992),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000016689300537, 1.0000016689300537)
})
blackButton2.addComponentOrReplace(transform11)

const indicatorArrow = new Entity('indicatorArrow')
engine.addEntity(indicatorArrow)
indicatorArrow.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(2.0295658111572266, 0, 9.044768333435059),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
indicatorArrow.addComponentOrReplace(transform12)

const indicatorArrowBlue = new Entity('indicatorArrowBlue')
engine.addEntity(indicatorArrowBlue)
indicatorArrowBlue.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(2, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
indicatorArrowBlue.addComponentOrReplace(transform13)

const blackButton6 = new Entity('blackButton6')
engine.addEntity(blackButton6)
blackButton6.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(11.17895221710205, 0.7592806816101074, 3.200209856033325),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000011920928955, 1.0000011920928955)
})
blackButton6.addComponentOrReplace(transform14)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(11.104129791259766, 1.3282489776611328, 3.086871385574341),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.8582945466041565, 0.8846678137779236, 0.9954363107681274)
})
plainText.addComponentOrReplace(transform15)

const plainText2 = new Entity('plainText2')
engine.addEntity(plainText2)
plainText2.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(12.55350112915039, 1.3282489776611328, 3.077935218811035),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.8582945466041565, 0.8846678137779236, 0.9954362511634827)
})
plainText2.addComponentOrReplace(transform16)

const plainText3 = new Entity('plainText3')
engine.addEntity(plainText3)
plainText3.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(12.521440505981445, 2.543801784515381, 3.0936970710754395),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.8582945466041565, 0.8846678137779236, 0.9954361915588379)
})
plainText3.addComponentOrReplace(transform17)

const plainText4 = new Entity('plainText4')
engine.addEntity(plainText4)
plainText4.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(10, 0.17374572157859802, 7.906594276428223),
  rotation: new Quaternion(-5.199257557819692e-8, -0.7730104923248291, -0.6343932151794434, -2.8796888429383216e-8),
  scale: new Vector3(1, 1, 0.9999997615814209)
})
plainText4.addComponentOrReplace(transform18)

const plainText5 = new Entity('plainText5')
engine.addEntity(plainText5)
plainText5.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(13.905089378356934, 2.543801784515381, 3.0936970710754395),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.8582945466041565, 0.8846678137779236, 0.9954361319541931)
})
plainText5.addComponentOrReplace(transform19)

const plainText6 = new Entity('plainText6')
engine.addEntity(plainText6)
plainText6.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(2.254732131958008, 1.3326678276062012, 3.093698501586914),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.8582945466041565, 0.8846678137779236, 0.9954360127449036)
})
plainText6.addComponentOrReplace(transform20)

const clickArea = new Entity('clickArea')
engine.addEntity(clickArea)
clickArea.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(9.981343269348145, 0, 9.201059341430664),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
clickArea.addComponentOrReplace(transform21)

const plainText7 = new Entity('plainText7')
engine.addEntity(plainText7)
plainText7.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(11.104129791259766, 2.543801784515381, 3.0936975479125977),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.8582945466041565, 0.8846678137779236, 0.9954361319541931)
})
plainText7.addComponentOrReplace(transform22)

const plainText8 = new Entity('plainText8')
engine.addEntity(plainText8)
plainText8.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(13.801190376281738, 1.3282489776611328, 3.0868711471557617),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.8582945466041565, 0.8846678137779236, 0.9954362511634827)
})
plainText8.addComponentOrReplace(transform23)

const blackButton7 = new Entity('blackButton7')
engine.addEntity(blackButton7)
blackButton7.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(13.890054702758789, 0.7592810392379761, 3.200209617614746),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000011920928955, 1.0000011920928955)
})
blackButton7.addComponentOrReplace(transform24)

const blackButton8 = new Entity('blackButton8')
engine.addEntity(blackButton8)
blackButton8.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(1, 0.7592811584472656, 3.2002100944519043),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000007152557373, 1.0000007152557373)
})
blackButton8.addComponentOrReplace(transform25)

const plainText9 = new Entity('plainText9')
engine.addEntity(plainText9)
plainText9.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(14.891375541687012, 1.3282489776611328, 3.0868711471557617),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.8582945466041565, 0.8846678137779236, 0.9954360127449036)
})
plainText9.addComponentOrReplace(transform26)

const plainText10 = new Entity('plainText10')
engine.addEntity(plainText10)
plainText10.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(9.902423858642578, 1.3282489776611328, 3.08687162399292),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.8582945466041565, 0.8846678137779236, 0.9954363107681274)
})
plainText10.addComponentOrReplace(transform27)

const blackButton9 = new Entity('blackButton9')
engine.addEntity(blackButton9)
blackButton9.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(9.955142974853516, 0.7592805624008179, 3.2002100944519043),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000009536743164, 1.0000009536743164)
})
blackButton9.addComponentOrReplace(transform28)

const floorGlassSmall = new Entity('floorGlassSmall')
engine.addEntity(floorGlassSmall)
floorGlassSmall.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(16, 0, 3.1798958778381348),
  rotation: new Quaternion(0.7071068286895752, 8.943844183464207e-16, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(4.086261749267578, 1.0000035762786865, 2.26238751411438)
})
floorGlassSmall.addComponentOrReplace(transform29)
const gltfShape5 = new GLTFShape("models/GlassFloor_Small.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
floorGlassSmall.addComponentOrReplace(gltfShape5)

const floorGlassSmall2 = new Entity('floorGlassSmall2')
engine.addEntity(floorGlassSmall2)
floorGlassSmall2.setParent(_scene)
floorGlassSmall2.addComponentOrReplace(gltfShape5)
const transform30 = new Transform({
  position: new Vector3(4.1846442222595215, 0, 3.167353391647339),
  rotation: new Quaternion(0.7071068286895752, 8.943844183464207e-16, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.04313063621521, 1.0000053644180298, 1.8471590280532837)
})
floorGlassSmall2.addComponentOrReplace(transform30)

const blackButton10 = new Entity('blackButton10')
engine.addEntity(blackButton10)
blackButton10.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(14.890055656433105, 0.7592811584472656, 3.200209617614746),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000016689300537, 1.0000016689300537)
})
blackButton10.addComponentOrReplace(transform31)

const plainText11 = new Entity('plainText11')
engine.addEntity(plainText11)
plainText11.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(0.9671135544776917, 1.3805824518203735, 3.08687162399292),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.7859128713607788, 0.8171976208686829, 0.9924322366714478)
})
plainText11.addComponentOrReplace(transform32)

const clickArea2 = new Entity('clickArea2')
engine.addEntity(clickArea2)
clickArea2.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(2, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
clickArea2.addComponentOrReplace(transform33)

const floorGlassSmall3 = new Entity('floorGlassSmall3')
engine.addEntity(floorGlassSmall3)
floorGlassSmall3.setParent(_scene)
floorGlassSmall3.addComponentOrReplace(gltfShape5)
const transform34 = new Transform({
  position: new Vector3(16, 0, 0),
  rotation: new Quaternion(0.7071068286895752, 8.943844183464207e-16, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.7998995780944824, 1.0000038146972656, 0.5558678507804871)
})
floorGlassSmall3.addComponentOrReplace(transform34)

const plainText12 = new Entity('plainText12')
engine.addEntity(plainText12)
plainText12.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(12, 3.0530717372894287, 3.0936970710754395),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.9999997615814209, 0.9999998807907104, 0.999999463558197)
})
plainText12.addComponentOrReplace(transform35)

const plainText13 = new Entity('plainText13')
engine.addEntity(plainText13)
plainText13.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(12, 3.3811464309692383, 3.0936970710754395),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(1.4999996423721313, 1.4809707403182983, 1.0190296173095703)
})
plainText13.addComponentOrReplace(transform36)

const floorLightDisc = new Entity('floorLightDisc')
engine.addEntity(floorLightDisc)
floorLightDisc.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(14, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.2514530420303345, 1.096909761428833, 1.2092292308807373)
})
floorLightDisc.addComponentOrReplace(transform37)
const gltfShape6 = new GLTFShape("models/Light_04/Light_04.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
floorLightDisc.addComponentOrReplace(gltfShape6)

const floorGlassSmall4 = new Entity('floorGlassSmall4')
engine.addEntity(floorGlassSmall4)
floorGlassSmall4.setParent(_scene)
floorGlassSmall4.addComponentOrReplace(gltfShape5)
const transform38 = new Transform({
  position: new Vector3(14.5, 4.877594947814941, 7),
  rotation: new Quaternion(1, -1.3623141116507844e-15, -1.1920928955078125e-7, 5.960463766996327e-8),
  scale: new Vector3(2.128420829772949, 1.0000039339065552, 2.5409066677093506)
})
floorGlassSmall4.addComponentOrReplace(transform38)

const clickArea3 = new Entity('clickArea3')
engine.addEntity(clickArea3)
clickArea3.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(14, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 0.3531234562397003, 1)
})
clickArea3.addComponentOrReplace(transform39)

const clickArea4 = new Entity('clickArea4')
engine.addEntity(clickArea4)
clickArea4.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(14, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 0.4168184995651245, 1)
})
clickArea4.addComponentOrReplace(transform40)

const invisibleWall = new Entity('invisibleWall')
engine.addEntity(invisibleWall)
invisibleWall.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(11.5, 4.877594947814941, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
invisibleWall.addComponentOrReplace(transform41)

const plainText14 = new Entity('plainText14')
engine.addEntity(plainText14)
plainText14.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(9.902423858642578, 2.543801784515381, 3.0936975479125977),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.8582945466041565, 0.8846678137779236, 0.9954361319541931)
})
plainText14.addComponentOrReplace(transform42)

const blackButton11 = new Entity('blackButton11')
engine.addEntity(blackButton11)
blackButton11.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(9.968987464904785, 2.015225887298584, 3.200209856033325),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000009536743164, 1.0000009536743164)
})
blackButton11.addComponentOrReplace(transform43)

const blackButton12 = new Entity('blackButton12')
engine.addEntity(blackButton12)
blackButton12.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(2.2462124824523926, 2.2592811584472656, 3.157799005508423),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000030994415283, 1.0000030994415283)
})
blackButton12.addComponentOrReplace(transform44)

const floorGlassSmall5 = new Entity('floorGlassSmall5')
engine.addEntity(floorGlassSmall5)
floorGlassSmall5.setParent(_scene)
floorGlassSmall5.addComponentOrReplace(gltfShape5)
const transform45 = new Transform({
  position: new Vector3(12, 0, 15.91653060913086),
  rotation: new Quaternion(0.7071068286895752, 8.943844183464207e-16, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.361626386642456, 1.0000056028366089, 3.65680193901062)
})
floorGlassSmall5.addComponentOrReplace(transform45)

const zebraCrossing = new Entity('zebraCrossing')
engine.addEntity(zebraCrossing)
zebraCrossing.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(11.958318710327148, 7, 16),
  rotation: new Quaternion(-0.7071068286895752, 2.4085271740892887e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.4524703323841095, 1.0000046491622925, 0.07333078235387802)
})
zebraCrossing.addComponentOrReplace(transform46)
const gltfShape7 = new GLTFShape("models/Zebra_Crossing.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
zebraCrossing.addComponentOrReplace(gltfShape7)

const pumpkin = new Entity('pumpkin')
engine.addEntity(pumpkin)
pumpkin.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(11.21001148223877, 0, 13.659830093383789),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1.5)
})
pumpkin.addComponentOrReplace(transform47)
const gltfShape8 = new GLTFShape("models/HWN20_Pumpkin_02.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
pumpkin.addComponentOrReplace(gltfShape8)

const orangeGhost = new Entity('orangeGhost')
engine.addEntity(orangeGhost)
orangeGhost.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(6.300431728363037, 1.1440238952636719, 15.79734992980957),
  rotation: new Quaternion(-5.4264479669159475e-15, 0.9951847195625305, -1.1863525628541538e-7, 0.09801716357469559),
  scale: new Vector3(0.5190301537513733, 0.5, 0.9809712171554565)
})
orangeGhost.addComponentOrReplace(transform48)
const gltfShape9 = new GLTFShape("models/HWN20_YellowGhost.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
orangeGhost.addComponentOrReplace(gltfShape9)

const zebraCrossing2 = new Entity('zebraCrossing2')
engine.addEntity(zebraCrossing2)
zebraCrossing2.setParent(_scene)
zebraCrossing2.addComponentOrReplace(gltfShape7)
const transform49 = new Transform({
  position: new Vector3(11.958318710327148, 1.6440238952636719, 16),
  rotation: new Quaternion(-0.7071068286895752, 2.4085271740892887e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.4524703323841095, 1.0000051259994507, 0.07333081215620041)
})
zebraCrossing2.addComponentOrReplace(transform49)

const orangeGhost2 = new Entity('orangeGhost2')
engine.addEntity(orangeGhost2)
orangeGhost2.setParent(_scene)
orangeGhost2.addComponentOrReplace(gltfShape9)
const transform50 = new Transform({
  position: new Vector3(7.282924175262451, 1.1440238952636719, 15.79734992980957),
  rotation: new Quaternion(-5.4264479669159475e-15, 0.9951847195625305, -1.1863525628541538e-7, 0.09801716357469559),
  scale: new Vector3(0.5190301537513733, 0.5, 0.9809711575508118)
})
orangeGhost2.addComponentOrReplace(transform50)

const orangeGhost3 = new Entity('orangeGhost3')
engine.addEntity(orangeGhost3)
orangeGhost3.setParent(_scene)
orangeGhost3.addComponentOrReplace(gltfShape9)
const transform51 = new Transform({
  position: new Vector3(8.32973575592041, 1.1440238952636719, 15.79734992980957),
  rotation: new Quaternion(-5.4264479669159475e-15, 0.9951847195625305, -1.1863525628541538e-7, 0.09801716357469559),
  scale: new Vector3(0.5190301537513733, 0.5, 0.9809703826904297)
})
orangeGhost3.addComponentOrReplace(transform51)

const blackButton13 = new Entity('blackButton13')
engine.addEntity(blackButton13)
blackButton13.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(12.375951766967773, 2.0350706577301025, 15.976975440979004),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000052452087402, 1.0000052452087402)
})
blackButton13.addComponentOrReplace(transform52)

const blackButton14 = new Entity('blackButton14')
engine.addEntity(blackButton14)
blackButton14.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(14.138422966003418, 2.0350706577301025, 15.976975440979004),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000061988830566, 1.0000061988830566)
})
blackButton14.addComponentOrReplace(transform53)

const plainText15 = new Entity('plainText15')
engine.addEntity(plainText15)
plainText15.setParent(_scene)
const transform54 = new Transform({
  position: new Vector3(6.142723560333252, 0.7198400497436523, 15.923789978027344),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.9047232270240784, 0.9090286493301392, 0.996399998664856)
})
plainText15.addComponentOrReplace(transform54)

const plainText16 = new Entity('plainText16')
engine.addEntity(plainText16)
plainText16.setParent(_scene)
const transform55 = new Transform({
  position: new Vector3(7.27710485458374, 0.4380319118499756, 15.923789978027344),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.9047232270240784, 0.9090286493301392, 0.996399998664856)
})
plainText16.addComponentOrReplace(transform55)

const plainText17 = new Entity('plainText17')
engine.addEntity(plainText17)
plainText17.setParent(_scene)
const transform56 = new Transform({
  position: new Vector3(8.219511032104492, 0.7198400497436523, 15.923789978027344),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.9047232270240784, 0.9090286493301392, 0.996399998664856)
})
plainText17.addComponentOrReplace(transform56)

const floorGlassSmall6 = new Entity('floorGlassSmall6')
engine.addEntity(floorGlassSmall6)
floorGlassSmall6.setParent(_scene)
floorGlassSmall6.addComponentOrReplace(gltfShape5)
const transform57 = new Transform({
  position: new Vector3(14.81912899017334, 1.704249382019043, 15.947981834411621),
  rotation: new Quaternion(0.7071068286895752, 8.943844183464207e-16, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.4178905487060547, 1.000009536743164, 0.8873021602630615)
})
floorGlassSmall6.addComponentOrReplace(transform57)

const plainText18 = new Entity('plainText18')
engine.addEntity(plainText18)
plainText18.setParent(_scene)
const transform58 = new Transform({
  position: new Vector3(12.407916069030762, 2.411182165145874, 15.947981834411621),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.9047232270240784, 0.9090286493301392, 0.996399998664856)
})
plainText18.addComponentOrReplace(transform58)

const plainText19 = new Entity('plainText19')
engine.addEntity(plainText19)
plainText19.setParent(_scene)
const transform59 = new Transform({
  position: new Vector3(13.288178443908691, 2.4031522274017334, 15.959074974060059),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.9047232270240784, 0.9090286493301392, 0.996399998664856)
})
plainText19.addComponentOrReplace(transform59)

const toggleButton = new Entity('toggleButton')
engine.addEntity(toggleButton)
toggleButton.setParent(_scene)
const transform60 = new Transform({
  position: new Vector3(14, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toggleButton.addComponentOrReplace(transform60)

const toggleButton2 = new Entity('toggleButton2')
engine.addEntity(toggleButton2)
toggleButton2.setParent(_scene)
const transform61 = new Transform({
  position: new Vector3(12, 4.877594947814941, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toggleButton2.addComponentOrReplace(transform61)

const orangeGhost4 = new Entity('orangeGhost4')
engine.addEntity(orangeGhost4)
orangeGhost4.setParent(_scene)
orangeGhost4.addComponentOrReplace(gltfShape9)
const transform62 = new Transform({
  position: new Vector3(9.32973575592041, 1.1440238952636719, 15.79734992980957),
  rotation: new Quaternion(-5.4264479669159475e-15, 0.9951847195625305, -1.1863525628541538e-7, 0.09801716357469559),
  scale: new Vector3(0.5190301537513733, 0.5, 0.9809703826904297)
})
orangeGhost4.addComponentOrReplace(transform62)

const plainText20 = new Entity('plainText20')
engine.addEntity(plainText20)
plainText20.setParent(_scene)
const transform63 = new Transform({
  position: new Vector3(9.219511032104492, 0.7198400497436523, 15.923789978027344),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.9047232270240784, 0.9090286493301392, 0.996399998664856)
})
plainText20.addComponentOrReplace(transform63)

const indicatorArrowGree = new Entity('indicatorArrowGree')
engine.addEntity(indicatorArrowGree)
indicatorArrowGree.setParent(_scene)
const transform64 = new Transform({
  position: new Vector3(5.939324378967285, 6.707528591156006, 13.006376266479492),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
indicatorArrowGree.addComponentOrReplace(transform64)

const indicatorArrowGree2 = new Entity('indicatorArrowGree2')
engine.addEntity(indicatorArrowGree2)
indicatorArrowGree2.setParent(_scene)
const transform65 = new Transform({
  position: new Vector3(12.495892524719238, 8, 13.051944732666016),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
indicatorArrowGree2.addComponentOrReplace(transform65)

const indicatorArrowGree3 = new Entity('indicatorArrowGree3')
engine.addEntity(indicatorArrowGree3)
indicatorArrowGree3.setParent(_scene)
const transform66 = new Transform({
  position: new Vector3(3.5, 7, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
indicatorArrowGree3.addComponentOrReplace(transform66)

const indicatorArrowGree4 = new Entity('indicatorArrowGree4')
engine.addEntity(indicatorArrowGree4)
indicatorArrowGree4.setParent(_scene)
const transform67 = new Transform({
  position: new Vector3(8, 8.809629440307617, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
indicatorArrowGree4.addComponentOrReplace(transform67)

const indicatorArrowGree5 = new Entity('indicatorArrowGree5')
engine.addEntity(indicatorArrowGree5)
indicatorArrowGree5.setParent(_scene)
const transform68 = new Transform({
  position: new Vector3(12.5, 10.762823104858398, 4.276784420013428),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
indicatorArrowGree5.addComponentOrReplace(transform68)

const blackButton15 = new Entity('blackButton15')
engine.addEntity(blackButton15)
blackButton15.setParent(_scene)
const transform69 = new Transform({
  position: new Vector3(12.394049644470215, 2.8982198238372803, 15.942230224609375),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000061988830566, 1.0000061988830566)
})
blackButton15.addComponentOrReplace(transform69)

const blackButton16 = new Entity('blackButton16')
engine.addEntity(blackButton16)
blackButton16.setParent(_scene)
const transform70 = new Transform({
  position: new Vector3(13.394049644470215, 2.8982198238372803, 15.942230224609375),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000066757202148, 1.0000066757202148)
})
blackButton16.addComponentOrReplace(transform70)

const plainText21 = new Entity('plainText21')
engine.addEntity(plainText21)
plainText21.setParent(_scene)
const transform71 = new Transform({
  position: new Vector3(13.343432426452637, 3.2743313312530518, 15.96837043762207),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.9047232270240784, 0.9090286493301392, 0.996399998664856)
})
plainText21.addComponentOrReplace(transform71)

const plainText22 = new Entity('plainText22')
engine.addEntity(plainText22)
plainText22.setParent(_scene)
const transform72 = new Transform({
  position: new Vector3(12.426012992858887, 3.2743313312530518, 15.96837043762207),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.9047232270240784, 0.9090286493301392, 0.996399998664856)
})
plainText22.addComponentOrReplace(transform72)

const indicatorArrow2 = new Entity('indicatorArrow2')
engine.addEntity(indicatorArrow2)
indicatorArrow2.setParent(_scene)
const transform73 = new Transform({
  position: new Vector3(12, 3.944180965423584, 15.962987899780273),
  rotation: new Quaternion(0, 0, -0.6343932747840881, 0.7730104327201843),
  scale: new Vector3(0.9999999403953552, 0.9999999403953552, 1)
})
indicatorArrow2.addComponentOrReplace(transform73)

const indicatorArrow3 = new Entity('indicatorArrow3')
engine.addEntity(indicatorArrow3)
indicatorArrow3.setParent(_scene)
const transform74 = new Transform({
  position: new Vector3(12, 6.944180965423584, 15.962987899780273),
  rotation: new Quaternion(0, 0, -0.6343932747840881, 0.7730104327201843),
  scale: new Vector3(0.9999999403953552, 0.9999999403953552, 1)
})
indicatorArrow3.addComponentOrReplace(transform74)

const clickArea5 = new Entity('clickArea5')
engine.addEntity(clickArea5)
clickArea5.setParent(_scene)
const transform75 = new Transform({
  position: new Vector3(11.281026840209961, 0, 13.621977806091309),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.1337506771087646, 1, 1.194179892539978)
})
clickArea5.addComponentOrReplace(transform75)

const plainText23 = new Entity('plainText23')
engine.addEntity(plainText23)
plainText23.setParent(_scene)
const transform76 = new Transform({
  position: new Vector3(12.833992958068848, 0.1737457513809204, 12.585740089416504),
  rotation: new Quaternion(-5.199257557819692e-8, -0.7730104923248291, -0.6343932151794434, -2.8796888429383216e-8),
  scale: new Vector3(1, 1, 0.9999999403953552)
})
plainText23.addComponentOrReplace(transform76)

const plainText24 = new Entity('plainText24')
engine.addEntity(plainText24)
plainText24.setParent(_scene)
const transform77 = new Transform({
  position: new Vector3(7.194736003875732, 0.17374563217163086, 11),
  rotation: new Quaternion(-5.199257557819692e-8, -0.7730104923248291, -0.6343932151794434, -2.8796888429383216e-8),
  scale: new Vector3(1, 1, 0.9999999403953552)
})
plainText24.addComponentOrReplace(transform77)

const triggerArea5 = new Entity('triggerArea5')
engine.addEntity(triggerArea5)
triggerArea5.setParent(_scene)
const transform78 = new Transform({
  position: new Vector3(8.499896049499512, 0, 9.787088394165039),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.182149648666382, 1, 1.3999241590499878)
})
triggerArea5.addComponentOrReplace(transform78)

const ringBlueLight = new Entity('ringBlueLight')
engine.addEntity(ringBlueLight)
ringBlueLight.setParent(_scene)
const transform79 = new Transform({
  position: new Vector3(5.967105388641357, 8.19829273223877, 12.970402717590332),
  rotation: new Quaternion(0, 0, 0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.9568222761154175, 1.137558937072754, 2.051353693008423)
})
ringBlueLight.addComponentOrReplace(transform79)
const gltfShape10 = new GLTFShape("models/Ring_Blue_Light.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
ringBlueLight.addComponentOrReplace(gltfShape10)

const clickArea6 = new Entity('clickArea6')
engine.addEntity(clickArea6)
clickArea6.setParent(_scene)
const transform80 = new Transform({
  position: new Vector3(2, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
clickArea6.addComponentOrReplace(transform80)

const floorLightDisc2 = new Entity('floorLightDisc2')
engine.addEntity(floorLightDisc2)
floorLightDisc2.setParent(_scene)
floorLightDisc2.addComponentOrReplace(gltfShape6)
const transform81 = new Transform({
  position: new Vector3(8.765296936035156, 4.877594947814941, 10.430977821350098),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0812221765518188, 1, 1.6141952276229858)
})
floorLightDisc2.addComponentOrReplace(transform81)

const blackButton18 = new Entity('blackButton18')
engine.addEntity(blackButton18)
blackButton18.setParent(_scene)
const transform82 = new Transform({
  position: new Vector3(1, 2.2592811584472656, 3.157799005508423),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000033378601074, 1.0000033378601074)
})
blackButton18.addComponentOrReplace(transform82)

const plainText25 = new Entity('plainText25')
engine.addEntity(plainText25)
plainText25.setParent(_scene)
const transform83 = new Transform({
  position: new Vector3(0.9648370146751404, 2.665706157684326, 3.08687162399292),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.7859128713607788, 0.8171976208686829, 0.9924325346946716)
})
plainText25.addComponentOrReplace(transform83)

const plainText26 = new Entity('plainText26')
engine.addEntity(plainText26)
plainText26.setParent(_scene)
const transform84 = new Transform({
  position: new Vector3(2.254732131958008, 2.6528244018554688, 3.093698501586914),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.8582945466041565, 0.8846678137779236, 0.9954360127449036)
})
plainText26.addComponentOrReplace(transform84)

const blackButton19 = new Entity('blackButton19')
engine.addEntity(blackButton19)
blackButton19.setParent(_scene)
const transform85 = new Transform({
  position: new Vector3(3.501945972442627, 2.2592811584472656, 3.157799005508423),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.8905425071716309, 1.0000040531158447, 0.8753108978271484)
})
blackButton19.addComponentOrReplace(transform85)

const plainText27 = new Entity('plainText27')
engine.addEntity(plainText27)
plainText27.setParent(_scene)
const transform86 = new Transform({
  position: new Vector3(8.367696762084961, 2.543801784515381, 3.0936975479125977),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.8582945466041565, 0.8846678137779236, 0.9954361319541931)
})
plainText27.addComponentOrReplace(transform86)

const blackButton20 = new Entity('blackButton20')
engine.addEntity(blackButton20)
blackButton20.setParent(_scene)
const transform87 = new Transform({
  position: new Vector3(8.51384449005127, 2.015225887298584, 3.200209856033325),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000009536743164, 1.0000009536743164)
})
blackButton20.addComponentOrReplace(transform87)

const plainText28 = new Entity('plainText28')
engine.addEntity(plainText28)
plainText28.setParent(_scene)
const transform88 = new Transform({
  position: new Vector3(3.4790291786193848, 2.892139434814453, 3.093698501586914),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.8582945466041565, 0.8846678137779236, 0.9954360127449036)
})
plainText28.addComponentOrReplace(transform88)

const plainText29 = new Entity('plainText29')
engine.addEntity(plainText29)
plainText29.setParent(_scene)
const transform89 = new Transform({
  position: new Vector3(10.701600074768066, 5.866370677947998, 11.660346031188965),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.8582945466041565, 0.8846678137779236, 0.9954360127449036)
})
plainText29.addComponentOrReplace(transform89)

const plainText30 = new Entity('plainText30')
engine.addEntity(plainText30)
plainText30.setParent(_scene)
const transform90 = new Transform({
  position: new Vector3(8.337869644165039, 5.866370677947998, 11.664011001586914),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.8582945466041565, 0.8846678137779236, 0.9954360127449036)
})
plainText30.addComponentOrReplace(transform90)

const blackButton22 = new Entity('blackButton22')
engine.addEntity(blackButton22)
blackButton22.setParent(_scene)
const transform91 = new Transform({
  position: new Vector3(8.329351425170898, 5.472827434539795, 11.728111267089844),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000064373016357, 1.0000064373016357)
})
blackButton22.addComponentOrReplace(transform91)

const blackButton21 = new Entity('blackButton21')
engine.addEntity(blackButton21)
blackButton21.setParent(_scene)
const transform92 = new Transform({
  position: new Vector3(10.627126693725586, 5.472827434539795, 11.724446296691895),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000057220458984, 1.0000057220458984)
})
blackButton21.addComponentOrReplace(transform92)

const bazaarTent = new Entity('bazaarTent')
engine.addEntity(bazaarTent)
bazaarTent.setParent(_scene)
const transform93 = new Transform({
  position: new Vector3(8.763063430786133, 4.756792068481445, 8.132219314575195),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.5797351598739624, 0.012845641002058983, 1.2384437322616577)
})
bazaarTent.addComponentOrReplace(transform93)
const gltfShape11 = new GLTFShape("models/Tent_02/Tent_02.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
bazaarTent.addComponentOrReplace(gltfShape11)

const plainText31 = new Entity('plainText31')
engine.addEntity(plainText31)
plainText31.setParent(_scene)
const transform94 = new Transform({
  position: new Vector3(8.367696762084961, 1.3688421249389648, 3.0936975479125977),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.8582945466041565, 0.8846678137779236, 0.9954361319541931)
})
plainText31.addComponentOrReplace(transform94)

const blackButton23 = new Entity('blackButton23')
engine.addEntity(blackButton23)
blackButton23.setParent(_scene)
const transform95 = new Transform({
  position: new Vector3(8.51384449005127, 0.840266227722168, 3.200209856033325),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000014305114746, 1.0000014305114746)
})
blackButton23.addComponentOrReplace(transform95)

const ringBlueLight2 = new Entity('ringBlueLight2')
engine.addEntity(ringBlueLight2)
ringBlueLight2.setParent(_scene)
ringBlueLight2.addComponentOrReplace(gltfShape10)
const transform96 = new Transform({
  position: new Vector3(3.696784019470215, 8.19829273223877, 8.5),
  rotation: new Quaternion(-0.5000000596046448, -0.5, 0.5000000596046448, 0.4999999403953552),
  scale: new Vector3(1.956823468208313, 1.1375596523284912, 2.051353693008423)
})
ringBlueLight2.addComponentOrReplace(transform96)

const ringBlueLight3 = new Entity('ringBlueLight3')
engine.addEntity(ringBlueLight3)
ringBlueLight3.setParent(_scene)
ringBlueLight3.addComponentOrReplace(gltfShape10)
const transform97 = new Transform({
  position: new Vector3(8, 10.198291778564453, 5),
  rotation: new Quaternion(0, 0, 0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.9568251371383667, 1.1375603675842285, 2.051353693008423)
})
ringBlueLight3.addComponentOrReplace(transform97)

const ringBlueLight4 = new Entity('ringBlueLight4')
engine.addEntity(ringBlueLight4)
ringBlueLight4.setParent(_scene)
ringBlueLight4.addComponentOrReplace(gltfShape10)
const transform98 = new Transform({
  position: new Vector3(12.478222846984863, 11.674327850341797, 4.35233736038208),
  rotation: new Quaternion(-0.3333278298377991, -0.3333278298377991, 0.6236125826835632, 0.6236124634742737),
  scale: new Vector3(1.9568268060684204, 1.1375621557235718, 2.051353931427002)
})
ringBlueLight4.addComponentOrReplace(transform98)

const ringBlueLight5 = new Entity('ringBlueLight5')
engine.addEntity(ringBlueLight5)
ringBlueLight5.setParent(_scene)
ringBlueLight5.addComponentOrReplace(gltfShape10)
const transform99 = new Transform({
  position: new Vector3(12.5, 8.31470012664795, 13.081382751464844),
  rotation: new Quaternion(0, 0, 0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.9568265676498413, 1.1375610828399658, 2.051353693008423)
})
ringBlueLight5.addComponentOrReplace(transform99)

const crow = new Entity('crow')
engine.addEntity(crow)
crow.setParent(_scene)
const transform100 = new Transform({
  position: new Vector3(6, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
crow.addComponentOrReplace(transform100)
const gltfShape12 = new GLTFShape("models/HWN20_Crow.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
crow.addComponentOrReplace(gltfShape12)

const crow2 = new Entity('crow2')
engine.addEntity(crow2)
crow2.setParent(_scene)
crow2.addComponentOrReplace(gltfShape12)
const transform101 = new Transform({
  position: new Vector3(3, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
crow2.addComponentOrReplace(transform101)

const glass = new Entity('glass')
engine.addEntity(glass)
glass.setParent(_scene)
const transform102 = new Transform({
  position: new Vector3(8.5, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glass.addComponentOrReplace(transform102)
const gltfShape13 = new GLTFShape("models/glass.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
glass.addComponentOrReplace(gltfShape13)

const spark = new Entity('spark')
engine.addEntity(spark)
spark.setParent(_scene)
const transform103 = new Transform({
  position: new Vector3(8.117910385131836, 0, 3.6659326553344727),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spark.addComponentOrReplace(transform103)

const clickArea7 = new Entity('clickArea7')
engine.addEntity(clickArea7)
clickArea7.setParent(_scene)
const transform104 = new Transform({
  position: new Vector3(8.5, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.2072492837905884, 1.2227340936660767, 1.1351767778396606)
})
clickArea7.addComponentOrReplace(transform104)

const invisibleWall2 = new Entity('invisibleWall2')
engine.addEntity(invisibleWall2)
invisibleWall2.setParent(_scene)
const transform105 = new Transform({
  position: new Vector3(6.342567443847656, 3.4524893760681152, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
invisibleWall2.addComponentOrReplace(transform105)

const spark2 = new Entity('spark2')
engine.addEntity(spark2)
spark2.setParent(_scene)
const transform106 = new Transform({
  position: new Vector3(8.617910385131836, 0, 3.6659326553344727),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spark2.addComponentOrReplace(transform106)

const spark3 = new Entity('spark3')
engine.addEntity(spark3)
spark3.setParent(_scene)
const transform107 = new Transform({
  position: new Vector3(8.875936508178711, 0, 3.6659326553344727),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
spark3.addComponentOrReplace(transform107)

const glass2 = new Entity('glass2')
engine.addEntity(glass2)
glass2.setParent(_scene)
glass2.addComponentOrReplace(gltfShape13)
const transform108 = new Transform({
  position: new Vector3(9.90693473815918, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glass2.addComponentOrReplace(transform108)

const toggleButton3 = new Entity('toggleButton3')
engine.addEntity(toggleButton3)
toggleButton3.setParent(_scene)
const transform109 = new Transform({
  position: new Vector3(12.80921745300293, 0, 9.448845863342285),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toggleButton3.addComponentOrReplace(transform109)

const toggleButton4 = new Entity('toggleButton4')
engine.addEntity(toggleButton4)
toggleButton4.setParent(_scene)
const transform110 = new Transform({
  position: new Vector3(14.80921745300293, 0, 9.448845863342285),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toggleButton4.addComponentOrReplace(transform110)

const toggleButton5 = new Entity('toggleButton5')
engine.addEntity(toggleButton5)
toggleButton5.setParent(_scene)
const transform111 = new Transform({
  position: new Vector3(13.80921745300293, 0, 9.448845863342285),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toggleButton5.addComponentOrReplace(transform111)

const plainText32 = new Entity('plainText32')
engine.addEntity(plainText32)
plainText32.setParent(_scene)
const transform112 = new Transform({
  position: new Vector3(12.80921745300293, 0.17374572157859802, 8.698845863342285),
  rotation: new Quaternion(-5.199257557819692e-8, -0.7730104923248291, -0.6343932151794434, -2.8796888429383216e-8),
  scale: new Vector3(1, 1, 0.9999999403953552)
})
plainText32.addComponentOrReplace(transform112)

const plainText33 = new Entity('plainText33')
engine.addEntity(plainText33)
plainText33.setParent(_scene)
const transform113 = new Transform({
  position: new Vector3(13.80921745300293, 0.17374572157859802, 8.698845863342285),
  rotation: new Quaternion(-5.199257557819692e-8, -0.7730104923248291, -0.6343932151794434, -2.8796888429383216e-8),
  scale: new Vector3(1, 1, 0.9999999403953552)
})
plainText33.addComponentOrReplace(transform113)

const plainText34 = new Entity('plainText34')
engine.addEntity(plainText34)
plainText34.setParent(_scene)
const transform114 = new Transform({
  position: new Vector3(14.80921745300293, 0.17374572157859802, 8.698845863342285),
  rotation: new Quaternion(-5.199257557819692e-8, -0.7730104923248291, -0.6343932151794434, -2.8796888429383216e-8),
  scale: new Vector3(1, 1, 0.9999999403953552)
})
plainText34.addComponentOrReplace(transform114)

const floorGlassSmall8 = new Entity('floorGlassSmall8')
engine.addEntity(floorGlassSmall8)
floorGlassSmall8.setParent(_scene)
floorGlassSmall8.addComponentOrReplace(gltfShape5)
const transform115 = new Transform({
  position: new Vector3(11.241715431213379, 5.1360182762146, 11.668034553527832),
  rotation: new Quaternion(0.7071068286895752, 8.943844183464207e-16, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.6569135189056396, 1.000011682510376, 0.4704844057559967)
})
floorGlassSmall8.addComponentOrReplace(transform115)

const plainText35 = new Entity('plainText35')
engine.addEntity(plainText35)
plainText35.setParent(_scene)
const transform116 = new Transform({
  position: new Vector3(14.08780574798584, 2.411182165145874, 15.947981834411621),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.9047232270240784, 0.9090286493301392, 0.996399998664856)
})
plainText35.addComponentOrReplace(transform116)

const toggleButton6 = new Entity('toggleButton6')
engine.addEntity(toggleButton6)
toggleButton6.setParent(_scene)
const transform117 = new Transform({
  position: new Vector3(13.344396591186523, 2.0773417949676514, 15.980586051940918),
  rotation: new Quaternion(-0.7289506793022156, 2.4061139772225612e-15, 8.689768549174914e-8, 0.6845661997795105),
  scale: new Vector3(1, 1.000007152557373, 1.000007152557373)
})
toggleButton6.addComponentOrReplace(transform117)

const orangeGhost5 = new Entity('orangeGhost5')
engine.addEntity(orangeGhost5)
orangeGhost5.setParent(_scene)
orangeGhost5.addComponentOrReplace(gltfShape9)
const transform118 = new Transform({
  position: new Vector3(10.32973575592041, 1.1440238952636719, 15.79734992980957),
  rotation: new Quaternion(-5.4264479669159475e-15, 0.9951847195625305, -1.1863525628541538e-7, 0.09801716357469559),
  scale: new Vector3(0.5190301537513733, 0.5, 0.9809706211090088)
})
orangeGhost5.addComponentOrReplace(transform118)

const pumpkin2 = new Entity('pumpkin2')
engine.addEntity(pumpkin2)
pumpkin2.setParent(_scene)
pumpkin2.addComponentOrReplace(gltfShape8)
const transform119 = new Transform({
  position: new Vector3(12.729740142822266, 0.30758118629455566, 13.86684799194336),
  rotation: new Quaternion(0, 0, -0.40101027488708496, 0.9160736203193665),
  scale: new Vector3(1.5, 1.5, 1.5000001192092896)
})
pumpkin2.addComponentOrReplace(transform119)

const clickArea8 = new Entity('clickArea8')
engine.addEntity(clickArea8)
clickArea8.setParent(_scene)
const transform120 = new Transform({
  position: new Vector3(12.908844947814941, 0.08402204513549805, 13.856833457946777),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4493951797485352, 1.1104201078414917, 1.3845288753509521)
})
clickArea8.addComponentOrReplace(transform120)

const pumpkin3 = new Entity('pumpkin3')
engine.addEntity(pumpkin3)
pumpkin3.setParent(_scene)
pumpkin3.addComponentOrReplace(gltfShape8)
const transform121 = new Transform({
  position: new Vector3(14.187188148498535, 0.30758118629455566, 13.276145935058594),
  rotation: new Quaternion(0, 0, -0.3002122640609741, 0.9538725018501282),
  scale: new Vector3(1.4999998807907104, 1.4999998807907104, 1.5000001192092896)
})
pumpkin3.addComponentOrReplace(transform121)

const clickArea9 = new Entity('clickArea9')
engine.addEntity(clickArea9)
clickArea9.setParent(_scene)
const transform122 = new Transform({
  position: new Vector3(14.213857650756836, 0.08402204513549805, 13.280844688415527),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4493951797485352, 1.1104201078414917, 1.3845288753509521)
})
clickArea9.addComponentOrReplace(transform122)

const plainText36 = new Entity('plainText36')
engine.addEntity(plainText36)
plainText36.setParent(_scene)
const transform123 = new Transform({
  position: new Vector3(10.256515502929688, 0.7198400497436523, 15.923789978027344),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.9047232270240784, 0.9090286493301392, 0.996399998664856)
})
plainText36.addComponentOrReplace(transform123)

const plainText37 = new Entity('plainText37')
engine.addEntity(plainText37)
plainText37.setParent(_scene)
const transform124 = new Transform({
  position: new Vector3(14.419549942016602, 0.1737457513809204, 12.309243202209473),
  rotation: new Quaternion(-5.199257557819692e-8, -0.7730104923248291, -0.6343932151794434, -2.8796888429383216e-8),
  scale: new Vector3(1, 1, 0.9999998807907104)
})
plainText37.addComponentOrReplace(transform124)

const plainText38 = new Entity('plainText38')
engine.addEntity(plainText38)
plainText38.setParent(_scene)
const transform125 = new Transform({
  position: new Vector3(11.333992958068848, 0.1737457513809204, 12.585740089416504),
  rotation: new Quaternion(-5.199257557819692e-8, -0.7730104923248291, -0.6343932151794434, -2.8796888429383216e-8),
  scale: new Vector3(1, 1, 0.9999999403953552)
})
plainText38.addComponentOrReplace(transform125)

const pumpkin4 = new Entity('pumpkin4')
engine.addEntity(pumpkin4)
pumpkin4.setParent(_scene)
pumpkin4.addComponentOrReplace(gltfShape8)
const transform126 = new Transform({
  position: new Vector3(14.958706855773926, 0.7233810424804688, 10.27073860168457),
  rotation: new Quaternion(-0.23734571039676666, 0.7541248798370361, -0.18383264541625977, 0.5840961337089539),
  scale: new Vector3(0.6070919632911682, 0.63292396068573, 0.5924205780029297)
})
pumpkin4.addComponentOrReplace(transform126)

const pumpkin5 = new Entity('pumpkin5')
engine.addEntity(pumpkin5)
pumpkin5.setParent(_scene)
pumpkin5.addComponentOrReplace(gltfShape8)
const transform127 = new Transform({
  position: new Vector3(12.730925559997559, 0.7233810424804688, 10.267276763916016),
  rotation: new Quaternion(-0.1443946659564972, -0.12772709131240845, 0.21242587268352509, 0.9579724669456482),
  scale: new Vector3(0.60709148645401, 0.6329234838485718, 0.5924203991889954)
})
pumpkin5.addComponentOrReplace(transform127)

const pumpkin6 = new Entity('pumpkin6')
engine.addEntity(pumpkin6)
pumpkin6.setParent(_scene)
const transform128 = new Transform({
  position: new Vector3(13.754359245300293, 0.4157998561859131, 10.342086791992188),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pumpkin6.addComponentOrReplace(transform128)
pumpkin6.addComponentOrReplace(gltfShape8)

const toggleButton7 = new Entity('toggleButton7')
engine.addEntity(toggleButton7)
toggleButton7.setParent(_scene)
const transform129 = new Transform({
  position: new Vector3(13.80921745300293, 0, 10.198845863342285),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toggleButton7.addComponentOrReplace(transform129)

const triggerArea = new Entity('triggerArea')
engine.addEntity(triggerArea)
triggerArea.setParent(_scene)
const transform130 = new Transform({
  position: new Vector3(6.923818588256836, 0, 9.718317985534668),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.1821517944335938, 1, 1.3999236822128296)
})
triggerArea.addComponentOrReplace(transform130)

const triggerArea2 = new Entity('triggerArea2')
engine.addEntity(triggerArea2)
triggerArea2.setParent(_scene)
const transform131 = new Transform({
  position: new Vector3(5.212212085723877, 0, 9.779857635498047),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(2.182154655456543, 1, 1.8144409656524658)
})
triggerArea2.addComponentOrReplace(transform131)

const triggerArea3 = new Entity('triggerArea3')
engine.addEntity(triggerArea3)
triggerArea3.setParent(_scene)
const transform132 = new Transform({
  position: new Vector3(4.864663124084473, 0, 11.735626220703125),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.1797786951065063, 1, 2.380958080291748)
})
triggerArea3.addComponentOrReplace(transform132)

const triggerArea4 = new Entity('triggerArea4')
engine.addEntity(triggerArea4)
triggerArea4.setParent(_scene)
const transform133 = new Transform({
  position: new Vector3(4.858245372772217, 0, 13.03930377960205),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.1797789335250854, 1, 2.3809587955474854)
})
triggerArea4.addComponentOrReplace(transform133)

const triggerArea6 = new Entity('triggerArea6')
engine.addEntity(triggerArea6)
triggerArea6.setParent(_scene)
const transform134 = new Transform({
  position: new Vector3(9.244760513305664, 0, 11.442048072814941),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5394343137741089, 1, 1.8370208740234375)
})
triggerArea6.addComponentOrReplace(transform134)

const triggerArea7 = new Entity('triggerArea7')
engine.addEntity(triggerArea7)
triggerArea7.setParent(_scene)
const transform135 = new Transform({
  position: new Vector3(9.061042785644531, 0, 12.939810752868652),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.1797789335250854, 1, 1.837019920349121)
})
triggerArea7.addComponentOrReplace(transform135)

const triggerArea8 = new Entity('triggerArea8')
engine.addEntity(triggerArea8)
triggerArea8.setParent(_scene)
const transform136 = new Transform({
  position: new Vector3(9.223053932189941, 0, 14.226829528808594),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.1797791719436646, 1, 1.8370203971862793)
})
triggerArea8.addComponentOrReplace(transform136)

const triggerArea9 = new Entity('triggerArea9')
engine.addEntity(triggerArea9)
triggerArea9.setParent(_scene)
const transform137 = new Transform({
  position: new Vector3(7.304881572723389, 0, 13.717944145202637),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.67234206199646, 1, 1.3999227285385132)
})
triggerArea9.addComponentOrReplace(transform137)

const triggerArea10 = new Entity('triggerArea10')
engine.addEntity(triggerArea10)
triggerArea10.setParent(_scene)
const transform138 = new Transform({
  position: new Vector3(5.75647497177124, 0, 13.708864212036133),
  rotation: new Quaternion(4.440892627896218e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.6723425388336182, 1, 1.3999229669570923)
})
triggerArea10.addComponentOrReplace(transform138)

const toggleButton8 = new Entity('toggleButton8')
engine.addEntity(toggleButton8)
toggleButton8.setParent(_scene)
const transform139 = new Transform({
  position: new Vector3(9.90693473815918, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toggleButton8.addComponentOrReplace(transform139)

const plainText39 = new Entity('plainText39')
engine.addEntity(plainText39)
plainText39.setParent(_scene)
const transform140 = new Transform({
  position: new Vector3(9.924250602722168, 0.17374572157859802, 4.866973400115967),
  rotation: new Quaternion(0.7071068286895752, 9.90122561717044e-9, -8.467051060279118e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 0.9999999403953552)
})
plainText39.addComponentOrReplace(transform140)

const glass4 = new Entity('glass4')
engine.addEntity(glass4)
glass4.setParent(_scene)
glass4.addComponentOrReplace(gltfShape13)
const transform141 = new Transform({
  position: new Vector3(14.25333023071289, 0, 13.24450397491455),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.13829396665096283, 1.6148018836975098, 0.08935240656137466)
})
glass4.addComponentOrReplace(transform141)

const floorGlassSmall9 = new Entity('floorGlassSmall9')
engine.addEntity(floorGlassSmall9)
floorGlassSmall9.setParent(_scene)
floorGlassSmall9.addComponentOrReplace(gltfShape5)
const transform142 = new Transform({
  position: new Vector3(16, 13.877594947814941, 5),
  rotation: new Quaternion(1, -1.3623141116507844e-15, -1.1920928955078125e-7, 5.960463766996327e-8),
  scale: new Vector3(7.476790428161621, 1.0000039339065552, 5.130051136016846)
})
floorGlassSmall9.addComponentOrReplace(transform142)

const toggleButton9 = new Entity('toggleButton9')
engine.addEntity(toggleButton9)
toggleButton9.setParent(_scene)
const transform143 = new Transform({
  position: new Vector3(15, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toggleButton9.addComponentOrReplace(transform143)

const invisibleWall3 = new Entity('invisibleWall3')
engine.addEntity(invisibleWall3)
invisibleWall3.setParent(_scene)
const transform144 = new Transform({
  position: new Vector3(8.5, 14.377594947814941, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
invisibleWall3.addComponentOrReplace(transform144)

const floorGlassSmall10 = new Entity('floorGlassSmall10')
engine.addEntity(floorGlassSmall10)
floorGlassSmall10.setParent(_scene)
floorGlassSmall10.addComponentOrReplace(gltfShape5)
const transform145 = new Transform({
  position: new Vector3(15.989866256713867, 0, 11.431114196777344),
  rotation: new Quaternion(0.7071068286895752, 8.943844183464207e-16, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.246443510055542, 1.0000050067901611, 0.36997726559638977)
})
floorGlassSmall10.addComponentOrReplace(transform145)

const plainText40 = new Entity('plainText40')
engine.addEntity(plainText40)
plainText40.setParent(_scene)
const transform146 = new Transform({
  position: new Vector3(13.99417781829834, 0.17374572157859802, 7.818585395812988),
  rotation: new Quaternion(-5.199257557819692e-8, -0.7730104923248291, -0.6343932151794434, -2.8796888429383216e-8),
  scale: new Vector3(1, 1, 0.9999998807907104)
})
plainText40.addComponentOrReplace(transform146)

const plainText41 = new Entity('plainText41')
engine.addEntity(plainText41)
plainText41.setParent(_scene)
const transform147 = new Transform({
  position: new Vector3(15.075034141540527, 0.17374572157859802, 7.84213399887085),
  rotation: new Quaternion(-5.199257557819692e-8, -0.7730104923248291, -0.6343932151794434, -2.8796888429383216e-8),
  scale: new Vector3(1, 1, 0.9999998211860657)
})
plainText41.addComponentOrReplace(transform147)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform148 = new Transform({
  position: new Vector3(8.256906509399414, 3.8817508220672607, 3.1148669719696045),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.120234727859497, 1.2561006546020508, 1)
})
externalLink.addComponentOrReplace(transform148)

const plainText42 = new Entity('plainText42')
engine.addEntity(plainText42)
plainText42.setParent(_scene)
const transform149 = new Transform({
  position: new Vector3(9.218912124633789, 4.16379451751709, 3.17462158203125),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.8582945466041565, 0.8846678137779236, 0.9954361319541931)
})
plainText42.addComponentOrReplace(transform149)

const glass3 = new Entity('glass3')
engine.addEntity(glass3)
glass3.setParent(_scene)
glass3.addComponentOrReplace(gltfShape13)
const transform150 = new Transform({
  position: new Vector3(15.449742317199707, 0, 10.576189994812012),
  rotation: new Quaternion(0, 0, 0.12117903679609299, 0.992630660533905),
  scale: new Vector3(1.0327670574188232, 1.5334025621414185, 1)
})
glass3.addComponentOrReplace(transform150)

const toggleButton10 = new Entity('toggleButton10')
engine.addEntity(toggleButton10)
toggleButton10.setParent(_scene)
const transform151 = new Transform({
  position: new Vector3(15.5, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toggleButton10.addComponentOrReplace(transform151)

const blackButton24 = new Entity('blackButton24')
engine.addEntity(blackButton24)
blackButton24.setParent(_scene)
const transform152 = new Transform({
  position: new Vector3(15.5, 0.03507065773010254, 13.5),
  rotation: new Quaternion(-0.009607255458831787, 0.9903926849365234, -0.09754514694213867, 0.09754516929388046),
  scale: new Vector3(1.0000020265579224, 1.0000070333480835, 1.000008225440979)
})
blackButton24.addComponentOrReplace(transform152)

const plainText43 = new Entity('plainText43')
engine.addEntity(plainText43)
plainText43.setParent(_scene)
const transform153 = new Transform({
  position: new Vector3(15.35855484008789, 4.16379451751709, 3.298147201538086),
  rotation: new Quaternion(0.09801711142063141, -3.651437152640824e-9, -4.875807846360658e-8, 0.9951847195625305),
  scale: new Vector3(0.8582945466041565, 0.8846679329872131, 0.9954361319541931)
})
plainText43.addComponentOrReplace(transform153)

const externalLink2 = new Entity('externalLink2')
engine.addEntity(externalLink2)
externalLink2.setParent(_scene)
const transform154 = new Transform({
  position: new Vector3(15.469345092773438, 3.2664902210235596, 3.276977777481079),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(1.120234727859497, 1.2561006546020508, 1)
})
externalLink2.addComponentOrReplace(transform154)

const floorGlassSmall14 = new Entity('floorGlassSmall14')
engine.addEntity(floorGlassSmall14)
floorGlassSmall14.setParent(_scene)
floorGlassSmall14.addComponentOrReplace(gltfShape5)
const transform155 = new Transform({
  position: new Vector3(15.801538467407227, 3.2336337566375732, 3.1863012313842773),
  rotation: new Quaternion(0.7071068286895752, 8.943844183464207e-16, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.9525787830352783, 1.0000085830688477, 0.6456247568130493)
})
floorGlassSmall14.addComponentOrReplace(transform155)

const floorGlassSmall11 = new Entity('floorGlassSmall11')
engine.addEntity(floorGlassSmall11)
floorGlassSmall11.setParent(_scene)
floorGlassSmall11.addComponentOrReplace(gltfShape5)
const transform156 = new Transform({
  position: new Vector3(15.801538467407227, 3.2336337566375732, 3.1863012313842773),
  rotation: new Quaternion(0.7071068286895752, 8.943844183464207e-16, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.9525787830352783, 1.0000083446502686, 0.36997753381729126)
})
floorGlassSmall11.addComponentOrReplace(transform156)

const floorGlassSmall12 = new Entity('floorGlassSmall12')
engine.addEntity(floorGlassSmall12)
floorGlassSmall12.setParent(_scene)
floorGlassSmall12.addComponentOrReplace(gltfShape5)
const transform157 = new Transform({
  position: new Vector3(15.896236419677734, 13.734190940856934, 15.226317405700684),
  rotation: new Quaternion(0.7071068286895752, 8.943844183464207e-16, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(7.516453266143799, 1.0000078678131104, 0.5140711069107056)
})
floorGlassSmall12.addComponentOrReplace(transform157)

const floorGlassSmall13 = new Entity('floorGlassSmall13')
engine.addEntity(floorGlassSmall13)
floorGlassSmall13.setParent(_scene)
floorGlassSmall13.addComponentOrReplace(gltfShape5)
const transform158 = new Transform({
  position: new Vector3(15.896236419677734, 13.734190940856934, 15.226317405700684),
  rotation: new Quaternion(0.5000000596046448, -0.4999999403953552, 0.5, 0.5),
  scale: new Vector3(6.192657470703125, 1.0000085830688477, 0.5140715837478638)
})
floorGlassSmall13.addComponentOrReplace(transform158)

const floorGlassSmall15 = new Entity('floorGlassSmall15')
engine.addEntity(floorGlassSmall15)
floorGlassSmall15.setParent(_scene)
floorGlassSmall15.addComponentOrReplace(gltfShape5)
const transform159 = new Transform({
  position: new Vector3(0.8962364196777344, 13.734190940856934, 15.226318359375),
  rotation: new Quaternion(0.5000000596046448, -0.4999999403953552, 0.5, 0.5),
  scale: new Vector3(6.192657470703125, 1.0000085830688477, 0.5140715837478638)
})
floorGlassSmall15.addComponentOrReplace(transform159)

const floorGlassSmall16 = new Entity('floorGlassSmall16')
engine.addEntity(floorGlassSmall16)
floorGlassSmall16.setParent(_scene)
floorGlassSmall16.addComponentOrReplace(gltfShape5)
const transform160 = new Transform({
  position: new Vector3(0.5, 14.000336647033691, 5),
  rotation: new Quaternion(1.0175147480140367e-7, 1.1175870895385742e-7, 1, -5.960464477539063e-8),
  scale: new Vector3(2.800431728363037, 1.0000087022781372, 0.7695348858833313)
})
floorGlassSmall16.addComponentOrReplace(transform160)

const floorGlassSmall17 = new Entity('floorGlassSmall17')
engine.addEntity(floorGlassSmall17)
floorGlassSmall17.setParent(_scene)
floorGlassSmall17.addComponentOrReplace(gltfShape5)
const transform161 = new Transform({
  position: new Vector3(10.397799491882324, 13.867130279541016, 5.000280857086182),
  rotation: new Quaternion(1.0175147480140367e-7, 1.1175870895385742e-7, 1, -5.960464477539063e-8),
  scale: new Vector3(2.8004331588745117, 1.0000087022781372, 0.514071524143219)
})
floorGlassSmall17.addComponentOrReplace(transform161)

const glass5 = new Entity('glass5')
engine.addEntity(glass5)
glass5.setParent(_scene)
const transform162 = new Transform({
  position: new Vector3(3.7546329498291016, 13.79867172241211, 4.1681904792785645),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.95751953125, 0.6594662070274353, 0.4581911563873291)
})
glass5.addComponentOrReplace(transform162)
glass5.addComponentOrReplace(gltfShape13)

const plainText44 = new Entity('plainText44')
engine.addEntity(plainText44)
plainText44.setParent(_scene)
const transform163 = new Transform({
  position: new Vector3(3.9178202152252197, 13.972417831420898, 5.938141822814941),
  rotation: new Quaternion(-0.6343933343887329, 5.960464477539063e-8, 7.587733108493921e-8, 0.7730104923248291),
  scale: new Vector3(1.0000001192092896, 1.000001072883606, 1.0000009536743164)
})
plainText44.addComponentOrReplace(transform163)

const blackButton25 = new Entity('blackButton25')
engine.addEntity(blackButton25)
blackButton25.setParent(_scene)
const transform164 = new Transform({
  position: new Vector3(3.801025152206421, 13.833742141723633, 5.217628002166748),
  rotation: new Quaternion(-0.014236864633858204, 0.6342335939407349, 0.017347760498523712, 0.7728157639503479),
  scale: new Vector3(1.0000079870224, 1.0000070333480835, 1.0000218152999878)
})
blackButton25.addComponentOrReplace(transform164)

const blackButton26 = new Entity('blackButton26')
engine.addEntity(blackButton26)
blackButton26.setParent(_scene)
const transform165 = new Transform({
  position: new Vector3(2.8552119731903076, 13.833742141723633, 5.210585594177246),
  rotation: new Quaternion(-0.014236864633858204, 0.6342335939407349, 0.017347760498523712, 0.7728157639503479),
  scale: new Vector3(1.0000091791152954, 1.0000070333480835, 1.000022530555725)
})
blackButton26.addComponentOrReplace(transform165)

const plainText45 = new Entity('plainText45')
engine.addEntity(plainText45)
plainText45.setParent(_scene)
const transform166 = new Transform({
  position: new Vector3(2.793924331665039, 13.972417831420898, 5.936518669128418),
  rotation: new Quaternion(-0.6343933343887329, 5.960464477539063e-8, 7.587733108493921e-8, 0.7730104923248291),
  scale: new Vector3(1.0000001192092896, 1.000001072883606, 1.0000009536743164)
})
plainText45.addComponentOrReplace(transform166)

const glass6 = new Entity('glass6')
engine.addEntity(glass6)
glass6.setParent(_scene)
glass6.addComponentOrReplace(gltfShape13)
const transform167 = new Transform({
  position: new Vector3(2.808819532394409, 13.79867172241211, 4.161148548126221),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.95751953125, 0.6594662070274353, 0.4581911563873291)
})
glass6.addComponentOrReplace(transform167)

const plainText46 = new Entity('plainText46')
engine.addEntity(plainText46)
plainText46.setParent(_scene)
const transform168 = new Transform({
  position: new Vector3(5.105672836303711, 13.972417831420898, 5.808192253112793),
  rotation: new Quaternion(-0.6343933343887329, 5.960464477539063e-8, 7.587733108493921e-8, 0.7730104923248291),
  scale: new Vector3(1.0000001192092896, 1.000001072883606, 1.0000009536743164)
})
plainText46.addComponentOrReplace(transform168)

const blackButton27 = new Entity('blackButton27')
engine.addEntity(blackButton27)
blackButton27.setParent(_scene)
const transform169 = new Transform({
  position: new Vector3(4.859986782073975, 13.833742141723633, 5.202648162841797),
  rotation: new Quaternion(-0.014236864633858204, 0.6342335939407349, 0.017347760498523712, 0.7728157639503479),
  scale: new Vector3(1.000009298324585, 1.0000070333480835, 1.0000232458114624)
})
blackButton27.addComponentOrReplace(transform169)

const glass7 = new Entity('glass7')
engine.addEntity(glass7)
glass7.setParent(_scene)
glass7.addComponentOrReplace(gltfShape13)
const transform170 = new Transform({
  position: new Vector3(4.813594341278076, 13.79867172241211, 4.1532111167907715),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.95751953125, 0.6594662070274353, 0.4581911563873291)
})
glass7.addComponentOrReplace(transform170)

const blackButton28 = new Entity('blackButton28')
engine.addEntity(blackButton28)
blackButton28.setParent(_scene)
const transform171 = new Transform({
  position: new Vector3(1.6076006889343262, 13.833742141723633, 5.20589017868042),
  rotation: new Quaternion(-0.014236864633858204, 0.6342335939407349, 0.017347760498523712, 0.7728157639503479),
  scale: new Vector3(1.0000091791152954, 1.0000070333480835, 1.00002121925354)
})
blackButton28.addComponentOrReplace(transform171)

const glass8 = new Entity('glass8')
engine.addEntity(glass8)
glass8.setParent(_scene)
glass8.addComponentOrReplace(gltfShape13)
const transform172 = new Transform({
  position: new Vector3(1.561207890510559, 13.79867172241211, 4.1564531326293945),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.95751953125, 0.6594662070274353, 0.4581911563873291)
})
glass8.addComponentOrReplace(transform172)

const plainText47 = new Entity('plainText47')
engine.addEntity(plainText47)
plainText47.setParent(_scene)
const transform173 = new Transform({
  position: new Vector3(1.7192505598068237, 13.972417831420898, 6.111424446105957),
  rotation: new Quaternion(-0.6343933343887329, 5.960464477539063e-8, 7.587733108493921e-8, 0.7730104923248291),
  scale: new Vector3(1.0000001192092896, 1.000001072883606, 1.0000009536743164)
})
plainText47.addComponentOrReplace(transform173)

const indicatorArrow4 = new Entity('indicatorArrow4')
engine.addEntity(indicatorArrow4)
indicatorArrow4.setParent(_scene)
const transform174 = new Transform({
  position: new Vector3(3.5, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
indicatorArrow4.addComponentOrReplace(transform174)

const clickArea10 = new Entity('clickArea10')
engine.addEntity(clickArea10)
clickArea10.setParent(_scene)
const transform175 = new Transform({
  position: new Vector3(3.7247886657714844, 0, 4.008079528808594),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 0.5604672431945801, 0.5303261280059814)
})
clickArea10.addComponentOrReplace(transform175)

const clickArea11 = new Entity('clickArea11')
engine.addEntity(clickArea11)
clickArea11.setParent(_scene)
const transform176 = new Transform({
  position: new Vector3(6, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.3791693449020386, 0.562373161315918, 1)
})
clickArea11.addComponentOrReplace(transform176)

const indicatorArrow5 = new Entity('indicatorArrow5')
engine.addEntity(indicatorArrow5)
indicatorArrow5.setParent(_scene)
const transform177 = new Transform({
  position: new Vector3(6, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
indicatorArrow5.addComponentOrReplace(transform177)

const glass9 = new Entity('glass9')
engine.addEntity(glass9)
glass9.setParent(_scene)
glass9.addComponentOrReplace(gltfShape13)
const transform178 = new Transform({
  position: new Vector3(14.787724494934082, 13.808549880981445, 4.316567897796631),
  rotation: new Quaternion(1.9792379591683637e-15, 0.7071067690849304, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(0.9575183391571045, 0.6594662070274353, 0.45819056034088135)
})
glass9.addComponentOrReplace(transform178)

const glass10 = new Entity('glass10')
engine.addEntity(glass10)
glass10.setParent(_scene)
glass10.addComponentOrReplace(gltfShape13)
const transform179 = new Transform({
  position: new Vector3(13.72876262664795, 13.808549880981445, 4.331547260284424),
  rotation: new Quaternion(1.9792379591683637e-15, 0.7071067690849304, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(0.9575183391571045, 0.6594662070274353, 0.45819056034088135)
})
glass10.addComponentOrReplace(transform179)

const glass11 = new Entity('glass11')
engine.addEntity(glass11)
glass11.setParent(_scene)
glass11.addComponentOrReplace(gltfShape13)
const transform180 = new Transform({
  position: new Vector3(12.782949447631836, 13.808549880981445, 4.32450532913208),
  rotation: new Quaternion(1.9792379591683637e-15, 0.7071067690849304, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(0.9575183391571045, 0.6594662070274353, 0.45819056034088135)
})
glass11.addComponentOrReplace(transform180)

const glass12 = new Entity('glass12')
engine.addEntity(glass12)
glass12.setParent(_scene)
glass12.addComponentOrReplace(gltfShape13)
const transform181 = new Transform({
  position: new Vector3(11.535338401794434, 13.808549880981445, 4.319810390472412),
  rotation: new Quaternion(1.9792379591683637e-15, 0.7071067690849304, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(0.9575183391571045, 0.6594662070274353, 0.45819056034088135)
})
glass12.addComponentOrReplace(transform181)

const blackButton29 = new Entity('blackButton29')
engine.addEntity(blackButton29)
blackButton29.setParent(_scene)
const transform182 = new Transform({
  position: new Vector3(11.581730842590332, 13.843620300292969, 5.369246959686279),
  rotation: new Quaternion(0.01423686370253563, -0.6342335939407349, -0.017347760498523712, -0.7728157639503479),
  scale: new Vector3(1.0000072717666626, 1.0000070333480835, 1.0000194311141968)
})
blackButton29.addComponentOrReplace(transform182)

const plainText48 = new Entity('plainText48')
engine.addEntity(plainText48)
plainText48.setParent(_scene)
const transform183 = new Transform({
  position: new Vector3(11.693381309509277, 13.982295989990234, 6.274782180786133),
  rotation: new Quaternion(0.6343933343887329, -8.940696716308594e-8, -1.0567964636720717e-7, -0.7730104923248291),
  scale: new Vector3(1, 1.0000014305114746, 1.0000014305114746)
})
plainText48.addComponentOrReplace(transform183)

const plainText49 = new Entity('plainText49')
engine.addEntity(plainText49)
plainText49.setParent(_scene)
const transform184 = new Transform({
  position: new Vector3(12.768054962158203, 13.982295989990234, 6.0998759269714355),
  rotation: new Quaternion(0.6343933343887329, -8.940696716308594e-8, -1.0567964636720717e-7, -0.7730104923248291),
  scale: new Vector3(1, 1.0000014305114746, 1.0000014305114746)
})
plainText49.addComponentOrReplace(transform184)

const blackButton30 = new Entity('blackButton30')
engine.addEntity(blackButton30)
blackButton30.setParent(_scene)
const transform185 = new Transform({
  position: new Vector3(12.82934284210205, 13.843620300292969, 5.373941898345947),
  rotation: new Quaternion(0.01423686370253563, -0.6342335939407349, -0.017347760498523712, -0.7728157639503479),
  scale: new Vector3(1.0000072717666626, 1.0000070333480835, 1.0000200271606445)
})
blackButton30.addComponentOrReplace(transform185)

const blackButton31 = new Entity('blackButton31')
engine.addEntity(blackButton31)
blackButton31.setParent(_scene)
const transform186 = new Transform({
  position: new Vector3(13.775155067443848, 13.843620300292969, 5.380984783172607),
  rotation: new Quaternion(0.01423686370253563, -0.6342335939407349, -0.017347760498523712, -0.7728157639503479),
  scale: new Vector3(1.0000067949295044, 1.0000070333480835, 1.0000181198120117)
})
blackButton31.addComponentOrReplace(transform186)

const plainText50 = new Entity('plainText50')
engine.addEntity(plainText50)
plainText50.setParent(_scene)
const transform187 = new Transform({
  position: new Vector3(13.891950607299805, 13.982295989990234, 6.101497173309326),
  rotation: new Quaternion(0.6343933343887329, -8.940696716308594e-8, -1.0567964636720717e-7, -0.7730104923248291),
  scale: new Vector3(1, 1.0000014305114746, 1.0000014305114746)
})
plainText50.addComponentOrReplace(transform187)

const blackButton32 = new Entity('blackButton32')
engine.addEntity(blackButton32)
blackButton32.setParent(_scene)
const transform188 = new Transform({
  position: new Vector3(14.83411693572998, 13.843620300292969, 5.366004467010498),
  rotation: new Quaternion(0.01423686370253563, -0.6342335939407349, -0.017347760498523712, -0.7728157639503479),
  scale: new Vector3(1.0000075101852417, 1.0000070333480835, 1.000020146369934)
})
blackButton32.addComponentOrReplace(transform188)

const plainText51 = new Entity('plainText51')
engine.addEntity(plainText51)
plainText51.setParent(_scene)
const transform189 = new Transform({
  position: new Vector3(15.079802513122559, 13.982295989990234, 5.971548557281494),
  rotation: new Quaternion(0.6343933343887329, -8.940696716308594e-8, -1.0567964636720717e-7, -0.7730104923248291),
  scale: new Vector3(1, 1.0000014305114746, 1.0000014305114746)
})
plainText51.addComponentOrReplace(transform189)

const floorGlassSmall18 = new Entity('floorGlassSmall18')
engine.addEntity(floorGlassSmall18)
floorGlassSmall18.setParent(_scene)
floorGlassSmall18.addComponentOrReplace(gltfShape5)
const transform190 = new Transform({
  position: new Vector3(0.5, 13.734190940856934, 3.1932997703552246),
  rotation: new Quaternion(2.9802322387695312e-8, -0.7071067094802856, 0.70710688829422, -2.9802322387695312e-8),
  scale: new Vector3(2.8004310131073, 1.000008463859558, 0.5140715837478638)
})
floorGlassSmall18.addComponentOrReplace(transform190)

const floorGlassSmall19 = new Entity('floorGlassSmall19')
engine.addEntity(floorGlassSmall19)
floorGlassSmall19.setParent(_scene)
floorGlassSmall19.addComponentOrReplace(gltfShape5)
const transform191 = new Transform({
  position: new Vector3(10.397799491882324, 13.734190940856934, 3.4999990463256836),
  rotation: new Quaternion(2.9802322387695312e-8, -0.7071067094802856, 0.70710688829422, -2.9802322387695312e-8),
  scale: new Vector3(2.8004324436187744, 1.000008463859558, 0.5140715837478638)
})
floorGlassSmall19.addComponentOrReplace(transform191)

const floorGlassSmall20 = new Entity('floorGlassSmall20')
engine.addEntity(floorGlassSmall20)
floorGlassSmall20.setParent(_scene)
floorGlassSmall20.addComponentOrReplace(gltfShape5)
const transform192 = new Transform({
  position: new Vector3(10.397799491882324, 13.867130279541016, 6.500280857086182),
  rotation: new Quaternion(1.0175147480140367e-7, 1.1175870895385742e-7, 1, -5.960464477539063e-8),
  scale: new Vector3(2.8004331588745117, 1.0000087022781372, 1.4041762351989746)
})
floorGlassSmall20.addComponentOrReplace(transform192)

const floorGlassSmall21 = new Entity('floorGlassSmall21')
engine.addEntity(floorGlassSmall21)
floorGlassSmall21.setParent(_scene)
floorGlassSmall21.addComponentOrReplace(gltfShape5)
const transform193 = new Transform({
  position: new Vector3(10.397799491882324, 13.867130279541016, 6.500280857086182),
  rotation: new Quaternion(1.0175147480140367e-7, 1.1175870895385742e-7, 1, -5.960464477539063e-8),
  scale: new Vector3(2.8004331588745117, 1.0000087022781372, 1.4041762351989746)
})
floorGlassSmall21.addComponentOrReplace(transform193)

const spider = new Entity('spider')
engine.addEntity(spider)
spider.setParent(_scene)
const transform194 = new Transform({
  position: new Vector3(2.9483981132507324, 0, 11.991857528686523),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(13.236702919006348, 19.8301944732666, 27.65752410888672)
})
spider.addComponentOrReplace(transform194)
const gltfShape14 = new GLTFShape("models/HWN20_Spider_03.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
spider.addComponentOrReplace(gltfShape14)

const plainText52 = new Entity('plainText52')
engine.addEntity(plainText52)
plainText52.setParent(_scene)
const transform195 = new Transform({
  position: new Vector3(10.193381309509277, 13.982295989990234, 6.274782180786133),
  rotation: new Quaternion(0.6343933343887329, -8.940696716308594e-8, -1.0567964636720717e-7, -0.7730104923248291),
  scale: new Vector3(1, 1.0000016689300537, 1.0000016689300537)
})
plainText52.addComponentOrReplace(transform195)

const blackButton33 = new Entity('blackButton33')
engine.addEntity(blackButton33)
blackButton33.setParent(_scene)
const transform196 = new Transform({
  position: new Vector3(10.081730842590332, 13.843620300292969, 5.369246959686279),
  rotation: new Quaternion(0.01423686370253563, -0.6342335939407349, -0.017347760498523712, -0.7728157639503479),
  scale: new Vector3(1.0000073909759521, 1.0000070333480835, 1.0000195503234863)
})
blackButton33.addComponentOrReplace(transform196)

const plainText53 = new Entity('plainText53')
engine.addEntity(plainText53)
plainText53.setParent(_scene)
const transform197 = new Transform({
  position: new Vector3(3.4790291786193848, 1.2415986061096191, 3.093698501586914),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.8582945466041565, 0.8846678137779236, 0.9954360127449036)
})
plainText53.addComponentOrReplace(transform197)

const blackButton34 = new Entity('blackButton34')
engine.addEntity(blackButton34)
blackButton34.setParent(_scene)
const transform198 = new Transform({
  position: new Vector3(3.501945972442627, 0.6350197792053223, 3.157799005508423),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.8905425071716309, 1.0000042915344238, 0.8753111362457275)
})
blackButton34.addComponentOrReplace(transform198)

const blackButton35 = new Entity('blackButton35')
engine.addEntity(blackButton35)
blackButton35.setParent(_scene)
const transform199 = new Transform({
  position: new Vector3(9.504968643188477, 5.472827434539795, 11.724446296691895),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000064373016357, 1.0000064373016357)
})
blackButton35.addComponentOrReplace(transform199)

const plainText54 = new Entity('plainText54')
engine.addEntity(plainText54)
plainText54.setParent(_scene)
const transform200 = new Transform({
  position: new Vector3(9.579442024230957, 5.866370677947998, 11.660346031188965),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.8582945466041565, 0.8846678137779236, 0.9954360127449036)
})
plainText54.addComponentOrReplace(transform200)

const glass13 = new Entity('glass13')
engine.addEntity(glass13)
glass13.setParent(_scene)
glass13.addComponentOrReplace(gltfShape13)
const transform201 = new Transform({
  position: new Vector3(11.949209213256836, 4.924055099487305, 12.525684356689453),
  rotation: new Quaternion(-1.9792379591683637e-15, -0.7071067690849304, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.6342806816101074, 0.22127166390419006, -1.6638787984848022)
})
glass13.addComponentOrReplace(transform201)

const plainText55 = new Entity('plainText55')
engine.addEntity(plainText55)
plainText55.setParent(_scene)
const transform202 = new Transform({
  position: new Vector3(11.376412391662598, 4.16379451751709, 3.17462158203125),
  rotation: new Quaternion(4.875808556903394e-8, -0.9951847195625305, 0.09801723062992096, -3.651431823570306e-9),
  scale: new Vector3(0.8582945466041565, 0.8846678137779236, 0.9954361319541931)
})
plainText55.addComponentOrReplace(transform202)

const externalLink3 = new Entity('externalLink3')
engine.addEntity(externalLink3)
externalLink3.setParent(_scene)
const transform203 = new Transform({
  position: new Vector3(10.414406776428223, 3.8817508220672607, 3.1148669719696045),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.120234727859497, 1.2561006546020508, 1)
})
externalLink3.addComponentOrReplace(transform203)

const blackButton36 = new Entity('blackButton36')
engine.addEntity(blackButton36)
blackButton36.setParent(_scene)
const transform204 = new Transform({
  position: new Vector3(4.5, 13.843620300292969, 14),
  rotation: new Quaternion(0.01423686370253563, -0.6342335939407349, -0.017347760498523712, -0.7728157639503479),
  scale: new Vector3(1.0000079870224, 1.0000070333480835, 1.000020146369934)
})
blackButton36.addComponentOrReplace(transform204)

const glass14 = new Entity('glass14')
engine.addEntity(glass14)
glass14.setParent(_scene)
glass14.addComponentOrReplace(gltfShape13)
const transform205 = new Transform({
  position: new Vector3(1.6358966827392578, 13.808549880981445, 10),
  rotation: new Quaternion(1.9792379591683637e-15, 0.7071067690849304, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(0.9575183391571045, 0.6594662070274353, 0.45819056034088135)
})
glass14.addComponentOrReplace(transform205)

const glass15 = new Entity('glass15')
engine.addEntity(glass15)
glass15.setParent(_scene)
glass15.addComponentOrReplace(gltfShape13)
const transform206 = new Transform({
  position: new Vector3(2.5, 13.808549880981445, 10),
  rotation: new Quaternion(1.9792379591683637e-15, 0.7071067690849304, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(0.9575183391571045, 0.6594662070274353, 0.45819056034088135)
})
glass15.addComponentOrReplace(transform206)

const glass16 = new Entity('glass16')
engine.addEntity(glass16)
glass16.setParent(_scene)
glass16.addComponentOrReplace(gltfShape13)
const transform207 = new Transform({
  position: new Vector3(3.339733123779297, 13.808549880981445, 10),
  rotation: new Quaternion(1.9792379591683637e-15, 0.7071067690849304, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(0.9575183391571045, 0.6594662070274353, 0.45819056034088135)
})
glass16.addComponentOrReplace(transform207)

const indicatorArrow6 = new Entity('indicatorArrow6')
engine.addEntity(indicatorArrow6)
indicatorArrow6.setParent(_scene)
const transform208 = new Transform({
  position: new Vector3(2.5, 14.444181442260742, 14.462987899780273),
  rotation: new Quaternion(-0.40245482325553894, 0.49039262533187866, 0.4903925657272339, -0.5975452065467834),
  scale: new Vector3(0.9999995827674866, 0.9999995827674866, 0.9999999403953552)
})
indicatorArrow6.addComponentOrReplace(transform208)

const indicatorArrow7 = new Entity('indicatorArrow7')
engine.addEntity(indicatorArrow7)
indicatorArrow7.setParent(_scene)
const transform209 = new Transform({
  position: new Vector3(2.5, 17.444181442260742, 13.959457397460938),
  rotation: new Quaternion(-0.40245485305786133, 0.49039265513420105, 0.4903925955295563, -0.5975452661514282),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
indicatorArrow7.addComponentOrReplace(transform209)

const blackButton37 = new Entity('blackButton37')
engine.addEntity(blackButton37)
blackButton37.setParent(_scene)
const transform210 = new Transform({
  position: new Vector3(4.653309345245361, 13.843620300292969, 12.52305793762207),
  rotation: new Quaternion(0.01423686370253563, -0.6342335939407349, -0.017347760498523712, -0.7728157639503479),
  scale: new Vector3(1.0000079870224, 1.0000070333480835, 1.000020146369934)
})
blackButton37.addComponentOrReplace(transform210)

const plainText56 = new Entity('plainText56')
engine.addEntity(plainText56)
plainText56.setParent(_scene)
const transform211 = new Transform({
  position: new Vector3(10.983738899230957, 13.894221305847168, 12.5),
  rotation: new Quaternion(0.448583722114563, -0.5466010570526123, -0.44858384132385254, -0.546600878238678),
  scale: new Vector3(1.0000003576278687, 1.0000050067901611, 1.000002384185791)
})
plainText56.addComponentOrReplace(transform211)

const plainText57 = new Entity('plainText57')
engine.addEntity(plainText57)
plainText57.setParent(_scene)
const transform212 = new Transform({
  position: new Vector3(1.6185675859451294, 13.972417831420898, 9.150664329528809),
  rotation: new Quaternion(-5.224433863304512e-8, -0.7730105519294739, -0.6343932151794434, 3.080775456965057e-8),
  scale: new Vector3(1.0000017881393433, 1.0000022649765015, 1.0000025033950806)
})
plainText57.addComponentOrReplace(transform212)

const plainText58 = new Entity('plainText58')
engine.addEntity(plainText58)
plainText58.setParent(_scene)
const transform213 = new Transform({
  position: new Vector3(2.6044552326202393, 13.972417831420898, 9.150664329528809),
  rotation: new Quaternion(-5.224433863304512e-8, -0.7730105519294739, -0.6343932151794434, 3.080775456965057e-8),
  scale: new Vector3(1.0000022649765015, 1.000002384185791, 1.0000026226043701)
})
plainText58.addComponentOrReplace(transform213)

const plainText59 = new Entity('plainText59')
engine.addEntity(plainText59)
plainText59.setParent(_scene)
const transform214 = new Transform({
  position: new Vector3(3.5198287963867188, 13.972417831420898, 9.150664329528809),
  rotation: new Quaternion(-5.224433863304512e-8, -0.7730105519294739, -0.6343932151794434, 3.080775456965057e-8),
  scale: new Vector3(1.0000027418136597, 1.0000025033950806, 1.0000027418136597)
})
plainText59.addComponentOrReplace(transform214)

const glass17 = new Entity('glass17')
engine.addEntity(glass17)
glass17.setParent(_scene)
glass17.addComponentOrReplace(gltfShape13)
const transform215 = new Transform({
  position: new Vector3(14.787724494934082, 5.308549880981445, 10.316568374633789),
  rotation: new Quaternion(1.9792379591683637e-15, 0.7071067690849304, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(0.9575183391571045, 0.6594662070274353, 0.45819056034088135)
})
glass17.addComponentOrReplace(transform215)

const glass18 = new Entity('glass18')
engine.addEntity(glass18)
glass18.setParent(_scene)
glass18.addComponentOrReplace(gltfShape13)
const transform216 = new Transform({
  position: new Vector3(15.287724494934082, 5.308549880981445, 10.316568374633789),
  rotation: new Quaternion(1.9792379591683637e-15, 0.7071067690849304, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(0.9575183391571045, 0.6594662070274353, 0.45819056034088135)
})
glass18.addComponentOrReplace(transform216)

const plainText60 = new Entity('plainText60')
engine.addEntity(plainText60)
plainText60.setParent(_scene)
const transform217 = new Transform({
  position: new Vector3(14.068021774291992, 4.888666152954102, 11.667240142822266),
  rotation: new Quaternion(-0.4485838711261749, -0.5466009974479675, -0.4485837519168854, 0.5466009378433228),
  scale: new Vector3(1.0000007152557373, 1.0000003576278687, 0.9999999403953552)
})
plainText60.addComponentOrReplace(transform217)

const blackButton38 = new Entity('blackButton38')
engine.addEntity(blackButton38)
blackButton38.setParent(_scene)
const transform218 = new Transform({
  position: new Vector3(14.604449272155762, 4.825374603271484, 11.934146881103516),
  rotation: new Quaternion(-0.009607255458831787, 0.9903926849365234, -0.09754514694213867, 0.09754516929388046),
  scale: new Vector3(1.0000051259994507, 1.0000070333480835, 1.0000123977661133)
})
blackButton38.addComponentOrReplace(transform218)

const glass19 = new Entity('glass19')
engine.addEntity(glass19)
glass19.setParent(_scene)
glass19.addComponentOrReplace(gltfShape13)
const transform219 = new Transform({
  position: new Vector3(7, 13.808549880981445, 14),
  rotation: new Quaternion(1.9792379591683637e-15, 0.7071067690849304, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(0.9575183391571045, 0.6594662070274353, 0.45819056034088135)
})
glass19.addComponentOrReplace(transform219)

const indicatorArrowGree6 = new Entity('indicatorArrowGree6')
engine.addEntity(indicatorArrowGree6)
indicatorArrowGree6.setParent(_scene)
const transform220 = new Transform({
  position: new Vector3(7.432953357696533, 13.5, 12.395624160766602),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
indicatorArrowGree6.addComponentOrReplace(transform220)

const indicatorArrowGree7 = new Entity('indicatorArrowGree7')
engine.addEntity(indicatorArrowGree7)
indicatorArrowGree7.setParent(_scene)
const transform221 = new Transform({
  position: new Vector3(8.996688842773438, 13.5, 12.395624160766602),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
indicatorArrowGree7.addComponentOrReplace(transform221)

const indicatorArrowGree8 = new Entity('indicatorArrowGree8')
engine.addEntity(indicatorArrowGree8)
indicatorArrowGree8.setParent(_scene)
const transform222 = new Transform({
  position: new Vector3(8.996688842773438, 13.5, 14.85223388671875),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
indicatorArrowGree8.addComponentOrReplace(transform222)

const blackButton39 = new Entity('blackButton39')
engine.addEntity(blackButton39)
blackButton39.setParent(_scene)
const transform223 = new Transform({
  position: new Vector3(10, 13.843620300292969, 12.5),
  rotation: new Quaternion(0.01423686370253563, -0.6342335939407349, -0.017347760498523712, -0.7728157639503479),
  scale: new Vector3(1.0000083446502686, 1.0000070333480835, 1.0000205039978027)
})
blackButton39.addComponentOrReplace(transform223)

const plainText61 = new Entity('plainText61')
engine.addEntity(plainText61)
plainText61.setParent(_scene)
const transform224 = new Transform({
  position: new Vector3(12.424250602722168, 0.17374572157859802, 4.866973400115967),
  rotation: new Quaternion(0.7071068286895752, 9.90122561717044e-9, -8.467051060279118e-8, -0.7071068286895752),
  scale: new Vector3(1, 1.0000004768371582, 1.0000003576278687)
})
plainText61.addComponentOrReplace(transform224)

const toggleButton11 = new Entity('toggleButton11')
engine.addEntity(toggleButton11)
toggleButton11.setParent(_scene)
const transform225 = new Transform({
  position: new Vector3(12.40693473815918, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toggleButton11.addComponentOrReplace(transform225)

const glass20 = new Entity('glass20')
engine.addEntity(glass20)
glass20.setParent(_scene)
glass20.addComponentOrReplace(gltfShape13)
const transform226 = new Transform({
  position: new Vector3(12.40693473815918, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glass20.addComponentOrReplace(transform226)

const blackButton40 = new Entity('blackButton40')
engine.addEntity(blackButton40)
blackButton40.setParent(_scene)
const transform227 = new Transform({
  position: new Vector3(10, 13.843620300292969, 14),
  rotation: new Quaternion(0.01423686370253563, -0.6342335939407349, -0.017347760498523712, -0.7728157639503479),
  scale: new Vector3(1.000008463859558, 1.0000070333480835, 1.0000206232070923)
})
blackButton40.addComponentOrReplace(transform227)

const plainText62 = new Entity('plainText62')
engine.addEntity(plainText62)
plainText62.setParent(_scene)
const transform228 = new Transform({
  position: new Vector3(10.983738899230957, 13.894221305847168, 14),
  rotation: new Quaternion(0.448583722114563, -0.5466010570526123, -0.44858384132385254, -0.546600878238678),
  scale: new Vector3(1.0000003576278687, 1.0000052452087402, 1.000002384185791)
})
plainText62.addComponentOrReplace(transform228)

const plainText63 = new Entity('plainText63')
engine.addEntity(plainText63)
plainText63.setParent(_scene)
const transform229 = new Transform({
  position: new Vector3(11.859435081481934, 13.982295989990234, 11.622479438781738),
  rotation: new Quaternion(-1.0567964636720717e-7, -0.7730105519294739, -0.6343932151794434, 8.940696005765858e-8),
  scale: new Vector3(1.0000011920928955, 1.0000022649765015, 1.0000026226043701)
})
plainText63.addComponentOrReplace(transform229)

const plainText64 = new Entity('plainText64')
engine.addEntity(plainText64)
plainText64.setParent(_scene)
const transform230 = new Transform({
  position: new Vector3(13.047286987304688, 13.982295989990234, 11.49252986907959),
  rotation: new Quaternion(-1.0567964636720717e-7, -0.7730105519294739, -0.6343932151794434, 8.940696005765858e-8),
  scale: new Vector3(1.0000011920928955, 1.0000022649765015, 1.0000026226043701)
})
plainText64.addComponentOrReplace(transform230)

const plainText65 = new Entity('plainText65')
engine.addEntity(plainText65)
plainText65.setParent(_scene)
const transform231 = new Transform({
  position: new Vector3(14.171182632446289, 13.982295989990234, 11.49415111541748),
  rotation: new Quaternion(-1.0567964636720717e-7, -0.7730105519294739, -0.6343932151794434, 8.940696005765858e-8),
  scale: new Vector3(1.0000011920928955, 1.0000022649765015, 1.0000026226043701)
})
plainText65.addComponentOrReplace(transform231)

const plainText66 = new Entity('plainText66')
engine.addEntity(plainText66)
plainText66.setParent(_scene)
const transform232 = new Transform({
  position: new Vector3(15.245856285095215, 13.982295989990234, 11.319245338439941),
  rotation: new Quaternion(-1.0567964636720717e-7, -0.7730105519294739, -0.6343932151794434, 8.940696005765858e-8),
  scale: new Vector3(1.0000011920928955, 1.0000022649765015, 1.0000026226043701)
})
plainText66.addComponentOrReplace(transform232)

const plainText67 = new Entity('plainText67')
engine.addEntity(plainText67)
plainText67.setParent(_scene)
const transform233 = new Transform({
  position: new Vector3(15.5, 13.982295989990234, 9.547232627868652),
  rotation: new Quaternion(-1.0567964636720717e-7, -0.7730105519294739, -0.6343932151794434, 8.940696005765858e-8),
  scale: new Vector3(1.0000016689300537, 1.0000026226043701, 1.0000028610229492)
})
plainText67.addComponentOrReplace(transform233)

const blackButton41 = new Entity('blackButton41')
engine.addEntity(blackButton41)
blackButton41.setParent(_scene)
const transform234 = new Transform({
  position: new Vector3(15.5, 13.843620300292969, 10.452767372131348),
  rotation: new Quaternion(-0.01734783686697483, -0.7728157639503479, -0.014236771501600742, 0.6342335939407349),
  scale: new Vector3(1.0000085830688477, 1.0000070333480835, 1.000022292137146)
})
blackButton41.addComponentOrReplace(transform234)

const blackButton42 = new Entity('blackButton42')
engine.addEntity(blackButton42)
blackButton42.setParent(_scene)
const transform235 = new Transform({
  position: new Vector3(15.35750675201416, 13.843620300292969, 12.224780082702637),
  rotation: new Quaternion(-0.01734783686697483, -0.7728157639503479, -0.014236771501600742, 0.6342335939407349),
  scale: new Vector3(1.000008225440979, 1.0000070333480835, 1.0000211000442505)
})
blackButton42.addComponentOrReplace(transform235)

const blackButton43 = new Entity('blackButton43')
engine.addEntity(blackButton43)
blackButton43.setParent(_scene)
const transform236 = new Transform({
  position: new Vector3(14.109894752502441, 13.843620300292969, 12.220086097717285),
  rotation: new Quaternion(-0.01734783686697483, -0.7728157639503479, -0.014236771501600742, 0.6342335939407349),
  scale: new Vector3(1.000008225440979, 1.0000070333480835, 1.000022292137146)
})
blackButton43.addComponentOrReplace(transform236)

const blackButton44 = new Entity('blackButton44')
engine.addEntity(blackButton44)
blackButton44.setParent(_scene)
const transform237 = new Transform({
  position: new Vector3(13.164082527160645, 13.843620300292969, 12.213042259216309),
  rotation: new Quaternion(-0.01734783686697483, -0.7728157639503479, -0.014236771501600742, 0.6342335939407349),
  scale: new Vector3(1.0000076293945312, 1.0000070333480835, 1.0000193119049072)
})
blackButton44.addComponentOrReplace(transform237)

const blackButton45 = new Entity('blackButton45')
engine.addEntity(blackButton45)
blackButton45.setParent(_scene)
const transform238 = new Transform({
  position: new Vector3(12.105120658874512, 13.843620300292969, 12.228022575378418),
  rotation: new Quaternion(-0.01734783686697483, -0.7728157639503479, -0.014236771501600742, 0.6342335939407349),
  scale: new Vector3(1.000008463859558, 1.0000070333480835, 1.000022292137146)
})
blackButton45.addComponentOrReplace(transform238)

const glass21 = new Entity('glass21')
engine.addEntity(glass21)
glass21.setParent(_scene)
glass21.addComponentOrReplace(gltfShape13)
const transform239 = new Transform({
  position: new Vector3(12.15151309967041, 13.808549880981445, 13.274980545043945),
  rotation: new Quaternion(4.718855277504545e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(0.6405792236328125, 0.6594662070274353, 0.45819056034088135)
})
glass21.addComponentOrReplace(transform239)

const glass22 = new Entity('glass22')
engine.addEntity(glass22)
glass22.setParent(_scene)
glass22.addComponentOrReplace(gltfShape13)
const transform240 = new Transform({
  position: new Vector3(13.210474967956543, 13.808549880981445, 13.264959335327148),
  rotation: new Quaternion(4.718855277504545e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(0.6405792236328125, 0.6594662070274353, 0.45819056034088135)
})
glass22.addComponentOrReplace(transform240)

const glass23 = new Entity('glass23')
engine.addEntity(glass23)
glass23.setParent(_scene)
glass23.addComponentOrReplace(gltfShape13)
const transform241 = new Transform({
  position: new Vector3(14.156288146972656, 13.808549880981445, 13.269670486450195),
  rotation: new Quaternion(4.718855277504545e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(0.6405792236328125, 0.6594662070274353, 0.45819056034088135)
})
glass23.addComponentOrReplace(transform241)

const glass24 = new Entity('glass24')
engine.addEntity(glass24)
glass24.setParent(_scene)
glass24.addComponentOrReplace(gltfShape13)
const transform242 = new Transform({
  position: new Vector3(15.403899192810059, 13.808549880981445, 13.272810935974121),
  rotation: new Quaternion(4.718855277504545e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(0.6405792236328125, 0.6594662070274353, 0.45819056034088135)
})
glass24.addComponentOrReplace(transform242)

const glass25 = new Entity('glass25')
engine.addEntity(glass25)
glass25.setParent(_scene)
glass25.addComponentOrReplace(gltfShape13)
const transform243 = new Transform({
  position: new Vector3(12.15151309967041, 13.808549880981445, 14.451366424560547),
  rotation: new Quaternion(4.718855277504545e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(0.6405792236328125, 0.6594662070274353, 0.45819056034088135)
})
glass25.addComponentOrReplace(transform243)

const glass26 = new Entity('glass26')
engine.addEntity(glass26)
glass26.setParent(_scene)
glass26.addComponentOrReplace(gltfShape13)
const transform244 = new Transform({
  position: new Vector3(13.210474967956543, 13.808549880981445, 14.44134521484375),
  rotation: new Quaternion(4.718855277504545e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(0.6405792236328125, 0.6594662070274353, 0.45819056034088135)
})
glass26.addComponentOrReplace(transform244)

const glass27 = new Entity('glass27')
engine.addEntity(glass27)
glass27.setParent(_scene)
glass27.addComponentOrReplace(gltfShape13)
const transform245 = new Transform({
  position: new Vector3(14.156288146972656, 13.808549880981445, 14.446056365966797),
  rotation: new Quaternion(4.718855277504545e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(0.6405792236328125, 0.6594662070274353, 0.45819056034088135)
})
glass27.addComponentOrReplace(transform245)

const glass28 = new Entity('glass28')
engine.addEntity(glass28)
glass28.setParent(_scene)
glass28.addComponentOrReplace(gltfShape13)
const transform246 = new Transform({
  position: new Vector3(15.403899192810059, 13.808549880981445, 14.449196815490723),
  rotation: new Quaternion(4.718855277504545e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(0.6405792236328125, 0.6594662070274353, 0.45819056034088135)
})
glass28.addComponentOrReplace(transform246)

const indicatorArrowGree9 = new Entity('indicatorArrowGree9')
engine.addEntity(indicatorArrowGree9)
indicatorArrowGree9.setParent(_scene)
const transform247 = new Transform({
  position: new Vector3(13.496688842773438, 16, 14.85223388671875),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
indicatorArrowGree9.addComponentOrReplace(transform247)

const plainText68 = new Entity('plainText68')
engine.addEntity(plainText68)
plainText68.setParent(_scene)
const transform248 = new Transform({
  position: new Vector3(13.547286987304688, 13.982295989990234, 12.99252986907959),
  rotation: new Quaternion(-1.0567964636720717e-7, -0.7730105519294739, -0.6343932151794434, 8.940696005765858e-8),
  scale: new Vector3(1.0000026226043701, 1.0000026226043701, 1.0000029802322388)
})
plainText68.addComponentOrReplace(transform248)

const plainText69 = new Entity('plainText69')
engine.addEntity(plainText69)
plainText69.setParent(_scene)
const transform249 = new Transform({
  position: new Vector3(13.547286987304688, 13.982295989990234, 14.49252986907959),
  rotation: new Quaternion(-1.0567964636720717e-7, -0.7730105519294739, -0.6343932151794434, 8.940696005765858e-8),
  scale: new Vector3(1.0000030994415283, 1.0000027418136597, 1.0000030994415283)
})
plainText69.addComponentOrReplace(transform249)

const floorGlassSmall7 = new Entity('floorGlassSmall7')
engine.addEntity(floorGlassSmall7)
floorGlassSmall7.setParent(_scene)
floorGlassSmall7.addComponentOrReplace(gltfShape5)
const transform250 = new Transform({
  position: new Vector3(8, 4.877594947814941, 11.382484436035156),
  rotation: new Quaternion(1, -1.3623141116507844e-15, -1.1920928955078125e-7, 5.960463766996327e-8),
  scale: new Vector3(1.064210295677185, 1.0000039339065552, 0.4429551362991333)
})
floorGlassSmall7.addComponentOrReplace(transform250)

const hummingbird = new Entity('hummingbird')
engine.addEntity(hummingbird)
hummingbird.setParent(_scene)
const transform251 = new Transform({
  position: new Vector3(7.375714302062988, 1, 12.5),
  rotation: new Quaternion(1.3944656823835447e-15, -1, 1.1920926823449918e-7, -1.4901161193847656e-8),
  scale: new Vector3(0.4999999403953552, 0.5, 0.4999999701976776)
})
hummingbird.addComponentOrReplace(transform251)
const gltfShape15 = new GLTFShape("models/hummingbird.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
hummingbird.addComponentOrReplace(gltfShape15)

const blackButton46 = new Entity('blackButton46')
engine.addEntity(blackButton46)
blackButton46.setParent(_scene)
const transform252 = new Transform({
  position: new Vector3(11, 0.5212550163269043, 1.5),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000014305114746, 1.0000014305114746)
})
blackButton46.addComponentOrReplace(transform252)

const blackButton17 = new Entity('blackButton17')
engine.addEntity(blackButton17)
blackButton17.setParent(_scene)
const transform253 = new Transform({
  position: new Vector3(12, 0.5212550163269043, 1.5),
  rotation: new Quaternion(-0.7071068286895752, 1.5394153601527394e-15, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1, 1.0000016689300537, 1.0000016689300537)
})
blackButton17.addComponentOrReplace(transform253)

const blackButton49 = new Entity('blackButton49')
engine.addEntity(blackButton49)
blackButton49.setParent(_scene)
const transform254 = new Transform({
  position: new Vector3(7, 0, 12),
  rotation: new Quaternion(0.021778998896479607, 1.1842715977861931e-15, -2.59625254628304e-9, 0.9997628331184387),
  scale: new Vector3(1, 1.0000028610229492, 1.0000028610229492)
})
blackButton49.addComponentOrReplace(transform254)

const toggleButton12 = new Entity('toggleButton12')
engine.addEntity(toggleButton12)
toggleButton12.setParent(_scene)
const transform255 = new Transform({
  position: new Vector3(6, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toggleButton12.addComponentOrReplace(transform255)

const toggleButton13 = new Entity('toggleButton13')
engine.addEntity(toggleButton13)
toggleButton13.setParent(_scene)
const transform256 = new Transform({
  position: new Vector3(8, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toggleButton13.addComponentOrReplace(transform256)

const triggerArea11 = new Entity('triggerArea11')
engine.addEntity(triggerArea11)
triggerArea11.setParent(_scene)
const transform257 = new Transform({
  position: new Vector3(8, 13, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(15.831865310668945, 2.607731580734253, 12.928991317749023)
})
triggerArea11.addComponentOrReplace(transform257)

const glass29 = new Entity('glass29')
engine.addEntity(glass29)
glass29.setParent(_scene)
glass29.addComponentOrReplace(gltfShape13)
const transform258 = new Transform({
  position: new Vector3(11.1570463180542, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glass29.addComponentOrReplace(transform258)

const plainText70 = new Entity('plainText70')
engine.addEntity(plainText70)
plainText70.setParent(_scene)
const transform259 = new Transform({
  position: new Vector3(11.174362182617188, 0.17374572157859802, 4.866973400115967),
  rotation: new Quaternion(0.7071068286895752, 9.90122561717044e-9, -8.467051060279118e-8, -0.7071068286895752),
  scale: new Vector3(1, 1.000000238418579, 1.0000001192092896)
})
plainText70.addComponentOrReplace(transform259)

const toggleButton14 = new Entity('toggleButton14')
engine.addEntity(toggleButton14)
toggleButton14.setParent(_scene)
const transform260 = new Transform({
  position: new Vector3(11.1570463180542, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
toggleButton14.addComponentOrReplace(transform260)

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
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script9.init(options)
script10.init(options)
script11.init(options)
script12.init(options)
script1.spawn(blackButton, {"onClick":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"goldenPigStatue","curve":"easeinoutexpo","speed":10,"onComplete":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"cat","curve":"easeinoutsine","speed":10,"onComplete":[]}}]}},{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"spider","curve":"linear","speed":10,"onComplete":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"ballDroid","curve":"easeoutbounce","speed":10,"onComplete":[]}}]}},{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"crow","curve":"easeinoutbounce","speed":10,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"hummingbird","curve":"linear","speed":10,"onComplete":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"pumpkin","curve":"easeinoutbounce","speed":10,"onComplete":[]}}]}}]}, createChannel(channelId, blackButton, channelBus))
script2.spawn(toolboxCE, {"toolboxVersion":"1.0.0","loggingLevel":"DEBUG"}, createChannel(channelId, toolboxCE, channelBus))
script1.spawn(blackButton3, {"onClick":[{"entityName":"toolboxCE","actionId":"faceItem","values":{"target":"goldenPigStatue","targetOfInterest":"pumpkin","curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, blackButton3, channelBus))
script1.spawn(blackButton4, {"onClick":[{"entityName":"toolboxCE","actionId":"faceItem","values":{"target":"goldenPigStatue","targetOfInterest":"spider","curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, blackButton4, channelBus))
script1.spawn(blackButton5, {"onClick":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"goldenPigStatue","curve":"easeinoutexpo","speed":10,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"spider","curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"crow","curve":"easeinoutbounce","speed":10,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"hummingbird","curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"cat","curve":"easeinbounce","speed":10,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"ballDroid","curve":"easeinoutcubic","speed":10,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"pumpkin","curve":"easeoutsine","speed":10,"onComplete":[]}}]}, createChannel(channelId, blackButton5, channelBus))
script1.spawn(blackButton2, {"onClick":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"spider","targetOfInterest":"indicatorArrow","curve":"linear","speed":10,"onComplete":[],"percentOfDistanceToTravel":100,"moveNoCloserThan":0}}]}, createChannel(channelId, blackButton2, channelBus))
script3.spawn(indicatorArrow, {"active":true}, createChannel(channelId, indicatorArrow, channelBus))
script4.spawn(indicatorArrowBlue, {"active":true}, createChannel(channelId, indicatorArrowBlue, channelBus))
script1.spawn(blackButton6, {"onClick":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"spider","targetOfInterest":"indicatorArrowBlue","curve":"linear","speed":10,"onComplete":[],"percentOfDistanceToTravel":100,"moveNoCloserThan":0}}]}, createChannel(channelId, blackButton6, channelBus))
script5.spawn(plainText, {"text":"moveItemTo\nSpider->BlueArrow","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText, channelBus))
script5.spawn(plainText2, {"text":"moveItemTo\nSpider->RedArrow","font":"SF","color":"#808080"}, createChannel(channelId, plainText2, channelBus))
script5.spawn(plainText3, {"text":"lookAtItem\nPig->Pumpkin","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText3, channelBus))
script5.spawn(plainText4, {"text":"click to\nface player","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText4, channelBus))
script5.spawn(plainText5, {"text":"facePlayer\nAll at once","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText5, channelBus))
script5.spawn(plainText6, {"text":"facePlayer\nSome After Transition","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText6, channelBus))
script6.spawn(clickArea, {"enabled":true,"onClickText":"Face Player","button":"POINTER","onClick":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"ballDroid","curve":"easeinoutquadratic","speed":10,"onComplete":[]}}]}, createChannel(channelId, clickArea, channelBus))
script5.spawn(plainText7, {"text":"lookAtItem\nPig->Spider","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText7, channelBus))
script5.spawn(plainText8, {"text":"moveToPlayer\nCat (lock y)","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText8, channelBus))
script1.spawn(blackButton7, {"onClick":[{"entityName":"toolboxCE","actionId":"moveToPlayer","values":{"target":"cat","curve":"linear","speed":10,"onComplete":[],"percentOfDistanceToTravel":100,"moveNoCloserThan":1,"lockY":true}}]}, createChannel(channelId, blackButton7, channelBus))
script1.spawn(blackButton8, {"onClick":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"cat","curve":"linear","speed":10,"onComplete":[{"entityName":"toolboxCE","actionId":"moveToPlayer","values":{"target":"cat","curve":"linear","speed":10,"onComplete":[],"percentOfDistanceToTravel":100,"moveNoCloserThan":1,"lockY":true,"lockZ":false}}],"lockX":true,"lockZ":true}}]}, createChannel(channelId, blackButton8, channelBus))
script5.spawn(plainText9, {"text":"facePlayer\nmoveToPlayer\nCat (lock y)","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText9, channelBus))
script5.spawn(plainText10, {"text":"moveItemTo\nSpider->abs(13,2,9)","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText10, channelBus))
script1.spawn(blackButton9, {"onClick":[{"entityName":"toolboxCE","actionId":"move","values":{"target":"spider","x":13,"y":2,"z":9,"curve":"linear","speed":10,"relative":false,"onComplete":[]}}]}, createChannel(channelId, blackButton9, channelBus))
script1.spawn(blackButton10, {"onClick":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"cat","curve":"linear","speed":10,"onComplete":[{"entityName":"toolboxCE","actionId":"moveToPlayer","values":{"target":"cat","curve":"linear","speed":10,"onComplete":[],"lockY":true}}],"lockX":true,"lockZ":true}}]}, createChannel(channelId, blackButton10, channelBus))
script5.spawn(plainText11, {"text":"facePlayer\nmoveToPlayer\nCat (lock y)","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText11, channelBus))
script6.spawn(clickArea2, {"enabled":true,"onClickText":"Click to move spider here","button":"POINTER","onClick":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"spider","targetOfInterest":"indicatorArrow","curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, clickArea2, channelBus))
script5.spawn(plainText12, {"text":"Please be standing inside parcel when clicking","font":"SF","color":"#808000"}, createChannel(channelId, plainText12, channelBus))
script5.spawn(plainText13, {"text":"Smart Item: Tools Community Edition Demo","font":"SF_Heavy","color":"#00FFFF"}, createChannel(channelId, plainText13, channelBus))
script6.spawn(clickArea3, {"enabled":true,"onClickText":"Stand On Me ","button":"POINTER"}, createChannel(channelId, clickArea3, channelBus))
script6.spawn(clickArea4, {"enabled":true,"onClickText":"Stand on me to go up","button":"POINTER"}, createChannel(channelId, clickArea4, channelBus))
script7.spawn(invisibleWall, {"enabled":false}, createChannel(channelId, invisibleWall, channelBus))
script5.spawn(plainText14, {"text":"OOTB rotate\npig(90,0,90)","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText14, channelBus))
script1.spawn(blackButton11, {"onClick":[{"entityName":"toolboxCE","actionId":"rotate","values":{"target":"goldenPigStatue","x":90,"y":0,"z":90,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, blackButton11, channelBus))
script1.spawn(blackButton12, {"onClick":[{"entityName":"toolboxCE","actionId":"followItemPath","values":{"returnToFirst":true,"speed":10,"onComplete":[],"target":"floorLightDisc2","pathItem1":"indicatorArrowGree","pathItem2":"indicatorArrowGree3","pathItem3":"indicatorArrowGree4","pathItem4":"indicatorArrowGree5","pathItem5":"indicatorArrowGree2","turnToFaceNext":true,"numberOfSegments":26}}]}, createChannel(channelId, blackButton12, channelBus))
script1.spawn(blackButton13, {"onClick":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"orangeGhost","targetOfInterest":"zebraCrossing","percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"easeincubic","speed":1,"onComplete":[],"lockX":true,"lockZ":true,"lockY":false}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"orangeGhost2","targetOfInterest":"zebraCrossing","lockX":true,"lockY":false,"lockZ":true,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"easeinoutsine","speed":1,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"orangeGhost3","targetOfInterest":"zebraCrossing","lockX":true,"lockY":false,"lockZ":true,"percentOfDistanceToTravel":50,"moveNoCloserThan":0,"curve":"linear","speed":1,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"orangeGhost4","targetOfInterest":"zebraCrossing","lockX":true,"lockY":false,"lockZ":true,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"linear","speed":1,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"orangeGhost5","targetOfInterest":"zebraCrossing","lockX":true,"lockY":false,"lockZ":true,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"linear","speed":1,"onComplete":[]}}]}, createChannel(channelId, blackButton13, channelBus))
script1.spawn(blackButton14, {"onClick":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"orangeGhost","targetOfInterest":"zebraCrossing2","percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"easeincubic","speed":10,"onComplete":[],"lockX":true,"lockZ":true,"lockY":false}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"orangeGhost2","targetOfInterest":"zebraCrossing2","lockX":true,"lockY":false,"lockZ":true,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"easeinoutsine","speed":10,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"orangeGhost3","targetOfInterest":"zebraCrossing2","lockX":true,"lockY":false,"lockZ":true,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"orangeGhost4","targetOfInterest":"zebraCrossing2","lockX":true,"lockY":false,"lockZ":true,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"orangeGhost5","targetOfInterest":"zebraCrossing2","lockX":true,"lockY":false,"lockZ":true,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, blackButton14, channelBus))
script5.spawn(plainText15, {"text":"move 100%\nease-in-cubic\nlock x,z axis","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText15, channelBus))
script5.spawn(plainText16, {"text":"move 100%\nease out sine\nlock x,z axis","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText16, channelBus))
script5.spawn(plainText17, {"text":"move 50%\nlinear\nlock x,z axis","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText17, channelBus))
script5.spawn(plainText18, {"text":"race","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText18, channelBus))
script5.spawn(plainText19, {"text":"pause\nresume","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText19, channelBus))
script8.spawn(toggleButton, {"onActivate":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"floorLightDisc","targetOfInterest":"invisibleWall","lockX":false,"lockY":false,"lockZ":false,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"linear","speed":10,"onComplete":[]}}],"onDeactivate":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"floorLightDisc","targetOfInterest":"clickArea4","lockX":false,"lockY":false,"lockZ":false,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, toggleButton, channelBus))
script8.spawn(toggleButton2, {"onActivate":[{"entityName":"toggleButton","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"toggleButton","actionId":"deactivate","values":{}}]}, createChannel(channelId, toggleButton2, channelBus))
script5.spawn(plainText20, {"text":"move 100%\nlinear\nlock x,z axis","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText20, channelBus))
script9.spawn(indicatorArrowGree, {"active":true}, createChannel(channelId, indicatorArrowGree, channelBus))
script9.spawn(indicatorArrowGree2, {"active":true}, createChannel(channelId, indicatorArrowGree2, channelBus))
script9.spawn(indicatorArrowGree3, {"active":true}, createChannel(channelId, indicatorArrowGree3, channelBus))
script9.spawn(indicatorArrowGree4, {"active":true}, createChannel(channelId, indicatorArrowGree4, channelBus))
script9.spawn(indicatorArrowGree5, {"active":true}, createChannel(channelId, indicatorArrowGree5, channelBus))
script1.spawn(blackButton15, {"onClick":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"zebraCrossing","targetOfInterest":"indicatorArrow2","lockX":true,"lockY":false,"lockZ":true,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, blackButton15, channelBus))
script1.spawn(blackButton16, {"onClick":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"zebraCrossing","targetOfInterest":"indicatorArrow3","lockX":true,"lockY":false,"lockZ":true,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, blackButton16, channelBus))
script5.spawn(plainText21, {"text":"long\ntrack","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText21, channelBus))
script5.spawn(plainText22, {"text":"short\ntrack","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText22, channelBus))
script3.spawn(indicatorArrow2, {"active":true}, createChannel(channelId, indicatorArrow2, channelBus))
script3.spawn(indicatorArrow3, {"active":true}, createChannel(channelId, indicatorArrow3, channelBus))
script6.spawn(clickArea5, {"enabled":true,"onClickText":"Face Player","button":"POINTER","onClick":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"pumpkin","curve":"easeinoutquadratic","speed":10,"onComplete":[],"lockY":false,"lockZ":true,"lockX":true,"lockMode":"quaternion"}}]}, createChannel(channelId, clickArea5, channelBus))
script5.spawn(plainText23, {"text":"click to\nface player\nItem Axis\nlock (x,z)","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText23, channelBus))
script5.spawn(plainText24, {"text":"shake |    both    |           fly\nmulti animations at one time\nhumming bird face player \nwhere standing","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText24, channelBus))
script10.spawn(triggerArea5, {"enabled":true,"onEnter":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"hummingbird","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":10,"onComplete":[],"lockMode":"quaternion"}}],"onLeave":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"hummingbird","lockMode":"quaternion","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, triggerArea5, channelBus))
script6.spawn(clickArea6, {"enabled":true,"onClickText":"Click to move spider here","button":"POINTER","onClick":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"spider","targetOfInterest":"indicatorArrowBlue","curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, clickArea6, channelBus))
script1.spawn(blackButton18, {"onClick":[{"entityName":"toolboxCE","actionId":"followItemPath","values":{"returnToFirst":true,"speed":10,"onComplete":[],"target":"bazaarTent","pathItem1":"indicatorArrowGree","pathItem2":"indicatorArrowGree3","pathItem3":"indicatorArrowGree4","pathItem4":"indicatorArrowGree5","pathItem5":"indicatorArrowGree2","lockX":true,"lockY":false,"lockZ":true,"numberOfSegments":26,"turnToFaceNext":true}}]}, createChannel(channelId, blackButton18, channelBus))
script5.spawn(plainText25, {"text":"followPath\nmagicCarpet (2nd fl)\nlock x,z axis","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText25, channelBus))
script5.spawn(plainText26, {"text":"followPath\nlightDisc2 (2nd fl)","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText26, channelBus))
script1.spawn(blackButton19, {"onClick":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"crow","targetOfInterest":"crow2","lockX":false,"lockY":false,"lockZ":false,"percentOfDistanceToTravel":100,"moveNoCloserThan":1,"curve":"linear","speed":10,"onComplete":[],"completeEarlyDistance":0.1}},{"entityName":"toolboxCE","actionId":"faceItem","values":{"target":"crow","targetOfInterest":"crow2","lockMode":"quaternion","lockX":false,"lockY":false,"lockZ":false,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, blackButton19, channelBus))
script5.spawn(plainText27, {"text":"OOTB rotate\npig(0,45,0)","font":"SF","color":"#808080"}, createChannel(channelId, plainText27, channelBus))
script1.spawn(blackButton20, {"onClick":[{"entityName":"toolboxCE","actionId":"rotate","values":{"target":"goldenPigStatue","x":0,"y":45,"z":0,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, blackButton20, channelBus))
script5.spawn(plainText28, {"text":"face+move \nat same time\nbird->bird\nmax 1 distance","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText28, channelBus))
script5.spawn(plainText29, {"text":"followPath\nglass\nrerturnFirst:false\nfaceForard:false","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText29, channelBus))
script5.spawn(plainText30, {"text":"followPath\nlightDisc2","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText30, channelBus))
script1.spawn(blackButton22, {"onClick":[{"entityName":"toolboxCE","actionId":"followItemPath","values":{"returnToFirst":true,"speed":12,"onComplete":[],"target":"floorLightDisc2","pathItem1":"indicatorArrowGree","pathItem2":"indicatorArrowGree3","pathItem3":"indicatorArrowGree4","pathItem4":"indicatorArrowGree5","pathItem5":"indicatorArrowGree2","numberOfSegments":26,"turnToFaceNext":true}}]}, createChannel(channelId, blackButton22, channelBus))
script1.spawn(blackButton21, {"onClick":[{"entityName":"toolboxCE","actionId":"followItemPath","values":{"returnToFirst":false,"speed":12,"onComplete":[],"target":"glass13","pathItem1":"indicatorArrowGree","pathItem2":"indicatorArrowGree3","pathItem3":"indicatorArrowGree4","pathItem4":"indicatorArrowGree5","pathItem5":"indicatorArrowGree2","lockX":true,"lockZ":true,"numberOfSegments":26,"turnToFaceNext":false,"lockY":true,"repeatAction":"none"}}]}, createChannel(channelId, blackButton21, channelBus))
script5.spawn(plainText31, {"text":"OOTB \nprintMsg","font":"SF","color":"#808080"}, createChannel(channelId, plainText31, channelBus))
script1.spawn(blackButton23, {"onClick":[{"entityName":"toolboxCE","actionId":"print","values":{"message":"Testing out of the box (OOTB) print message","duration":5,"multiplayer":false}}]}, createChannel(channelId, blackButton23, channelBus))
script11.spawn(spark, {"active":true}, createChannel(channelId, spark, channelBus))
script6.spawn(clickArea7, {"enabled":true,"onClickText":"Lots Of Animation Demo","button":"POINTER","onClick":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"spark","targetOfInterest":"invisibleWall2","lockX":false,"lockY":false,"lockZ":false,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"linear","speed":2,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"glass","targetOfInterest":"invisibleWall2","lockX":false,"lockY":false,"lockZ":false,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"linear","speed":2,"onComplete":[{"entityName":"toolboxCE","actionId":"rotate","values":{"target":"glass","x":0,"y":180,"z":0,"curve":"linear","speed":2,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"scale","values":{"target":"glass","x":2,"y":2,"z":2,"curve":"linear","speed":2,"onComplete":[{"entityName":"toolboxCE","actionId":"scale","values":{"target":"glass","x":0.001,"y":0.001,"z":0.001,"curve":"easeinoutcubic","speed":10,"onComplete":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"glass","targetOfInterest":"clickArea7","lockX":false,"lockY":false,"lockZ":false,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"linear","speed":14,"onComplete":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"spark","targetOfInterest":"bazaarTent","lockX":false,"lockY":false,"lockZ":false,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"spark2","targetOfInterest":"scaryTree","lockX":false,"lockY":false,"lockZ":false,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"linear","speed":10,"onComplete":[]}}]}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"spark3","targetOfInterest":"ballDroid","lockX":false,"lockY":false,"lockZ":false,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"linear","speed":10,"onComplete":[{"entityName":"toolboxCE","actionId":"scale","values":{"target":"glass","x":1,"y":1,"z":1,"curve":"linear","speed":10,"onComplete":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"spark","targetOfInterest":"glass","lockX":false,"lockY":false,"lockZ":false,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"spark2","targetOfInterest":"glass","lockX":false,"lockY":false,"lockZ":false,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"spark3","targetOfInterest":"glass","lockX":false,"lockY":false,"lockZ":false,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"linear","speed":10,"onComplete":[{"entityName":"spark","actionId":"deactivate","values":{}},{"entityName":"spark2","actionId":"deactivate","values":{}},{"entityName":"spark3","actionId":"deactivate","values":{}}]}}]}}]}}]}}]}}]}},{"entityName":"toolboxCE","actionId":"rotate","values":{"target":"glass","x":0,"y":180,"z":0,"curve":"linear","speed":2,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"spark2","targetOfInterest":"invisibleWall2","lockX":false,"lockY":false,"lockZ":false,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"linear","speed":2,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"spark3","targetOfInterest":"invisibleWall2","lockX":false,"lockY":false,"lockZ":false,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"linear","speed":2,"onComplete":[]}},{"entityName":"spark","actionId":"activate","values":{}},{"entityName":"spark2","actionId":"activate","values":{}},{"entityName":"spark3","actionId":"activate","values":{}}]}, createChannel(channelId, clickArea7, channelBus))
script7.spawn(invisibleWall2, {"enabled":false}, createChannel(channelId, invisibleWall2, channelBus))
script11.spawn(spark2, {"active":true}, createChannel(channelId, spark2, channelBus))
script11.spawn(spark3, {"active":true}, createChannel(channelId, spark3, channelBus))
script8.spawn(toggleButton3, {"onActivate":[{"entityName":"toolboxCE","actionId":"scale","values":{"target":"pumpkin6","x":2,"y":2,"z":2,"curve":"linear","speed":3,"onComplete":[]}}],"onDeactivate":[{"entityName":"toolboxCE","actionId":"scale","values":{"target":"pumpkin6","x":1,"y":1,"z":1,"curve":"linear","speed":9,"onComplete":[]}}]}, createChannel(channelId, toggleButton3, channelBus))
script8.spawn(toggleButton4, {"onActivate":[{"entityName":"toolboxCE","actionId":"attachToItem","values":{"target":"pumpkin5","targetOfInterest":"pumpkin6","preserveScale":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"attachToItem","values":{"target":"pumpkin4","targetOfInterest":"pumpkin6","preserveScale":true,"onComplete":[]}}],"onDeactivate":[{"entityName":"toolboxCE","actionId":"detachFromItem","values":{"target":"pumpkin4","onComplete":[],"targetOfInterest":"pumpkin6"}},{"entityName":"toolboxCE","actionId":"detachFromItem","values":{"target":"pumpkin5","targetOfInterest":"pumpkin6","onComplete":[]}}]}, createChannel(channelId, toggleButton4, channelBus))
script8.spawn(toggleButton5, {"onActivate":[{"entityName":"toolboxCE","actionId":"rotate","values":{"target":"pumpkin6","x":0,"y":180,"z":0,"curve":"linear","speed":3,"repeatAction":"abolute","onComplete":[]}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"pumpkin6","controlMode":"resume","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}}],"onDeactivate":[{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"pumpkin6","controlMode":"pause","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}}]}, createChannel(channelId, toggleButton5, channelBus))
script5.spawn(plainText32, {"text":"scale\nup/down","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText32, channelBus))
script5.spawn(plainText33, {"text":"rotate\nstart/stop","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText33, channelBus))
script5.spawn(plainText34, {"text":"attach/detach","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText34, channelBus))
script5.spawn(plainText35, {"text":"reset","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText35, channelBus))
script8.spawn(toggleButton6, {"onActivate":[{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"orangeGhost5","curve":"pause","tweenControlMove":true,"tweenControlRotate":false,"tweenControlScale":true,"onComplete":[],"controlMode":"pause"}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"orangeGhost2","controlMode":"pause","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"orangeGhost","controlMode":"pause","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"orangeGhost4","controlMode":"pause","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}}],"onDeactivate":[{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"orangeGhost5","curve":"resume","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[],"controlMode":"resume"}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"orangeGhost2","controlMode":"resume","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"orangeGhost","controlMode":"resume","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"orangeGhost4","controlMode":"resume","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}}]}, createChannel(channelId, toggleButton6, channelBus))
script6.spawn(clickArea8, {"enabled":true,"onClickText":"Face Player","button":"POINTER","onClick":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"pumpkin2","curve":"easeinoutquadratic","speed":10,"onComplete":[],"lockY":false,"lockZ":true,"lockX":true,"lockMode":"quaternion"}}]}, createChannel(channelId, clickArea8, channelBus))
script6.spawn(clickArea9, {"enabled":true,"onClickText":"Face Player","button":"POINTER","onClick":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"pumpkin3","curve":"easeinoutquadratic","speed":10,"onComplete":[],"lockY":false,"lockZ":true,"lockX":true,"lockMode":"euler"}}]}, createChannel(channelId, clickArea9, channelBus))
script5.spawn(plainText36, {"text":"move 100%\nlinear (slow)\nuse \npause/resume","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText36, channelBus))
script5.spawn(plainText37, {"text":"click to\nface player\nScene Axis\nlock (x,z)","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText37, channelBus))
script5.spawn(plainText38, {"text":"click to\nface player\nItem Axis\nlock (x,z)","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText38, channelBus))
script8.spawn(toggleButton7, {"onActivate":[{"entityName":"toolboxCE","actionId":"rotate","values":{"target":"pumpkin6","x":30,"y":30,"z":30,"curve":"linear","speed":8,"repeatAction":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"pumpkin6","controlMode":"resume","tweenControlMove":false,"tweenControlRotate":true,"tweenControlScale":false,"onComplete":[]}}],"onDeactivate":[{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"pumpkin6","controlMode":"pause","tweenControlMove":false,"tweenControlRotate":true,"tweenControlScale":false,"onComplete":[]}}]}, createChannel(channelId, toggleButton7, channelBus))
script10.spawn(triggerArea, {"enabled":true,"onEnter":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"hummingbird","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":10,"onComplete":[],"lockMode":"quaternion"}}],"onLeave":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"hummingbird","lockMode":"quaternion","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, triggerArea, channelBus))
script10.spawn(triggerArea2, {"enabled":true,"onEnter":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"hummingbird","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":10,"onComplete":[],"lockMode":"quaternion"}}],"onLeave":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"hummingbird","lockMode":"quaternion","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, triggerArea2, channelBus))
script10.spawn(triggerArea3, {"enabled":true,"onEnter":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"hummingbird","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":10,"onComplete":[],"lockMode":"quaternion"}}],"onLeave":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"hummingbird","lockMode":"quaternion","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, triggerArea3, channelBus))
script10.spawn(triggerArea4, {"enabled":true,"onEnter":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"hummingbird","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":9,"onComplete":[],"lockMode":"quaternion"}}],"onLeave":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"hummingbird","lockMode":"quaternion","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, triggerArea4, channelBus))
script10.spawn(triggerArea6, {"enabled":true,"onEnter":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"hummingbird","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":10,"onComplete":[],"lockMode":"quaternion"}}],"onLeave":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"hummingbird","lockMode":"quaternion","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, triggerArea6, channelBus))
script10.spawn(triggerArea7, {"enabled":true,"onEnter":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"hummingbird","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":10,"onComplete":[],"lockMode":"quaternion"}}],"onLeave":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"hummingbird","lockMode":"quaternion","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, triggerArea7, channelBus))
script10.spawn(triggerArea8, {"enabled":true,"onEnter":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"hummingbird","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":10,"onComplete":[],"lockMode":"quaternion"}}],"onLeave":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"hummingbird","lockMode":"quaternion","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, triggerArea8, channelBus))
script10.spawn(triggerArea9, {"enabled":true,"onEnter":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"hummingbird","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":10,"onComplete":[],"lockMode":"quaternion"}}],"onLeave":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"hummingbird","lockMode":"quaternion","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, triggerArea9, channelBus))
script10.spawn(triggerArea10, {"enabled":true,"onEnter":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"hummingbird","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":10,"onComplete":[],"lockMode":"quaternion"}}],"onLeave":[{"entityName":"toolboxCE","actionId":"facePlayer","values":{"target":"hummingbird","lockMode":"quaternion","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, triggerArea10, channelBus))
script8.spawn(toggleButton8, {"onActivate":[{"entityName":"toolboxCE","actionId":"sceneAddRemove","values":{"target":"glass2","sceneAddRemove":"remove"}}],"onDeactivate":[{"entityName":"toolboxCE","actionId":"sceneAddRemove","values":{"target":"glass2","sceneAddRemove":"add"}}]}, createChannel(channelId, toggleButton8, channelBus))
script5.spawn(plainText39, {"text":"engine\nadd/remove","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText39, channelBus))
script8.spawn(toggleButton9, {"onActivate":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"floorLightDisc","targetOfInterest":"invisibleWall3","lockX":false,"lockY":false,"lockZ":false,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"linear","speed":6,"onComplete":[]}}],"onDeactivate":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"floorLightDisc","targetOfInterest":"clickArea4","lockX":false,"lockY":false,"lockZ":false,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, toggleButton9, channelBus))
script7.spawn(invisibleWall3, {"enabled":false}, createChannel(channelId, invisibleWall3, channelBus))
script5.spawn(plainText40, {"text":"2nd floor","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText40, channelBus))
script5.spawn(plainText41, {"text":"3rd floor","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText41, channelBus))
script12.spawn(externalLink, {"url":"https://github.com/wacaine/dcl-smart-items-ce/tree/master/tools-ce","name":"Codebase"}, createChannel(channelId, externalLink, channelBus))
script5.spawn(plainText42, {"text":"Codebase","font":"SF","color":"#808080"}, createChannel(channelId, plainText42, channelBus))
script8.spawn(toggleButton10, {"onActivate":[{"entityName":"toolboxCE","actionId":"attachToItem","values":{"target":"glass3","targetOfInterest":"pumpkin6","preserveScale":true,"onComplete":[],"attachToOrigin":true}}],"onDeactivate":[{"entityName":"toolboxCE","actionId":"detachFromItem","values":{"target":"glass3","targetOfInterest":"pumpkin6","onComplete":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"glass3","targetOfInterest":"pumpkin4","lockX":false,"lockY":false,"lockZ":false,"percentOfDistanceToTravel":100,"moveNoCloserThan":0,"curve":"linear","speed":10,"onComplete":[]}}]}}]}, createChannel(channelId, toggleButton10, channelBus))
script1.spawn(blackButton24, {"onClick":[{"entityName":"toolboxCE","actionId":"attachToItem","values":{"target":"glass4","targetOfInterest":"pumpkin3","attachToOrigin":true,"x":0,"y":0,"z":0,"preserveScale":true,"onComplete":[]}}]}, createChannel(channelId, blackButton24, channelBus))
script5.spawn(plainText43, {"text":"View Proposal","font":"SF","color":"#808080"}, createChannel(channelId, plainText43, channelBus))
script12.spawn(externalLink2, {"url":"https://governance.decentraland.org/en/proposal/?id=ba798f30-d382-11eb-b705-3db38bad850a","name":"Grant Proposal"}, createChannel(channelId, externalLink2, channelBus))
script5.spawn(plainText44, {"text":"rotate\nrepeat-abs","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText44, channelBus))
script1.spawn(blackButton25, {"onClick":[{"entityName":"toolboxCE","actionId":"rotate","values":{"target":"glass5","x":0,"y":90,"z":0,"curve":"linear","speed":10,"repeatAction":"abolute","onComplete":[]}}]}, createChannel(channelId, blackButton25, channelBus))
script1.spawn(blackButton26, {"onClick":[{"entityName":"toolboxCE","actionId":"rotate","values":{"target":"glass6","x":0,"y":90,"z":0,"curve":"linear","speed":10,"repeatAction":"relative","onComplete":[]}}]}, createChannel(channelId, blackButton26, channelBus))
script5.spawn(plainText45, {"text":"rotate\nrepeat-rel","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText45, channelBus))
script5.spawn(plainText46, {"text":"rotate\nrepeat: no","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText46, channelBus))
script1.spawn(blackButton27, {"onClick":[{"entityName":"toolboxCE","actionId":"rotate","values":{"target":"glass7","x":0,"y":90,"z":0,"curve":"linear","speed":10,"repeatAction":"none","onComplete":[]}}]}, createChannel(channelId, blackButton27, channelBus))
script1.spawn(blackButton28, {"onClick":[{"entityName":"toolboxCE","actionId":"rotate","values":{"target":"glass8","x":0,"y":90,"z":0,"curve":"linear","speed":10,"repeatAction":"reverse","onComplete":[]}}]}, createChannel(channelId, blackButton28, channelBus))
script5.spawn(plainText47, {"text":"rotate\nrepeat-reverse","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText47, channelBus))
script3.spawn(indicatorArrow4, {"active":true}, createChannel(channelId, indicatorArrow4, channelBus))
script6.spawn(clickArea10, {"enabled":true,"onClickText":"Click to move bird here","button":"POINTER","onClick":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"crow2","targetOfInterest":"indicatorArrow4","curve":"linear","speed":10,"onComplete":[],"lockY":false}},{"entityName":"toolboxCE","actionId":"faceItem","values":{"target":"crow2","targetOfInterest":"indicatorArrow4","lockMode":"quaternion","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, clickArea10, channelBus))
script6.spawn(clickArea11, {"enabled":true,"onClickText":"Click to move bird here","button":"POINTER","onClick":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"crow","targetOfInterest":"indicatorArrow5","curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"faceItem","values":{"target":"crow","targetOfInterest":"indicatorArrow5","lockMode":"quaternion","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, clickArea11, channelBus))
script3.spawn(indicatorArrow5, {"active":true}, createChannel(channelId, indicatorArrow5, channelBus))
script1.spawn(blackButton29, {"onClick":[{"entityName":"toolboxCE","actionId":"scale","values":{"target":"glass12","x":1,"y":2,"z":1,"curve":"linear","speed":10,"onComplete":[],"repeatAction":"reverse"}}]}, createChannel(channelId, blackButton29, channelBus))
script5.spawn(plainText48, {"text":"scale\nrepeat-reverse","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText48, channelBus))
script5.spawn(plainText49, {"text":"scale\nrepeat-rel","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText49, channelBus))
script1.spawn(blackButton30, {"onClick":[{"entityName":"toolboxCE","actionId":"scale","values":{"target":"glass11","x":1,"y":2,"z":1,"curve":"linear","speed":11,"onComplete":[],"repeatAction":"relative"}},{"entityName":"toolboxCE","actionId":"delay","values":{"timeout":2,"onTimeout":[{"entityName":"toolboxCE","actionId":"scale","values":{"target":"glass11","x":1,"y":1,"z":1,"curve":"linear","speed":20,"repeatAction":"none","onComplete":[{"entityName":"toolboxCE","actionId":"print","values":{"message":"Had to stop or it would take over scene","duration":5,"multiplayer":false}}]}}]}}]}, createChannel(channelId, blackButton30, channelBus))
script1.spawn(blackButton31, {"onClick":[{"entityName":"toolboxCE","actionId":"scale","values":{"target":"glass10","x":1,"y":2,"z":1,"curve":"linear","speed":10,"onComplete":[],"repeatAction":"absolute"}}]}, createChannel(channelId, blackButton31, channelBus))
script5.spawn(plainText50, {"text":"scale\nrepeat-abs","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText50, channelBus))
script1.spawn(blackButton32, {"onClick":[{"entityName":"toolboxCE","actionId":"scale","values":{"target":"glass9","x":1,"y":2,"z":1,"curve":"linear","speed":10,"onComplete":[],"repeatAction":"none"}}]}, createChannel(channelId, blackButton32, channelBus))
script5.spawn(plainText51, {"text":"scale\nrepeat: no","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText51, channelBus))
script5.spawn(plainText52, {"text":"stop scale \nstop rotations","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText52, channelBus))
script1.spawn(blackButton33, {"onClick":[{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"glass12","controlMode":"stop","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"glass11","controlMode":"stop","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"glass10","controlMode":"stop","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":false,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"glass9","controlMode":"stop","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"glass8","controlMode":"stop","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"glass7","controlMode":"stop","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"glass6","controlMode":"stop","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"glass5","controlMode":"stop","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}}]}, createChannel(channelId, blackButton33, channelBus))
script5.spawn(plainText53, {"text":"face+move \nat same time\nbird<->bird\n45% distance","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText53, channelBus))
script1.spawn(blackButton34, {"onClick":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"crow","targetOfInterest":"crow2","lockX":false,"lockY":false,"lockZ":false,"percentOfDistanceToTravel":45,"moveNoCloserThan":1,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"crow2","targetOfInterest":"crow","lockX":false,"lockY":false,"lockZ":false,"percentOfDistanceToTravel":45,"moveNoCloserThan":1,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"faceItem","values":{"target":"crow","targetOfInterest":"crow2","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":10,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"faceItem","values":{"target":"crow2","targetOfInterest":"crow","lockX":true,"lockY":false,"lockZ":true,"curve":"linear","speed":10,"onComplete":[]}}]}, createChannel(channelId, blackButton34, channelBus))
script1.spawn(blackButton35, {"onClick":[{"entityName":"toolboxCE","actionId":"followItemPath","values":{"returnToFirst":true,"speed":12,"onComplete":[],"target":"bazaarTent","pathItem1":"indicatorArrowGree","pathItem2":"indicatorArrowGree3","pathItem3":"indicatorArrowGree4","pathItem4":"indicatorArrowGree5","pathItem5":"indicatorArrowGree2","lockX":true,"lockZ":true,"numberOfSegments":26,"turnToFaceNext":true}}]}, createChannel(channelId, blackButton35, channelBus))
script5.spawn(plainText54, {"text":"followPath\nmagicCarpet\nlock x,z","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText54, channelBus))
script5.spawn(plainText55, {"text":"View Proposal","font":"SF","color":"#808080"}, createChannel(channelId, plainText55, channelBus))
script12.spawn(externalLink3, {"url":"https://governance.decentraland.org/en/proposal/?id=ba798f30-d382-11eb-b705-3db38bad850a","name":"Grant Proposal"}, createChannel(channelId, externalLink3, channelBus))
script1.spawn(blackButton36, {"onClick":[{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"glass14","controlMode":"pause","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"glass15","controlMode":"pause","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"glass16","controlMode":"pause","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":false,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"indicatorArrow6","controlMode":"pause","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}}]}, createChannel(channelId, blackButton36, channelBus))
script3.spawn(indicatorArrow6, {"active":true}, createChannel(channelId, indicatorArrow6, channelBus))
script3.spawn(indicatorArrow7, {"active":true}, createChannel(channelId, indicatorArrow7, channelBus))
script1.spawn(blackButton37, {"onClick":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"indicatorArrow6","targetOfInterest":"indicatorArrow7","lockX":false,"lockY":false,"lockZ":false,"moveNoCloserThan":0,"percentOfDistanceToTravel":100,"curve":"linear","repeatAction":"absolute","trackingType":"current","speed":3,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"glass14","targetOfInterest":"indicatorArrow6","lockX":true,"lockY":false,"lockZ":false,"moveNoCloserThan":0,"percentOfDistanceToTravel":100,"curve":"linear","repeatAction":"absolute","trackingType":"current","speed":3,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"glass15","targetOfInterest":"indicatorArrow6","lockX":true,"lockY":false,"lockZ":false,"moveNoCloserThan":0,"percentOfDistanceToTravel":100,"curve":"linear","repeatAction":"absolute","trackingType":"meet","speed":3,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"glass16","targetOfInterest":"indicatorArrow6","lockX":true,"lockY":false,"lockZ":false,"moveNoCloserThan":0,"percentOfDistanceToTravel":100,"curve":"linear","repeatAction":"absolute","trackingType":"follow","speed":3,"onComplete":[]}}]}, createChannel(channelId, blackButton37, channelBus))
script5.spawn(plainText56, {"text":"follow items\nabs","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText56, channelBus))
script5.spawn(plainText57, {"text":"move\nabs\ncurrent","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText57, channelBus))
script5.spawn(plainText58, {"text":"move\nabs\nmeet","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText58, channelBus))
script5.spawn(plainText59, {"text":"move\nabs\nfollow","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText59, channelBus))
script5.spawn(plainText60, {"text":"attach/detach","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText60, channelBus))
script1.spawn(blackButton38, {"onClick":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"glass17","targetOfInterest":"floorLightDisc2","lockX":false,"lockY":false,"lockZ":false,"moveNoCloserThan":2,"percentOfDistanceToTravel":100,"curve":"linear","repeatAction":"relative","trackingType":"follow","speed":14,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"glass18","targetOfInterest":"glass17","lockX":false,"lockY":false,"lockZ":false,"moveNoCloserThan":1,"percentOfDistanceToTravel":100,"curve":"linear","repeatAction":"relative","trackingType":"follow","speed":13,"onComplete":[]}}]}, createChannel(channelId, blackButton38, channelBus))
script9.spawn(indicatorArrowGree6, {"active":false}, createChannel(channelId, indicatorArrowGree6, channelBus))
script9.spawn(indicatorArrowGree7, {"active":false}, createChannel(channelId, indicatorArrowGree7, channelBus))
script9.spawn(indicatorArrowGree8, {"active":false}, createChannel(channelId, indicatorArrowGree8, channelBus))
script1.spawn(blackButton39, {"onClick":[{"entityName":"toolboxCE","actionId":"followItemPath","values":{"target":"glass19","pathItem1":"indicatorArrowGree6","pathItem2":"indicatorArrowGree7","pathItem3":"indicatorArrowGree8","returnToFirst":false,"turnToFaceNext":true,"numberOfSegments":10,"lockX":false,"lockY":false,"lockZ":false,"repeatAction":"absolute","speed":20,"onComplete":[]}}]}, createChannel(channelId, blackButton39, channelBus))
script5.spawn(plainText61, {"text":"move\ninstantly","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText61, channelBus))
script8.spawn(toggleButton11, {"onActivate":[{"entityName":"toolboxCE","actionId":"move","values":{"target":"glass20","x":0,"y":1,"z":0,"curve":"instantaneous-in","repeatAction":"none","speed":10,"relative":true,"onComplete":[]}}],"onDeactivate":[{"entityName":"toolboxCE","actionId":"move","values":{"target":"glass20","x":0,"y":-1,"z":0,"curve":"instantaneous-in","repeatAction":"none","speed":10,"relative":true,"onComplete":[]}}]}, createChannel(channelId, toggleButton11, channelBus))
script1.spawn(blackButton40, {"onClick":[{"entityName":"toolboxCE","actionId":"followItemPath","values":{"target":"glass19","pathItem1":"indicatorArrowGree6","pathItem2":"indicatorArrowGree7","pathItem3":"indicatorArrowGree8","returnToFirst":false,"turnToFaceNext":true,"numberOfSegments":10,"lockX":false,"lockY":false,"lockZ":false,"repeatAction":"reverse","speed":20,"onComplete":[]}}]}, createChannel(channelId, blackButton40, channelBus))
script5.spawn(plainText62, {"text":"follow items\nmirror","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText62, channelBus))
script5.spawn(plainText63, {"text":"move\nrepeat: no","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText63, channelBus))
script5.spawn(plainText64, {"text":"move\nrepeat-abs","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText64, channelBus))
script5.spawn(plainText65, {"text":"move\nrepeat-rel","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText65, channelBus))
script5.spawn(plainText66, {"text":"move\nrepeat-reverse","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText66, channelBus))
script5.spawn(plainText67, {"text":"reset moves","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText67, channelBus))
script1.spawn(blackButton41, {"onClick":[{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"glass12","controlMode":"stop","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"glass11","controlMode":"stop","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"glass10","controlMode":"stop","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":false,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"glass9","controlMode":"stop","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"glass8","controlMode":"stop","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"glass7","controlMode":"stop","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"glass6","controlMode":"stop","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"tweenControlAction","values":{"target":"glass5","controlMode":"stop","tweenControlMove":true,"tweenControlRotate":true,"tweenControlScale":true,"onComplete":[]}}]}, createChannel(channelId, blackButton41, channelBus))
script1.spawn(blackButton42, {"onClick":[{"entityName":"toolboxCE","actionId":"move","values":{"target":"glass24","x":0,"y":1,"z":0,"curve":"linear","repeatAction":"reverse","speed":10,"relative":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"glass28","targetOfInterest":"indicatorArrowGree9","lockX":true,"lockY":false,"lockZ":true,"moveNoCloserThan":0,"percentOfDistanceToTravel":100,"curve":"linear","repeatAction":"reverse","trackingType":"current","speed":10,"onComplete":[]}}]}, createChannel(channelId, blackButton42, channelBus))
script1.spawn(blackButton43, {"onClick":[{"entityName":"toolboxCE","actionId":"move","values":{"target":"glass23","x":0,"y":1,"z":0,"curve":"linear","repeatAction":"relative","speed":10,"relative":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"delay","values":{"timeout":2,"onTimeout":[{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"glass23","targetOfInterest":"blackButton43","lockX":true,"lockY":false,"lockZ":true,"moveNoCloserThan":0,"percentOfDistanceToTravel":100,"curve":"linear","repeatAction":"none","trackingType":"current","speed":10,"onComplete":[{"entityName":"toolboxCE","actionId":"print","values":{"message":"Stopped and put back. If did not it would leave scene","duration":5,"multiplayer":false}}]}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"glass27","targetOfInterest":"blackButton43","lockX":true,"lockY":false,"lockZ":true,"moveNoCloserThan":0,"percentOfDistanceToTravel":100,"curve":"linear","repeatAction":"none","trackingType":"current","speed":10,"onComplete":[]}}]}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"glass27","targetOfInterest":"indicatorArrowGree9","lockX":true,"lockY":false,"lockZ":true,"moveNoCloserThan":0,"percentOfDistanceToTravel":100,"curve":"linear","repeatAction":"relative","trackingType":"current","speed":10,"onComplete":[]}}]}, createChannel(channelId, blackButton43, channelBus))
script1.spawn(blackButton44, {"onClick":[{"entityName":"toolboxCE","actionId":"move","values":{"target":"glass22","x":0,"y":1,"z":0,"curve":"linear","repeatAction":"absolute","speed":10,"relative":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"glass26","targetOfInterest":"indicatorArrowGree9","lockX":true,"lockY":false,"lockZ":true,"moveNoCloserThan":0,"percentOfDistanceToTravel":100,"curve":"linear","repeatAction":"absolute","trackingType":"current","speed":10,"onComplete":[]}}]}, createChannel(channelId, blackButton44, channelBus))
script1.spawn(blackButton45, {"onClick":[{"entityName":"toolboxCE","actionId":"move","values":{"target":"glass21","x":0,"y":1,"z":0,"curve":"linear","repeatAction":"none","speed":10,"relative":true,"onComplete":[]}},{"entityName":"toolboxCE","actionId":"moveToItem","values":{"target":"glass25","targetOfInterest":"indicatorArrowGree9","lockX":true,"lockY":false,"lockZ":true,"moveNoCloserThan":0,"percentOfDistanceToTravel":100,"curve":"linear","repeatAction":"none","trackingType":"current","speed":10,"onComplete":[]}}]}, createChannel(channelId, blackButton45, channelBus))
script9.spawn(indicatorArrowGree9, {"active":false}, createChannel(channelId, indicatorArrowGree9, channelBus))
script5.spawn(plainText68, {"text":"this row move-relative","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText68, channelBus))
script5.spawn(plainText69, {"text":"this row move to item (green arrow above)","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText69, channelBus))
script1.spawn(blackButton46, {"onClick":[{"entityName":"toolboxCE","actionId":"animate","values":{"target":"hummingbird","animAction":"play","animation":"look","speed":0.8,"loop":false,"layer":1}}]}, createChannel(channelId, blackButton46, channelBus))
script1.spawn(blackButton17, {"onClick":[{"entityName":"toolboxCE","actionId":"faceItem","values":{"lockMode":"quaternion","lockX":false,"lockY":false,"lockZ":false,"curve":"linear","repeatAction":"none","trackingType":"current","speed":1,"onComplete":[]}}]}, createChannel(channelId, blackButton17, channelBus))
script1.spawn(blackButton49, {"onClick":[{"entityName":"toggleButton13","actionId":"activate","values":{}},{"entityName":"toggleButton12","actionId":"activate","values":{}}]}, createChannel(channelId, blackButton49, channelBus))
script8.spawn(toggleButton12, {"onActivate":[{"entityName":"toolboxCE","actionId":"animate","values":{"target":"hummingbird","animAction":"play","animation":"look","speed":1,"loop":true,"layer":0}}],"onDeactivate":[{"entityName":"toolboxCE","actionId":"animate","values":{"target":"hummingbird","animAction":"pause","animation":"look","speed":1,"loop":true,"layer":0}}]}, createChannel(channelId, toggleButton12, channelBus))
script8.spawn(toggleButton13, {"onActivate":[{"entityName":"toolboxCE","actionId":"animate","values":{"target":"hummingbird","animAction":"play","animation":"fly","speed":1,"loop":true,"layer":1}}],"onDeactivate":[{"entityName":"toolboxCE","actionId":"animate","values":{"target":"hummingbird","animAction":"pause","animation":"fly","speed":1,"loop":true,"layer":1}}]}, createChannel(channelId, toggleButton13, channelBus))
script10.spawn(triggerArea11, {"enabled":true,"onEnter":[{"entityName":"toolboxCE","actionId":"sceneAddRemove","values":{"targets":"plainText(44|45|46|47|48|49|50|51|52|56|57|58|59|60|61|62|63|64|65|65|66|67)","sceneAddRemove":"add","multiplayer":false}}],"onLeave":[{"entityName":"toolboxCE","actionId":"sceneAddRemove","values":{"targets":"plainText(44|45|46|47|48|49|50|51|52|56|57|58|59|60|61|62|63|64|65|65|66|67)","sceneAddRemove":"remove","multiplayer":false}}]}, createChannel(channelId, triggerArea11, channelBus))
script5.spawn(plainText70, {"text":"show/hide","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText70, channelBus))
script8.spawn(toggleButton14, {"onActivate":[{"entityName":"toolboxCE","actionId":"sceneShowHide","values":{"target":"glass29","sceneHideShow":"hide","multiplayer":true}}],"onDeactivate":[{"entityName":"toolboxCE","actionId":"sceneShowHide","values":{"target":"glass29","sceneHideShow":"show","multiplayer":true}}]}, createChannel(channelId, toggleButton14, channelBus))