# 🚀 FICUS网站部署指南

由于Gitee Pages暂停服务，以下是多个免费托管方案供您选择：

## 方案一：Vercel (最推荐⭐⭐⭐⭐⭐)

### 优势
- 🌍 全球CDN，速度极快
- 🔄 Git自动部署
- 🆓 免费额度丰富
- 🌐 国内访问良好
- 📱 支持自定义域名

### 部署步骤

1. **注册Vercel账号**
   - 访问：https://vercel.com
   - 使用GitHub账号登录

2. **上传到GitHub**
   ```bash
   # 在项目目录运行
   git remote add github https://github.com/chromebaba/ficus-website.git
   git push github master
   ```

3. **连接Vercel**
   - 在Vercel控制台点击"Import Project"
   - 选择GitHub仓库
   - 自动部署完成

4. **访问网站**
   - 获得类似：`https://ficus-website-xxx.vercel.app` 的地址

---

## 方案二：Netlify (推荐⭐⭐⭐⭐)

### 优势
- 🔧 功能丰富
- 📝 表单处理
- 🆓 免费SSL证书

### 部署步骤

1. **注册Netlify**
   - 访问：https://netlify.com
   - 使用GitHub登录

2. **拖拽部署**
   - 将 `dist` 文件夹直接拖到Netlify
   - 或连接GitHub自动部署

---

## 方案三：GitHub Pages (推荐⭐⭐⭐)

### 部署步骤

1. **创建GitHub仓库**
   ```bash
   git remote add github https://github.com/chromebaba/ficus-website.git
   git push github master
   ```

2. **启用Pages**
   - 进入仓库Settings
   - 找到Pages设置
   - 选择Source: Deploy from a branch
   - 选择Branch: master, Folder: /dist

---

## 方案四：Cloudflare Pages (推荐⭐⭐⭐⭐)

### 优势
- 🚀 全球CDN
- 🔒 高安全性
- 🆓 免费额度高
- 🌐 国内访问优秀

### 部署步骤

1. **注册Cloudflare**
   - 访问：https://pages.cloudflare.com

2. **连接Git仓库**
   - 选择GitHub/GitLab仓库
   - 设置构建命令：`npm run build`
   - 设置输出目录：`dist`

---

## 🛠️ 项目已配置文件

项目已包含以下配置文件：

- `vercel.json` - Vercel部署配置
- `vite.config.ts` - 已调整为根路径部署
- `.github/workflows/deploy.yml` - GitHub Actions自动部署

## 📝 部署后注意事项

1. **地图API密钥**
   - 在部署后访问网站
   - 在控制台替换高德地图API密钥

2. **自定义域名**
   - 大部分平台都支持绑定自定义域名
   - 需要在域名DNS设置中添加CNAME记录

3. **更新网站**
   - 推送代码到Git仓库即可自动更新
   - 无需手动重新部署

## 🚀 推荐方案

**首选**: Vercel - 速度快，稳定性好，国内访问优秀
**备选**: Cloudflare Pages - 功能强大，全球CDN

选择任意方案后，您的网站都能正常访问！
