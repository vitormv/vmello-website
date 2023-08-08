module.exports = {
  extends: ['airbnb-base', 'plugin:tailwindcss/recommended', 'plugin:prettier/recommended'],
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
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:tailwindcss/recommended',
        'plugin:prettier/recommended',
      ],
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
      plugins: ['astro'],

      // Enable this plugin
      env: {
        // Enables global variables available in Astro components.
        node: true,
        'astro/astro': true,
        es2020: true,
      },
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        // The script of Astro components uses ESM.
        sourceType: 'module',
      },
      rules: {
        // Enable recommended rules
        'astro/no-conflict-set-directives': 'error',
        'astro/no-unused-define-vars-in-style': 'error',

        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    {
      // Define the configuration for Astro's `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      env: {
        browser: true,
        es2020: true,
      },
      parserOptions: {
        sourceType: 'module',
      },
      rules: {
        // override/add rules settings here, such as:
        // "no-unused-vars": "error"

        // If you are using "prettier/prettier" rule,
        // you don't need to format inside <script> as it will be formatted as a `.astro` file.
        'prettier/prettier': 'off',
      },
    },
  ],
};
