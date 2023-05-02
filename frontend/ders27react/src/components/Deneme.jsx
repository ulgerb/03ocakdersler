import React from 'react'
import { useContext } from 'react';
import { ContextCards } from '../contexts/ContextCards';

function Deneme() {

   const context = useContext(ContextCards)
   console.log(context);
   
  return (
    <div>

    </div>
  )
}

export default Deneme