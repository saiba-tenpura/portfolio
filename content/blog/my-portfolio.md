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

I also continously work on the portfolio to improve it bit by bit. Thus in order to save me the hassle of publishing every change myself I utilise the Github Action workflows to automatically build and publish it on every commit. Since the portfolio only consists of static files I also use the Static Site Generation (SSG) feature of Nuxt to increase performance and security.

## Logo

In the case of the logo I wanted something which would illustrate my alias *Saiba Tenpura* (translates to *Cyber Templar*) and thus settled on creating a sci-fi themed helmet. I started by drawing up some sketches in Krita to get a feel for the direction I wanted to take it.

![Logo Sketch](/blog/my-portfolio/logo-sketch.png)

The next step was to turn the sketch of the helmet into a 3D model in Blender. I did so because I'm going to reuse the model for other projects in the future as well. I began by modelling a basic 3D head shape that I could use as reference to make sure the dimensions are realistic.

![3D Head](/blog/my-portfolio/3d-head.png)

After that I actually went through a couple of iterations and deviated a bit from the original sketch before I had something that I was content with. I kept low on the details for now since my aim was to keep it minimalstic and I could always add them later when I actually needed them.

![3D Helmet](/blog/my-portfolio/3d-helmet.png)

Another benefit of using Blender is that you have more creative freedom as you are able to use the Freestyle Line feature to render an SVG of the model from different perspectives.

![SVG Export](/blog/my-portfolio/svg-export.png)

After rendering the SVG I switched over to Inkscape added colors and because the logo still felt cluttered I made it even more minimalstic so it would still be readable even when small.

![Logo SVG Stages](/blog/my-portfolio/logo-svg-stages.png)
