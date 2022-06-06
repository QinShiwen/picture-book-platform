<template>
  <div @keyup.delete= "test()">
      <div class = "addSlide" @click = "addSlide" >
        <i class = "el-icon-circle-plus-outline"></i>  <!--添加新页 -->
      </div>

      <vue-scroll :ops = "ops" style="width:100%;">
        <OnePage
          v-for = "(slide,index) in slideArray"
          :key = "index"
          :slide = "slide"
        />
      </vue-scroll>

  </div>
</template>

<script>
import OnePage from './OnePage.vue'
import {mapState,mapActions} from 'vuex'

export default {
  name: 'PageList',
  components: {
    OnePage
  },
  
  data(){
    return{
      slideArray:null,
      //滚动条配置
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
  computed:{
    ...mapState('slideHandler',{picbook:'picbook'}),
  },
  mounted(){
    this.slideArray = this.picbook.slideArray
  },
  methods:{
    ...mapActions('slideHandler',['addSlide']),
  }
}
</script>

<style scoped>
#pagelist{
    background-color: #b9bbec;
    color: #333;
    display: flex;
    flex-direction: column;
    
}

.addSlide{
  height: 40px;
  width: 100%;
  background-color: #8d90c2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.addSlide:hover{
  background-color:#b0b2d6;
  cursor: pointer;
}

.__bar-is-vertical {
  right: -1px !important;
}

.el-icon-circle-plus-outline{
  font-size:25px;
  color:white;
  background-color: #3b3f86;
  padding: 2px;
  border-radius:50%;
  /*color:white;*/
}

</style>
