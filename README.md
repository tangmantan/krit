# krit

一个基于 React 的可轻松配置的个人网站模板，具有出色的视觉效果。

## 设置

为了设置项目，您需要 [Node.js](https://nodejs.org/en/download/) 和 [Git](https://git-scm.com/downloads)。

## 使用方法

打开命令行或终端。克隆项目，安装依赖并运行它。

```sh
# 克隆项目
$ git clone https://github.com/tangmantan/krit.git

# 进入包含克隆项目的目录
$ cd krit

# 使用 npm 安装依赖
$ npm i

# 运行项目的开发版本
$ npm run start
```

## 配置

这是最棒的部分。**krit** 可轻松配置，让您能够创建自己的个人网站！所有可配置选项都在 [src/config/index.js](src/config/index.js) 中。

在该文件中，有 3 个变量对象包含所有信息。

1. **CommonConfig**

    此变量包含您个人资料的所有通用配置，包括您的姓名、社交链接和绘制签名的路径。

2. **ProjectsConfig**

    此变量包含将成为项目部分的所有信息。在这里，您可以添加自己的项目并为它们提供链接，还可以根据自己的喜好更改图标。

3. **CustomSectionsConfig**

    这是最有趣的部分。此变量是一个数组，可以包含任意数量的部分。在这里，您可以定义任何自定义部分，无论是"工作"、"评论"、"作品集"还是其他内容。"content" 属性支持 JSX，因此您可以按照自己的喜好对其进行样式设置或使用！

## 部署/构建

当您位于项目的根目录时，运行以下命令。

```sh
$ npm run build
```

这会将构建的应用程序放在 `./build` 目录中，该目录可以复制到服务器上。