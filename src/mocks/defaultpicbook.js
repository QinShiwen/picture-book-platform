import { nanoid } from "nanoid"

export const Picbook = function(){
    return {
        bookid:nanoid(),
        name:"Test",
        theme:{   //默认主题颜色
            leftpage:"#305174",
            rightpage:"#AEC6DE",
            fontcolor:"black"
        },
        slideArray:[  //默认一页情况
            {   
                indexid:0,
                picurl:'', 
                content:[  //每一段
                    //第一段
                    [{text:"请输入文字" , voiceurl:''}] //每一句

                ],
                isDel:false,
                isEd:true
            }   
        ]
    }

}
