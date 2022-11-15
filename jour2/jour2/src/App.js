import Event from "./composants/Event";
import Exo1 from "./composants/exo1";
import Menu from "./composants/menu";

function App() {
  return (
    <div className="App">

      <Menu />
      <main className=" container">
        <div className="row">
          <Exo1 />
          <Event />
        </div>
      </main>
    </div>
  );
}

export default App;
