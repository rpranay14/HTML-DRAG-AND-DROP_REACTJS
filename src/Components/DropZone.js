import React, { useState } from 'react'

const DropZone = ({data,setDroppedOnZone}) => {
  const [showArea,setShowArea]=useState(false)
    const handleDrop=(e)=>{
      setShowArea(false)
        console.log(data,'drop');
        setDroppedOnZone(data)

    }
  return (
    <div onDragLeave={()=>setShowArea(false)} onDragEnter={()=>setShowArea(true)} onDragOver={(e)=>e.preventDefault()}  onDrop={(e)=>handleDrop(e)} className={`${showArea ?'py-8 opacity-100 bg-gray-500' :'py-0 opacity-0'} h-6 transition-[padding,opacity] border-gray-500 border-dashed border-2 rounded-xl  text-black`}></div>
  )
}

export default DropZone