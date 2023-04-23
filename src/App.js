import './App.css';
import Simpsons from "./components/simpsons/Simpsons";
import {simpsons} from "./components/arrays/arrays"

function App() {
  return (
    <>
      <Simpsons simpsons={simpsons}/>
    </>
  );
}

export default App;
