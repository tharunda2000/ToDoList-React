import React from 'react'

const Todoitems = ({text,id,isComplete,deleteTodo}) => {

  

  return (
    <div className="flex  items-center mt-3 ">

        <div className='flex flex-1 items-center gap-2'>

            <div className="text-[20px]  text-gray-500 mr-3 cursor-pointer " >< i class="ri-checkbox-circle-fill "></i></div>
            <p className='text-[20px] '>{text}</p>

        </div>

        <div className="flex text-[20px]  text-cyan-900 me-3 cursor-pointer hover:text-red-600 " onClick={()=>{deleteTodo(id)}}><i class="ri-delete-bin-fill"></i></div>

    </div>
    
    
  )
}

export default Todoitems
