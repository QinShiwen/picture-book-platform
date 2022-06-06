<template>
  <div id="head">
    <div class = "bookinfo">
      <span class = "font">{{bookname}}</span>
    </div>
    <div class = "usertopbar">
    <span class="el-dropdown-link">
      <i class = "el-icon-user" @click = "swiftToUser"></i>
    </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadPart',
  components: {
    
  },
  computed:{
    bookname(){
      return sessionStorage.getItem('presentbookname')
    }
  },
  methods:{
    swiftToUser(){
      window.open('/userinfo#/bookshelf')
    },
  }
}
</script>

<style scoped>
#head{
  background-color: #61649f;
  display:flex; 
}

.usertopbar{
  flex:0.5;
  flex-direction: row;
  display:flex;
  align-items: center;
  justify-content:flex-end;
}

.bookinfo{
  flex:0.5;
  display: flex;
  align-items: center;
}

.font{
  color: white;
  font-size: 25px;
  margin-left:20px;
  font-family: "宋体";
  letter-spacing:5px;
  cursor: pointer;
}
  
.el-icon-user{
    font-size: 28px;
    background-color: #e1e1ec;
    color:#61649f;
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 20px;
}
</style>
