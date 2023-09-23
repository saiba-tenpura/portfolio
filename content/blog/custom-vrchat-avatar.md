---
title: Creating a VRChat Avatar with cel-shading
cover: /blog/my-linux-journey/cover.png
description: How I used special shading techniques to recreate Spooky Boogie from the Psycho-Pass series as a VRChat Avatar.
created_at: 2020-12-20
---

Back in the day I learned of the Guilty Gear series created by Arc System Works and was intrigued by the unique 3D shading techniques they used and wanted to use them in one of my own projects. Coincidentally one of my friends just had recently started to play VRChat and because of that I decided to kill two birds with one stone and create a custom avatar for him. I ultimately settled on recreating Spooky Boogie from the Psycho-Pass series not only because said friend is a big fan of the series but also because the character itself actually serves as an VR avatar.

Let's first talk about what makes the Guilty Gear games special since you might not be familiar with them. When the series first launched it was actually a 2D game but eventually also had to make the jump to 3D and that was when they faced the challenge of having to translate their hand drawn animesque like style into an environment where lighting is usually based on physics and the viewpoint isn't necessarily fixed to a single angle. In order to tackle these challenges and successfully achieve the transition they used and improved some known special techniques to capture the same look and feel of the 2D predecessor.

In the following I'm going to illustrate some of the ones I myself used for this project. The first one is to manually modify the normals of the 3D model which are responsible for determining a surface's orientation towards a light source and effects how it is shaded. Usally the normals of a model are automatically calculated but many 3D modelling programs allow you to modify them manully and thus we are able to dictate how light interacts with a model. This way we for example can recreate the more spherical interaction of a drawn head in 3D space and get rid of unwanted imperfections.

The second technique known as "Inverted Hull" is used to mimic the hand drawn outline around a character usually present in 2D art which is achieved by utilizing a slightly bigger duplicate of the original mesh for which the normals have been flipped, back face culling has been activated and a slightly darker material is applied to.

* TBC: because of how this technique works the outlines for visually overlapping geometry automatically disappears.

The final technique I adapted was to use a specialized texture map where each of the RGBA color channels controls a different aspect of how the model is being shaded.

Draft:
* Why this character in particular?
  * Character in the Psycho-Pass series.
  * In the series itself it serves as an VR avatar.
  * Friend is huge fan of the Psycho-Pass series and a VRChat Player.
  * A great oppurtunity to try out and learn a bunch of technologies and ideas.
    * Special shader and lighting.
    * Rigging.
    * Creating a 3D-Model for a unique character concept.
    * Weight Painting.
    * Using the Unity Game Engine.
* Process for the separate technologies.
  * Bones for rigging were basically predefined by VRChat.
  * Special shader for using ILM map like in Guilty Gear games to create anime like shading.
* Link to VRChat download.
