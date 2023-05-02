import React, { useContext } from 'react'
import Card from './Card'
import { Context } from '../../contexts/Context'

function Cards() {

   const context = useContext(Context)

   const cardsDelete = (id)=>{
      console.log(id);
      context.setCards(
         context.cards.filter(card => card.id !== id)
      )
   }
   
  return (
    <div className='row'>
         {
            context.cards.map(card => {
               return(
                  <div key={card.id} className="col-4 my-2">
                     <Card id={card.id} cardsDelete={cardsDelete} title={card.title} text={card.text} />
                  </div>

               )

            })
         }
    </div>
  )
}

export default Cards