.<template>
<div>
  <div class = "bookshelf">
      <OneLine
        v-for = "(line,index) in bookArray"
        :key = "index"
        :line = "line"
      />
  </div>
</div>
</template>

<script>
import OneLine from './OneLine.vue'

export default {
  name: 'BookShelf',
  components: {
    OneLine
  },
  data(){
    return{
      showdialog:false,
      picbookname:'',
      isprivate:'',
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
    userInfo:{
      get(){
        return JSON.parse(sessionStorage.getItem('userinfo'))
      },
      set(){
        return JSON.parse(sessionStorage.getItem('userinfo'))
      }
    },
    bookArray(){
      let books =  this.userInfo.userbooks
      let bookarray = []
      let oneline = [1] 
      if(books.length == 0){
        bookarray.push(oneline)
      }else{
        for(let i=0;i<books.length;i++){
          oneline.push(books[i])
          if((oneline.length%4)==0){
            bookarray.push(oneline)
            oneline = []
          }else if(i==books.length-1){
            bookarray.push(oneline)
            oneline = []
          }
        }
      }
      return bookarray
    },
  },
  methods:{

  },
  beforeCreate(){

  },
  mounted(){

  }
}
</script>

<style>
.bookshelf{
  width:100%;
  height: 100%;
  position: absolute;
  margin-bottom: 50px;
}
</style>