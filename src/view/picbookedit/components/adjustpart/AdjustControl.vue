<template>
  <vue-scroll :ops = "ops" style="width:100%;">     
  <div class="adjustcontrol">
        <AdjustContent
          v-for = "(content,contentindex) in contents"
          :key = "contentindex"
          :contentindex = "contentindex"
          :content = "content"
        />
    <button class = "add-content" @click= "addContent">添加一段</button>
  </div>
  </vue-scroll>
</template>

<script>
import AdjustContent from './AdjustContent.vue'

export default {
  name: 'AdjustControl',
  components: {
    AdjustContent
  },
  data(){
    return{
      ops:{
        vuescroll: {
          mode: 'native'
        },
        scrollPanel: {
          scrollingY: true,
        },
        rail: {
          gutterOfEnds: null,
          keepShow: true
        },
        bar: {
          hoverStyle: true,
          onlyShowBarOnScroll: false, //是否只有滚动的时候才显示滚动条
          background: "black",//滚动条颜色
          opacity: 0.5,//滚动条透明度
          "overflow-x": "hidden"
        }
      }
    }
  },
  methods:{
    addContent(){
      this.$store.commit('slideHandler/ADDCONTENT',this.slideindex)
    },
  },
  computed:{
    contents:{
      get(){
        return  this.$store.state.slideHandler.picbook.slideArray[this.slideindex].content 
      },
      set(){
        return  this.$store.state.slideHandler.picbook.slideArray[this.slideindex].content 
      }   
    },
    slideindex:{
      get(){
        return  this.$store.state.slideHandler.presentindex 
      },
      set(){
        return  this.$store.state.slideHandler.presentindex
      }  
    }
  }
}
</script>

<style scoped>
.adjustcontrol{
  display: block;
  text-align: center;
  margin-bottom: 80px;
  margin-top:20px;
}


.btn{
    margin-top: 25px;
}

.btn button{
    width:100px;
    height: 30px;
    border:none;
    margin:5px;
    cursor:pointer;
    border-radius:30px;
    background-color:#b5b7d2;
}

.btn button:hover{
    background-color:whitesmoke;
}

.add-content{
  margin-top: 10px;
  margin-bottom: 5px;
  background-color: #61649f;;
  border: none;
  border-radius: 5px;
  height: 30px;
  width: 80px;
  cursor: pointer;
}

.add-content:hover{
  background-color:whitesmoke
}

a{
  text-decoration:none;
  color:black;
}
</style>
