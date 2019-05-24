[![Build Status](https://travis-ci.org/vitormv/vmello-website.svg?branch=master)](https://travis-ci.org/vitormv/vmello-website) [![Build Status](https://travis-ci.org/vitormv/vmello-website.svg?branch=master)](https://travis-ci.org/vitormv/vmello-website) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/vitormv/vmello-website/pulls) 

<h1 align="center">
  Vitor Mello's Website
</h1>

This is the source code for my website. It is a statically generated using **Gatsby**, **React.js** and **GraphQL**. I had never used a Static Website Generator before, and thought that building my own website using one was a nice way to learn the technology. I must say I really like it, and it provides nice ways to keep the content separated from the Components themselves.

## 🚀 Get Up and Running
Want to take a look at the code for yourself? Go ahead!

```
$ git clone git@github.com:vitormv/vmello-website.git vmello-website
$ cd vmello-website
$ yarn bootstrap
```
Then open the `http://0.0.0.0:8000` on your favorite browser.

## 🧐 What's inside?

A quick look at the structure for this project:

    .
    ├── bin
    ├── src 
    ├──── components
    ├──── data
    ├──── pages
    ├──── providers
    ├──── styles
    ├── static

1. **`/bin/`**: This directory contains some useful scripts, like for example export my resume as pdf directly and saving a local copy. This is done by using Google Drive APIs for node.js.

2. **`src/components/`**: Home of all the React components used in the website, useful reusable pieces of code.

3. **`src/data/`**: Here likes all the content of the website, as yml files. This is useful to keep the content layer separated from the components themselves. These files will be read by graphql at build time.

4.  **`src/pages/`**: This folder is where Gatsby expects to find all the website pages.

5.  **`src/providers/`**: Here all the static graphql queries used in the website are used. This allow for great reuse of common functionality, in case they are needed in more than one place. They use React `Hooks` to define the queries.

6.  **`src/styles/`**: Place for all the global stylesheets used in the website.

7.  **`static/`**: Place for all the static assets of the website, like favicons, my pdf resume and so on.

## 💫 Deploy

Deploy is automated by using Travis CI + [Surge.sh](https://surge.sh/). It is automatically redeployed to whenever something is merged to master.

## 💾 Update & download resume

My resume is served on my website as a `.pdf` file, but the source is a Google Docs file in Google Drive. To fetch the newest copy, I can just run the command:
```
yarn resume:pull
```
This will automatically:
* **Connect to Google Drive API** (and request a token in case its not present)
* **Export** my resume as a `.pdf` file
* Download it to the `/static` folder.

I am sometimes lazy and love to automate things 😁

## 📝 License

Licensed under the [MIT License](./LICENSE).
