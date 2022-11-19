import {Routes , Route} from "react-router-dom"
import Calendrier from './composants/Calendrier';

function App() {
  return (
    <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" element={<Calendrier/>} />
            
            <Route path="*" element={<h1>Erreur 404</h1>} />

          </Routes>
        </div>
    </div>
  );
}

export default App;
