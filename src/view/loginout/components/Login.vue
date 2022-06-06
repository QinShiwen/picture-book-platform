<template>
<div class = "login">
    <div class="col_md_login">
        <div class="cont_ba_opcitiy">
        <h2>登录</h2>
        <p>You can login here.</p>
        <button class="btn_login" @click = "showLoginForm">登录</button>
        </div>
    </div>
    <transition
      name="animate__animated animate__bounce"
      enter-active-class = "animate__backInLeft"
      leave-active-class = "animate__backOutLeft"
    >
    <LoginForm 
      v-if = "showlogin"
      class = "loginform"
    />
    </transition>
</div>
</template>

<script>
import LoginForm from './LoginForm.vue'

export default {
    name:'Login',
    components:{
      LoginForm
    },
    data(){
      return{
        showlogin:false,
      }
    },
    methods:{
      showLoginForm(){
        this.showlogin = true
        this.$bus.$emit('hideregister') 
      }
    },
    mounted(){
      this.$bus.$on('hidelogin',()=>{
        this.showlogin = false
      }) 
    },
    beforeDestroy(){
      this.$bus.$off('hideregister') 
    }
}
</script>

<style scoped>

.login{
  width: 400px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
} 

.loginform{
  position: absolute;
  z-index:2;
}

.col_md_login {
  z-index:1;
  position: absolute;
  display:flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  background-color: rgb(228, 226, 228);
}


.col_md_login > h2 {
  font-weight: 400;
  margin-top: 70px;
  color: #757575;
}

.col_md_login > p {
  font-weight: 400;
  margin-top: 15px;
  width: 80%;
  color: #37474F;
}

.btn_login { 
  cursor: pointer;
  background-color: #FF9800;
  border: none;
  padding: 10px;
  width: 200px;
  border-radius:3px;
  box-shadow: 1px 5px 20px -5px rgba(0,0,0,0.4);
  color: #fff;
  margin-top: 10px;
}

.cont_ba_opcitiy > h2 {
  font-weight: 400;
  color: #fff;
}

.cont_ba_opcitiy > p {
  font-weight: 400;
  margin-top: 15px;
  color: #fff;
}

.cont_ba_opcitiy {
  background-color: rgba(141, 127, 164, 0.79);
  width: 80%;
  height: 200px;
  border-radius:3px;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>