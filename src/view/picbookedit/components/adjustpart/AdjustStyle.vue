<template>
    <div class = "style-select">
      <div class = "title">我的主题</div>  
      <div >字体颜色<br>
        <el-color-picker v-model= "fontcolor"/>  
      </div>
      
      <div>左页颜色<br>
        <el-color-picker v-model= "leftpagecolor"/>  
      </div>
      <div>右页颜色<br>
        <el-color-picker v-model= "rightpagecolor"/>  
      </div>

      <div>
          <button @click = "apply">应用</button>
      </div>
          <div class = "btn">
      <button @click = "savePicBook" >保存</button><br>
      <button @click = "swiftInfo">播放</button>
    </div>
    </div>
</template>

<script>

export default {
  name: 'AdjustStyle',
  components: {

  },
  data(){
    return{
      fontcolor:'#000000',
      leftpagecolor:"#305174",
      rightpagecolor:"#AEC6DE",
      showstyle:true,
      ifstylecliked:"beclicked",
      ifcontrolcliked:""
    }
  },
  methods:{
    apply(){
      const themeInfo = {
        fontcolor:this.fontcolor,
        leftpage:this.leftpagecolor,
        rightpage:this.rightpagecolor,
      }
      this.$store.commit("slideHandler/CHANGETHEME",themeInfo)
    },
        savePicBook(){
      axios.post('自己的接口/savebook',{
        userid:JSON.parse(sessionStorage.getItem('userinfo')).userid,
        bookid:sessionStorage.getItem('presentbookid'),
        book:this.$store.state.slideHandler.picbook
      }).then((res)=>{
        if(res.data.result == 'success'){
          this.$message("绘本保存成功")
          sessionStorage.setItem('presentbook',JSON.stringify(this.$store.state.slideHandler.picbook))
        }
      })
    },
    swiftInfo(){
      const picbookinfo = this.$store.state.slideHandler.picbook
      //播放前做好浏览器本地存储
      localStorage.setItem('picbook',JSON.stringify(picbookinfo))
      //跳转到播放界面 新窗口打开
      window.open('/picshow')
    }
  },
  mounted(){
      
  }
}
</script>

<style scoped>
.style-select{
  width:100%;
  height: 100%;
}

.title{
    font-size:18px;
    margin-top:20px;
    margin-bottom: 10px;
    color: black;
}

button{
    width:100px;
    height: 30px;
    border:none;
    margin-top:20px;
    cursor:pointer;
    border-radius:30px;
    background-color:rgb(102, 168, 206);
}

button:hover{
    background-color:whitesmoke;
}

.btn button{
    width:100px;
    height: 30px;
    border:none;
    margin:5px;
    cursor:pointer;
    border-radius:30px;
    background-color:rgb(102, 168, 206);
}

.btn button:hover{
    background-color:whitesmoke;
}

</style>
