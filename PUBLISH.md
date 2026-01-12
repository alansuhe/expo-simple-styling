# 发布

## 版本控制（npm）

修改完成后，更新版本号

```bash
pnpm version patch   # 0.1.0 -> 0.1.1 
pnpm version minor   # 0.1.0 -> 0.2.0 
pnpm version major   # 0.1.0 -> 1.0.0`
```

## Git更新

```bash
git commit -m "v0.1.X"
```

## 发布到npm

1. 登录 npm 账号：
`pnpm login`

2. 发布前构建：
`pnpm prepare`

1. 发布：
`pnpm publish --access public`

> 如果是私有包，去掉 `--access public`  
> GitHub 私库也可以同步管理代码，但 npm 上依然独立发布

这里注意，由于我的pnpm用了淘宝镜像，此处login及一切后续操作都应该加个：
`--registry=https://registry.npmjs.org/`。
临时改回源，当然长久修改也行。