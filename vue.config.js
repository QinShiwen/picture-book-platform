//最终会输给webpack
module.exports ={
  //配置进入的主js
  pages:{
    index:{ //绘本家园页面
      entry:'src/view/picbookhome/main.js',
      template:'src/view/picbookhome/picbookhome.html',
      filename:'picbookhome.html',
    },
    loginout:{  //注册登录页面
      entry:'src/view/loginout/main.js',
      template:'src/view/loginout/loginout.html',
      filename:'loginout.html'
    },
    picbookedit:{ //绘本编辑页面
      entry:'src/view/picbookedit/main.js',
      template:'src/view/picbookedit/picbookedit.html',
      filename:'picbookedit.html',
      meta:{isAuth:true}
    },
    picshow:{ //绘本阅览页面
      entry:'src/view/picbookshow/main.js',
      template:'src/view/picbookshow/picshow.html',
      filename:'picshow.html'
    },
    userinfo:{  //用户个人中心页面
      entry:'src/view/userinfo/main.js',
      template:'src/view/userinfo/userinfo.html',
      filename:'userinfo.html'
    }
    
  },
  //关闭语法检查
  lintOnSave:false,
  //公有路径配置
  //publicPath: 'http://www.qinsw666.top/PicBook/dist/',
}