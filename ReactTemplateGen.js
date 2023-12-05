console.log('Creating React template...');

const fs = require('fs');

function generateReactTemplate(componentName,dir) {
  const template = `
  import React from 'react';

  import './${dir}/${componentName}.css'

  function ${componentName}(props) {
      return (
          <h1>${componentName} Template</h1>
      )
  }

  export default ${componentName}
`;
const filePath = `${componentName}.jsx`;
try{
  const filePath = `${dir}/${componentName}.jsx`;
  fs.writeFileSync(filePath, template);
}catch(err){
  fs.writeFileSync(filePath, template);
  console.log(`directiory ${dir} not found`)
}
 

 
  
  console.log(`React template generated successfully at ${filePath}`);
}


module.exports = generateReactTemplate;
