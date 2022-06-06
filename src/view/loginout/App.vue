<template>
  <div id="app">
      <!--<h1>欢迎来到绘本世界</h1>-->
      <div class="cont_info_log_sign_up">
        <Login/>
        <Register/>
      </div>
</div>
</template>

<script>
import Register from './components/Register.vue'
import Login from './components/Login'

export default {
  name: 'App',
  components: {
    Register,Login
  },
  data(){
    return{
      
    }
  },
  methods:{

  },
  beforeCreate(){

  },
  mounted(){

  }
}
</script>

<style scoped>
#app{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#cfd8dc+0,607d8b+100,b0bec5+100 */
    background: #aac4bc; /* Old browsers */
    background: -moz-linear-gradient(-45deg,  #b6d9dd 0%, #c3a9d0 100%,#eed5a9 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(-45deg,  #b6d9dd 0%, #c3a9d0 100%,#eed5a9 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(135deg, #b6d9dd 0%, #c3a9d0 100%,#eed5a9 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cfd8dc', endColorstr='#b0bec5',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

}

* {
  margin: 0px auto;
  padding: 0px;
  text-align: center;
  font-family: 'Lato', sans-serif;
}

.cont_info_log_sign_up {
  z-index: 1;
  display: flex;
} 

</style>