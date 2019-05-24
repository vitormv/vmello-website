[![Build Status](https://travis-ci.org/vitormv/vmello-website.svg?branch=master)](https://travis-ci.org/vitormv/vmello-website) [![Build Status](https://travis-ci.org/vitormv/vmello-website.svg?branch=master)](https://travis-ci.org/vitormv/vmello-website) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/vitormv/vmello-website/pulls) 

<h1 align="center">
  Vitor Mello's Website
</h1>

This is the source code for my website. It is a statically generated using Gatsby, React.js and GraphQL.

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

My resume is served on my website as a PDF file, but the source is a Google Docs file in Google Drive. Whenever I need to update the pdf file with the newest changes, I just need to run the command:
```
yarn resume:pull
```
This will automatically connect to Google Drive API (and request a token in case its not present),export my resume as a `.pdf` file and save it in the `/static` folder.
