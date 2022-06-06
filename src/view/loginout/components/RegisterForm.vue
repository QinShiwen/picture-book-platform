<template>
    <div class="cont_form_sign_up">
        <h2>注册</h2>
        <div class = "form">
            <form>
            <input type="text" name="user" v-model= "name"  placeholder="用户名" />
            <input autocomplete="off" type="password" name="pass" v-model= "password"  placeholder="密码" />
            <input autocomplete="off" type="password" name="confirm" v-model= "confirm"  placeholder="确认密码" />
            <button type="button" class="sign_up_btn" @click = "register">注册</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {nanoid} from 'nanoid'

export default {
    name:'RegisterForm',
    data(){
        return{
            name:'',
            password:'',
            confirm:'',
        }
    },
    methods:{
        register(){
            //注册前判断
            if(this.name===''){
                this.$message("请输入用户名")
            }else if(this.password===''){
                this.$message("请输入密码")
            }else if(this.confirm===''){
                this.$message("请输入确认密码")
            }else if(this.password!=this.confirm){
                this.$message.error("密码前后不一致！")
            }else{
                axios.post('http://qinsw666.top:5001/register',{
                    email:String(this.email),
                    name:String(this.name),
                    password:String(this.password),
                    userid:nanoid() //生成用户专属id
                }).then((res)=>{
                    if(res.data.result == 'success'){
                        this.$message('注册成功，您可登录')
                        this.$bus.$emit('hideregister')
                        
                    }else if(res.data.result == 'hasUser'){
                        this.$message('该用户名已存在')
                    }else{
                        this.$message('注册失败')
                    }
                })
            }
        }
    }
    
}
</script>

<style>

.cont_form_sign_up{
    width: 400px;
    height: 500px;
    background-color: rgb(233, 228, 235);
    float: right; 
}

.cont_form_sign_up input{
    background-color: aliceblue;
    width:250px;
    height: 30px;
    margin:10px;
    border-style: none;
    padding: 5px;
}

.sign_up_btn { 
  background-color: #f44336;
  border: none;
  padding: 10px;
  width: 200px;
  border-radius:3px;
  box-shadow: 1px 5px 20px -5px rgba(0,0,0,0.4);
  color: #fff;
  margin-top: 20px;
  cursor: pointer;
}

</style>