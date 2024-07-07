import { useState } from 'react';
import logo from './logo.svg';
import { initialCardsPosition } from './data'
import Columns from './Components/Columns';


function App() {
  const [columns,setColumns]=useState(initialCardsPosition);
  const [cardDragged,setCardDragged]=useState(null);
  const [droppedOnZone,setDroppedOnZone]=useState();
  const handleDrop=(data)=>{
    let newColumns=columns;
    console.log(newColumns,"new")
     let removedCol=newColumns[cardDragged.present].filter((card)=>card.id!==cardDragged.id);
     newColumns={...newColumns,[cardDragged.present]:removedCol};
     newColumns[data.column].splice(data.index, 0, cardDragged);
     setColumns(newColumns)


  }
  return (
   <div className='h-screen bg-gray-900 flex gap-24 pl-12 pt-12 pb-12'>

      <Columns setDroppedOnZone={(data)=>handleDrop(data)} setCardDragged={(card)=>setCardDragged(card)} column={columns.ideas} title='ideas'/>
      <Columns  setDroppedOnZone={(data)=>handleDrop(data)} setCardDragged={(card)=>setCardDragged(card)} column={columns.inProgress} title='inProgress'/>
      <Columns  setDroppedOnZone={(data)=>handleDrop(data)} setCardDragged={(card)=>setCardDragged(card)} column={columns.done} title='done'/>
 

   </div>
  );
}

export default App;
