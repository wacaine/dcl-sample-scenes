# Smart Item: Toolbox CE


<img src="docs/screenshots/toolbox-ce.png" width="150">

Here you can find feature decriptions here. Here you'll find links to:


- [Face Player](#Face-Player) 
- [Face Item](#Face-Item) 

TODO

- [Move to Player](#Move-to-Player) 
- [Move to Item](#Move-to-Item) 
Follow Path of Items
Scene Add/Remove
Attach To Item
Dettach From Item
Motion Control

##Thank You!

Thank you to everyone who voted!  The enhancements to this smart item were made possible by all those who voted for this grant.    [Grant Here](https://governance.decentraland.org/en/proposal/?id=ba798f30-d382-11eb-b705-3db38bad850a)

<!--
If you can think of an example that is easy to understand and covers valuable topics that aren't covered here, you're encouraged to create a **Pull Request** and [contribute](https://github.com/decentraland-scenes/Awesome-Repository/blob/master/CONTRIBUTING.md)!
-->

If something doesn’t work, please [file an issue](https://github.com/wacaine/dcl-smart-items-ce/issues/new).

## Builder Buggyness

Builder is running SDK 6.6.3 (not the latest).  The latest SDK is 6.6.5.  [More on that here](https://governance.decentraland.org/en/proposal/?id=72f3d560-d1f4-11eb-9861-ebb8fcfd58d2).   There are a few things Builder does not do right like rotation.  While I try to get workarounds for issues like these please do not think it is broke.  When deployed on the latest SDK it works correctly

#### Known issues:

* Face Player + Face Item using Mode: Scene Axis does not work correctly.  Mode: 

<!--
## FAQs

[Read the FAQs](https://github.com/decentraland-scenes/Awesome-Repository/blob/master/FAQ.md)

Check the Forum
Visit the Discord channel

-->




## Feature

### Face Player

The target item will rotate towards the player at a configurable speed for how fast it rotates and stops when facing the player.  The position the item rotates is the position the player was at time of triggering, not where the player moves to afterwards.

<img src="docs/screenshots/toolbox-ce.png" width="150">


| Parameter                            | Description                                                                                                                      |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Item                                 | Item to face player |
| Lock Mode                            | If you choose to lock rotation by x,y,z below defines how.  Item Axis - will lock rotation based on the center of the item how ever its rotated; Scene Axis - will lock rotation relative to absolute x,y,z |
| Lock X                               | Prevent rotation on X axis per lock mode above |
| Lock Y                               | Prevent rotation on Y axis per lock mode above |
| Lock Z                               | Prevent rotation on Z axis per lock mode above |
| Curve type                           | Curve type is the rate at which the item rotates over time.  For example start off slow and speed up.  LINK_TO_CURVE_TYPE_LIST |
| Speed                                | Overall speed for which the item rotates |
| When transition finished             | Select a whole set of new actions when this action completes |


### Face Item

The target item will rotate towards the item of interest at a configurable speed for how fast it rotates and stops when facing the item.  The position the item rotates is the position the item was at time of triggering, not where the item moves to afterwards.

| Parameter                            | Description                                                                                                                      |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Item                                 | Item to face item of interest |
| Look At Item                         | Item to to be faced |
| Lock Mode                            | If you choose to lock rotation by x,y,z below defines how.  Item Axis - will lock rotation based on the center of the item how ever its rotated; Scene Axis - will lock rotation relative to absolute x,y,z |
| Lock X                               | Prevent rotation on X axis per lock mode above |
| Lock Y                               | Prevent rotation on Y axis per lock mode above |
| Lock Z                               | Prevent rotation on Z axis per lock mode above |
| Curve type                           | Curve type is the rate at which the item rotates over time.  For example start off slow and speed up.  LINK_TO_CURVE_TYPE_LIST |
| Speed                                | Overall speed for which the item rotates |
| When transition finished             | Select a whole set of new actions when this action completes |
