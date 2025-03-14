import React from 'react'

const Todoitems = ({text,id,isComplete,deleteTodo,toggle}) => {

  

  return (
    <div className="flex  items-center mt-3 bg-cyan-500 shadow-2xl  rounded-2xl py-2">

        <div className='flex flex-1 items-center gap-2'>

        <div 
        className={`text-[25px] mr-3 cursor-pointer px-2 ${isComplete ? 'text-gray-300' : 'text-gray-500'}`} onClick={() => toggle(id)}>< i class="ri-checkbox-circle-fill "></i></div>
            <p className='text-[20px] '>{text}</p>

        </div>

        <div className="flex text-[25px]  text-cyan-900 me-3 cursor-pointer hover:text-red-600 " onClick={()=>{deleteTodo(id)}}><i class="ri-delete-bin-fill"></i></div>

    </div>  
    
    
  )
}

export default Todoitems
