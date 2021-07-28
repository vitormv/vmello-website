import path from 'path';
import puppeteer from 'puppeteer';

const sourceUrl = 'http://localhost:8092/resume';
const targetPdf = path.join('public', 'vitor-mello-resume.pdf');

async function exportResumeAsPdf() {
  console.log('Starting PDF export.', '\n');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  console.log(`Opening "${sourceUrl}"...`);

  await page.goto(sourceUrl, { waitUntil: 'networkidle0' });

  // generate .pdf file
  await page.pdf({
    format: 'A4',
    path: targetPdf,
    displayHeaderFooter: true,
    margin: { top: '12mm', right: 0, bottom: '12mm', left: 0 },
    headerTemplate: ' ', // <--- empty spaces are needed XD
    footerTemplate: `
      <div style="width: 100%; font-style: italic; font-size: 9px; padding: 0; color: #bbb; font-family: 'Lora', serif; position: relative;">
        <div style="position: absolute; right: 9mm; bottom: 5px;">
          Vitor Mello; page <span class="pageNumber"></span> of <span class="totalPages"></span>.
        </div>
      </div>
    `,
  });

  await page.close();
  await browser.close();

  console.log('\n', `✅  All done! PDF exported to "/${targetPdf}".`);
}

exportResumeAsPdf();
