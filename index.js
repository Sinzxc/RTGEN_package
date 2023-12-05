const generateReactTemplate = require('./ReactTemplateGen');
const generateCss = require('./ReactCssGen');

const componentName = process.argv[2];

const dir = process.argv[3];

if (!componentName) {
  console.error('Please provide a component name.');
} else {
  generateReactTemplate(componentName,dir);
  generateCss(componentName,dir);
}