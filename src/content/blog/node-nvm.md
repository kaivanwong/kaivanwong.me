---
title: "Node.js 版本控制"
description: "通过为 Windows 和 MAC 系统安装 NVM 工具进行 Node.js 版本管理。"
duration: "15min"
lang: "zh-CN"
date: "2024-04-28"
---

本文章介绍如何使用 [NVM](https://github.com/nvm-sh/nvm)（Node Version Manager 即 Node 版本管理工具）。

## 如何安装？

### Mac 环境

通过 `brew` 在 Mac 上安装 NVM。

```sh
brew install nvm
```

在 `.zshrc` 文件并在最后添加以下内容。

```
export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"
```

重新加载配置。

```sh
source ~/.zshrc
```

### Windows 环境

下载地址

  - GitHub: [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)

由于独立的 Node.js 和 NVM for Windows 配置默认 Node.js 有冲突，如果本机上有独立安装 Node.js 需要先卸载。

如何干净的卸载？

  1. 控制面板卸载。
  2. 删除用户对应路径下（npm、npm-cache、node 开头的文件夹）

安装成功后进入 PowerShell，输入 `nvm -v` 命令查看是否安装成功，出现 NVM for Windows 版本信息即可。

## 使用 NVM

### 高频命令

获取全部可用的 Node.js 版本。

```sh
nvm ls-remote
```

安装某个版本的 Node.js。

```sh
nvm install 18.14.1
```

切换其他版本。

```sh
nvm use 14.18.1
```

查看本地可用的 Node.js 版本。

```sh
nvm ls
```

卸载指定的 Node.js 版本。

```sh
nvm uninstall 18.14.1
```

其他命令可通过帮助命令获取，或者您也可以参考 GitHub [README](https://github.com/nvm-sh/nvm)。

```sh
nvm -h
```

## 常见问题

### exit status 1: ��û��� 㹻 ��Ȩ��ִ�д˲�����

可能原因汇总：

- 终端使用是否是管理员方式打开；
- 安装路径是否包含中文；
- 安装路径有空格

使用 `nvm use` 命令切换 Node.js 版本时，通常是没有复制删除文件夹权限导致，可使用管理员命令进行切换。

### exit status 145: ���������ִ�������������ִ������������

检查安装 NVM 路径与 Node.js 的路径或文件，是否出现空格或中文。比如默认安装路径中出现了空格。如果有，更改路径或文件夹名称后再使用 `nvm use`。

安装 NVM 前是否原本就有 Node.js 其它版本。如果有，且安装过程中选择合并了以前版本，可以删除 NVM 中所有 node.js 版本（主要是安装 nvm 前就有的版本），重新使用 `nvm use` 安装所需 Node.js。

### Node.js 的 NPM 安装失败

先找到 Node.js 版本对应 NPM 版本。

> 下载地址：[https://nodejs.org/en/about/previous-releases#looking-for-latest-release-of-a-version-branch](https://nodejs.org/en/about/previous-releases#looking-for-latest-release-of-a-version-branch)

然后去下载 NPM 对应版本的 zip 文件。

> 下载地址：[https://github.com/npm/cli/releases](https://github.com/npm/cli/releases)

将下载好的压缩包解压后，文件夹命名为 `npm`，然后找到 NVM for Windows 存放的指定 Node.js 版本目录里，npm 文件夹放到 node_modules 中，npm/bin 下的 `npm`、`npm.cmd`、`npx`、`npx.cmd` 四个文件放到与 node_modules 同级目录下即可。

### Node.js 下载缓慢

添加以下内容到安装 NVM for Windows 目录 `settings.txt`。

```
node_mirror: http://npmmirror.com/mirrors/node/
npm_mirror: http://npmmirror.com/mirrors/npm/
```
