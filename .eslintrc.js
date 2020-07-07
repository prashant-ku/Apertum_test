module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  env: {
    browser: true,
  },
  overrides: [
    {
      files: ['*.spec.js', './test/**'],
      env: {
        jest: true,
      }
    }
  ],
  rules: {
    'comma-dangle': 0,
    'no-console': [2, {
      allow: ['warn', 'error'],
    }],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'space-before-function-paren': [2, {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
