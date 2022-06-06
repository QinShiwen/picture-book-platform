<template>
    <div class="cont_form_login">
        <h2>登录</h2>
        <form>
            <input autocomplete="off" type="text" name="name" v-model= "name" placeholder="用户名" />
            <input autocomplete="off" type="password" name="password" v-model= "password" placeholder="密码" />
            <button type = "button" class="btn_login" @click = "login">登录</button>
        </form>
	</div>
</template> 

<script>
import axios from 'axios'

export default {
    name:'LoginForm',
    data(){
        return{
            name:'',
            password:''
        }
    },
    methods:{
        login(){
            if(this.email===''){
                this.$message("请输入用户名")
            }else if(this.password===''){
                this.$message("请输入密码")
            }else{
                axios.post('http://qinsw666.top:5001/login',{
                    username:this.name,
                    password:this.password
                }).then((res)=>{
                    if(res.data.result === 'success'){
                        this.$message("登陆成功")
                        //存储至本地浏览器中
                        sessionStorage.setItem('userinfo',JSON.stringify(res.data.userinfo))
                        //跳转页面
                        window.location.href = '/picbookhome.html#/home'
                    }else if(res.data.result === 'no email'){
                        this.$message("没有该邮箱账号，请重新登录或注册")
                    }else if(res.data.result === 'password fail'){
                        this.$message("密码错误，请重新输入")
                    }
                })
            }
        }
    }
}
</script>

<style scoped>
.cont_form_login{
    width: 400px;
    height: 500px;
    background-color: rgb(233, 228, 235); 
    float: left;

}

.cont_form_login form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.cont_form_login form input{
    background-color: aliceblue;
    width:250px;
    height: 30px;
    margin:10px;
    border-style: none;
    padding: 5px;
}

.btn_login{
  background-color: #FF9800;
  margin-top: 20px;
  border: none;
  padding: 10px;
  width: 200px;
  border-radius:3px;
  box-shadow: 1px 5px 20px -5px rgba(0,0,0,0.4);
  color: #fff;
  cursor: pointer;
}
</style>