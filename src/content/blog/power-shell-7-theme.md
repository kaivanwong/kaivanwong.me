---
title: "Power Shell 7 美化"
description: "通过 Oh My Posh 和 Windows Terminal 完成终端工具的美化。"
lang: "zh-CN"
duration: "15min"
date: "2024-05-06"
---

## 安装 Windows Terminal

这是一个微软出品的终端，如果你的操作系统是Windows 11，那么它已经被集成在了系统中。

您也可以使用其它终端，请按照对应的使用方法修改字体和启动的 Shell。

前往 [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701?hl=zh-cn&gl=cn) 页面下载安装，或者可以直接在 Microsoft Store 搜索 Windows Terminal 进行安装。

![Microsoft Store with Windows Terminal Image](/blog/power-shell-7-theme/microsoft-store.png)

安装完成后可在任意页面右键打开终端。

![Windows Terminal Image](/blog/power-shell-7-theme/windows-terminal.png)

## 安装 Power Shell 7

Windows 10 / 11 系统自带的是 PowerShell 5。如果你还没有 PowerShell 7，[点我下载](https://github.com/PowerShell/PowerShell/releases)。

在终端设置中，将 Power Shell 7 设为默认，并且将管理员权限打开。

![Default Terminal Image](/blog/power-shell-7-theme/default-terminal.png)

如果不想将 Power Shell 7 设置默认，也可以在新建窗口时按住Ctrl键，就会以管理员权限新建窗口。

## 安装 Oh My Posh

[Oh My Posh](https://ohmyposh.dev/) 是一个命令行提示工具，通常用于美化和自定义终端提示符。它允许用户创建自定义的终端提示符，包括颜色、图标、文本样式等，以提高终端的可视化吸引力和功能性。

安装 Oh My Posh。

```sh
winget install JanDeDobbeleer.OhMyPosh
```

将 Oh My Posh 添加到环境变量中。

```sh
$env:Path += ";C:\Users\user\AppData\Local\Programs\oh-my-posh\bin"
```

## 配置 Oh My Posh

打开 Power Shell 7 终端，执行下面的命令创建配置文件。

```sh
New-Item -Path $PROFILE -Type File -Force
```

然后执行下面的命令打开文本编辑。

```sh
notepad $Profile
```

将以下内容输入到文件中。

```
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/uew.omp.json" | Invoke-Expression
```

新建一个 Power Shell 7 终端查看效果。

![Power Shell 7 Theme](/blog/power-shell-7-theme/no-font.png)

## Nerd 字体

配置好主题后，可以看到 Oh My Posh 的配置已经生效了，但是会有乱码的情况出现。乱码是因为当前 Windows Terminal 使用的字体不是 Nerd Fonts 字体（见[官方文档](https://www.nerdfonts.com/)），因此我们需要下载一份 Nerd Fonts 字体并配置为 Windows Terminal 使用的字体。

这里下载名为 CaskaydiaCove Nerd Font 的字体并进行安装。

安装完成后，重启 Windows Terminal，进入设置界面，选择 Power Shell 7 的外观选项修改字体。

![CaskaydiaCove Nerd Font](/blog/power-shell-7-theme/caskaydia-cove-nerd-font.png)

重新启动  Windows Terminal 发现已经正常。

![UEW Theme](/blog/power-shell-7-theme/uew-theme.png)

## 修改主题

如果想要修改主题，可以运行如下命令查看可用主题效果。

```sh
Get-PoshThemes
```

效果如下：

![Oh My Posh Themes](/blog/power-shell-7-theme/oh-my-posh-theme.png)

然后运行 `notepad $Profile` 命令打开配置文件，将 `uew` 修改为你选择的主题名称，如选择了 `velvet`，则完整内容如下：

```
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/velvet.omp.json" | Invoke-Expression
```

也可以通过[官方文档](https://ohmyposh.dev/docs/themes)中的主题示例进行选择。

![Oh My Posh Themes](/blog/power-shell-7-theme/themes.png)

其他关于 Windows Terminal 的外观修改可以直接从设置中进行修改，如毛玻璃等效果。

## 为 VS Code 配置默认终端

如果想要将 VS Code 的默认终端设置为 Power Shell 7，打开设置，进入 `settings.json`，将如下配置复制到您的配置文件中。重启 VS Code 后生效。

```json
{
  "terminal.integrated.profiles.windows": {
    "PowerShell 7": {
      "path": "C:\\Program Files\\PowerShell\\7\\pwsh.exe"
    }
  },
  "terminal.integrated.defaultProfile.windows": "PowerShell 7"
}
```

如果你的 Power Shell 7 安装路径不是上面的路径，则需要手动修改为您的路径。
