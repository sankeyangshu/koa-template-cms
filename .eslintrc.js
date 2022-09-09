/*
 * @Description: eslint 配置文件
 * @Author: 三棵杨树
 * @Date: 2022-09-02 21:28:14
 * @LastEditors: 三棵杨树
 * @LastEditTime: 2022-09-09 22:08:42
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:prettier/recommended', // 添加 prettier 插件
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
  },
};
