<template>     
    <div class = "textpage">
        <div class = "content-num">{{index+1}}</div>
        <div class = "text">
            <textarea
                @blur= "handleblur"
                :value = "text.text"
            />
            <div class = "button">        
                <i class="el-icon-microphone" @click = "showdialog = true"></i>
                <i class="el-icon-delete" @click = "deleteSentence"></i>
            </div>
        </div>
        
        <el-dialog title="上传音频" :visible.sync= "showdialog">
            <div class = "upload">
                <div class = "upload" v-if = "voiceurl == ''">
                <div class = "record">
                    <button v-if = "ifrecord" @click= "stoprecord"><i class = "el-icon-loading"></i>录制中，点击停止</button>
                    <button v-else @click= "openRecordDialog">现场录制</button>
                </div>
                <el-upload  
                    class="upload-demo"
                    action="http://qinsw666.top:5001/uploadvoice"
                    :before-upload= "beforeVoiceUpload"
                    :on-success= "handleVoiceSuccess"
                    :data = "voiceinfo"
                    :limit= "1"
                >
                    <button>本地音频</button>
                    <div class="el-upload__tip">只能上传mp3/wav文件</div>
                </el-upload>
                </div>
                <div 
                    v-else
                    class="demo"
                    >
                    <i v-if = "notplay" @click = "playvoice" class = "el-icon-video-play"></i>
                    <i v-else @click = "pausevoice" class = "el-icon-video-pause"></i> 
                    <i class = "el-icon-delete" @click = "deletevoice"></i>
                    <audio ref = "audio" @ended = "notplay = true" :src = "voiceurl">
                    </audio>
                </div>
            </div>
        </el-dialog>
        <!-- 音频录制 -->
        <el-dialog title="录制音频" :visible.sync= "showdialogrecord">
            <div class = "record-area">
                <div class = "hint">请将音频控制在15s之内</div>
                <audio-recorder
                    :attempts= "1"
                    :time= "0.25"
                    :show-download-button = "false"
                    :after-recording = "uploadvoice"
                    upload-url = "http://qinsw666.top:5001/uploadrecordvoice"
                />
                <div class = "use-record" @click = "usevoice">使用</div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
//import {nanoid} from 'nanoid'
import axios from 'axios'

export default {
  name: 'AddVoice',
  props:['text','index','contentindex'],
  components: {
    
  },
  data(){
      return {
          showdialog:false,
          notplay:true,
          ifrecord:false,
          showdialogrecord:false,
          presentrecordvoice:"",
      }
  },
  computed:{
     slideindex:{
        get(){
            return this.$store.state.slideHandler.presentindex
        },
        set(){
            return this.$store.state.slideHandler.presentindex
        }
        },
        voiceurl:{
            get(){
                return this.text.voiceurl
                },
            set(){
                return this.text.voiceurl
            }
        },
        voiceinfo(){
            return{
                bookid:sessionStorage.getItem('presentbookid'),
                userid:JSON.parse(sessionStorage.getItem('userinfo')).userid,
                slideindex:String(this.slideindex),
                contentindex:String(this.contentindex),
                index:String(this.index)
            }
        },
  },
  methods:{
        handleblur(e){
            const presentindex = this.$store.state.slideHandler.presentindex
            const editInfo = {
                value:e.target.value,   //改变的值
                contextindex:this.contentindex,   //改变第几段
                textindex:this.index,   //第几句
                slideindex:presentindex  //第几页
            }
            this.$store.commit('slideHandler/EDITTEXT',editInfo)
        },
        deleteSentence(){
            let index = [this.contentindex,this.index]
            this.$store.commit('slideHandler/DELTESENTENCE',index)
        },
        beforeVoiceUpload(file){
            const isMP3 = file.type === "audio/mpeg"
            const isWAV = file.type === "audio/wav"
            if (!isMP3&&!isWAV) {
                this.$message.error('上传文件格式不正确！');
            }
            return isMP3 || isWAV;
        },
        handleVoiceSuccess(res,file){
            if(res.result == "success"){
                this.$message("音频上传成功")
                let voiceinfo = {
                    voiceurl:res.data.voiceurl,
                    contentindex:this.contentindex, //第几段
                    index:this.index,   //第几句
                }
                this.$store.commit('slideHandler/UPLOADVOICE',voiceinfo)
            }else{

            }
        },
        playvoice(){
            this.notplay = false
            this.$refs['audio'].play()
        },
        pausevoice(){
            this.notplay = true
            this.$refs['audio'].pause()
        },
        deletevoice(){
            let indexinfo = {
                contentindex:this.contentindex,
                sentenceindex:this.index
            }
            this.$store.commit("slideHandler/DELETEVOICE", indexinfo)
        },
        stoprecord(){
            this.ifrecord = false
        },
        openRecordDialog(){
            this.showdialogrecord = true
        },
        uploadvoice(data){
            //限制音频时长
            let format = new FormData()
            format.append('file',data.blob)
            format.append('voiceid',data.id)   
            let userid = JSON.parse(sessionStorage.getItem('userinfo')).userid
            let bookid = sessionStorage.getItem('presentbookid')
            axios({
                method: 'post',
                url:"自己的接口/uploadrecordvoice?userid="+userid +"&bookid="+bookid,
                data:format,
                headers: {
                    'Content-Type': 'multipart/form-data;charset=UTF-8'
                }
            }).then(res => {
                if(res.data.result == 'success'){
                    this.$message("音频完成录制")
                    //保留当前录音
                    this.presentrecordvoice = res.data.voiceurl
                }
            })
        },
        usevoice(){
            if(this.presentrecordvoice != ""){
                let voiceinfo = {
                    voiceurl:this.presentrecordvoice,
                    contentindex:this.contentindex, //第几段
                    index:this.index,   //第几句
                }
                this.$store.commit('slideHandler/UPLOADVOICE',voiceinfo)
                this.$message("音频制上传成功")
                this.showdialogrecord = false
            }else{
                this.$message("您还没有录制音频")
            }
        }
  }
}
</script>



