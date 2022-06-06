<template>
  <div id="app"> 
    <transition 
      :appear= "true"
      name="animate__animated animate__bounce"   
      enter-active-class = "animate__fadeIn"  
      leave-active-class = "animate__fadeOut"
    >
        <PicBookEdit v-if = "ifshow"/>
    </transition>

  </div>
</template>

<script>
import PicBookEdit from './components/PicBookEdit.vue'

export default {
  name: 'App',
  components: {
    PicBookEdit
  },
  data(){
    return{
      ifshow:''
    }
  },
  beforeCreate(){

  },
  mounted(){
    
    if(sessionStorage.getItem('userinfo')){
      if(sessionStorage.getItem('presentbook')){
        this.ifshow = true
      }else{
        this.ifshow = false
        this.$message('未选择编辑的绘本！')
        setInterval(()=>{
          window.location.href='/userinfo#/bookshelf.html'
        },2000)
      } 
    }else{
      this.ifshow = false
      this.$message('未登录无权访问，请登录！')
      setInterval(()=>{
        window.location.href='/loginout.html'
      },2000)
    }
  }
}
</script>

<style>
#app{
  width: 100%; 
  height: 100%;
  background-color: rgb(210, 226, 255);
}
/* 录音样式调整 */
.ar-recorder__time-limit{
    display: none;
}

.ar-records{
    height:50px;
}

.ar-recorder__records-limit{
    display: none;
}

</style>
