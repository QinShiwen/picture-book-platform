<template>
  <div class="page-layout">
      <div class = "pagenum">{{indexid+1}}</div>
      <div class = "page" 
        :class = "ifClicked" 
        @click = "selectSlide(indexid)" 
        tabindex="0"
        hidefocus="true" 
        @blur = "handleBlur"
        :style = "themecolor"
      >
      <div class = "imagearea"></div>
      <div class = "textarea" :style = "textareacolor">XXXXX</div> 
      </div>
  </div>
</template>

<script>

export default {
  name: 'OnePage',
  props:['slide'],
  data(){
    return{
      indexid:this.slide.indexid
      
    }
  },
  methods:{
    selectSlide(indexid){
      //告诉mutations修改isED的值为true
      this.$store.commit('slideHandler/SELETCTSLIDE',indexid)
      this.$bus.$emit("changePic")
    },
    handleBlur(){
      this.$store.commit('slideHandler/HANDLEFOCUS',false)
    }

  },
  computed:{
    //样式控制相关
    ifClicked(){
          if(this.slide.isEd == true){
              return 'afterclicked'
          }else{
              return 'beforeclicked'
          }
    },
    themecolor:{
      get(){
        return { "background-color": this.$store.state.slideHandler.picbook.theme.leftpage }
      },
      set(){
        return { "background-color": this.$store.state.slideHandler.picbook.theme.leftpage }
      }
    },
    textareacolor:{
      get(){
        return { 
          "background-color": this.$store.state.slideHandler.picbook.theme.rightpage,
          "color":this.$store.state.slideHandler.picbook.theme.fontcolor
        }
      },
      set(){
        return { 
          "background-color": this.$store.state.slideHandler.picbook.theme.rightpage, 
          "color":this.$store.state.slideHandler.picbook.theme.fontcolor
        }
      }
    },
  },
}
</script>

<style scoped>
.page-layout{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
}

.page-layout:last-child{
  margin-bottom: 80px;
}

.pagenum{
    margin-right:1px;
}

.page{
    margin-top: 7px;
    width:130px;
    height: 120px;
    display:flex;
    flex-direction: column;
}

.imagearea{
  flex:0.55;
}

.textarea{
  flex:0.45;
  margin: 3px;
  padding:5px;
}

.beforeclicked{
    border:2px solid rgb(118, 149, 175);
}

.afterclicked{
    border:2px solid;
}
</style>
