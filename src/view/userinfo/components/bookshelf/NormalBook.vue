<template>  
  <div 
    class = "normal-book"  
    @mouseenter = "showBookEdit = true"
    @mouseleave= "showBookEdit = false"
  >
      <div class = "bookinfo">
        {{picbookname}}
      </div>
      <div 
        class = "bookedit"
        v-show = "showBookEdit"
      >
        <div class = "up">
          <i class="el-icon-setting" @click = "showsetDialog = true"></i>
          <i class="el-icon-edit" @click = "toBookEdit"></i>
        </div>
        <div class = "down">
          <i class = "el-icon-reading" @click = "toBookShow"></i>
          <i class = "el-icon-delete" @click= "showdeleteDialog"></i>
        </div>
        
      </div>

    <el-dialog title="修改绘本信息" :visible.sync= "showsetDialog">
    <div class = "inputname">
      绘本名称<input v-model = "newbookname" />
    </div>
    <div class = "bookstate">绘本状态
      <input v-model= "isprivate" value = '1' name = "isprivate" type = "radio"/>私密
      <input v-model= "isprivate" value = '0' name = "isprivate" type = "radio"/>公开
    </div>
    <div class = "select">
      <button @click= "returnUserInfo">取消</button>
      <button @click= "setpicbook">确定</button>
    </div>
    </el-dialog>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'NormalBook',
  props:['book'],
  components: {
    
  },
  data(){
    return{
      showdialog:false,
      picbookname:this.book.bookname,
      showBookEdit:false,
      showsetDialog:false,
      isprivate:"",
      newbookname:this.book.bookname,
    }
  },
  computed:{
    userid(){
      let userinfo = JSON.parse(sessionStorage.getItem('userinfo'))
      return userinfo.userid
    }
  },
  methods:{
    returnUserInfo(){
      this.showsetDialog = false
      this.$message("已取消修改。")
    },
    setpicbook(){
      if(this.newbookname!=""&&this.isprivate!=""){
        axios.post('http://qinsw666.top:5001/editbook',{
          bookid:this.book.bookid,
          bookname:this.newbookname,
          userid:this.userid,
          isprivate:this.isprivate
        }).then((res)=>{
          //console.log(res)
          if(res.data.result == "success"){
            let userinfo = JSON.parse(sessionStorage.getItem('userinfo'))
            userinfo.userbooks.forEach(element => {
              if(element.bookid === this.book.bookid){
                element.bookname = this.newbookname
                element.isPrivate = this.isprivate
              }
            }); 
            sessionStorage.setItem('userinfo',JSON.stringify(userinfo)) 
            this.showsetDialog = false
            location.reload();
          }
        })
      }else{
        this.$message("请完成信息填写。")
      }
    },
    toBookEdit(){
      axios.post('http://qinsw666.top:5001/getbook',{
        bookid:this.book.bookid,
        userid:this.userid
      }).then((res)=>{
        console.log(res)
        if(res.data.result == 'success'){
          sessionStorage.setItem('presentbook',JSON.stringify(res.data.bookinfo))
          sessionStorage.setItem('presentbookname',this.picbookname)
          sessionStorage.setItem('presentbookid',this.book.bookid)
          window.open('/picbookedit')
        }
        
      })
    },
    showdeleteDialog(){
      this.$confirm('此操作将永久删除该绘本, 是否继续?', '删除绘本', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          axios.post('http://qinsw666.top:5001/deletebook',{
            bookid:this.book.bookid,
            userid:this.userid
          }).then((res)=>{  
            console.log(res)
            if(res.data.result == 'success'){
              let userInfo = JSON.parse(sessionStorage.getItem('userinfo'))
              let index = userInfo.userbooks.findIndex((element,index,arr)=> element.bookid==this.book.bookid)
              console.log('这是index'+index)
              userInfo.userbooks.splice(index,1)
              sessionStorage.setItem('userinfo',JSON.stringify(userInfo))
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              location.reload();
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    toBookShow(){
      axios.post('http://qinsw666.top:5001/getbook',{
        bookid:this.book.bookid,
        userid:this.userid
      }).then((res)=>{
        console.log(res)
        if(res.data.result == 'success'){
          sessionStorage.setItem('presentbook',JSON.stringify(res.data.bookinfo))
          sessionStorage.setItem('presentbookname',this.picbookname)
          sessionStorage.setItem('presentbookid',this.book.bookid)
          window.open('/picshow')
        }
      })
    }

  },
  beforeCreate(){

  },
  mounted(){

  }
}
</script>

<style scoped>

.normal-book{
    width: 180px;
    height: 180px;
    background-color: rgb(193, 160, 116) ;
    margin: 20px 0 10px 80px; /*上 右 下 左 */
    /*cursor: pointer;*/
    box-shadow: 3px 3px 3px #888888;
    border-radius: 2px;
}

.bookinfo{
  background-color: #faebd7;
  position: absolute;
  z-index:2;
  width:150px;
  height: 40px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:20px;
  margin-left: 15px;
  border-radius: 5px;
}

.bookedit{
  position: absolute;
  z-index:5;
  background-color: rgb(113, 113, 113,0.8) ;
  width: 180px;
  height: 180px;
  
}

.bookedit .up{
  display: flex;
  width: 180px;
  height: 90px;
  align-items: center;
}

.el-icon-setting{
  font-size: 35px;
  color: white;
  width:100%;
  text-align: center;
  cursor: pointer;
}

.el-icon-setting:hover{
  color:rgb(234, 255, 0)
}

.el-icon-edit{
  font-size: 35px;
  color: white;
  width:100%;
  text-align: center;
  cursor: pointer;
}

.el-icon-edit:hover{
  color:rgb(234, 255, 0)
}

.bookedit .down{
  display: flex;
  width: 180px;
  height: 90px;
  align-items: center;
}

.el-icon-reading{
  font-size: 35px;
  color: white;
  width:100%;
  text-align: center;
  cursor: pointer;
}

.el-icon-reading:hover{
  color:rgb(234, 255, 0)
}

.el-icon-delete{
  font-size: 35px;
  color: white;
  width:100%;
  text-align: center;
  cursor: pointer;
}

.el-icon-delete:hover{
  color:rgb(234, 255, 0)
}

\.el-dialog{
  width:500px;
  background-color: rgb(215, 230, 239);
}

.el-dialog__header{
  padding: 10px 20px 10px;
}

.el-dialog__header button{
  top:10px;
}

.el-dialog__body{
  padding-left: 20px;
}

.el-input{
  width: 180px;
}

.inputname{
  font-size: 16px;
  padding: 10px;
}

.inputname input{
  width: 300px;
  height: 30px;
  padding: 5px;
  margin-left: 10px;
}

.bookstate{
  padding: 10px;
  font-size: 16px;
}

.select{
  padding: 10px 30px;
}

.select button{
  padding: 5px;
  width:100px;
  height: 35px;
  margin:10px;
  border:0px;
  border-radius: 5px;
  cursor: pointer;
}

.select button:first-child{
  background-color: #c5c5c5;
}

.select button:last-child{
  background-color: #6fb2ff;
}
</style>