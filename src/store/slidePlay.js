
//负责绘本播放业务逻辑
export default {
    namespaced:true,
    actions:{},
    mutations:{
        //下一页
        NEXTSLIDE(state){
            //console.log('NEXTSLIDE')
            if(state.presentindex < state.picbook.slideArray.length-1){
                state.presentindex +=1
                state.presentslide = state.picbook.slideArray[state.presentindex]
            }else{
                console.log('最后一页啦')
            }
        },
        //上一页
        LASTSLIDE(state){ 
            //console.log('LASTSLIDE')
            if(state.presentindex > 0){
                state.presentindex -=1
                state.presentslide = state.picbook.slideArray[state.presentindex]
            }else{
                console.log('第一页啦')
            }
        },
        NEXTVOICE(){

        }
    },
    state:{
        picbook:JSON.parse(localStorage.getItem('picbook')),
        presentindex:0,  //刚播放时展示初始页数
        
    }
}