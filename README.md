# :love_hotel: VuePress Cli

## :fishing_pole_and_fish: VuePress 博客搭建工具

基于 [Yur](https://github.com/cnguu/vuepress-theme-yur) 主题的 VuePress 博客快速搭建工具

[![version](https://img.shields.io/github/release/ioim/vuepress-theme-yur-cli.svg?style=flat-square)](https://github.com/ioim/vuepress-theme-yur-cli/releases)
[![last-commit](https://badgen.net/github/last-commit/ioim/vuepress-theme-yur-cli)](https://github.com/ioim/vuepress-theme-yur-cli)
[![GitHub license](https://img.shields.io/github/license/ioim/vuepress-theme-yur-cli)](https://github.com/ioim/vuepress-theme-yur-cli/blob/master/LICENSE)

## :fishing_pole_and_fish: 准备

- :octocat:源码仓库（源码备份）
- :octocat:博客仓库（博客部署）

## :fishing_pole_and_fish: 开发环境

- Git
- Node.js
- yarn


## :fishing_pole_and_fish: 使用

### :bookmark: 下载

```bash
$ git clone https://github.com/ioim/vuepress-theme-yur-cli.git
```

> 或者点击[这里](https://github.com/ioim/vuepress-theme-yur-cli/releases)下载最新版。

### :bookmark: 修改仓库地址

```bash
$ git remote set-url origin 源码仓库地址
```

### :bookmark: 保存源码

```bash
$ git add -A
$ git commit -m "commit"
$ git push
```

### :bookmark: 安装

```bash
$ yarn install
```

> 如果下载慢，使用下面命令全局加速

```bash
$ yarn config set registry https://registry.npm.taobao.org
```

### :bookmark: 部署

需要修改 `deploy.sh` 脚本

## :fishing_pole_and_fish: 命令

| 命令 | 说明 |
| :-: | :-: |
| yarn start | 本地预览<br>http://127.0.0.1:2234 |
| yarn build | 编译 |
| yarn deploy | 部署 |

## :fishing_pole_and_fish: 教程

- [从零开始搭建 VuePress 静态博客](https://gleehub.com/other/cong-ling-kai-shi-da-jian-vuepress-jing-tai-bo-ke.html)
- [vuepress-theme-yur 使用教程](https://gleehub.com/other/vuepress-theme-yur-shi-yong-jiao-cheng.html)

## :fishing_pole_and_fish: 协议

[MIT](./LICENSE)