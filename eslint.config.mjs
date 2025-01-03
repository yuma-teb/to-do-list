import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import perfectionist from 'eslint-plugin-perfectionist';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    plugins: ['perfectionist'],

    rules: {
      'no-alert': 0,
      camelcase: 0,
      'no-console': 0,
      'no-unused-vars': 0,
      'no-param-reassign': 0,
      'no-underscore-dangle': 0,
      'no-restricted-exports': 0,
      'react/no-children-prop': 0,
      'react/react-in-jsx-scope': 0,
      'jsx-a11y/anchor-is-valid': 0,
      'react/no-array-index-key': 0,
      'no-promise-executor-return': 0,
      'react/require-default-props': 0,
      'react/jsx-props-no-spreading': 0,
      'import/prefer-default-export': 0,
      'react/function-component-definition': 0,
      '@typescript-eslint/naming-convention': 0,
      'jsx-a11y/control-has-associated-label': 0,
      '@typescript-eslint/no-use-before-define': 0,
      '@typescript-eslint/no-explicit-any': 'off',
      'react/jsx-no-useless-fragment': [
        1,
        {
          allowExpressions: true,
        },
      ],
      'prefer-destructuring': [
        1,
        {
          object: true,
          array: false,
        },
      ],
      'react/no-unstable-nested-components': [
        1,
        {
          allowAsProps: true,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        1,
        {
          args: 'none',
        },
      ],
      'react/jsx-no-duplicate-props': [
        1,
        {
          ignoreCase: false,
        },
      ],
      'unused-imports/no-unused-vars': [
        0,
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      // perfectionist
      // https://eslint-plugin-perfectionist.azat.io/
      'perfectionist/sort-named-imports': [
        1,
        {
          order: 'asc',
          type: 'line-length',
        },
      ],
      'perfectionist/sort-named-exports': [
        1,
        {
          order: 'asc',
          type: 'line-length',
        },
      ],
      'perfectionist/sort-exports': [
        1,
        {
          order: 'asc',
          type: 'line-length',
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'line-length',
          order: 'asc',
          ignoreCase: true,
          specialCharacters: 'keep',
          internalPattern: ['^~/.+'],
          partitionByComment: false,
          partitionByNewLine: false,
          newlinesBetween: 'always',
          maxLineLength: undefined,
          groups: [
            'type',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
          customGroups: { type: {}, value: {} },
          environment: 'node',
        },
      ],
    },
  }),
];

export default eslintConfig;
