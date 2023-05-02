import React from 'react'
import { useContext } from 'react'
import { ContextCards } from '../contexts/ContextCards'
import Cart from './Cart'


function CartList() {

   const context = useContext(ContextCards)

   console.log(context.cardList[0]);
   
   return (
      <div className='row'>
         <h2>CARD 1 GET</h2>
         <div className="col-4">
         <Cart title={context.cardList[0].title} text={context.cardList[0].text} username={context.cardList[0].username} />
         </div>

         <h2>CARDS ALL</h2>

         {
            context.cardList.map(e=>{
               return(
                  <div key={e.id} className="col-4">
                     <Cart title={e.title} text={e.text} username={e.username} />
                  </div>
               )
            })
         }
         
      </div>
   )
}

export default CartList