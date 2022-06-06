<template>
  <div id = "recommend">
    <BookLine
      :book = "book"
    />
  </div>
</template>

<script>
import BookLine from '../search/BookLine.vue'

export default {
    name:"RecommendPart",
    data(){
      return{
        book:{
          bookname:"巨人的春天",
          creatorname:"test",
          creatorid:"oJYDZylNtegF769lTHaC4",
          bookid:"rK4bfXV-HH1ZyM4m-fGTc"
        }
      }
    },
    components:{
      BookLine
    }
}
</script>

<style scoped>
#recommend{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>