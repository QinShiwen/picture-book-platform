.<template>  
  <div class = "one-line">
    <div class = "book-line">
      <OneBook
        v-for = "(book,index) in line"
        :key = "index"
        :book = "book"
      />
    </div>
    <div class = "shelf-line"></div>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import axios from 'axios'
import OneBook from './OneBook.vue'

export default {
  name: 'OneLine',
  props:['line'],
  components: {
    OneBook
  },
  data(){
    return{
      showdialog:false,
      picbookname:'',
      isprivate:'',
      
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
.one-line{
    padding: 10px;
    width: 100%;
}

.book-line{
  display: flex;
}


.shelf-line{
    background-color: rgb(171, 128, 71) ;
    width: 70%;
    height: 10px;
}
</style>