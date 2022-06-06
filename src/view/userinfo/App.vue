<template>
  <div id="app" v-if = "ifshow">
    <!-- 导航栏区域 -->
    <div class = "bar-route">
      <i class = "el-icon-user"></i>
      <div class = "username">{{username}}</div>
      <ul class = "route">
          <router-link exact class= "router-link" active-class="active" to = "/bookshelf" >我的书架</router-link>
          <router-link exact class= "router-link" active-class="active" to = "/collect" >绘本收藏</router-link>
          <router-link class= "router-link" active-class="active" to = "/setting" >设置</router-link>
      </ul>
      <div class = "topichome">
        <div @click = "topichome">
          绘本家园
        </div>
        <div @click = "logout">
          退出账户
        </div>
      </div>
    </div>
    <!-- 展示区域 -->
    <div class = "bar-show">
      <transition 
      :appear= "true"
        name="animate__animated animate__bounce"   
        enter-active-class = "animate__fadeIn"  
        leave-active-class = "animate__fadeOut"
      >
        <router-view class = "router-view"></router-view> 
      </transition> 
    </div>

      
    
  </div>
</template>

<script>
import BookShelf from './components/bookshelf/BookShelf.vue'

export default {
  name: 'App',
  components: {
    BookShelf
  },
  data(){
    return{
      ifshow:'',
    }
  },
  computed:{
      username(){
        let userinfo = JSON.parse(sessionStorage.getItem('userinfo'))
        return userinfo.name
      }
  },
  methods:{
    topichome(){
      window.open('/picbookhome.html')
    },
    logout(){
      sessionStorage.clear()
      window.location.href='/picbookhome.html'
    }
  },
  mounted(){
    if(sessionStorage.getItem('userinfo')){
      this.ifshow = true
    }else{
      this.ifshow = false
      this.$message('未登录无权访问，请登录')
      setInterval(()=>{
        window.location.href='/loginout.html'
      },2000)
    }
  }
}
</script>

<style scoped>
#app{
  width: 100%; 
  height: 100%;
  background-color: rgb(210, 226, 255); 
  display: flex;
  flex-direction: row;
}

.bar-route{
  flex:0.2;
  height: 100%;
  width: 100%;
  display: flex;
  background-color: #61649f;
  margin-left: 20px;
  margin-right: 5px;
  align-items: center;
  flex-direction: column;
  box-shadow: 2px 2px 3px #888888;

}



.el-icon-user{
    width:150px;
    height: 150px;
    font-size: 60px;
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items:center;
    margin-top: 50px;
    border-radius: 50%;
    cursor: pointer;
    margin-bottom: 30px;
    color:#61649f;

}
.username{
    font-size: 20px;
    color: aliceblue;
    margin-bottom: 50px;
}

.route{
    font-size: 18px;
    list-style: none;
    text-align: center;
    padding: 0px;
    width: 100%;
    cursor: pointer;
    color:#e1e1ec;
    display: flex;
    flex-direction: column;
}

.route li:first-child{
    border-top:solid 3px aliceblue;
}

.route li{
    padding:15px;
    border-bottom:solid 3px aliceblue;
}


.bar-show{
    flex:0.8;
    overflow-y:scroll;
}

.router-view{
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 30px;
  overflow-y:scroll;
}

.router-link{
  text-decoration:none;
  color:#e1e1ec;
  padding:15px;
  border-bottom:solid 3px aliceblue;
}

.router-link:first-child{
  border-top:solid 3px aliceblue;
}

.active{
  text-decoration:none;
  color:#61649f;
  background-color: #e1e1ec;
}

.topichome{
  margin-top:20px;
}

.topichome div{
  cursor:pointer;
  font-size: 17px;
  padding:10px 30px;
  border:2px solid aliceblue;
  color:aliceblue;
  border-radius: 10px;
  margin-bottom:10px;
}

.topichome div:hover{
  color:#61649f;
  background-color: aliceblue;
}
</style>