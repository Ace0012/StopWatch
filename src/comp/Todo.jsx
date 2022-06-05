import React from 'react'

const Todo = ({item}) => {
  return (
    <div>
             <div key ={item.id}>
  
  {item.value}

</div>
    </div>
  )
}

export default Todo



// TO SHOW DATA OF PAGINATION PUT FOLLOWING CODE IN APP.JS


//  const [todos,setTodos] = useState([])
//   const [page,setPage] = useState(1)
//   const [count,setCount] = useState()
// const [limit,setLimit] = useState()

//   useEffect(()=>{
  
//       axios.get(`http://localhost:8080/tasks?_page=${page}&_limit=${limit||5}}`).then((res)=>{

//        setTodos(res.data)
//        setCount(Number(res.headers["x-total-count"]))




//       })},[page,limit])
//   return (
//     <div className="App">
//       <div >
//         {todos.map((item)=>(
//         <Todo item={item}/>
// ))}
//       </div>
//       <button
//       disabled = {page<=1}
//        onClick = {()=>setPage(page-1)}>{`<`}</button>

// <select onChange ={(e)=>{setLimit(e.target.value)}}>
//         <option value="5" >5</option>


//         <option value = "10">10</option>
//         <option value = "15">15</option>
//       </select>
//       <button
//       disabled = {count<=page*5}
//       onClick = {()=>setPage(page+1)}>{`>`}</button>
     
      

// </div>


// //   );/