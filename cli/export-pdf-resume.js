/* eslint-disable max-len */
import path from 'path';
import puppeteer from 'puppeteer';
import task from 'tasuku';

const sourceUrl = 'http://localhost:8092/resume';
const targetPdfPath = path.join('public', 'vitor-mello-resume.pdf');

async function exportResumeAsPdf(task) {
  let browser;
  let page;

  await task('Launching Puppeteer', async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
  });

  await task(`Opening "${sourceUrl}"...`, async () => {
    await page.goto(sourceUrl, { waitUntil: 'networkidle0' });
  });

  await task('Generate PDF file', async () => {
    // generate .pdf file
    await page.pdf({
      format: 'A4',
      path: targetPdfPath,
      displayHeaderFooter: true,
      margin: { top: '12mm', right: 0, bottom: '12mm', left: 0 },
      headerTemplate: ' ', // <--- empty spaces are needed! XD
      footerTemplate: `
        <div style="width: 100%; font-style: italic; font-size: 9px; padding: 0; color: #bbb; font-family: 'Lora', serif; position: relative;">
          <div style="position: absolute; right: 9mm; bottom: 5px;">
            Vitor Mello; page <span class="pageNumber"></span> of <span class="totalPages"></span>.
          </div>
        </div>
      `,
    });
  });

  await task('Cleaning up', async () => {
    await page.close();
    await browser.close();
  });
}

const mainFn = async () => {
  await task('Exporting resume as PDF.', async ({ task }) => {
    await exportResumeAsPdf(task);
  });

  task(`All done! PDF exported to "/${targetPdfPath}"`, () => {});
};

mainFn();
