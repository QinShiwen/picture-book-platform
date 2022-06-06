# picbook
> 这是一个使用Vue2.X+Flask+MySQL搭建的绘本创作平台。
> 本平台实现了绘本创作、绘本管理、绘本阅览、绘本检索、绘本收藏等功能。 在该平台中，除了检索、阅览、收藏他人的绘本之外，用户还可通过编辑文字、 上传图片和音频、调整页面颜色来制作自己的专属绘本。本平台极大地提供了对绘本创作的支持。

体验地址：http://www.qinsw666.top/PicBook/picbookhome.html

# 项目功能实现
### 绘本家园页面

### 个人中心页面

# 项目结构与运行
运行项目前可准备好后端接口，使用Python Falsk实现，代码放置在picbook-

以及可以在MySQL中创建好userinfo数据库后，导入本人自用测试的数据表，放置在picbook-mysql中。

前端代码放置在picbook-vueproject中
前端使用Vue搭建(vue-cli,vuex,vuerouter)，
除此之外引入的JS模块有：ElementUI, Axios, AudioRecorder, nonoid, vuescroll，
运行前记得修改发送Post请求的地址。
安装好npm支持后运行即可
```
npm install
npm run serve
```

# 项目问题与不足


