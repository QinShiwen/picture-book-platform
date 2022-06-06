<template>
    <div id ="collect" v-if = "collectbooks.length != 0">
       <div class = "collect-cover" >
         <BookLine
            v-for = "(book,index) in collectbooks"
            :key = "index"
            :book = "book"
         />  
       </div>
    </div>
    <el-empty v-else description="您还没有收藏任何绘本噢"></el-empty>
</template>

<script>
import BookLine from './BookLine.vue'
export default ({
   name:"CollectPart",
   components:{
      BookLine
   },
   computed:{
      collectbooks:{
         get(){
            return JSON.parse(sessionStorage.getItem('userinfo')).collectbooks
         }
      }
   }
})
</script>



<style scoped>
#collect{
   width:100%;
   height: 100%;
   overflow-y:scroll;
   
}

.collect-cover{
   width:70%;
   height: 100%;
}
</style>