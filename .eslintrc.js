module.exports = {
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'jsx-a11y'
  ],
  extends: ['prettier', 'prettier/@typescript-eslint', 'prettier/react'],
  rules: {},
}