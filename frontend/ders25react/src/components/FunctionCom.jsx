import React, { useState } from 'react'

function FunctionCom() {

   var a = Math.floor(Math.random() *5)
   console.log(a);
   
   const [ count, setCount ] = useState(0) // parantezin içine default değer gelir
   const [color, setColor] = useState(0)

   const color_list = ["red","lightblue", "gray","purple","green" ]
   
   const increase = ()=>{
      setCount(count+10)
      setColor(a)
   }

   const decrease = ()=>{
      setCount(count-5)
   }
   
   const changeColor = ()=>{

      if(color < 4){
         setColor(color+1)
      }else{
         setColor(0)
      }
      // color > 3 ? setColor(0) : setColor(color+1)
   }
   
  return (
      <div style={{background:color_list[color], width:"50%", height:"90vh", border:"2px solid black", padding:"30px"}}>
         <h2>Function Component</h2>
         <h3>Değer: {count}</h3>

         <button onClick={increase}>Arttır</button>
         <button onClick={decrease}>Azalt</button>
         <button onClick={changeColor}>Rengi Değiştir</button>
         
      </div>
  )
}

export default FunctionCom;