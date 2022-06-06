<template>
  <div id = "tool-bar">
      <div style = "flex:0.7">
        <div class = "color-bar">
            <div class = "title"><i class = "el-icon-magic-stick"></i></div>
            <div >字体<br>
                <el-color-picker v-model= "fontcolor"/>  
            </div>
            
            <div>上页<br>
                <el-color-picker v-model= "leftpagecolor"/>  
            </div>
            <div>下页<br>
                <el-color-picker v-model= "rightpagecolor"/>  
            </div>
            <div>
            <button @click = "apply">应用</button>
            </div>
        </div>
      </div>
    <div class = "btn">
      <button @click = "savePicBook" >保存</button>
      <button @click = "swiftInfo"><i class = "el-icon-reading"/></button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'ToolBar',
    data(){
        return{
            fontcolor:'#000000',
            leftpagecolor:"#61649f",
            rightpagecolor:"#AEC6DE",
        }
    },
    methods:{
        apply(){
            const themeInfo = {
                fontcolor:this.fontcolor,
                leftpage:this.leftpagecolor,
                rightpage:this.rightpagecolor,
            }
            this.$store.commit("slideHandler/CHANGETHEME",themeInfo)
        },
        savePicBook(){
            axios.post('http://qinsw666.top:5001/savebook',{
                userid:JSON.parse(sessionStorage.getItem('userinfo')).userid,
                bookid:sessionStorage.getItem('presentbookid'),
                book:this.$store.state.slideHandler.picbook
            }).then((res)=>{
                if(res.data.result == 'success'){
                this.$message("绘本保存成功")
                sessionStorage.setItem('presentbook',JSON.stringify(this.$store.state.slideHandler.picbook))
                }
            })
        },
        swiftInfo(){
        const picbookinfo = this.$store.state.slideHandler.picbook
        //播放前做好浏览器本地存储
        localStorage.setItem('picbook',JSON.stringify(picbookinfo))
        window.open('/picshow')
        }
        
    },
    mounted(){
        let theme = JSON.parse(sessionStorage.getItem('presentbook')).theme
        this.fontcolor = theme.fontcolor
        this.leftpagecolor = theme.leftpage
        this.rightpagecolor = theme.rightpage
    }
}
</script>

<style>
.el-color-picker__trigger{
    width:35px;
    height: 35px;
    margin-bottom: 10px;
    margin-top: 5px;
    padding:0px;
    border:none;
    border-radius: 10px;
}

.el-color-picker__color{
    border:none;
}

.el-color-picker__color-inner{
    padding:0px;
    border-radius: 10px;
    border: 2px solid white;
    
}
</style>

<style scoped>
#tool-bar{
    color:#434684;
    display:flex;
    flex-direction: column;
}

.color-bar{
    width:80px;
    margin: 20px 10px 10px 5px;
    background-color: #aaacd4;
    border-radius: 5px;
    display: block;
    text-align: center;
    box-shadow: 2px 2px 5px rgb(137, 137, 137);
}
.title{
    background-color: #61649f;
    border-radius: 5px 5px 0 0;
    padding:5px;
    text-align: center;
    margin-bottom: 10px;
}

.color-bar button{
    width:60px;
    height: 30px;
    border:none;
    margin-top:20px;
    margin-bottom: 20px;
    cursor:pointer;
    border-radius:5px;
    background-color:#61649f;
    color:white;
}

.el-icon-magic-stick{
    color:white;
    font-size:20px;
}

.btn{
    flex:0.3;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

}

.btn button{
    margin-bottom: 10px;
    width:85px;
    height: 35px;
    border:none;
    cursor:pointer;
    border-radius:10px;
    background-color:rgb(102, 168, 206);
    color:white
}

.btn button:first-child{
    margin-bottom: 30px;
}
.btn button:hover{
    background-color:whitesmoke;
    color:#61649f;
}

.el-icon-reading{
    font-size:20px;
}
</style>