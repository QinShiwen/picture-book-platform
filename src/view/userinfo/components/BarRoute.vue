.<template>
  <div class = "userinfo">
    <div class = "avatar"></div>
    <div class = "username">{{username}}</div>
    <ul class = "route">
        <li @click = "showBookshelf">我的书架</li>
        <li>设置</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'BarRoute',
  components: {
    
  },
  data(){
      return{
          
      }
  },
  methods:{
      showBookshelf(){
          
      }
  },
  computed:{
      username(){
          let userinfo = JSON.parse(sessionStorage.getItem('userinfo'))
          return userinfo.name
      }
  },
  beforeCreate(){

  },
  mounted(){

  }
}
</script>

<style>
.useinfo{
    display:flex;
    height: 100%;
    width: 100%;
    box-shadow: 5px 5px 3px #888888;
}

.avatar{
    width:150px;
    height: 150px;
    background-color: antiquewhite;
    margin-top: 50px;
    border-radius: 50%;
    cursor: pointer;
    margin-bottom: 30px;
}

.username{
    font-size: 20px;
    color: aliceblue;
    margin-bottom: 50px;
}

.route{
    font-size: 18px;
    list-style: none;
    text-align: center;
    padding: 0px;
    width: 100%;
    cursor: pointer;
    color:#e1e1ec;
}

.route li:first-child{
    border-top:solid 3px aliceblue;
}

.route li{
    padding:15px;
    border-bottom:solid 3px aliceblue;
}


</style>