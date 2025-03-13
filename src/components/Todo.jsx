import React, { useRef, useState } from 'react'
import Todoitems from './Todoitems'

function Todo() {

  const inputRef = useRef();

  const [todolist,setToDo] = useState([]);

  const add = ()=>{  
    

    if(inputRef===""){
      return null; 
    }

    const inputText = inputRef.current.value.trim();  

    const newTodo = {
      id : Date.now(),
      text : inputText,
      isComplete: false,
    }

    setToDo((prev)=>[...prev,newTodo]);
    inputRef.current.value="";
  }

  const deleteTodo = (id)=>{
    setToDo((prvTodo)=>{
      return prvTodo.filter((toDo)=>toDo.id!==id)
    })

  }

  

  return (
    <div className="bg-cyan-200 w-11/12 place-self-center max-w-md p-7 flex flex-col min-h-[600px] rounded-2xl ">
      
      {/*Title*/}

      <div className="flex items-center mt-4 gap-2 text-2xl  text-cyan-950">

      <i class="ri-file-list-3-fill"></i>
      <h1 className='font-bold'>Todo List</h1>


      </div>

      {/*Inputs*/}

      <div className="flex items-center mt-7 bg-teal-300 rounded-full">
        <input ref={inputRef} type="text" name="Add ypur task" id="" placeholder='Add your task' className=' bg-transparent border-0 h-13 outline-0 ml-6 flex-1' />
        <button onClick={add} className=' bg-cyan-600 rounded-full h-14 w-30  text-cyan-200 font-medium cursor-pointer hover:bg-cyan-700' >Add+</button>
      </div>

      {/*item list*/}

      <div className='mt-7'>

        {todolist.map((item,index)=>{
          return <Todoitems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo}/>
        })}

        
      </div>

        



      
    </div>
  )
}

export default Todo
