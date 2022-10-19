const jscodeshift = require('jscodeshift');

/**
 * 
 * @param {jscodeshift.FileInfo} fileInfo 
 * @param {jscodeshift.API} api 
 * @param {jscodeshift.Options} options 
 */
module.exports = function transform(fileInfo, api, options) {
  api.report('upading hrds import');
  
  return api.j(fileInfo.source).find(jscodeshift.ImportDeclaration)
    .filter(declaration => declaration.node.source.value.startsWith('ui-kit/hrds'))
    .forEach(
      hrdsImport => api.j(hrdsImport)
                       .replaceWith(
                          api.j.importDeclaration(
                            hrdsImport.node.specifiers, api.j.literal(hrdsImport.node.source.value.replace("ui-kit/hrds", "@hackerrank/hrds"))
                          )
                        )
    )
    .toSource();
}
