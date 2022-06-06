<template>
  <div :style = "ifshow">           
    <div class = "page-canvas" :style = "leftpage">
      <div class = "image-info">
        <img 
          :src = "imageUrl"
          :style= "adjustimg"  
        >
      </div>
      <StoryText
        class = "text-info"
        :style = "rightpage"
        :slide = "this.slide"
        :slideindex = "this.slideindex"
      />
    </div>
    <div class = "page-num">第{{this.slideindex+1}}页/共{{this.pagelength}}页</div>
  </div>
</template>

<script>
import StoryText from './SroryText.vue'

export default {
  name: 'PicCanvas',
  props:['slide','slideindex'],
  components: {
      StoryText
  },
  data(){
    return{
      //用户画布宽高对屏幕的宽高占比
      canvasheight:(window.screen.height-200)*0.98,
      picrate:(this.$store.state.picbook.slideArray[this.slideindex].picheight/this.$store.state.picbook.slideArray[this.slideindex].picwidth),
    }
  },
  methods:{

  },
  computed:{
    ifshow(){
      if(this.slideindex === this.presentindex){
        return {  }
      }else{
        return { 'display':'none' }
      }
    },
    picbook(){
        const result = JSON.parse(sessionStorage.getItem('presentbook'))
        return result 
    },  
    leftpage(){
      return { 
        "background-color": this.picbook.theme.leftpage, 
        "height":this.canvasheight + 'px',
        "width":this.canvasheight + 'px'
      }
    },
    rightpage(){
      return { "background-color": this.picbook.theme.rightpage }
    },
    pagelength(){
      return this.$store.state.picbook.slideArray.length
    },
    presentindex:{
      get(){
        return this.$store.state.presentindex
      },
      set(){
        return this.$store.state.presentindex
      }
    },
    imageUrl:{
      get(){
        return this.$store.state.picbook.slideArray[this.slideindex].picurl
      },
      set(){
        return this.$store.state.picbook.slideArray[this.slideindex].picurl
      }
    },
    adjustimg:{
      
      get(){
        if(this.picrate>0.5){ 
          return{
            'height': ((this.canvasheight/2) - 10) +'px',
          }
        }else{
          return{
            'width': (this.canvasheight - 30) +'px',
          }
        }
      },
      set(){
        return{
            'height':this.$store.state.picbook.slideArray[this.slideindex].picheight+'px',
            'width':this.$store.state.picbook.slideArray[this.slideindex].picwidth+'px',
        }
      }
    }
  },
  mounted(){
      //this.$store.commit('')
  }
}
</script>

<style scoped>
.canva-area{
  display: none;
}

.page-canvas{
  height: 650px;
  width: 700px;
  box-shadow: 5px 5px 3px #888888;
  display:flex;
  flex-direction: column;
}

.image-info{
    flex:0.53;
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.text-info{
    flex:0.47;
    margin: 10px;
}

.page-num{
  margin-top:10px;
  text-align: center;
  color: #454545;
}
</style>