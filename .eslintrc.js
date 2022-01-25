// eslint-disable-next-line no-undef
module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    es2021: true,
    browser: true,
  },
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    'no-console': ["error", { allow: ["warn", "error"] }],
    semi: ["error"],
  },
};
