<template> 
    <CreateBook
      v-if = "book==1"
    />
    <NormalBook
      v-else
      :book = "book"
    />
</template>

<script>
import NormalBook from './NormalBook.vue'
import CreateBook from './CreateBook.vue'


export default {
  name: 'OneBook',
  props:['book'],
  components: {
    NormalBook,CreateBook
  },
  data(){
    return{
      
    }
  },
  computed:{

  },
  methods:{

  },
  beforeCreate(){

  },
  mounted(){

  }
}
</script>

<style scoped>

.one-book{
    width: 180px;
    height: 180px;
    background-color: antiquewhite ;
    margin: 20px 0 10px 80px; /*上 右 下 左 */
    cursor: pointer;
    box-shadow: 3px 3px 3px #888888;
    border-radius: 2px;
    display:flex;
    justify-content: center;
    align-items: center;
}

</style>