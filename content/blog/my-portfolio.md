---
title: My Portfolio
cover: /blog/my-portfolio/cover.png
description: Are you curious about what makes my portfolio tick? Well, you're in luck you can find the details in this post, including the code and a little more.
created_at: 2023-12-19
---

If you're are only here for the code then feel free to [check it out on Github](https://github.com/saiba-tenpura/portfolio).

As for the technologies used in this project:
* [Nuxt](https://nuxt.com/) a Vue based Full Stack framework.
  * [Nuxt Content](https://content.nuxtjs.org/) module for managing the markdown based blog entries.
  * [Nuxt Image](https://image.nuxtjs.org/) module for handling image optimizations.
  * [Nuxt Color Mode](https://color-mode.nuxtjs.org/) module for handling light & dark mode switching.
* [Tailwind CSS](https://tailwindcss.com/) a utility-first CSS framework.
* [Font Awesome](https://fontawesome.com/) as icon library.

I continously work on the portfolio to improve it bit by bit. Thus in order to save me the hassle of publishing every change myself I utilise Github Action workflows to automatically build and publish it on every commit. Since the portfolio basically only consists of static files I also use the Static Site Generation (SSG) of Nuxt to increase performance.

In the case of the logo I wanted something which would illustrate my alias *Saiba Tenpura* (translates to *Cyber Templar*) because of that I settled on creating a sci-fi themed helmet. I started by drawing some sketches in Krita and after I got a feel for the direction I wanted to head into I jumped over to Blender. You might ask yourself "Why Blender? Isn't it a 3D modelling software?", well yes you would be correct I decided to do so because I'm going to use the helmet for other projects in future. Another benefit of using Blender is that I have more creative freedom since I can use the Freestyle Line feature to render an SVG and continue from there. In order to ensure dimensional accuracy I began by modelling a basic 3D head and then modelled the helmet around it. I actually went through a couple of iterations and deviated from the original sketch before I had something I was actually pleased with for now I kept low on the details since the logo was going to be minimalstic anyway and I could always add them later when I actually need them. The next step was to render a SVG from the model and move on to Inkscape where I first added colors and then made the logo even more minimalistic because the rendered version still felt to cluttered to be actually readable especially when small.

Rough content ideas:
* Describe the logo design process.
* Continous improvement.
