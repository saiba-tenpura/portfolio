---
title: My Portfolio
cover: /blog/my-portfolio/cover.png
description: Are you curious about what makes my portfolio tick? Well, you're in luck you can find the details in this post, including the code and a little more.
created_at: 2023-12-19
---

If you're are only here for the code then feel free to [check it out on Github](https://github.com/saiba-tenpura/portfolio).

## Tech-Stack

As for the technologies used in this project:
* [Nuxt](https://nuxt.com/) a Vue based Full Stack framework.
  * [Nuxt Content](https://content.nuxtjs.org/) module for managing the markdown based blog entries.
  * [Nuxt Image](https://image.nuxtjs.org/) module for handling image optimizations.
  * [Nuxt Color Mode](https://color-mode.nuxtjs.org/) module for handling light & dark mode switching.
* [Tailwind CSS](https://tailwindcss.com/) a utility-first CSS framework.
* [Font Awesome](https://fontawesome.com/) as icon library.

I continously work on the portfolio to improve it bit by bit. Thus in order to save me the hassle of publishing every change myself I utilise Github Action workflows to automatically build and publish it on every commit. Since the portfolio basically only consists of static files I also use the Static Site Generation (SSG) of Nuxt to increase performance.

## Logo

In the case of the logo I wanted something which would illustrate my alias *Saiba Tenpura* (translates to *Cyber Templar*) because of that I settled on creating a sci-fi themed helmet. I started by drawing some sketches in Krita and after I got a feel for the direction I wanted to take it into.

![Logo Sketch](/blog/my-portfolio/logo-sketch.png)

The next step for me was to turn the sketch of the helmet into a 3D model in blender which I could reuse for other projects in the future as well. I began by modelling a basic 3D head shape that I could use to ensure the dimensions are reasonable.

![3D Head](/blog/my-portfolio/3d-head.png)

I actually went through a couple of iterations and deviated from the original sketch before I had something I was actually pleased with. I kept low on the details for now since my aim was to keep it minimalstic and I could always add more later when I actually need them.

![3D Helmet](/blog/my-portfolio/3d-helmet.png)

Another benefit of using Blender in this case is that you have more creative freedom as one is able to use the Freestyle Line feature to render an SVG of the model from different perspectives.

After rendering the SVG I switched over to Inkscape added colors and because the logo still felt cluttered I made it even more minimalstic so I would still be readable even when very small.

Rough content ideas:
* Describe the logo design process.
* Continous improvement.
