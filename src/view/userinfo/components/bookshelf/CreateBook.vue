.<template>
<div>
  <div create-book
    class = "create-book"
    @click = "showdialog = true"
  >
    <i class="el-icon-plus"></i>
  </div>
  <!-- 创建新绘本时弹出对话框  -->

  <el-dialog title="新建绘本" :visible.sync= "showdialog">
    <div class = "inputname">
      绘本名称<input v-model = "picbookname" />
    </div>
    <div class = "bookstate">绘本状态
      <input v-model= "isprivate" value = '1' name = "isprivate" type = "radio"/>私密
      <input v-model= "isprivate" value = '0' name = "isprivate" type = "radio"/>公开
    </div>
    <div class = "select">
      <button @click= "returnUserInfo">取消</button>
      <button @click= "createBook">确定</button>
    </div>
    </el-dialog>
</div>
</template>

<script>
import {nanoid} from 'nanoid'
import axios from 'axios'

export default {
  name: 'CreateBook',
  components: {
  },
  data(){
    return{
      showdialog:false,
      picbookname:'',
      isprivate:'',
    }
  },
  computed:{
    userInfo(){
      return JSON.parse(sessionStorage.getItem('userinfo'))
    },
  },
  methods:{
    returnUserInfo(){
      this.showdialog = false
      this.picbookname='',
      this.isprivate=''
    },
    createBook(){
      if(this.picbookname!=''&&this.isprivate!=''){
        let newbookid = nanoid()     
        axios.post('http://qinsw666.top:5001/createbook',{
          bookid:newbookid,
          bookname:this.picbookname,
          isprivate:this.isprivate,
          creatorid:this.userInfo.userid,
          creatorname:this.userInfo.name
        }).then((res)=>{
          console.log(res)
          if(res.data.result == 'success'){
            this.$message('创建成功！')
            let userinfo = JSON.parse(sessionStorage.getItem('userinfo'))
            console.log(userinfo.userbooks)
            userinfo.userbooks.push({
              bookid:newbookid,
              bookname:this.picbookname,
              isprivate:this.isprivate,
              creatorid:this.userInfo.userid,
              creatorname:this.userInfo.name
            })
            console.log(userinfo.userbooks)
            sessionStorage.setItem('userinfo',JSON.stringify(userinfo))
            this.showdialog = false
            location.reload();
            //this.$bus.$emit('updateBookshelf')
          }
        })
      }else{
        this.$message('请完成绘本信息！')
      }

      
    }
  },
  beforeCreate(){

  },
  mounted(){

  }
}
</script>

<style scoped>
.create-book{
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

.el-icon-plus{
    font-size: 35px;
    color:white;
    background-color: rgb(171, 128, 71);
    padding: 5px;
    border-radius: 50%;
}

.el-dialog{
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