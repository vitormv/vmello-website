/* eslint-disable no-console */
import puppeteer from 'puppeteer';
import path from 'path';

const rootDir = process.cwd();
const sourceHtmlFile = path.join('public', 'resume', 'index.html');
const targetPdf = path.join('static', 'vitor-mello-resume.pdf');

async function exportResumeAsPdf() {
  console.log('Starting PDF export.', '\n');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  console.log(`Opening "/${sourceHtmlFile}"...`);

  await page.goto(`file://${path.join(rootDir, sourceHtmlFile)}`, { waitUntil: 'networkidle0' });

  await page.pdf({ format: 'A4', path: targetPdf, margin: { top: 0, right: 0, bottom: 0, left: 0 } });

  await page.close();
  await browser.close();

  console.log('\n', `✅  All done! PDF exported to "/${targetPdf}".`);
}

exportResumeAsPdf();
