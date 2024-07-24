module.exports = {
  extends: ['../.eslintrc.base.cjs'],
  ignorePatterns: ['!**/*', '**/dist', '**/node_modules'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {},
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {},
    },
    {
      files: ['*.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        '@nx/dependency-checks': 'error',
      },
    },
    {
      files: ['./package.json', './generators.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        '@nx/nx-plugin-checks': 'error',
      },
    },
  ],
}
