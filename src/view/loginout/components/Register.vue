<template>
<div class = "register">
    <div class="col_md_sign_up">
        <div class="cont_ba_opcitiy">
        <h2>注册</h2>
        <p>You can regisister here.</p>
        <button class="btn_sign_up" @click="showRegisterForm">注册</button>
        </div>
    </div>
    <transition
      name="animate__animated animate__bounce"
      enter-active-class = "animate__backInRight"
      leave-active-class = "animate__backOutRight"
    >
    <RegisterForm 
      v-if = "showregister"
      class = "register-form"/>
    </transition>
</div>
</template>

<script>
import RegisterForm from './RegisterForm.vue'
export default {
    name:'Register',
    components:{
      RegisterForm
    },
    data(){
      return{
        showregister:false,
      }
    },
    methods:{
      showRegisterForm(){
        this.showregister = true
        this.$bus.$emit('hidelogin')
      }
    },
    mounted(){
      this.$bus.$on('hideregister', ()=>{
        this.showregister = false
      })
    },
    beforeDestroy(){
      this.$bus.$off('hidelogin')
    }
}
</script>

<style>
.register{
  width: 400px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-form{
  position: absolute;
  z-index:2;
}

.col_md_sign_up {
  z-index:1;
  position: absolute;
  display:flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  background-color: rgb(255, 255, 255);
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

.btn_sign_up { 
  background-color: #f44336;
  border: none;
  padding: 10px;
  width: 200px;
  border-radius:3px;
  box-shadow: 1px 5px 20px -5px rgba(0,0,0,0.4);
  color: #fff;
  margin-top: 10px;
  cursor: pointer;
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