    
<template>
    <transition 
      :appear= "true"
      name="animate__animated animate__bounce"   
      enter-active-class = "animate__fadeIn"  
      leave-active-class = "animate__fadeOut"
    >
  <div id="app">
    <div class = "left-control">
      <button @click = "nextSlide">
        <i class="el-icon-caret-bottom"/>
      </button>
      <button @click = "lastSlide">
        <i class="el-icon-caret-top"/>
      </button>
      <button @click = "ifPlayMusic">
        <i v-if= "playcontrol" class="el-icon-video-play"/> 
        <i v-else class="el-icon-video-pause"/> 
      </button>
      <audio 
        ref = "audio" 
        @ended= "handlevoice" 
        >
      </audio> 
        <!--   :src = "presentvoice"  --->
    </div>
    <div class = "pic-canvas">
      <PicCanvas 
        v-for = "(slide,slideindex) in slideArray"
        :key = "slideindex"
        :slide = "slide" 
        :slideindex = "slideindex"
      /> 
    </div>
    <div class = "right-control"></div>
  </div>
  </transition>
</template>

<script>
import PicCanvas from './components/PicCanvas.vue'

export default ({
  name:'APP',
  components:{
    PicCanvas
  },
  data(){
    return{
      ifplaymusic:false,  //若用户全部上传完了音频才会播放
      playcontrol:true,  //控制播放与暂停
      bgmid:0,
    }
  },
  computed:{
    slideArray(){
      return this.$store.state.picbook.slideArray
    }, 
    presentindex(){   //目前读到第几页
      return this.$store.state.presentindex
    },
    presentcontent(){ //目前读到第几段
      return this.$store.state.contentindex
    },
    presentsentence(){  //第几句
      return this.$store.state.sentenceindex
    },
    //存储每一页的所有音频
    musiclist(){
      let musiclist = []
      this.slideArray.forEach(slideobj => {
        let list = []
        slideobj.content.forEach(contentarr => {
          contentarr.forEach(contentobj => {
            if(contentobj.voiceurl != "" ){
            list.push(contentobj.voiceurl)  
          }
          })
        })
        musiclist.push(list)
      });
      return musiclist
    },
    //当前页音频
    presentMusiclist(){
      return this.musiclist[this.presentindex] 
    },
  },
  methods:{
    nextSlide(){
      if(this.presentindex === this.slideArray.length-1){
        this.$message("已经是最后一页！")      
      }else{
        this.$store.commit('NEXTSLIDE')
        //切换页面时音频默认暂停
        this.playcontrol = true
        this.$refs.audio.pause()
        this.bgmid = 0
        if(this.presentMusiclist.length>0){
            this.$refs.audio.src = this.presentMusiclist[0]
        }
      }
    },
    lastSlide(){
      if(this.presentindex === 0){
        this.$message("已经第一页！")
      }else{
        this.$store.commit('LASTSLIDE')
        //切换页面时音频默认暂停
        this.playcontrol = true
        this.$refs.audio.pause()
        this.bgmid = 0
        //换成本页的音频
        if(this.presentMusiclist.length>0){
            this.$refs.audio.src = this.presentMusiclist[0]
        }
      }
    },
    ifPlayMusic(){
      if(this.presentMusiclist.length>0){
        if(this.playcontrol == true){
          this.playcontrol = false  //切换成播放的UI
          this.$bus.$emit("highlight",this.$refs.audio.src)
          this.$refs.audio.play()
        }else{
          this.playcontrol = true
          this.$refs.audio.pause()
        }
      }else{
        this.$message('本页没有音频')
          this.playcontrol = true
      }
    },
    handlevoice(){
      if(this.bgmid<this.presentMusiclist.length-1){
        this.bgmid+=1
        this.$refs.audio.src = this.presentMusiclist[this.bgmid]
        this.$bus.$emit("highlight",this.$refs.audio.src)
        //解决音频还没有那么快加载的问题
        setTimeout(()=>{
          this.$refs.audio.play() //播放
        },200) 
      }else{
        this.bgmid = 0
        //如果还没读到最后一页
        if(this.presentindex != this.slideArray.length - 1){
          //若下一页有音频
          if(this.musiclist[this.presentindex+1].length>0){
            this.$store.commit('NEXTSLIDE')
            this.$refs.audio.src = this.presentMusiclist[this.bgmid]
            this.$bus.$emit("highlight",this.$refs.audio.src)
            setTimeout(()=>{
              this.$refs.audio.play() //播放
            },200) 
          }else{
            this.$message("音频太少，无法支撑绘本")
            this.playcontrol = true
          }
        }else{
          this.playcontrol = true
        }
      }
    }
  },
  mounted(){
    if(this.presentMusiclist.length>0){
        this.$refs.audio.src = this.presentMusiclist[0]
    }
  }
})
</script>


<style>
#app{
  width: 100%; 
  height: 100%;
  background-color: rgb(191, 191, 191);
  display: flex;
  flex-direction: row;
}

.left-control{
  flex:0.15;
  display: flex;
  flex-direction: column-reverse;
}

.left-control button{
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  margin-left:20px;
  border-radius:50%;
  border:solid 3px rgb(141, 103, 54);
  cursor: pointer;
  background-color: rgb(255, 211, 155);
  color:rgb(141, 103, 54);
}

.left-control button:hover{
  background-color:rgb(141, 103, 54); 
  color:rgb(255, 211, 155);
}

.left-control button:first-child{
  margin-bottom: 30px;
}

.el-icon-caret-top{
  font-size:30px;
}

.el-icon-caret-bottom{
  font-size:30px;
}

.el-icon-video-play{
  font-size:30px;
}

.el-icon-video-pause{
  font-size:30px;
}

.pic-canvas{
  flex:0.7;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-control{
  flex:0.15
}
</style>