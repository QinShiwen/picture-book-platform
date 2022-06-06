<template>           
    <span class = "onesentence" :style = "ifhighlight">
      {{sentence.text}}
    </span>
</template>

<script>
export default {
  name: 'OneSentence',
  props:['sentence'],
  components: {
    
  },
  data(){
    return {
      highlight:false,
    }
  },
  methods:{

  },
  computed:{
    ifhighlight(){
      if(this.highlight==true){
        return{ "background-color": "yellow"  }
      }else{
        return {  }
      }
    }
  },
  beforeCreate(){
    
  },
  mounted(){
     this.$bus.$on("highlight",(presentvoice)=>{
        if(presentvoice==this.sentence.voiceurl){
            this.highlight = true
        }else{
          this.highlight = false
        }
     })
  },
  beforeDestroy(){
     this.$bus.$off("highlight")
  }
}
</script>

<style scoped>
.onesentence{
  font-size:18px;
  font-family: '宋体';
}

</style>