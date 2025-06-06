# 🚀 Vercel 部署步骤详解

## ✅ 当前状态
- 项目已配置好 Vercel 部署文件
- 构建配置已优化 
- 代码已推送到 GitHub: https://github.com/MJLandYFF/ficus-website

## 🎯 Framework Preset 选择

当 Vercel 询问 Framework Preset 时，请选择：

**✅ 选择：`Vite`**

❌ 不要选择：Other, React, Next.js

## 方法一：通过 Vercel 网站部署（推荐⭐⭐⭐⭐⭐）

### 步骤 1：访问 Vercel
1. 打开浏览器，访问：https://vercel.com
2. 点击右上角 "Login" 或 "Sign Up"

### 步骤 2：授权 GitHub
1. 选择 "Continue with GitHub"
2. 授权 Vercel 访问您的 GitHub 账户
3. 如果需要，允许 Vercel 访问您的仓库

### 步骤 3：导入项目
1. 在 Vercel 仪表板，点击 "Add New..." → "Project"
2. 找到并选择 `MJLandYFF/ficus-website` 仓库
3. 点击 "Import"

### 步骤 4：配置项目设置
**项目配置如下：**

```
Project Name: ficus-website
Framework Preset: Vite  ⭐ 重要：选择这个
Root Directory: ./
Build Command: npm run build (自动检测)
Output Directory: dist (自动检测)
Install Command: npm install (自动检测)
```

### 步骤 5：部署
1. 确认所有设置正确
2. 点击 "Deploy" 按钮  
3. 等待 1-3 分钟完成部署

### 步骤 6：获取网址
部署完成后，您将获得：
- **访问地址**: `https://ficus-website-xxx.vercel.app`

---

## 方法二：通过 CLI 部署
2. 点击右上角 "+" -> "New repository"
3. 仓库名：`ficus-website`
4. 设置为Public
5. 不要勾选"Add a README file"
6. 点击"Create repository"

### 2. 获取仓库地址
创建后会得到类似地址：
```
https://github.com/YOUR_USERNAME/ficus-website.git
```

### 3. 告诉我您的GitHub用户名
我会为您配置并推送代码到GitHub

### 4. 部署到Vercel
- 访问：https://vercel.com
- 使用GitHub账号登录
- 导入您的ficus-website项目
- 自动部署完成

## 预期结果
部署成功后，您将获得一个类似这样的访问地址：
```
https://ficus-website-xxx.vercel.app
```

## 项目特点
- ⚡ 全球CDN加速
- 🔄 Git推送自动部署
- 🌐 支持自定义域名
- 📱 完美响应式设计
- 🗺️ 高德地图集成

请提供您的GitHub用户名，我立即为您完成部署！
