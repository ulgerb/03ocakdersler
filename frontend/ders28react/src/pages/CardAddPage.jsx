import React, { useContext } from 'react'
import CardAdd from '../components/Cards/CardAdd'
import { Context } from '../contexts/Context'

function CardAddPage() {

   const context = useContext(Context)
   
   const cardAdd = (e)=>{
      e.preventDefault()
      console.log(context.cards.length === 0);
      const card = {
         id: context.cards.length !== 0 ? context.cards[context.cards.length - 1].id + 1 : 1,
         title: e.target.title.value,
         text: e.target.text.value,
      }
      context.setCards(
         [...context.cards, card]
      )
      
   }
   
  return (
    <div>
      <CardAdd cardAdd={cardAdd} />
    </div>
  )
}

export default CardAddPage