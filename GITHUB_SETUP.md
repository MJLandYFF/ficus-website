# 🔄 GitHub仓库设置指南

## 创建GitHub仓库步骤

### 1. 创建GitHub仓库
1. 登录GitHub：https://github.com
2. 点击右上角 "+" -> "New repository"
3. 仓库名：`ficus-website`
4. 设置为Public
5. 不要勾选"Initialize this repository with README"
6. 点击"Create repository"

### 2. 添加GitHub远程仓库
在项目目录运行以下命令：

```bash
# 添加GitHub远程仓库
git remote add github https://github.com/YOUR_USERNAME/ficus-website.git

# 推送到GitHub
git push github master
```

将 `YOUR_USERNAME` 替换为您的GitHub用户名。

### 3. 验证推送成功
```bash
git remote -v
```
应该看到两个远程仓库：
- origin (Gitee)
- github (GitHub)

## 🚀 快速部署到Vercel

### 方法1：通过Vercel网站
1. 访问：https://vercel.com
2. 使用GitHub账号登录
3. 点击"Import Project"
4. 选择您的`ficus-website`仓库
5. 保持默认设置，点击"Deploy"
6. 等待部署完成，获得访问地址

### 方法2：通过Vercel CLI
```bash
# 安装Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel

# 生产部署
vercel --prod
```

## 📋 其他平台快速链接

- **Netlify**: https://app.netlify.com/start
- **Cloudflare Pages**: https://pages.cloudflare.com
- **GitHub Pages**: 在GitHub仓库的Settings -> Pages中设置

## 🎯 推荐流程

1. **首选**: 创建GitHub仓库 -> 使用Vercel部署
2. **备选**: 使用Netlify拖拽部署dist文件夹
3. **国内**: 考虑使用Cloudflare Pages

所有平台都支持自动部署，推送代码即可更新网站！
