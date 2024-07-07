import React from 'react'

const DropZone = ({data,setDroppedOnZone}) => {
    const handleDrop=(e)=>{
        console.log(data,'drop');
        setDroppedOnZone(data)

    }
  return (
    <div onDragOver={(e)=>e.preventDefault()}  onDrop={(e)=>handleDrop(e)} className='h-12 bg-white text-black'>DropZone</div>
  )
}

export default DropZone