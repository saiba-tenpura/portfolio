---
title: Recreation of the "Nyan Gun"
cover: /blog/nyan-gun-recreation.png
description: How I recreated the "Nyan Gun" from Garry's Mod using Blender and Godot.
created_at: 2022-04-27
---

Back in 2022 I wanted to create a basic First-Person Shooter project using the Godot Game Engine so I could familiarize myself with it as well as the process of creating the mechanics, models and animations. So I decided to recreate the "Nyan Gun" Garry's Mod addon originally created by Rubat the workshop page can be found [here](https://steamcommunity.com/sharedfiles/filedetails/?id=123277559). I decided to do so not only because it was one of my favorite weapons in the TTT game mode but also because it offered a unique set of challenges when implementing it.

The overall steps necessary for this project included:
* The creation of 3D models for the MP7 submachine gun and arms.
* Each model had to be rigged, weight painted, UV unwrapped and textured.
* Combining the two models and creating the necessary animations.
* Creating controllers for movement and weapon handling.
* Creating the effects for the Nyan Cat projectile and the explosion.

The first step in the 3D modeling process was to gather a lot of reference material which I could base my work on. With the collected material I got started in Blender by using images of the side and front view as overlays so I could match up common points in the pictures with the model to ensure the dimensions are correct. I began with the basic shape and added more and more details over time, making sure to gather additional reference materials whenever necessary, until I captured every intricate detail of the object.

For one there are the different fire modes the weapon has, a basic full auto mode, a shotgun mode and a grenade launcher mode including an explosion effect. In addition to that there are also the animated particle effects with trails which bounce off of objects and enemies.

After implementing a basic FPS controller in Godot I decided to create the models for the MP7 and arms from scratch. Then I rigged and weight painted the models so I could start animating the gun and arms since I needed several animations. After that I created procedural textures using the Blender shader node system and baked them onto the previously UV unwrapped model.

Draft:
* Why this mod in particular?
  * Nostalgia. => Original mod.
  * I like the MP7.
  * Unique and interesting mechanics of the gun.
  * My personal favorite weapon as traitor.
  * Learning opportunities:
    * Godot Game Engine.
    * Animation Tree.
    * Procedural Textures.
    * Rigging.
* The process behind it.
  * Creating the Nyan Gun. => MP7.
  * Texturing.
  * Animation.
* Side by side comparison.
