/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import puppeteer from 'puppeteer';
import tasuku from 'tasuku';

const resumeUrl = 'http://localhost:8081/resume';
const targetPdfPath = path.join('public', 'vitor-mello-resume.pdf');

const retry = async (promiseFactory, retryCount, delayMs = 500) => {
  try {
    return await promiseFactory();
  } catch (error) {
    if (retryCount <= 0) {
      throw error;
    }
    await delay(delayMs);
    return await retry(promiseFactory, retryCount - 1);
  }
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function exportResumeAsPdf(task) {
  let browser;
  let page;

  await task('Launching Puppeteer', async () => {
    browser = await puppeteer.launch({ headless: 'new' });
    page = await browser.newPage();
  });

  await retry(
    () =>
      task(`Opening "${resumeUrl}"...`, async () => {
        await page.goto(resumeUrl, { waitUntil: 'networkidle0' });
      }),
    5,
  );

  await task('Generate PDF file', async () => {
    // generate .pdf file
    await page.pdf({
      format: 'A4',
      path: targetPdfPath,
      displayHeaderFooter: true,
      margin: { top: '12mm', right: 0, bottom: '12mm', left: 0 },
      pageRanges: '1-1',
      headerTemplate: ' ', // <--- empty spaces are needed! ¯\_(ツ)_/¯
      footerTemplate: `
        <div style="width: 100%; text-align: center; font-style: italic; font-size: 12px; padding: 0; color: #bbb; font-family: 'Lora', serif; position: relative;">
          For a comprehensive list of all my previous roles, please check my <a style="color: #bbb; text-decoration: none;" href="https://www.linkedin.com/in/vitormv">LinkedIn profile</a>.
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
  await tasuku('Exporting resume as PDF.', async ({ task }) => {
    await exportResumeAsPdf(task);
  });

  tasuku(`All done! PDF exported to "${targetPdfPath}"`, () => {});
};

mainFn();
