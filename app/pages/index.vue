<template>
  <section class="m-auto grid gap-4 px-2 md:px-8 lg:grid-cols-12 lg:gap-0 lg:px-0">
    <div class="mx-auto lg:col-span-5">
      <NuxtImg
        src="/logo-render.png"
        format="webp"
        preload
        loading="eager"
        fetch-priority="high"
        alt="Rendered Logo"
        sizes="sm:75vw md:55vw lg:30vw"
      />
    </div>
    <div class="place-self-center lg:-order-1 lg:col-span-7">
      <h1 class="mb-3 text-3xl font-extrabold tracking-tight md:text-4xl xl:text-5xl">
        Full Stack Developer
      </h1>
      <p class="mb-5 font-light text-neutral-500 md:text-lg lg:mb-8 lg:text-xl dark:text-neutral-400">
        Hi, I'm Jan, a dedicated full stack developer with a passion for problem
        solving, technology, and learning. Taking web applications from concept
        to completion, I enjoy experimenting with new technologies and exploring
        the intersection of art and science through 3D modeling and game
        development.
      </p>
      <CustomButton class="mx-auto" variant="primary" as="a" href="https://github.com/saiba-tenpura/dotfiles">
        <font-awesome-icon class="mr-2" icon="fa-brands fa-github" size="xl" />
        Checkout my GitHub!
      </CustomButton>
    </div>
  </section>
</template>
