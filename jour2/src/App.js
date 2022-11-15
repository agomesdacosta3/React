import Exo1 from "./composants/exo1.jsx";
import Menu from "./composants/menu.jsx";
import Event from "./composants/Event";
import Exo2 from "./composants/exo2.jsx";
import State from "./composants/state.jsx";
import State2 from "./composants/state2.jsx";
import Exo3 from "./composants/exo3.jsx";
import Articles from "./composants/Articles.jsx";
import Etudiants from "./composants/Etudiants.jsx";
import StateBase from "./composants/StateBase.jsx";
import StateReduce from "./composants/StateReduce.jsx";
import Exo5 from "./composants/exo5.jsx";
import Effect1 from "./composants/Effect1.jsx";
import Effect2 from "./composants/Effect2;jsx";

function App() {
  return (
    <div className="App">
        <Menu />
        <main className="container">
          <div className="row">
            <Exo1 />
            <Event />
            <Exo2 />
            <State />
            <State2 />
            <Exo3 />
            <Articles />
            <Etudiants />
            <StateBase />
            <StateReduce />
            <Exo5 />
            <Effect1 />
            {/* <Effect2 /> */}
            <Exo6 />

          </div>
        </main> 
        
    </div>
  );
}

export default App;