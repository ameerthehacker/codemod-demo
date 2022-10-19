const jscodeshift = require('jscodeshift');

/**
 * 
 * @param {jscodeshift.FileInfo} fileInfo 
 * @param {jscodeshift.API} api 
 * @param {jscodeshift.Options} options 
 */
module.exports = function transform(fileInfo, api, options) {
  api.report('updating attribute of button');

  return api.j(fileInfo.source).findJSXElements('Button')
    .forEach(btnElement => {
       const attributes = api.j(btnElement).find(api.j.JSXAttribute);

       attributes.forEach(attribute => {
        if (attribute.node.name.name === 'variant') {
          api.j(attribute).replaceWith(api.j.jsxAttribute(api.j.jsxIdentifier("type"), attribute.node.value))
        }
       })
     }
    )
    .toSource();
}
