
import './App.css';
import Cards from './components/Cards';
import ClassCom from './components/ClassCom';
import FunctionCom from './components/FunctionCom';

function App() {
  return (
    <div className='container mt-5' style={{display:"block"}}>
      {/* <FunctionCom/>
      <ClassCom/> */}
      
      <Cards/>
      
    </div>
  );
}

export default App;
