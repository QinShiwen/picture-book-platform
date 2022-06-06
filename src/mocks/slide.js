

export const Slide = function(id,indexid){
    return {
        id:id,
        indexid:indexid,
        picurl:'', 
        content:[
            [{text:"请输入文字" ,voiceurl:''}]
        ],
        isDel:false,
        isEd:false
    }

}