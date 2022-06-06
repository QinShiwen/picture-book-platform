<template>
  <div>
    <div class = "title">
      <span @click = "toStyle" class= "page-content">本页故事</span>  
    </div>
      <AdjustControl/>
  </div>
</template>

<script>
import AdjustStyle from './AdjustStyle.vue'
import AdjustControl from './AdjustControl.vue'
export default {
  name: 'AdjustPart',
  components: {
    AdjustStyle,AdjustControl
  },
  data(){
    return{
      fontcolor:'#409EFF',
      showcontrol:true,
      ifstylecliked:"beclicked",
      ifcontrolcliked:""
    }
  },
  methods:{
    //外观与操控的切换
    toStyle(){
      this.showcontrol = true
      this.ifstylecliked = "beclicked"
      this.ifcontrolcliked = ""
    },
    toControl(){
      this.showcontrol = false
      this.ifcontrolcliked = "beclicked"
      this.ifstylecliked = ""
    }
  }
}
</script>

<style scoped>

.title{
  height: 40px;
  width: 100%;
  background-color: #8d90c2;
  display: flex;
}

.title span{
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.beclicked{
  background-color: #b9bbec;
}

.page-content{
    font-size:18px;
    color: black;
}
</style>
