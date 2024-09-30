---
title: Unlocking the Art of Cel-Shading
description: How I used cel-shading techniques to translate a 2D character into a 3D world.
image:
  src: /blog/custom-cel-shaded-avatar/cover.png
  alt: Cel-shaded avatar
created_at: 2020-12-20
---

## Intro

I like many others was very intrigued when I first learned of the unique 3D shading techniques used in the Guilty Gear series created by Arc System works. So I decided to use some of them in my own projects to shade a custom avatar for VRChat. As for the character I wanted to recreate Spooky Boogie from the Psycho-Pass series because the character itself actually serves as an VR avatar. For those uninitiated with the Guilty Gear series, it started as a 2D game but later transitioned to 3D. This presented the unique challenge of translating their hand-drawn anime-esque style of the 2D predecessors into a 3D environment, where lighting obeys the laws of physics and the viewpoint is dynamic. In this article I explore some of the techniques they used and improved to capture the same look and feel of the predecessors.

## Modifying Normals

The first of which is to modify the normals of the 3D model since they are responsible for determining a surface's orientation towards a light source and effect how it is being shaded. Usally the normals of a model are automatically calculated but many 3D modelling programs also allow us to modify them and thus we are able to dictate how light interacts with our model. One easy way to adjust the normals is to use a simplified mesh and transfer it's normals onto our target mesh for example to recreate the shading of a drawn head in 3D space we can use a sphere. The process is of course not perfect and you might need to do some additional manual tweaking.

<video autoplay loop>
  <source src="/blog/custom-cel-shaded-avatar/sb-normal-comparison.mp4" type="video/mp4" />
</video>

## Inverted Hull Method

The second technique known as **Inverted Hull Method** is used to mimic the inked outline often seen in 2D art. It involves the creation of a slightly larger duplicate of the original mesh for which the normals have been flipped. A black material with backface culling is also applied to it. As a result the surface of the outer shell faces inward and the backfaces are removed, leaving us with the distinctive outline.

![Inverted Hull comparison](/blog/custom-cel-shaded-avatar/sb-inverted-hull-comparison.png)

## Texture Maps

The final technique I adapted was to also use the three different texture maps Arc System Works used to control and adjust the color and shading of the model. Which consist of the base color texture representing the lit colors, the SSS (Subsurface Scattering) texture which is multiplied with the base color map to color shadows and the ILM texture map which stores additional shading information for the model. The actual meaning of the ILM abbreviation is actually highly debated within the community so let's just talk about what it does. It's a RGBA texture map which stores values from black to white, from 0 to 1 within each of it's color channels each with a different purpose.

* [R]{.text-red-500}ed: Contains the **specular intensity** value which controls where and how intense specular highlights are. White areas have full specular highlight and black areas have no specular.
* [G]{.text-green-500}reen: Contains the **ambient occlusion** value which controls how likely areas are to be shaded. White areas are are always lit and black areas are always shaded.
* [B]{.text-blue-500}lue: Contains the **specular size** value which controls which areas are highlighted when lit or shaded. White areas are always highlighted and black areas are never highlighted.
* [A]{.font-bold}lpha: Contains additional inner line art which is displayed on the model.

<video autoplay loop>
  <source src="/blog/custom-cel-shaded-avatar/sb-texture-maps.mp4" type="video/mp4" />
</video>

All of this does not only allow for a lot of creative freedom but also requires a lot of intention in order to achieve the desired outcome which is why I have a lot of respect for the Team at Arc System Works not only for coming up with the shown techniques but also due to their genunie passion and big attention to detail. If you yourself would like to learn more about the other or similiar techniques I added some of the great sources which I used.

## Sources

* Arc System Work's Technial Artist Junya C Motomura's [GDC talk](https://www.youtube.com/watch?v=yhGjCzxJV3E).
* Activemontionpictures [Youtube Playlist](https://www.youtube.com/watch?v=UHGoy6A_DmY&list=PLv8Xik7JbQH3AtYLs3QY7jYuubckdGfnU&index=13) on the topic.
* Raymond Cripps [Youtube Video](https://www.youtube.com/watch?v=E3zHGD8V2IY) on how he used this style for his project.
