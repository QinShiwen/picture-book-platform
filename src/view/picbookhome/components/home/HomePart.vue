<template>
  <div id = "home">
      <div class = "home-info">
      <din class = "introduce-one">
          <div class = "one-left">
              <h2>欢迎来到绘本家园,</h2>你可通过绘本检索来访问本网站的所有绘本，<br>
              完成检索后可以对检索出的绘本进行阅览。
          </div>
          <div class = "one-right">
              <div class = "book-info">
                  <div class = "normal-book" ><div class = "title-info">小猪佩奇</div></div>
                  <div class = "normal-book"><div class = "title-info">成龙历险记</div></div>
              </div>
              <div class = "book-line"></div>
              <div class = "book-line"></div>
          </div>
      </din>
      <div class = "introduce-two">
          <div class = "two-left">
              <i class = "icon el-icon-sunrise-1"></i>
              <i class = "icon el-icon-sunny"></i>
              <i class = "icon el-icon-cloudy-and-sunny"></i>
              <i class = "icon el-icon-moon"></i>
              <i class = "icon el-icon-moon-night"></i>
          </div>
          <div class = "two-right">
              <h2>如果你想制作属于自己的绘本，</h2>
                可以点击登入/注册成为本家园用户,<br>
                即可开始你的绘本创作之旅。
          </div>
      </div>
      </div>
    </div>
</template>

<script>
export default {
    name:'HomePart',
    data(){
        return{

        }
    }
}
</script>

<style>
#home{
    width:100%;
    /*height: 100%;*/
}

.home-info{
    font-size: 20px;
    font-family: "宋体";
    padding: 0px 80px 20px 80px;
}

.introduce-one{
    display: flex;
    flex-direction: row;
    
    background-color: rgb(97,100,159)
}

.introduce-one .one-left{
    color:white;
    padding: 10px 30px 30px 30px;
    height: 250px;
    flex:0.5;
    background-color: rgb(97,100,159);
}

.introduce-one .one-right{
    padding: 10px 30px 30px 30px;
    flex:0.5;
    background-color: rgb(255, 255, 255)
}

.introduce-two{
    display: flex;
    flex-direction: row;
    height: 250px;
}

.introduce-two .two-left{
    flex:0.5;
    background-color: rgb(255, 255, 255);
    padding: 10px 30px 30px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.introduce-two .two-right{
    flex:0.5;
    background-color: rgb(97,100,159);
    padding: 10px 30px 30px 30px;
    color:white;
}

.book-info{
    display: flex;
    flex-direction: row;
}
.normal-book{
    width: 180px;
    height: 180px;
    background-color: rgb(193, 160, 116) ;
    margin: 20px 0 10px 80px; /*上 右 下 左 */
    /*cursor: pointer;*/
    box-shadow: 3px 3px 3px #888888;
    border-radius: 2px;
}

.title-info{
  background-color: antiquewhite;
  z-index:2;
  width:150px;
  height: 40px;
  font-family:"黑体";
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:20px;
  margin-left: 15px;
  border-radius: 5px;
}

.book-line{
    background-color: rgb(171, 128, 71) ;
    width: 100%;
    height: 5px;
}

.icon{
    color:rgb(97,100,159);
    font-size: 80px;
    margin:20px;
}
</style>