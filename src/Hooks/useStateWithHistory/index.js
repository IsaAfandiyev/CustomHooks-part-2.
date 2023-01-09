import {useState,useEffect} from "react";

const useStateWithHistory = (val)=> {
    const [value,internalSetValue] = useState(val);
    const [hstr,setHstr] = useState([]);
    const [pointer,setPointer] = useState(-1);


    function setValue(newVal) {
        internalSetValue(newVal);
        const tmphstr = hstr.concat([newVal])
        setHstr(tmphstr)
        console.log('history',tmphstr)
        setPointer(tmphstr.length - 1)
    }
    function goBack(){
        const tmppointer = pointer-1;
        if(tmppointer < 0){
            return ;
        }
        setPointer(tmppointer);
        internalSetValue(hstr[tmppointer]);
    }
    function goForward(){
        const tmppointer = pointer+1
        if(tmppointer >= hstr.length){
            return
        }
        setPointer(tmppointer);
        internalSetValue(hstr[tmppointer])
    }
    return [value,setValue,goBack,goForward,hstr]
}

export default useStateWithHistory;

