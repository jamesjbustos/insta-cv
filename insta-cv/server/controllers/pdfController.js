import { createWriteStream } from 'fs';
import { promises as fsPromises } from 'fs';
import getTemplateData from '../generator/templates/index.js';
import latex from 'node-latex';

// Function to generate the PDF
export const generatePDF = async (req, res) => {
  try {
    const sanitizedValues = req.body;

    const { texDoc, opts } = getTemplateData(sanitizedValues);

    const pdfStream = latex(texDoc, opts);

    const filename = `resume-${Date.now()}.pdf`;

    const output = createWriteStream(filename);
    pdfStream.pipe(output);

    await new Promise((resolve, reject) => {
      output.on('finish', resolve).on('error', reject);
    });

    const data = await fsPromises.readFile(filename);
    res.contentType('application/pdf');
    res.send(data);

    await fsPromises.unlink(filename);
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).send('Error generating PDF');
  }
};
