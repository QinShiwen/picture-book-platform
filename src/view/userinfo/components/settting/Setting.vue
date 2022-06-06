<template>
    <div id = "setting">
       <div class = "set-cover">
         <div>
            用户名：<input class = "inputname" v-model = "username" disabled = "true" />
            <!-- <div class = "show-avatar">头像：<div class = "avatar"></div></div> -->
         </div>
         <!--
         <button>保存修改</button>
         -->
       </div>
    </div>  
</template>

<script>

export default ({
   name:"Setting",
   data(){
      return {
         username:'',
         useravatar:''
      }
   },
   mounted(){
      this.username = JSON.parse(sessionStorage.getItem('userinfo')).name
   }
})
</script>

<style scoped>
#setting{
   width:100%;
   height: 100%;
   font-size: 18px;
}

.set-cover{
   padding: 50px;
   padding-left: 80px;
   width:100%;
   height: 100%;
   
}

.inputname{
   width:300px;
   height: 40px;
   border-radius:5px;
   outline: none;
   border: 0;
   font-size: 18px;
   padding: 2px;
}

.show-avatar{
   display: flex;
   margin-top:20px;
   align-items: center;

}

.avatar{
   width:200px;
   height: 200px;
   border-radius: 50%;
   background-color: blanchedalmond;
   margin-left:20px;
}

button{
   margin-top:30px;
   outline: none;
   background-color: #61649f;
   color:#f8f8fe;
   width: 100px;
   height: 40px;
   border-radius: 5px;
   border:0;
   cursor: pointer;
}

button:hover{
   background-color: #f8f8fe;
   color: #61649f;
}

</style>