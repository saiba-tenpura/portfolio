---
title: Recreating a piece of personal nostalgia
cover: /blog/my-linux-journey.png
description: How I recreated the "Nyan Gun" from Garry's Mod with Blender and Godot.
created_at: 2022-08-01 
---

Back in 2022 that I wanted to create a basic project using the Godot Game Engine so I could familiarize myself with it and the process of creating First-Person Shooter mechanics incl. the necessary models and animations. So I decided to recreate the "Nyan Gun" Garry's Mod addon orignally created by Rubat not only because it was one of my favorite weapons in the TTT game mode and thus was a piece of personal nostalgia but also because it offered a unique set of challenges when implementing it.

For one there are the different fire modes the weapon offers, a basic full auto fire mode, a shotgun fire mode with spread and a grenade launcher fire mode with an explosion. There are also the animated particle effects with trails which bounce off of objects and enemies.

After implementing a basic FPS controller in Godot I decided to create the models for the MP7 and arms from scratch. Then I rigged and weight painted the models so I could start animating the gun and arms since I needed several animations. After that I created procedural textures using the Blender shader node system and baked them onto the previously UV unwrapped model.

[Workshop Page](https://steamcommunity.com/sharedfiles/filedetails/?id=123277559)

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
