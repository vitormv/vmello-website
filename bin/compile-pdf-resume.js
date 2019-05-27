// this script assumes you have puppeteer installed, but its not in the list of dependencies
// so you have to install it globally with `npm i -g puppeteer` and link it with `npm link puppeteer`
const puppeteer = require('puppeteer');
const path = require('path');

async function exportResumeAsPdf(targetFile) {
    console.log('Starting PDF export.');
    console.log('Opening Puppeteer');
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('file:///Users/vitormv/Projects/vmello-website/public/resume/index.html', { waitUntil: "networkidle0" });

    console.log('Awaiting page load...');

    await page.pdf({ format: 'A4', path: targetFile });

    await page.close();
    await browser.close();

    console.log('All done! PDF exported succesfully.');
};

const dest = path.resolve(`${__dirname}/../static/resume-html.pdf`);

exportResumeAsPdf(dest);
