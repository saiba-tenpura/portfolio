---
title: Creating a VRChat Avatar using cel-shading
cover: /blog/my-linux-journey/cover.png
description: How I used special shading techniques to recreate Spooky Boogie from the Psycho-Pass series as a VRChat Avatar.
created_at: 2020-12-20
---

Back in the day I learned of the Guilty Gear series created by Arc System Works and was intrigued by the unique 3D shading techniques they used and wanted to use them in one of my own projects. Coincidentally one of my friends just had recently started playing VRChat and because of that I decided to kill two birds with one stone and create a custom avatar for him. I ultimately settled on recreating Spooky Boogie from the Psycho-Pass series not only because said friend is a big fan of the series but also because the character itself actually serves as an VR avatar.

Let's first talk about what makes the Guilty Gear games special since you might not be familiar with them. When the series first launched it was actually a 2D game but eventually also had to make the jump to 3D and that was when they faced the challenge of having to translate their hand drawn animesque like style into an environment where lighting is usually based on physics and the viewpoint isn't necessarily fixed to a single angle. In order to tackle these challenges and successfully achieve the transition they used and improved a couple of known techniques to capture the same look and feel of the 2D predecessors.

In the following I'm going to illustrate some of the ones I used myself for this project. The first of which is to modify the normals of the 3D model since they are responsible for determining a surface's orientation towards a light source and effect how it is being shaded. Usally the normals of a model are automatically calculated but many 3D modelling programs also allow us modify them and thus we are able to dictate how light interacts with our model. One easy way to adjust the normals is to use a simplified mesh and transfer it's normals onto our target mesh for example to recreate the shading of a drawn head in 3D space we can use a sphere. The process is of course not perfect and you might need to do some additional manual tweaking.

<video autoplay loop>
  <source src="/blog/custom-vrchat-avatar/sb-normal-comparison.mp4" type="video/mp4" />
</video>

The second technique known as "Inverted Hull" is used to mimic the inked outline around a character usually present in 2D art which is achieved by utilizing a slightly bigger duplicate of the original mesh for which the normals have been flipped and a black material with backface culling has been applied to. By doing so the the surfaces of the outer shell are facing inward and because we activated backface culling all backfaces are removed leaving us with an outline.

The final technique I adapted was to also use the three different texture maps Arc System Works used to control and adjust the color and shading of the model. Which consist of the base color texture representing the lit colors, the SSS (Subsurface Scattering) texture which is multiplied with the base color map to color shadows and the ILM texture map which stores additional shading information for the model. The actual meaning of the ILM abbreviation is actually highly debated within the community so let's just talk about what it does. It's a RGBA texture map which stores values from black to white, from 0 to 1 within each of it's color channels each with a different purpose.

* [R]{.text-red-500}ed: Contains the **specular intensity** value which controls where and how intense specular highlights are. White areas have full specular highlight and black areas have no specular.
* [G]{.text-green-500}reen: Contains the **ambient occlusion** value which controls how likely areas are to be shaded. White areas are are always lit and black areas are always shaded.
* [B]{.text-blue-500}lue: Contains the **specular size** value which controls which areas are highlighted when lit or shaded. White areas are always highlighted and black areas are never highlighted.
* [A]{.font-bold}lpha: Contains additional inner line art which is displayed on the model.

All of this does not only allow for a lot of creative freedom but also forces us to put a lot of intention behind every action to achieve the desired outcome which is why I have a lot of respect for the Arc System Works Team not only for coming up with the shown techniques but also due to their genunie passion. If you would like to try out the avatar for yourself [this]() is the link for adding it your account or if you would like to learn more about the other or similiar techniques I have added some of the sources for you to explore.

Sources:
* Arc System Work's Technial Artist Junya C Motomura's [GDC talk](https://www.youtube.com/watch?v=yhGjCzxJV3E).
* Activemontionpictures [Youtube Playlist](https://www.youtube.com/watch?v=UHGoy6A_DmY&list=PLv8Xik7JbQH3AtYLs3QY7jYuubckdGfnU&index=13).
* Raymond Cripps [Youtube Video](https://www.youtube.com/watch?v=E3zHGD8V2IY) on how he used this style for his project.

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
