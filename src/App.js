import './App.css';
import Characters from "./components/characters/Characters";
import {rickAndMorty} from "./components/arrays/arrays";
import Simpsons from "./components/simpsons/Simpsons";
import {simpsons} from "./components/arrays/arrays"

function App() {
  return (
    <>
      {/*1. Описати всю сім'ю Сімпсонів (5 персонажів)*/}
      <Simpsons simpsons={simpsons}/>
      {/*2. Створити компонент, що описує персонажа (властивості id,name,status,species,gender,image) з цього апі
        https://rickandmortyapi.com/
        https://rickandmortyapi.com/api/character
        Створити 6 персонажів*/}
        <Characters list={rickAndMorty}/>
    </>
  );
}

export default App;
