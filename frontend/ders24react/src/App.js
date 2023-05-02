import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  const [deger, setDeger] = useState("Dünya Düzdür.")
  return (
    <div className="App">
      <Navbar logo="Neos" home="/Home/" about="/about/"/>
      
      <h2>Kartlar</h2> <hr />
      <Card title={ deger } stitle="Alt Başlık" text="Kesinlikle foğru bilgi"/>
      <Card title="Dünya Yuvarlak" stitle="Dünyamız döner" text="Kesinlikle doğru bilgi"/>
      <Card title="Gs - Fb" stitle="Galatasaray yardırıyor" text="16 - 0 olan maç sonucu fb ağır mağlup oldu" />
      <Card title="Gs - Fb"/>

    </div>
  );
}

export default App;
