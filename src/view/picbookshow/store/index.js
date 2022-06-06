import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//负责绘本播放业务逻辑
export default new Vuex.Store({
    namespaced:true,
    actions:{},
    mutations:{
        //下一页
        NEXTSLIDE(state){
            state.presentindex +=1
        },
        //上一页
        LASTSLIDE(state){ 
            state.presentindex -=1
        },
        NEXTVOICE(state){
            if(state.sentenceindex === state.picbook.slideArray[state.presentindex].content[state.contentindex][state.sentenceindex].length-1){
                if(state.contentindex === state.picbook.slideArray[state.presentindex].content[state.contentindex].length-1){
                    //看是否读到这最后一句
                    if(state.presentindex === state.picbook.slideArray.length-1){

                    }else{
                        state.presentindex += 1
                        state.contentindex = 0
                        state.sentenceindex = 0
                    }
                }else{
                    state.contentindex += 1
                    state.sentenceindex = 0
                }
                
            }else{
                state.sentenceindex+=1
            }
        },
        //播放音频
        PLAYMUSIC(){

        }
    },
    state:{
        picbook:JSON.parse(sessionStorage.getItem('presentbook')),
        presentindex:0,  //刚播放时展示初始页数
        contentindex:0, //读到哪段了
        sentenceindex:0,    //读到哪句了 或许可以用来控制高亮
    }
})