<template>           
    <div class = "onecontent">
      <OneSentence
        v-for = "(sentence,index) in content"
        :key = "index"
        :sentence = "sentence"
      />
    </div>
</template>

<script>
import OneSentence from './OneSentence.vue'

export default {
  name: 'OneContent',
  props:['content'],
  components: {
    OneSentence
  },
  methods:{

  },
  computed:{
    showtext(){

    }
  },
  beforeCreate(){
    
  },
  mounted(){
     
  }
}
</script>

<style scoped>
.onecontent{
  font-size:18px;
  display: block;
  padding: 5px;
}

</style>