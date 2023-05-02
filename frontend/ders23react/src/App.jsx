import logo from './logo.svg';
import './App.css';
import User from './components/User';
import UserClass from './components/UserClass';

function App(props) {
  return (
    <>
    
    <div className="App">
      <h2>Kullanıcılar</h2>
      <User username="berkay" password={1111} />
      <User username="buket" password="123123" />
      <User username="doğuş" />
      <User  password="123123" />

      <h2>Class Kullanıcılar</h2>
      <UserClass 
      username="Berkay" password="asdasd"
      />
      <UserClass 
      username="Rabia" password="asdasd"
      />
      <UserClass 
       password="asdasd"
      />
      <UserClass 
      username="Rabia"
      />
      
    </div>
    
    </>
  );
}

export default App;
