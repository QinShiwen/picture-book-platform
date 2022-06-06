<template>           
    <div class = "text-info">
      <OneContent
        v-for = "(content,index) in slide.content"
        :key = "index"
        :content = "content"
      />
    </div>
</template>

<script>
import OneContent from './OneContent.vue'

export default {
  name: 'PicCanvas',
  props:['slide','slideindex'],
  components: {
    OneContent
  },
}
</script>

<style scoped>
.text-info{
  display:block;
  
}
</style>