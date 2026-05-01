import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginTypeScript from '@typescript-eslint/eslint-plugin'
import parserTypeScript from '@typescript-eslint/parser'
import parserVue from 'vue-eslint-parser'
import pluginPrettier from 'eslint-plugin-prettier'
import configPrettier from 'eslint-config-prettier'

export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.{js,mjs,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: parserTypeScript,
      globals: {
        fetch: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': pluginTypeScript,
      prettier: pluginPrettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginTypeScript.configs.recommended.rules,
      ...configPrettier.rules,
      'prettier/prettier': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        parser: parserTypeScript,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      vue: pluginVue,
      '@typescript-eslint': pluginTypeScript,
      prettier: pluginPrettier,
    },
    rules: {
      ...pluginVue.configs['flat/recommended'].rules,
      ...configPrettier.rules,
      'prettier/prettier': 'warn',
      'vue/multi-word-component-names': 'warn',
    },
  },
]
