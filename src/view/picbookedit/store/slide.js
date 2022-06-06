

export const Slide = function(id,indexid){
    return {
        id:id,
        indexid:indexid,
        picurl:'', 
        picwidth:0,
        picheight:0,
        content:[
            [{text:"请输入本句内容" ,voiceurl:''}]
        ],
        isDel:false,
        isEd:false
    }

}