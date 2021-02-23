[![Build Status](https://travis-ci.org/vitormv/vmello-website.svg?branch=master)](https://travis-ci.org/vitormv/vmello-website) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/vitormv/vmello-website/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/vitormv/vmello-website/?branch=master) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<h1 align="center">
  Vitor Mello's Website
</h1>

This is the source code for my website. It is a statically generated using **Next.js** and **React.js**.

## 🚀 Get Up and Running

Want to take a look at the code for yourself? Go ahead!

```bash
git clone git@github.com:vitormv/vmello-website.git vmello-website
cd vmello-website
npm run bootstrap
```

Then open the `http://0.0.0.0:8000` on your favorite browser.

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

3. **`/src/data/`**: Here likes all the content of the website, as yml files. This is useful to keep the content layer separated from the components themselves. These files will be read by graphql at build time.

4. **`/src/pages/`**: This folder is where Gatsby expects to find all the website pages.

5. **`/src/providers/`**: Here all the static graphql queries used in the website are used. This allow for great reuse of common functionality, in case they are needed in more than one place. They use React `Hooks` to define the queries.

6. **`/src/styles/`**: Place for all the global stylesheets used in the website.

7. **`/static/`**: Place for all the static assets of the website, like favicons, my pdf resume and so on.

## 💫 Deploy

Deploy is automated by using Github Actions + [Surge.sh](https://surge.sh/). It is automatically redeployed to whenever something is merged to master.

## 💾 Update & download resume

After spending countless hours trying to create a greatly aligned resume in Google Docs, I finally decided to recreate it in html format (https://vmello.com/resume), and export it as pdf automatically. It heavily uses CSS media @print queries. The `.pdf` file is exported using Puppeteer.

```plain
npm run resume:export
```

I love to automate things! 😁

## 📝 License

Licensed under the [MIT License](./LICENSE).
