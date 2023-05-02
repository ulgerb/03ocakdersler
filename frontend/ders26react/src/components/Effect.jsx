import React, { useEffect, useState } from 'react'

function Effect() {

   const [deger, setDeger] = useState(10)
   const [deger2, setDeger2] = useState(1)

   // butona bastığımızda değer 1 azalsın
   // değer 2 artsın

   const increase = ()=>{
      setDeger(deger-1)
   }


   
   const [x , setX] = useState(0)

   useEffect(()=>{
      console.log("değerler değişti !!!");
   })


   
  return (
    <div>

      <h4>Değer 1: {deger}</h4>
      <h4>Değer 2: {deger2}</h4>
      <button onClick={increase}>Arttır</button>
      <button onClick={()=>{setDeger2(deger2+1)}}>Deger 2</button>
      
    </div>
  )
}

export default Effect