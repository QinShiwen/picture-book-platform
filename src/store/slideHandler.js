
//负责编辑与制作绘本的业务逻辑
import { nanoid } from "nanoid"
import { Picbook } from '../mocks/defaultpicbook' 
import { Slide } from '../mocks/slide'

//新建时默认只有一页
const defaultpicbook = Picbook()

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
            console.log(state.picbook.slideArray[state.presentindex].isDel)
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
        //图片
        UPLOADIMAGE(state,image){
            console.log(image)
            console.log(111)
            state.picbook.slideArray[state.presentindex].picurl = image
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
            state.picbook.slideArray[slideindex].content.push([{text:"请输入文字"}])
        },
        //删除一段
        DELETECONTENT(state,contentindex){
            state.picbook.slideArray[state.presentindex].content.splice(contentindex,1)
        },
        //添加一句
        ADDSENTENCE(state,contentindex){
            state.picbook.slideArray[state.presentindex].content[contentindex].push({text:"请输入文字"})
        },
        //删除一句
        DELTESENTENCE(state,index){
            let contentindex = index[0]
            let textindex = index[1]
            state.picbook.slideArray[state.presentindex].content[contentindex].splice(textindex,1)
        }
    },

    state:{
        picbook:defaultpicbook,
        //当前页面是第几页
        presentindex:0
    }
}