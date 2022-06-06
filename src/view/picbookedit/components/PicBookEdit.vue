


<template>
  <div id="contain">  
    <HeadPart class = "head-gloabl"/>
    <div class = "content-global">
      <PageList class = "pagelist"/>
      <ViewPart class = "viewpart"></ViewPart> 
      <ToolBar class = "toolbar"/>
      <AdjustPart class = "adjustpart"/>
    </div>
  </div>
</template>

<script>
import HeadPart from './head/HeadPart.vue'
import PageList from './pagelist/PageList.vue'
import ViewPart from './viewpart/ViewPart.vue'
import ToolBar from './ToolBar.vue'
import AdjustPart from './adjustpart/AdjustPart.vue'


export default {
  name: 'PicBookEdit',
  components: {
    HeadPart,PageList,ViewPart,AdjustPart,ToolBar
  },
  mounted(){
    document.onkeydown = (event)=>{
        if(event.key=='Delete'||event.key=='Backspace'){
          this.$store.commit('slideHandler/DELLETSLIDE')
        }
      }
  }
}
</script>

<style scoped>
#contain{
  display:flex;
  height: 100%;
  flex-direction: column; 
}

.head-gloabl{
  height: 50px;
}

.content-global{
  height: calc(100% - 50px); /*内容页是除去头部，占满视窗的整个高度*/
  display: flex;
}

.pagelist{
  width:160px;    
  background-color: #b9bbec;
  color: #333;
  display: block;
}

.viewpart{
  width: calc(100% - 160px - 100px - 360px);  /* 必须得按顺序 */
}

.adjustpart{
    background-color: #b9bbec;;
    color: #333;
    line-height: 100%;
    width:360px;
    text-align: center;
    display: block;
}


.toolbar{
  width:100px;
}

</style>
