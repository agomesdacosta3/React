import Event from "./composants/Event";
import Exo1 from "./composants/exo1";
import Exo2 from "./composants/exo2";
import Menu from "./composants/menu";
import State from "./composants/state";

function App() {
  return (
    <div className="App">

      <Menu />
      <main className=" container">
        <div className="row">
          <Exo1 />
          <Event />
          <Exo2 />
          <State />
        </div>
      </main>
    </div>
  );
}

export default App;
