# 个人博客源码

## 安装vitepress

首先新建文件夹，打开cmd窗口

```
$ pnpm add -D vitepress
```

初始化Vitepress

```
$ pnpm vitepress init
```

启动项目
```
$ pnpm run docs:dev
```

## 项目结构介绍
* .vitepress：最核心的目录，
* theme目录：自定义主题配置，css样式等
* config.mjs：最核心的文件，各种配置导航栏、侧边栏、标题什么的都是在这里
* node_modules：安装的依赖
* api-examples.md 和 markdown-examples.md：官方给的两个示例
* index.md：主页相关
* package.json 和 pnpm-lock.yml：包管理工具需要用的
