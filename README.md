# picbook
> 这是一个使用Vue2.X+Flask+MySQL搭建的绘本创作平台。
> 本平台实现了绘本创作、绘本管理、绘本阅览、绘本检索、绘本收藏等功能。 在该平台中，除了检索、阅览、收藏他人的绘本之外，用户还可通过编辑文字、 上传图片和音频、调整页面颜色来制作自己的专属绘本。本平台极大地提供了对绘本创作的支持。

体验地址：http://www.qinsw666.top/PicBook/picbookhome.html

# 项目功能实现
### 绘本家园页面
- 绘本检索
- 绘本收藏
- 精选绘本阅览与收藏

![image](https://raw.githubusercontent.com/QinShiwen/picture-book-platform/master/picRefer/main.jpg)

### 登陆注册页面
- 注册
- 登录

![image](https://raw.githubusercontent.com/QinShiwen/picture-book-platform/master/picRefer/login.jpg)

### 个人中心页面
- 绘本管理：新建、删除、修改、编辑与阅览跳转
- 绘本收藏查看
- 个人信息查看
- 页面跳转与注销

![image](https://raw.githubusercontent.com/QinShiwen/picture-book-platform/master/picRefer/manage.jpg)

### 绘本编辑页面
- 页面添加、删除
- 图片上传、删除
- 段落添加、删除
- 句子添加、删除
- 音频播放、上传、删除
- 绘本样式调整（页面区域、字体颜色）

![image](https://raw.githubusercontent.com/QinShiwen/picture-book-platform/master/picRefer/edit.jpg)

### 绘本阅览页面
- 音频顺序播放、暂停
- 绘本文本伴随音频播放高亮
- 绘本本页音频提示是否存在
- 绘本页面跳转
- 绘本页面完成播放自动跳转下页

![image](https://raw.githubusercontent.com/QinShiwen/picture-book-platform/master/picRefer/show.jpg)

# 项目结构与运行
运行项目前可准备好后端接口，使用Python Falsk实现，代码放置在picbook-py中，直接运行即可：
```
python picbook.py
```
以及可以在MySQL中创建好userinfo数据库后，导入本人自用测试的数据表，放置在picbook-mysql中。

剩下的为前端代码，使用Vue搭建(vue-cli,vuex,vuerouter)，
运行前记得修改发送Post请求的地址。
运行前先使用npm安装相关依赖，再运行项目：
```
npm install
npm run serve
```

# 项目问题与不足
- 项目后期会改进使用cookie存储验证用户信息
- 图片加载速度需提升
- 各种杂碎功能即将实现（比如用户名修改、绘本收藏取消删除等）

