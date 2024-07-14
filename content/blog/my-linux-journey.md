---
title: My Linux journey
description: A short summary of my transition from Windows to Linux, my experiences on they way and my plans moving forward.
image:
  src: /blog/my-linux-journey/cover.png
  alt: Screenshot of Linux Rice
head:
  meta:
    - name: keywords
      content: 'Linux Rice, Dotfiles'
created_at: 2023-08-03
---

## Intro

I first knowingly came into contact with Linux during my vocational training about :YearsSince{:year=2015} years ago. That was also about the same time Windows 10 was released and if you experienced it for yourself you remember that it had quite a few issues in the beginning to say the least. My personal gripes with it at the time included that it installed random software without my consent and after a reinstall of what I thought was a bricked Windows system I found out that deactivating Cortana was the very reason my system had been bricked in the first place. As a user these sour experiences ultimatetly lead me to the decision to give Linux a shot.

## The Transition

At first I decided to play it safe and dual booted Windows and Linux but I quickly discovered that Linux was very well able to cover most of my day to day use cases without much of a hitch. So from that point onward I decided to use Linux as my main personal OS. After learning more and more about Linux I at some point discovered the Linux ricing community. Here is the definition for anybody who isn't familiar with the term.

> **Rice** is a word that is commonly used to refer to making visual improvements and customizations on one's desktop. It was inherited from the practice of customizing cheap Asian import cars to make them appear to be faster than they actually were - which was also known as **ricing**.

## Rice and Shine: Transforming My Linux Desktop

At the time I was amazed by the beautiful setups some people had come up with, the sheer endless variety of options to choose from and so I set out to create one of my own. It obviously took a lot of trial and error, fiddling with different tools, reading a bunch of documentations but ultimatetly my accumalted efforts were not only a great learning opportunity but also resulted in the dotfiles you can find in the link below. As with everything else in life nothing is ever perfect so I continously improve my dotfiles to suit my workflow and personal taste.

## Moving Forward

In my latest addition I added configuration files to allow for the usage of Wayland as a display server inplace of Xorg so I could try it out on my laptop. I'm also planing to move my main system to Wayland at some point in the future, migrate the Xorg related configuration files to a separate branch and remove them from the main branch to make it less cluttered.

::CustomButton{.no-underline to="https://github.com/saiba-tenpura/dotfiles" position="center" type="primary"}
Check out my dotfiles!

#prepend
:::font-awesome-icon{.mr-2 icon="fa-brands fa-github" size="lg"}
::
