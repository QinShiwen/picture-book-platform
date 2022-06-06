<template>
  <div id="search">
      <div class = "search-bar">
        <div class = "input-search">
            <i class = "el-icon-search"></i>
            <input placeholder="绘本名称" v-model = "bookname"/>
            <button @click = "searchbook">搜索</button>
        </div>
      </div>
      <div class = "line"></div>
      <div class = "search-result">
          <BookLine
            v-for = "(book,index) in booklist"
            :key = "index"
            :book = "book"
          />
      </div>
  </div>
</template>

<script>
import BookLine from './BookLine'
import axios from 'axios'
export default {
    name:"SearchPart",
    components:{
        BookLine
    },
    data(){
        return {
            bookname:'',
            booklist:[],
        }
    },
    computed:{

    },
    methods:{
        searchbook(){
            if(this.bookname!=''){
                this.booklist = []
                axios.post('http://qinsw666.top:5001/search',{
                    bookname:this.bookname
                }).then((result)=>{
                    //console.log(result)
                    if(result.data.result === 'success'){
                        if(result.data.booklist ==[]){
                            this.$message("没有匹配的绘本！")
                        }else{
                            this.booklist = result.data.booklist
                        }
 
                    }
                })
            }else{
                this.$message("请输入绘本名称")
            }

        }
    },
    mounted(){
        
    }
}
</script>

<style scoped>
#search{
    width:100%;
    /*height: 100%;*/
    display: flex;
    flex-direction: column;
    align-items: center;
}

.search-bar{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.input-search{
    width:500px;
    height:45px;
    display: flex;
    flex-direction: row;
    background-color:aliceblue;
    border-radius: 50px;
}

.input-search input{
    width:100%;
    background: transparent;
    border: none;
    font-size: 20px;
    outline: none;
}

.el-icon-search{
    font-size: 25px;
    padding:10px;
    color:rgb(97,100,159)
}

.input-search button{
    background-color:rgb(97,100,159);
    outline:none;
    border:0;
    width:100px;
    border-radius: 0px 50px 50px 0px;
    color:aliceblue;
    font-size: 18px;
    cursor: pointer;
}

.line{
    height: 5px;
    width: 90%;
    background-color: rgb(97,100,159);
    text-align: center;
    margin-bottom: 20px;
}


</style>