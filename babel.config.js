module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-env'
  ],
  plugins: [
    'babel-plugin-macros',
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-transform-react-jsx'
  ],
  sourceType: 'unambiguous'
}
