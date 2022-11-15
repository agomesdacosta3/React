import logo from './logo.svg';
import './App.css';
import {Premier} from "./composants/Premier"
import {Deuxieme} from "./composants/Deuxieme" 
import {BoucleCondition} from "./composants/BoucleCondition" 

function App() {
  return (
    <div className="App">
      <Premier />
      <Deuxieme />
      <BoucleCondition />
    </div>
  );
}

export default App;
