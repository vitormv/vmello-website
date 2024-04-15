![Vercel](https://vercelbadge.vercel.app/api/vitormv/vmello-website)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/vitormv/vmello-website/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/vitormv/vmello-website/?branch=master) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<h1 align="center">
  Vitor Mello's Website
</h1>

This is the source code for my website. It is a statically generated using **Astro**.

### Why Astro and not _______?

Well, this is a very simple website that can be statically generated and barely need any client-side
Javascript at all. While Next.js, Remix, etc can do static site generation, they still do
ship, parse, rehydrate and process a metric ton of javascript after the page has been downloaded.
They still rerender everything on the client side, just to realize that nothing changed.

For a simple static website like this, Astro does provite the best experience, since barely any JS
is shipped to the client, which means less js, less code, less bandwidth, less complexity.

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
