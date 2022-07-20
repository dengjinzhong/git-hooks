"# git-hooks"

## [Git hooks](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90)
Git 钩子

和其它版本控制系统一样，Git 能在特定的重要动作发生时触发自定义脚本。

| git hook   | 执行时机          | 用法                                   | 说明                                           |
| ---------- | ----------------- | -------------------------------------- | ---------------------------------------------- |
| pre-commit | git commit 执行前 | 来检查代码风格是否一致                 | 可以使用 git commit --no verify 命令绕过该钩子 |
| commit-msg | git commit 执行前 | 用来在提交通过前验证项目状态或提交信息 | 可以使用 git commit --no verify 命令绕过该钩子 |

## [Husky](https://www.npmjs.com/package/husky)
一个可以高效管理 Git hooks 的工具

#### 使用 huskey
* 首先进行安装 `npm install husky --save-dev`
* `package.json` 配置 `script` 脚本 `{ "prepare": "husky install" }`
* 执行命令 `npm run prepare` 进行 husky 初始化，执行完成后会生成一个 `.husky` 文件夹
* 管理钩子，创建命令 `npx husky add .husky/pre-commit`
* 执行完后会在 `.husky` 下生成一个 `pre-commit` 文件夹， 修改文件内容
    ```text
    #!/usr/bin/env sh
    . "$(dirname -- "$0")/_/husky.sh"
    
    npm run link
    ```
* `git commit` 命令时会先执行 `pre-commit` 这个脚本，也就是执行 `npm run link`
* 重复上述命令生成其他钩子脚本

## [lint-staged](https://www.npmjs.com/package/lint-staged?activeTab=readme)
对提交的代码进行检查的工具

#### 安装与使用
1. 安装 `npm install --save-dev lint-staged`
2. 设置 `pre-commit` 钩子来运行 `lint-staged`
3. 安装代码检查工具（ `ESLint` ）和格式化工具( `Prettier` )
4. 配置 `lint-staged` 来运行代码检测与格式化
5. 可以在 `package.json` 中配置，也可以新建文件 `.lintstagedrc` 进行配置
```json
{
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,json}": [
      "prettier --write",
      "eslint",
      "git add"
    ]
  }
}
```

## [Prettier](https://prettier.io/)
一款代码格式化工具

#### 安装与使用
1. 安装 `npm install --save-dev --save-exact prettier`
2. 创建配置文件 `.prettierrc.json`
3. 创建忽略文件配置 `.prettierignore`
4. 格式化命令 `npx prettier --write .`
5. 如果与 ESLint 一起使用，需要安装 `eslint-config-prettier` 来屏蔽一些冲突的配置，它关闭了所有不必要的或可能与Prettier冲突的ESLint规则

## [ESLint](https://cn.eslint.org/)
javascript 代码检测工具

#### 安装与使用
1. 安装 `npm install eslint --save-dev`
2. 添加配置文件 `npx eslint --init` 也可以手动添加 `.eslintrc.js`
3. 运行检测 `eslint yourfile.js`

#### 配置
具体配置规则可以参考官方网站
```js
module.exports = {
    "env":{ "es6": true },
    "extends": ["eslint:recommended"],
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "no-unused-vars": [2, { "vars": "local", "args": "after-used" }]
    }
}
```

