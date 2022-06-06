<template>
    <div>
      <div v-if = "imageUrl" >
        <div :style= "adjustimg" 
          class = "imgplace"             
          @mouseover = "showIcon = true"
          @mouseleave= "showIcon = false"
        >
          <img 
            ref = "image"
            v-if= "imageUrl" 
            :src= "imageUrl" 
            id = "avatar" 
            class="avatar" 
            :style= "adjustimg"
          >
          <div v-show = "showIcon" class = "image-icon" :style= "adjustimg">
            <i class="el-icon-delete-solid" @click = "deleteImage"></i>
          </div>
        </div>

      </div>
      <el-upload
        v-else
        class="avatar-uploader"
        action = "自己的接口/uploadimage"
        :show-file-list= "false"
        :on-success= "handleAvatarSuccess"
        :before-upload= "beforeAvatarUpload"
        :on-progress = "showprocess"
        :data = "uploadparam"
      >
      <i class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
</template>

<script>

export default {
  name: 'ViewPicPage',
  components: {

  },
  data(){
    return {
      showIcon:false,
      //初始高（非缩放情况下）
      canvasHeight:(window.screen.height-200)*0.9,
      canvasWidth:(window.screen.height-200)*0.9,
    }
  },
  methods:{
      //上传图片后计算合适的宽高   
      SolveImage(imgurl){
        let image = new Image()
        image.src = imgurl
        let p = new Promise((res,rej)=>{
          image.onload = () => {
            let imgH = image.height,imgW = image.width
            let rateimage = imgH/imgW  
            let ratediv = 0.5
            if(rateimage>ratediv){ //图片过高
                imgH = (this.canvasHeight/2)-10
                imgW = imgH/rateimage
            }else{
                imgW = this.canvasWidth - 20
                imgH = imgW*rateimage
            }
            let data = [imgH,imgW,imgurl]
            res(data)
          }
        })
        p.then((data)=>{
          let imageinfo = {
            picheight:parseInt(data[0]),
            picwidth:parseInt(data[1]),
            imgurl:data[2]
          }
          this.$store.commit('slideHandler/UPLOADIMG',imageinfo)
          console.log(imageinfo)
          this.$message("图片上传成功！")
          image = null 
        })
      },
      handleAvatarSuccess(res, file) {
        if(res.result == 'success'){
          this.SolveImage(res.imgurl)
        }
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG&&!isPNG) {
          this.$message.error('上传的图片只能是 JPG/PNG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传的图片大小不能超过 2MB!');
        }
        return (isJPG || isPNG) && isLt2M;
      },
      showprocess(){
        this.$message("正在上传，请稍后")
      },
      deleteImage(){
        this.$confirm('此操作将永久删除该图片, 是否继续?', '删除图片', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.$store.commit('slideHandler/DELETEIMG')
            this.$message("删除成功");  
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      changeSize(){
        this.imageheight = this.imageheight
        this.imagewidth = this.imageheight    
      }
  },
  computed:{
    imagesize(){
      return{
        'height':this.imageheigt + 'px',
        'width':this.imagewidth + 'px'
      }
    },
    adjustimg:{
      get(){
        return{
          'height':this.$store.state.slideHandler.picbook.slideArray[this.slideindex].picheight + 'px',
          'width':this.$store.state.slideHandler.picbook.slideArray[this.slideindex].picwidth + 'px'
        }
      },
      set(){
        return{
          'height':this.$store.state.slideHandler.picbook.slideArray[this.slideindex].picheight + 'px',
          'width':this.$store.state.slideHandler.picbook.slideArray[this.slideindex].picwidth + 'px'
        }
      }

    },
    slideindex:{
      get(){
        return this.$store.state.slideHandler.presentindex
      },
      set(){
        return this.$store.state.slideHandler.presentindex
      }
    },
    imageUrl:{
      get(){
        return this.$store.state.slideHandler.picbook.slideArray[this.slideindex].picurl
      },
      set(){
        return this.$store.state.slideHandler.picbook.slideArray[this.slideindex].picurl
      }
    },
    uploadparam(){
        return {
          bookid:sessionStorage.getItem('presentbookid'),
          userid:JSON.parse(sessionStorage.getItem('userinfo')).userid,
          slideindex:this.$store.state.slideHandler.presentindex
        }
    }
  },
  mounted(){
    this.viewheight = ((window.innerHeight - 60)*0.9)/2
    this.viewwidth = this.viewheight
    window.onresize = function(){
      this.viewheight = ((window.innerHeight - 60)*0.9)/2
      this.viewwidth = this.viewheight
    }

  },
}
</script>

<style scoped>

.avatar-uploader {
    border: 3px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    overflow: hidden;
    width: 200px;
    height: 200px;
    display:flex;
    justify-content: center;
    align-items:center;
  }

  .avatar-uploader:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 40px;
    color: #d9d9d9;
  }

  .avatar {
    overflow: hidden;
    display: block;
    width: 80%;
    position: absolute;
    z-index: 1;
  }

.image-icon{
  position: absolute;
  z-index:2;
  background-color: rgb(0, 0, 0,0.5);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.el-icon-upload{
  color: white;
  font-size: 50px;
  margin: 20px;
  cursor: pointer;
}

.el-icon-upload:hover{
  color: yellow;
}

.el-icon-delete-solid{
  color: white;
  font-size: 45px;
  margin: 20px;
  cursor: pointer;
}

.el-icon-delete-solid:hover{
  color: yellow;
}

.text-area{
  height: 45%;
  margin: 10px;
  padding: 10px;
}

.page-right{
  flex:0.4;
  flex-direction: column;
  font-size: 20px;
  display: flex;
  align-items: center;
}
</style>
