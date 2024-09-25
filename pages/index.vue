<template>
  <section class="flex flex-col lg:flex-row-reverse items-center justify-center">
    <div>
      <NuxtImg
        src="/logo-render.png"
        alt="logo-render"
        sizes="sm:75vw md:55vw lg:30vw"
        loading="lazy"
      />
    </div>
    <div class="text-center lg:text-left lg:mr-16">
      <h1 class="mb-2 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl">Full Stack Developer / Hobbyist Game Dev</h1>
      <p class="mb-6 font-light text-neutral-500 lg:mb-8 md:text-lg lg:text-xl dark:text-neutral-400">
        Hi, I'm Jan, a dedicated full stack developer with a passion for problem solving, technology, and learning. Taking web applications from concept to completion, I enjoy experimenting with new technologies and exploring the intersection of art and science through 3D modeling and game development.
      </p>
      <CustomButton class="mx-auto" variant="primary" as="a" href="https://github.com/saiba-tenpura/dotfiles">
        <font-awesome-icon class="mr-2" icon="fa-brands fa-github" size="xl" />
        Checkout my GitHub!
      </CustomButton>
    </div>
  </section>
</template>
