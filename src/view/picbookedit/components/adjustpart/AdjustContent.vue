<template>
  <div class="single-content">
      <div class = "content">第{{contentindex+1}}段</div>
      <AddVoice
        v-for = "(text,index) in content"
        :key = "index"
        :text = "text"
        :index = "index" 
        :contentindex = "contentindex"
      />
      <div class = 'down'>
        <button class = 'add-content' @click = "addSentence">添加一句</button>
        <button class = 'delete-content' @click= "deleteContent">删除本段</button>
      </div>
  </div>
</template>

<script>
import AddVoice from './AddVoice.vue'

export default {
  name: 'AdjustControl',
  props:['contentindex','content'],
  components: {
    AddVoice
  },
  computed:{

  },
  methods:{
    deleteContent(){
      this.$store.commit('slideHandler/DELETECONTENT',this.contentindex)
    },
    //在该段落中添加一句话
      addSentence(){
          this.$store.commit('slideHandler/ADDSENTENCE',this.contentindex)
      },
  }
}
</script>

<style scoped>
.single-content{
    background-color: aliceblue;
    width:95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
    margin-left: 8px;
    border-radius: 5px;
}

.content{
  padding: 8px;
  background-color: #61649f;
  color: white;
  border-radius: 5px 5px 0 0;
}


.down{
  background-color: #61649f;;
  margin-top:5px;
  border-radius: 0 0 5px 5px ;
}


.add-content{
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: rgb(255, 255, 255);
  border: none;
  border-radius: 5px;
  height: 25px;
  cursor: pointer;
  margin-right:5px;
}

.delete-content{
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: rgb(163, 42, 42);
  border: none;
  border-radius: 5px;
  height: 25px;
  cursor: pointer;
  margin-left:5px;
}

</style>
