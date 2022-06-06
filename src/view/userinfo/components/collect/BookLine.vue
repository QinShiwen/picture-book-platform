<template>
  <div class = "bookline">

    <div class = "book-info-area">
        <div class = "info-left">
            <div class = "book-style">
                <div class = "book-title">{{bookname}}</div>
            </div>
            <div class = "book-more-info">
                <div>绘本名称：{{bookname}}</div>
                <div>作者：{{creator}}</div>
            </div>                       
        </div>
        <div class = "info-right">
            <div class = "icon-area">
                <div class = "topicbookshow" @click = "topicbookshow">阅览</div>
            </div>
        </div>
    </div> 
  </div>
</template>

<script>
import axios from 'axios'

export default {
    nmae:"BookLine",
    props:["book"],
    data(){
        return{
            bookname:this.book[0],
            creator:this.book[2],
        }
    },
    methods:{
        topicbookshow(){

        }
    },
    mounted(){
    }
}
</script>

<style scoped>
.bookline{
    width:100%;
    height: 220px;
    margin:10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.book-info-area{
    background-color: aliceblue;
    width:95%;
    height: 100%;
    display: flex;
    flex-direction: row;
}

.info-left{
    flex:0.7;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.book-style{
    width:180px;
    height: 180px;
    background-color: rgb(193, 160, 116) ;
    margin-left: 30px;
    border-radius: 5px;
    box-shadow: 5px;
    display:flex;
    flex-direction: column;
    align-items: center;
}

.book-title{
    margin-top: 30px;
    width:80%;
    height: 40px;
    background-color: antiquewhite;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border-radius: 5px;
}

.book-more-info{
    padding: 10px;
    margin-top: 50px;
    margin-left:10px;
    font-size: 20px;
    height: 100%;
}

.info-left{
    flex:0.7;
}

.info-right{
    flex:0.3;
    display: flex;
    flex-direction: column-reverse;
}

.icon-area{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-right:20px;
    margin-bottom:10px;
}

.topicbookshow{
    width:100px;
    height: 40px;
    background-color: rgb(97,100,159);
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;

}

.topicbookshow:hover{
    background-color: rgb(206, 208, 255);
    color:rgb(97,100,159);
}

.el-icon-star-off{
    color: rgb(97,100,159);
    font-size: 40px;
    margin-right: 10px;
    cursor: pointer;
}

.el-icon-star-on{
    color: rgb(97,100,159);
    font-size: 40px;
    margin-right: 10px;
    cursor: pointer;
}
</style>