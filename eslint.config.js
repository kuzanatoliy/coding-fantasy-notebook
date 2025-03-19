import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import prettierRules from './.prettierrc.cjs';
import cypresseslint from 'eslint-plugin-cypress/flat';

export default tseslint.config(
  {
    ignores: ['eslint.config.js'],
  },
  {
    files: ['**/*.cjs'],
    env: {
      node: true,
    },
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  },
  prettierRecommended,
  {
    rules: {
      'prettier/prettier': [2, prettierRules],
    },
  },
  cypresseslint.configs.recommended
);
