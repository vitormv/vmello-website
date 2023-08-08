[![Build Status](https://travis-ci.org/vitormv/vmello-website.svg?branch=master)](https://travis-ci.org/vitormv/vmello-website) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/vitormv/vmello-website/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/vitormv/vmello-website/?branch=master) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<h1 align="center">
  Vitor Mello's Website
</h1>

This is the source code for my website. It is a statically generated using **Astro**.

### Why Astro and not (\_\_YOUR_FAVORITE_FRAMEWORK\_\_)?

While Next.js, Remix, and others do get a lot of attention nowadays, they are mostly tools for generating websites or webapps that change often. Even if one does export a SSG version of the website with Next.js, waaaaay too much JS is still shipped to the client, and after the page loads, react would still rehydrate all the components that were already rendered (although nothing actually changed.)

For a pretty boring and static website like this, Astro does provite the best experience, since barely any JS is shipped to the client, which means less js, less code, less bandwidth, less complexity.

## 🚀 Get Up and Running

Want to take a look at the code for yourself? Go ahead!

```bash
git clone git@github.com:vitormv/vmello-website.git vmello-website
cd vmello-website
yarn install && yarn start
```

Then open the `http://0.0.0.0:3000` on your favorite browser.

## 🧐 What's inside?

A quick look at the structure for this project:

```plain
    .
    ├── cli/
    ├── src/
    ├──── components/
    ├──── data/
    ├──── pages/
    ├──── providers/
    ├──── styles/
    ├── static/
```

1. **`/cli/`**: This directory contains some useful scripts, like for example export my resume as pdf directly and saving a local copy.

2. **`/src/components/`**: Home of all the React components used in the website, useful reusable pieces of code.

3. **`/src/content/`**: Here likes all the content of the website, as yml files. This is useful to keep the content layer separated from the components themselves.

4. **`/src/pages/`**: This folder is where Astro expects to find all the actual routes.

5. **`/src/styles/`**: Place for all the global stylesheets used in the website.

6. **`/static/`**: Place for all the static assets of the website, like favicons, my pdf resume and so on.

## 💫 Deploy

Deploy is automated by using Github Actions + [Vercel](https://vercel.com/). It is automatically redeployed to whenever something is merged to `main`.

## 💾 Update & download resume

After spending countless hours trying to create a greatly aligned resume in Google Docs, I finally decided to recreate it in html format (https://vmello.com/resume), and export it as `.pdf` using Puppeteer. It heavily uses CSS media @print queries.

```bash
yarn resume
```

I love to automate things! 😁

## 📝 License

Licensed under the [MIT License](./LICENSE).
