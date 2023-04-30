import React, {FC} from 'react';
import "./Header.css"
import {IUseState} from "../../types/useState.type";
import {PageEnum} from "../../constants/page.enum";
interface IProps {
    setChoice:IUseState<PageEnum>
}

const Header:FC<IProps> = ({setChoice}) => {
    return (
        <div className={'Header'}>
            <button onClick={()=>setChoice(PageEnum.USERS)} className={'pageButton'}>Users</button>
            <button onClick={()=>setChoice(PageEnum.COMMENTS)} className={'pageButton'}>Comments</button>
            <button onClick={()=>setChoice(PageEnum.CARS)} className={'pageButton'}>Cars</button>
        </div>
    );
};

export default Header;