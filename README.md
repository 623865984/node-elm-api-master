# 技术栈

nodejs + express + mongodb + mongoose + pm2

## 项目运行

```

git clone git@github.com:EasyTuan/node-elm-api.git

cd nuxt-elm

npm install

npm run dev

```

### 1.2 开发过程

#### 1.2.1 命令

```sh

# 开发
npm run dev

# 启动mongodb（确保已经安装了mongodb）
npm run mongod

# 开启浏览器GUI界面查看mongodb（默认端口1234）
npm run mongo

# 生成api文档（基于apidoc）
npm run doc

# 生产部署（pm2进程守护）
npm run start

```

# 目标功能
- [x] 商家列表 -- 完成
- [x] 购物车功能 -- 完成
- [x] 餐馆食品列表页 -- 完成
- [x] 店铺评价页面 -- 完成
- [x] 商家详情页 -- 完成
- [x] 登录、注册 -- 完成
- [x] 修改密码 -- 完成
- [x] 个人中心 -- 完成
- [x] 红包 -- 完成
- [x] 收货地址 -- 完成


# 目录结构

	├── config                          // 配置文件
	│   ├── default.js                  // 默认配置
	│   └── development.js              // 开发环境
	├── controller                      // 处理中心，负责路由及数据库的具体操作
	│   ├── common
	│   │   ├── homeData.js             // 首页数据
	│   │   └── position.js             // 根据ip获取位置
	│   ├── shopping
	│   │   ├── business.js             // 餐馆详情
	│   │   └── restaurants.js          // 商家列表
	│   └── user
	│       ├── address.js              // 用户地址
	│       └── user.js                 // 用户中心
	├── doc                             // apidoc自动生成的静态文档
	├── InitData                        // 模拟数据
	│   ├── business.js
	│   ├── home.js
	│   └── restaurants.js
	├── models                          // 模型(数据库)
	│   ├── common
	│   │   └── common.js               // 通用模型
	│   ├── shopping
	│   │   ├── business.js             // 餐馆详情模型
	│   │   └── restaurants.js          // 商家列表模型
	│   └── user
	│       ├── address.js              // 用户地址
	│       └── user.js                 // 用户中心
	├── mongodb                         // 连接数据库
	│   └── db.js
	├── public                          // 静态资源目录
	├── routes                          // 路由配置
	│   ├── common.js                   // 通用
	│   ├── index.js                    // 路由配置主文件
	│   ├── shopping.js                 // 餐馆、食品
	│   └── user.js                     // 用户中心
	├── screenshots                     // 项目截图
	├── .babelrc 
	├── .gitignore
	├── app.js                          // 基础配置
	├── COPYING                         // GPL协议
	├── index.js                        // 入口文件
	├── package.json
	└── README.md                  



