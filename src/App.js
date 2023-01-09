import useFetch from "./Hooks/useFetch";
import Counter from "./Hooks/Counter";
function App() {

 const {data,loading,error} =  useFetch('https://dummyjson.com/products/1');
  if(loading) return 'loading...'

  if(error){
   return console.log('error',error)
  }
  console.log(data)
  return (
      <>
       <h1>data:{data&&data.title}</h1>
          <hr/>
          <h1>useStateWithHistory!</h1>
       <Counter/>
      </>

  );
}

export default App;
