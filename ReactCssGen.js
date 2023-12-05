console.log('Creating CSS...');

const fs = require('fs');

function generateReactCSS(componentName,dir) {
    const template = `/* ${componentName} stylesheets file */`;
  
    const filePath = `${componentName}.css`;
    try{
      const filePath = `${dir}/${componentName}.css`;
      fs.writeFileSync(filePath, template);
    }catch(err){
      fs.writeFileSync(filePath, template);
    }
    
    console.log(`React css generated successfully at ${filePath}`);
  }
  module.exports=generateReactCSS;