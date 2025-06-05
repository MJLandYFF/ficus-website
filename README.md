# FICUS 公司网站

这是FICUS公司的官方网站，展示了公司的产品、服务和技术实力。

## 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **UI组件**: Radix UI
- **地图服务**: 高德地图 API
- **路由**: React Router
- **部署**: Gitee Pages

## 本地开发

1. 克隆项目
```bash
git clone https://gitee.com/chromebaba/ficus-website.git
cd ficus-website
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 构建生产版本
```bash
npm run build
```

## 部署到Gitee Pages

### 启用Gitee Pages服务

1. 登录Gitee，进入项目页面：https://gitee.com/chromebaba/ficus-website
2. 点击项目页面右上角的 "服务" 按钮
3. 选择 "Gitee Pages"
4. 在部署目录中选择 "dist" 文件夹
5. 点击 "启动" 按钮

### 访问网站

启用后，您的网站将在以下地址可访问：
```
https://chromebaba.gitee.io/ficus-website/
```

### 更新网站

每次更新代码后，需要：
1. 重新构建：`npm run build`
2. 提交并推送更改：`git add . && git commit -m "Update" && git push`
3. 在Gitee Pages设置页面点击 "更新" 按钮

## 特性

- 🌐 多语言支持（中文/英文）
- 📱 响应式设计
- 🗺️ 高德地图集成
- 📧 联系表单
- 🎨 现代化UI设计
- ⚡ 快速加载
- 🔍 SEO优化

## 环境变量

如需使用高德地图功能，请在 `index.html` 中替换 `YOUR_AMAP_KEY` 为您的高德地图API密钥。

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
