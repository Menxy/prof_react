import React, {useState} from 'react';
import {PageEnum} from "./constants/page.enum";
import UserPage from "./pages/UserPage";
import CarPage from "./pages/CarPage";
import CommentPage from "./pages/CommentPage";
import Header from "./components/Header/Header";
import "./App.css"


const App = () => {
    const [choice, setChoice] = useState<PageEnum>(PageEnum.USERS);
  return (
      <div className={'canvas'}>
          <Header setChoice={setChoice}/>
          {choice === PageEnum.USERS && <UserPage/>}
          {choice === PageEnum.COMMENTS && <CommentPage/>}
          {choice === PageEnum.CARS && <CarPage/>}
      </div>
  );
}
export default App;
