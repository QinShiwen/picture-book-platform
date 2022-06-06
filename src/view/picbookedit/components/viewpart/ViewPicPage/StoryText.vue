<template>
  <div class = "story-text" :style = "textcolor">
    {{storytext}}
  </div>
</template>

<script>

export default {
  name: 'StoryText',
  props:['index','text'],
  methods:{

  },
  computed:{
    storytext(){
      let result = ''
      for(let i =0;i<this.text.length;i++){
        result = result + this.text[i].text
      }
      return result
    },
    textcolor(){
      return { color:this.$store.state.slideHandler.picbook.theme.fontcolor }
    }
  },
  mounted(){
    
  },
  beforeDestroy(){

  }
}
</script>

<style scoped>
.story-text{
  font-size: 18px;
  word-break:break-all;
  word-wrap: break-word; 
  font-family: "宋体";
  margin-bottom: 10px;
}
</style>
