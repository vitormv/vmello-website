import path from 'path';
import puppeteer from 'puppeteer';

const rootDir = process.cwd();
const sourceHtmlFile = path.join('out', 'resume.html');
const targetPdf = path.join('public', 'vitor-mello-resume.pdf');

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
