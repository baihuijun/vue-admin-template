module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier'
    // '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/indent': ['off'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-useless-escape': 'off',
    'prefer-rest-params': 'off',
    'no-tabs': 'off',
    'no-undef': 'off',
    'no-prototype-builtins': 'off',
    'space-before-function-paren': 'off',
    'require-prop-type-constructor': 'off',
    'vue/require-prop-type-constructor': 'off',
    'vue/no-async-in-computed-properties': 'off',
    'no-extend-native': 'off',
    'no-var': 'off',
    'vue/no-unused-components': 'off',
    'vue/valid-v-bind': 'off',
    'no-unused-expressions': 0,
    'no-unneeded-ternary': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'no-empty-function': ['error', { allow: ['functions', 'methods'] }],
    // 'space-before-function-paren': 2,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',
    'comma-dangle': ['error', 'never'] //是否允许对象中出现结尾逗号
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineComponent: 'readonly',
    defineExpose: 'readonly'
  }
}
