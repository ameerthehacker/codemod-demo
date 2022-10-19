const jscodeshift = require('jscodeshift/src/Runner');
const path = require('path');

const importTransformPath = path.resolve(__dirname, 'update-import.js');
const attrTransformPath = path.resolve(__dirname, 'update-button-prop.js');
const paths = ['./components']

jscodeshift.run(importTransformPath, paths, { verbose: true }).then(() => {
  console.log('Import update done');
});

jscodeshift.run(attrTransformPath, paths, { verbose: true }).then(() => {
  console.log('Attr update done');
})
