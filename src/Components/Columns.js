import React from 'react'
import { initialCardsPosition } from '../data'
import Card from './Card'
import DropZone from './DropZone'
const Columns = ({column,title,setCardDragged,setDroppedOnZone}) => {
  return (
    <div className='bg-gray-700 px-8'>
        <p className='text-white font-bold py-5 rounded-xl px-12'>{title}</p>
        <DropZone  setDroppedOnZone={(data)=>setDroppedOnZone(data)} data={{column:title,index:0}}/>
        {column?.map((col,index)=>(
            <>
           
            <Card  setCardDragged={(card)=>setCardDragged(card)} cardData={{...col,present:title}} />
            <DropZone  setDroppedOnZone={(data)=>setDroppedOnZone(data)} data={{column:title,index:index+1}}/>
            </>
        ))}
    </div>

  )
}

export default Columns