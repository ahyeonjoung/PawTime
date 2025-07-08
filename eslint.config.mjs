import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginTS from '@typescript-eslint/eslint-plugin';
import parserTS from '@typescript-eslint/parser';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginImport from 'eslint-plugin-import';
import pluginCompat from 'eslint-plugin-compat';
import pluginEsx from 'eslint-plugin-es-x';
import globals from 'globals';

export default [
  {
    files: ['src/**/*.{ts,tsx,js,jsx}'],
    ignores: ['node_modules/**', 'dist/**'],
    languageOptions: {
      parser: parserTS,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
      },
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.es2015,
        ...globals.node,
        PHASE: 'readonly',
        MODE: 'readonly',
        SENTRY_DSN: 'readonly',
      },
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      '@typescript-eslint': pluginTS,
      prettier: pluginPrettier,
      import: pluginImport,
      compat: pluginCompat,
      'es-x': pluginEsx,
    },
    settings: {
      react: {
        version: 'detect',
      },
      lintAllEsApis: true,
    },
    rules: {
      // Prettier
      'prettier/prettier': ['error'],

      // Common JS
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
      'linebreak-style': ['error', 'unix'],
      'prefer-const': 'error',
      'no-var': 'error',
      'no-console': ['warn', { allow: ['info', 'debug'] }],
      'no-undef': 'warn',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-unused-vars': 'off',
      'no-case-declarations': 'error',
      'no-duplicate-imports': 'error',
      'require-await': 'error',
      'object-shorthand': 'error',
      curly: 'error',
      eqeqeq: 'error',
      'prefer-object-has-own': 'error',
      'prefer-exponentiation-operator': 'error',
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: 'export',
          next: 'multiline-block-like',
        },
      ],
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          allowSeparatedGroups: true,
        },
      ],

      // React
      'react/prop-types': 'off',
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'react/display-name': ['error', { checkContextObjects: true }],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-boolean-value': 'error',
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'ignore', propElementValues: 'always' }],
      'react/no-unused-prop-types': 'error',

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // TypeScript
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^ignore',
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/restrict-template-expressions': 'error',
      '@typescript-eslint/no-redundant-type-constituents': 'error',
      '@typescript-eslint/unbound-method': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'enumMember',
          format: ['UPPER_CASE'],
        },
      ],

      // Import
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/prefer-default-export': 'off',
      'import/newline-after-import': 'error',
      'import/no-unresolved': 'off',
      'import/no-duplicates': 'error',
      'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
      'import/default': 'error',
      'import/namespace': 'warn',

      // Browser Compatibility
      'compat/compat': 'error',
    },
  },
  {
    files: ['src/e2e/**/*.ts'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
    },
  },
];
