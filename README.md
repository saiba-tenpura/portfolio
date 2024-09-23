# Personal Portfolio
My personal portfolio powered by [Nuxt](https://nuxt.com/), [Tailwind CSS](https://tailwindcss.com/) and [Font Awesome](https://fontawesome.com/).

## Features
* Index page, about page and blog pages.
* Configure navbar, skill section and social links via the [app.config.ts](app.config.ts)
* The icons for various tools can be used in the skill section. (Optimized, Dark & Light Mode)
* Custom page transition.
* [Nuxt Content](https://content.nuxtjs.org/) module for managing the markdown based blog entries.
* [Nuxt Image](https://image.nuxtjs.org/) module for handling image optimizations.
* [Nuxt Testutils](https://nuxt.com/docs/getting-started/testing) modules is used to perform End-to-End, component and unit testing.
* [Nuxt Sitemap](https://nuxtseo.com/sitemap/getting-started/installation) module for generating a sitemap.
* [Tailwind CSS](https://tailwindcss.com/) a utility-first CSS framework.
* [Font Awesome](https://fontawesome.com/) as icon library.

## Deployment
The deployment is handled by Github Action workflows which generates and publishes an SSG build of the app to the configured VPS of your choice.

## License
[MIT](./LICENSE)
