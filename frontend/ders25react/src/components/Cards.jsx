import React, { useState } from 'react'
import Card from './Card'

function Cards() {

   const card_list = [
      {
         title:"Ürün 1",
         text : "Süper kullanışlı ürün",
         imgurl: "https://picsum.photos/id/33/720"
      },
      {
         title: "Ürün 2",
         text: "Süper yıpranmaz paslanmaz",
         imgurl: "https://picsum.photos/id/44/720"
      },
      {
         title: "Ürün 3",
         text: "Kullandıkça kullanasın gelir",
         imgurl: "https://picsum.photos/id/66/720"
      },
      {
         title: "Ürün 4",
         text: "Çıkın çıkın gelin",
         imgurl: "https://picsum.photos/id/77/720"
      },
      {
         title: "Ürün 5",
         text: "Vazgeçemezsiniz",
         imgurl: "https://picsum.photos/id/88/720"
      },
   ]

   const [cards, setCards] = useState(card_list)

   const changeCard = ()=>{
      setCards([
         {
            title: "Ürün 4",
            text: "Çıkın çıkın gelin",
            imgurl: "https://picsum.photos/id/122/720"
         },
         {
            title: "Ürün 2",
            text: "Süper yıpranmaz paslanmaz",
            imgurl: "https://picsum.photos/id/133/720"
         },
         {
            title: "Ürün 5",
            text: "Vazgeçemezsiniz",
            imgurl: "https://picsum.photos/id/144/720"
         },
         {
            title: "Ürün 1",
            text: "Süper kullanışlı ürün",
            imgurl: "https://picsum.photos/id/155/720"
         },
         {
            title: "Ürün 3",
            text: "Kullandıkça kullanasın gelir",
            imgurl: "https://picsum.photos/id/166/720"
         },
         
         
      ] )
   }
   
  return (
    <div className='row'>
      <h2>Static Cards</h2>
      <Card title={ cards[0].title } text = { cards[0].text } imgurl={ cards[0].imgurl }/>
      <Card title={ cards[1].title } text = { cards[1].text } imgurl={ cards[1].imgurl }/>
      <Card title={ cards[2].title } text = { cards[2].text } imgurl={ cards[2].imgurl }/>
      <Card title={ cards[3].title } text = { cards[3].text } imgurl={ cards[3].imgurl }/>
      <Card title={ cards[4].title } text = { cards[4].text } imgurl={ cards[4].imgurl }/>

      <h2>Dinamik Cards</h2>

      {
         cards.map((card,i) =>{
            return (
               <Card title={card.title} text={card.text} imgurl={card.imgurl} />
            )
         })
      }
      
      <button onClick={changeCard}>Cardları Değiştir</button>
      
    </div>
  )
}

export default Cards