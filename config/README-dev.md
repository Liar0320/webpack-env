##开发环境
    npm run start 
        自定运行 node build/dev-server.js
        手动运行 npx node build/dev-server.js  npx 在当前环境包中运行 
#1获取配置参数 
     /config
    设置 process.env.NODE_ENV = 配置的
#2进行webpack的编译
webpack(webpackCOnfig)
#3引入webpack-dev-middleware 开发中间件
webpack-dev-middleware
#4引入热模块加载
webpack-hot-middleware
options = {
    log:()=>{},
    path:'/__webpack_hmr',
    heartbeat: 10 * 1000
}
devHotMiddleware = require('webpack-hot-middleware')(compiler,options)

#5将 中间件 和 热模块加载 添加到 server上
app.use(devMiddleware);
app.use(devHotMiddleware);

