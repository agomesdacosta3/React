import Exo1 from "./composants/exo1.jsx";
import Menu from "./composants/menu.jsx";
import Event from "./composants/Event";
import Exo2 from "./composants/exo2.jsx";
import State from "./composants/state.jsx";
import State2 from "./composants/state2.jsx";
import Exo3 from "./composants/exo3.jsx";
import Articles from "./composants/Articles.jsx";

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
          </div>
        </main> 
        
    </div>
  );
}

export default App;