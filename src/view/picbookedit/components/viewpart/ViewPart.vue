<template>
  <div class="view"> 
    <ViewPicPage :style = "viewpicpagesize"></ViewPicPage>
  </div>
</template>

<script>

import ViewPicPage from './ViewPicPage/ViewPicPage.vue'
export default {
  name: 'ViewPart',
  components: {
    //ViewCanvas
    ViewPicPage
  },
  data(){
    return {
      //初始高（非缩放情况下）
      canvasHeight:(window.screen.height-200)*0.9,
      canvasWidth:(window.screen.height-200)*0.9,
      transformrate:1,

    }
  },
  computed:{
    viewpicpagesize(){
      return {
        'height':this.canvasHeight + 'px',
        'width':this.canvasWidth + 'px',
        'transform':'scale(' + this.transformrate + ')'
      }
    }
  },
  methods:{
  },
  mounted(){
    this.transformrate = (window.innerHeight-60)/(window.screen.height-200)
    window.onresize = ()=>{
      this.transformrate = (window.innerHeight-60)/(window.screen.height-200)
    }
  }
}
</script>

<style scoped>
.view{
    background-color: rgb(210, 226, 255);
    color: #333;
    width:100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
}
</style>
