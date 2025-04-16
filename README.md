# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

##### 项目介绍：

node版本：v18.20.3 或更高版本

包管理器：pnpm

##### 项目启动：
```shell
pnpm install

pnpm run dev

pnpm run build

pnpm run lint
```
项目安装涉及主要依赖有：
```shell
# add antd-mobile
pnpm add antd-mobile

pnpm add antd-mobile-icons

# 安装 zustand
pnpm add zustand

# Prettier 集成
pnpm add -D prettier eslint-plugin-prettier eslint-config-prettier

# 初始化 eslint配置文件
npx eslint --init

# 检测 eslint
pnpm run lint

# 新增 .prettierignore 添加忽略文件，package.json配置脚本
npx prettier . --write

# 修复
npx prettier . --write --fix
```

基于 pnpm create vite 创建的react脚手架上新增 Prettier + Husky + lint-staged + Commitlint，指定使用 pnpm 包管理器，git 代码提交需符合指定格式