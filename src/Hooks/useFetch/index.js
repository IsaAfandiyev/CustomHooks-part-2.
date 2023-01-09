import {useState,useEffect} from "react";

const useFetch = (url,options)=> {
    const [status,setStatus] = useState({
        loading:false,
        data:undefined,
        error:undefined
    })
    function fetchNow(url,options){
        setStatus({loading:true})
        fetch(url,options)
            .then((res)=>res.json())
            .then((json)=>{
                setStatus({loading:false,data:json})
            })
            .catch((error)=>{
                setStatus({loading:false,error})
            })
    }
    useEffect(()=>{
        if(url){
            fetchNow(url,options)
        }
    },[])
    return {...status,fetchNow}
}

export default useFetch;

