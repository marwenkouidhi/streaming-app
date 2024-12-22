// eslint.config.mjs
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  ...compat.extends(
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ),
  {
    rules: {
      // Prevent React import in Next.js
      'react/react-in-jsx-scope': 'off',
      // Strict boolean expressions
      '@typescript-eslint/strict-boolean-expressions': 'off',
      // Allow empty interfaces
      '@typescript-eslint/no-empty-interface': 'warn',
      // Explicit function return types
      '@typescript-eslint/explicit-function-return-type': 'off',
      // Allow unused vars with underscore
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      // Consistent type imports
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports' },
      ],
    },
  },
  {
    ignores: [
      '*.config.js',
      '*.config.mjs',
      'node_modules/',
      '.next/',
      'dist/',
    ],
  },
];

export default eslintConfig;
