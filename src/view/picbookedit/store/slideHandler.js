
import { nanoid } from "nanoid"
import { Slide } from './slide'

export default {
    namespaced:true, //使模块名字可以被读到
    actions:{
        addSlide(context){
            const emptySlide = Slide(nanoid(),context.state.picbook.slideArray.length)
            context.commit('ADDSLIDE',emptySlide)
        }
    },
    mutations:{
        /*  pagelist业务逻辑 */
        //pagelist增删选择页面
        ADDSLIDE(state,emptySlide){
            state.picbook.slideArray.push(emptySlide)
            if(state.presentindex == -1){
                state.presentindex = 0
            }
        },
        //删除页面
        DELLETSLIDE(state){
            //console.log(state.picbook.slideArray[state.presentindex].isDel)
            if(state.picbook.slideArray[state.presentindex].isDel==true){
                state.picbook.slideArray.splice(state.presentindex,1)
                if(state.presentindex==state.picbook.slideArray.length){
                    state.presentindex=state.presentindex-1
                }else{
                    for(let i=state.presentindex;i<state.picbook.slideArray.length;i++){
                        state.picbook.slideArray[i].indexid = state.picbook.slideArray[i].indexid-1
                    }
                }
                //删除后自动选择下一页
                console.log(state.presentindex)
                this.commit('slideHandler/SELETCTSLIDE',state.presentindex)
                
            }
        },
        SELETCTSLIDE(state,indexid){
            state.picbook.slideArray.forEach(slide => {
                slide.isEd = false
                slide.isDel = false
            });
            state.picbook.slideArray[indexid].isEd = true
            state.picbook.slideArray[indexid].isDel = true
            state.presentindex = indexid
        },
        HANDLEFOCUS(state,focus){
            if(focus) state.picbook.slideArray[state.presentindex].isDel = true
            else state.picbook.slideArray[state.presentindex].isDel = false
            //console.log(focus)
        },

        /*  viewpart业务逻辑  */
        //viewpart中改变数据
        EDITTEXT(state,editInfo){
            //console.log(editInfo)
            let value = editInfo.value
            let slideindex = editInfo.slideindex
            let contextindex = editInfo.contextindex
            let textindex = editInfo.textindex
            state.picbook.slideArray[slideindex].content[contextindex][textindex].text = value
        },
        //上传图片
        UPLOADIMG(state,imginfo){
            //console.log(imginfo)
            state.picbook.slideArray[state.presentindex].picurl = imginfo.imgurl
            state.picbook.slideArray[state.presentindex].picwidth = imginfo.picwidth
            state.picbook.slideArray[state.presentindex].picheight = imginfo.picheight
            console.log(state.picbook.slideArray[state.presentindex])
        },
        DELETEIMG(state){
            state.picbook.slideArray[state.presentindex].picurl = ''
        },
        /*Adjustpart业务逻辑  */
        // 主题改变逻辑 
        CHANGETHEME(state,themeInfo){
            state.picbook.theme.leftpage = themeInfo.leftpage
            state.picbook.theme.rightpage = themeInfo.rightpage
            state.picbook.theme.fontcolor = themeInfo.fontcolor
        },
        //Content操控 添加一段
        ADDCONTENT(state,slideindex){
            state.picbook.slideArray[slideindex].content.push([{text:"请输入本句内容",voiceurl:''}])
        },
        //删除一段
        DELETECONTENT(state,contentindex){
            state.picbook.slideArray[state.presentindex].content.splice(contentindex,1)
        },
        //添加一句
        ADDSENTENCE(state,contentindex){
            state.picbook.slideArray[state.presentindex].content[contentindex].push({text:"请输入本句内容",voiceurl:''})
        },
        //删除一句
        DELTESENTENCE(state,index){
            let contentindex = index[0]
            let textindex = index[1]
            state.picbook.slideArray[state.presentindex].content[contentindex].splice(textindex,1)
        },
        //上传音频
        UPLOADVOICE(state,voiceinfo){
            //console.log(voiceinfo)
            let voiceurl = voiceinfo.voiceurl
            let contentindex = voiceinfo.contentindex  //第几段
            let index = voiceinfo.index  //第几句
            state.picbook.slideArray[state.presentindex].content[contentindex][index].voiceurl = voiceurl
        },
        DELETEVOICE(state,indexinfo){
            console.log(1)
            let contentindex = indexinfo.contentindex
            let sentenceindex = indexinfo.sentenceindex
            state.picbook.slideArray[state.presentindex].content[contentindex][sentenceindex].voiceurl = ""
        }


    },
    state:{
        //当前存储绘本
        picbook:JSON.parse(sessionStorage.getItem('presentbook')),
        //当前页面是第几页
        presentindex:0
    }
}


