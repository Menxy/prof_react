import './App.css';
import Simpsons from "./components/simpsons/Simpsons";
import {simpsons} from "./components/simpsonsArray/SimpsonsArray";


function App() {
  return (
    <>
      <Simpsons simpsons={simpsons}/>
    </>
  );
}

export default App;