<style>
.textpage{
  margin-top: 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 5px;
  width:95%;
}


.content-num{
  border-radius: 50%;
  background-color: #61649f;
  width:20px;
  height: 20px;
  font-size: 10px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight:bold;
  /*font-family: '宋体';*/
  color: white;
  margin-right: 3px;
}

textarea{
    width:250px;
    resize: none;
    border-style: none;
    font-size: 17px;
    padding: 5px;
    outline:none;
    background-color: rgb(198, 228, 253);
}

.text{
    display: flex;
    flex-direction: row;
    background-color: rgb(198, 228, 253);
    /*  border:3px solid #61649f;  */
}

.button .el-icon-microphone{
    width:18px;
    height: 18px;
    font-size: 18px;
    color: #ffffff;
    background-color: rgb(102, 168, 206);
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    margin-top:2px;
    margin-bottom: 2px;
}

.button .el-icon-delete{
    width:18px;
    height: 18px;
    font-size: 15px;
    color: #ffffff;
    background-color: rgb(172, 1, 1);
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    margin-bottom: 2px;
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

.upload{
    display: flex;
    flex-direction: row;
    width:100%;
    height: 100%;
}

.record{
    flex:0.5;
    border-right: black solid 2px;
    height: 100%;
}

.upload-demo{
    flex:0.5;
}

.upload button{
    flex:0.5;
    width:150px;
    height: 40px;
    background-color: rgb(102, 168, 206);
    cursor: pointer;
    border-radius: 5px;
    margin:10px;
}

.upload button:hover{
    background-color: rgb(255, 255, 255);  
}

.demo{
    height: 100%;
    width:100%;
    justify-content: center;
}

.demo .el-icon-video-play{
    background-color: rgb(102, 168, 206);
    padding: 5px;
    border-radius: 50%;
    font-size: 28px;
    color:#ffffff;
    margin: 5px;
    cursor:pointer;
}

.demo .el-icon-delete{
    background-color: rgb(172, 1, 1);
    padding: 5px;
    border-radius: 50%;
    font-size: 28px;
    color:#ffffff;
    margin: 5px;
    cursor:pointer;
}

.demo .el-icon-video-pause{
    background-color: rgb(102, 168, 206);
    padding: 5px;
    border-radius: 50%;
    font-size: 28px;
    color:#ffffff;
    margin: 5px;
    cursor:pointer;
}

.record-area{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.record-area {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.record-area .ar-player__time{
    width:50px;
}

.record-area .ar-records{
    height:50px;
}

.record-area .ar__uploader{
    display: none;
}

.use-record{
    color:white;
    background-color: #61649f;
    margin-top:30px;
    width:80px;
    height:40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor:pointer
}

.use-record:hover{
    background-color:white;
    color:#61649f;
}

.hint{
    margin-bottom: 10px;
}
</style>
