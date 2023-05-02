import { useState } from "react";
import { ContextCards, cards } from "./contexts/ContextCards";
import CartList from "./components/CartList";
import Deneme from "./components/Deneme";


function App() {

  const [cardList,setCardList ] = useState(cards)
  
  return (
    <ContextCards.Provider value={{cardList, setCardList}}>
      <CartList/>
      <Deneme/>
    </ContextCards.Provider>
  );
}

export default App;
