module.exports = {
  extends: [
    'plugin:astro/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.astro'], // This is a required setting in `@typescript-eslint/parser` v5.
  },
  plugins: ['@typescript-eslint', 'import', 'tailwindcss'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  globals: {
    ga: 'readonly',
  },
  ignorePatterns: ['/dist/', '/node_modules/'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
      },
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: ['./**/*.ts', './**/*.tsx'],
      extends: ['plugin:tailwindcss/recommended', 'plugin:prettier/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
      },
      settings: {
        'import/resolver': {
          node: {
            paths: ['./'],
            extensions: ['.ts', '.tsx'],
          },
        },
      },
      rules: {
        'no-multi-spaces': 'error',
        'import/extensions': 'off',
        'no-continue': 'off',
        'no-shadow': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-shadow': ['error'],
      },
    },
    {
      files: ['./cli/**/*.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'no-console': 'off',
      },
    },
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // plugins: ['astro'],
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: 'tsconfig.json',
        extraFileExtensions: ['.astro'],
        // The script of Astro components uses ESM.
        sourceType: 'module',
      },
      // Enable this plugin
      env: {
        // Enables global variables available in Astro components.
        node: true,
        'astro/astro': true,
        es2020: true,
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.astro'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: './',
          },
        },
      },
      rules: {
        // Enable recommended rules
        'astro/no-conflict-set-directives': 'error',
        'astro/no-unused-define-vars-in-style': 'error',
        'import/no-unresolved': [2, { ignore: ['astro-icon'] }],
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    {
      // Define the configuration for `<script>` tag in .astro files.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      parser: '@typescript-eslint/parser',
      rules: {
        'prettier/prettier': 'off',
      },
    },
  ],
};
