import template1 from './template1/index.js';
const TEMPLATE1 = 1;

function getTemplateData(data) {
  switch (data.selectedTemplate) {
    case TEMPLATE1:
      return {
        texDoc: template1(data),
        opts: {
          cmd: 'pdflatex',
        },
      };
    // ... repeat for other cases
    default:
      return {
        texDoc: template1(data), // Assuming the default is template1
        opts: {
          cmd: 'pdflatex',
        },
      };
  }
}

export default getTemplateData;
