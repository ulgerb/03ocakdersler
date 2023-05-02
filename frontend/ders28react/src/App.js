import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Header/Navbar";
import CardsPage from "./pages/CardsPage";
import { Context, cards_data } from "./contexts/Context";
import { useState } from "react";
import CardAddPage from "./pages/CardAddPage";



function App() {

  const [cards, setCards] = useState(cards_data)
  
  return (
    <div>
      <BrowserRouter>
        <Context.Provider value={{cards, setCards}}>
          <Navbar />

          <Routes>
            <Route path={'/'} Component={HomePage} />
            <Route path={'/hakkında'} Component={AboutPage} />
            <Route path={'/kartlar'} Component={CardsPage} />
            <Route path={'/kart-ekle'} Component={CardAddPage} />
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
