<template>
  <div id = "app">
    <div class = "header">
        <div class = "header-info">
            <div class = "header-left">
                <i class = "el-icon-s-home"></i>
                <span class = "title">绘本家园</span>
            </div>
            <div class = "header-right">
                <router-link class = "router-link" active-class="active" to="/home">家园主页</router-link>
                <router-link class = "router-link" active-class="active" to="/recommend">精选绘本</router-link>
                <router-link class = "router-link" active-class="active" to="/search">绘本检索</router-link>
                <span v-if = "!iflogin" @click = "toLogin">登入/注册</span>
                <span v-else @click = "toUser"><i class = "el-icon-user"></i></span>
            </div>
        </div>
    </div>
    <div class = "bar-show">
        <keep-alive>
        <transition 
            :appear= "true"
            name="animate__animated animate__bounce"   
            enter-active-class = "animate__fadeIn"  
            leave-active-class = "animate__fadeOut"
        >
            <router-view class = "router-view"></router-view>
        </transition> 
        </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
    name:"App",
    components:{
        
    },
    data(){
        return {
            iflogin:false,
        }
    },
    methods:{
        toLogin(){
            window.location.href = "/loginout.html"
        },
        toUser(){
            window.open("/userinfo.html#/bookshelf")
        }
    },
    mounted(){
        if(sessionStorage.getItem('userinfo')){
            this.iflogin = true
        }
    }
}
</script>

<style>
#app{
    background-color: rgb(210, 226, 255);
    width:100%;
    height: 100%;
    overflow-y:scroll;
}

.header{
    padding: 20px;
    margin-bottom: 20px;
}
.header-info { 
    height: 80px;
    background-color:rgb(97,100,159);
    display:flex;
    flex-direction: row;
    align-items: center;
}

.header-left{
    flex:0.3;
    color:white;
}

.title{
    font-size: 30px;
    font-family: "宋体";
    letter-spacing:5px;
    cursor: pointer;
}

.el-icon-s-home{
    font-size: 35px;
    margin-left:20px;
    margin-right: 10px;
    cursor: pointer;
}

.header-right{
    flex:0.7;
    display: flex;
    justify-content:flex-end;
    align-items: center;
    font-size: 20px;
    height: 100%;
    color:#e1e1ec;
}

.header-right span{
    cursor: pointer;
    width:150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right:30px;
}

.header-right span:hover{
    color:yellow
}

.el-icon-user{
    font-size: 35px;
    background-color: #e1e1ec;
    color:#61649f;
    padding: 10px;
    border-radius: 50%;
}

.router-link{
  text-decoration:none;
  color:#ffffff;
  /*
  height: 80px;
  width:150px;
  */
  padding: 20px;
  width:150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.active{
  text-decoration:none;
  color:#61649f;
  background-color: #e1e1ec;
}

.bar-show{
    width:100%;
    /*height: 100%;*/
}

.router-view{
   position: absolute;
   width: 100%;
  /*background-color: rgb(210, 226, 255);*/

}

</style>