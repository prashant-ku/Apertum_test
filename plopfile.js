const path = require('path')
const COMPONENT_DIR = 'src/components'
const TEMPLATES_DIR = 'templates/component'

const PACKAGE_JSON = 'package.json'
const COMPONENT_FILE = 'component.js'
const README_MD = 'README.md'
const INDEX_JS = 'index.js'
const INDEX_SPEC_JS = 'index.spec.js'
const STYLES_SCSS = 'styles.scss'

const componentPath = (componentName, fileName) => path.join(COMPONENT_DIR, componentName, fileName)
const templatePath = name => path.join(TEMPLATES_DIR, name)

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      },
    ],
    actions: [
      {
        type: 'add',
        // Plop will create directories for us if they do not exist
        // so it's okay to add files in nested locations.

        path: componentPath('{{name}}', 'src/{{name}}.js'),
        templateFile: templatePath(`src/${COMPONENT_FILE}`),
      },
      {
        type: 'add',
        path: componentPath('{{name}}', PACKAGE_JSON),
        templateFile: templatePath(`${PACKAGE_JSON}.template`),
      },
      // Create README.md
      {
        type: 'add',
        path: componentPath('{{name}}', README_MD),
        templateFile: templatePath(`${README_MD}`),
      },
      // Create src/index.js
      {
        type: 'add',
        path: componentPath('{{name}}', `${INDEX_JS}`),
        templateFile: templatePath(`src/${INDEX_JS}`),
      },
      // Create src/index.spec.js
      {
        type: 'add',
        path: componentPath('{{name}}', `src/${INDEX_SPEC_JS}`),
        templateFile: templatePath(`src/${INDEX_SPEC_JS}`),
      },
      // Create src/index.js
      {
        type: 'add',
        path: componentPath('{{name}}', `src/${STYLES_SCSS}`),
        templateFile: templatePath(`src/${STYLES_SCSS}`),
      },
      // {
      //   // Adds an index.js file if it does not already exist
      //   type: 'add',
      //   path: 'src/components/index.js',
      //   templateFile: 'plop-templates/injectable-index.js.hbs',
      //   // If index.js already exists in this location, skip this action
      //   skipIfExists: true,
      // },

    ],
  })
}
