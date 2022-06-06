<template>
  <div class = "page-left" :style = "leftpage">
    <!--  图片上传  -->
    <PicUpload class = "image-area"/>
    <!--  故事   -->
    <div class = "text-area" :style= "rightpage"> 
    <StoryText
      v-for = "(text,index) in textInfo"
      :key = "index"
      :text = "text"
      :index = "index"
    />
    </div>
  </div>
</template>

<script>
import StoryText from './StoryText.vue'
import PicUpload from './PicUpload.vue'

export default {
  name: 'ViewPicPage',
  components: {
    StoryText,PicUpload
  },
  data(){
    return {
      showtext:true,
      leftcolor:"#9ab2ca",
      rightcolor: "rgb(118, 149, 175)",
    }
  },
  methods:{
    changePageColor(){
      this.leftcolor = this.$store.state.slideHandler.picbook.theme.leftpage
      this.rightcolor = this.$store.state.slideHandler.picbook.theme.rightpage
    },
  },
  computed:{
    leftpage(){
      return { "background-color": this.$store.state.slideHandler.picbook.theme.leftpage }
    },
    rightpage(){
      return { "background-color": this.$store.state.slideHandler.picbook.theme.rightpage }
    },
    slideindex:{
      get(){
        return this.$store.state.slideHandler.presentindex
      },
      set(){
        return this.$store.state.slideHandler.presentindex
      }
    },
    //如果后期改成遍历viewpart 考虑控制dispaly:none，则textInfo将使用计算属性展示
    textInfo:{
      get(){
        return this.$store.state.slideHandler.picbook.slideArray[this.slideindex].content 
      },
      set(){
        return this.$store.state.slideHandler.picbook.slideArray[this.slideindex].content 
      }    
    },
    
  },
}
</script>

<style scoped>

.page-left{
  /*flex:0.6;*/
  display:flex;
  justify-content: center;
  flex-direction:column;
  width:91vh;
  height: 84.5vh;
  box-shadow: 5px 5px 3px #888888;
}

.image-area{
  overflow: hidden;
  flex:0.55;
  width: 100%;
  height: 100%;
  display:flex;
  justify-content: center;
  align-items:center;
}


.text-area{
  flex:0.45;
  height: 45%;
  margin: 10px;
  padding: 10px;
  height: 100%;
}

</style>
