import useStateWithHistory from "../useStateWithHistory";

function Counter(){
    const [counter,setCounter,goBack,goForward,hstr] = useStateWithHistory(0);
console.log(hstr)
    return<>
        <h1>{counter}</h1>
        <h1>History:{hstr.map((item)=>`${item},`)}</h1>
        <button onClick={()=>{
            setCounter(counter+1)
        }}>+</button>
        <button onClick={()=>{
            goBack()
        }}>
            prev
        </button>
        <button onClick={()=>{
            goForward()
        }}>
            next
        </button>
    </>
}
export default Counter;