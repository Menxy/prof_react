import React from 'react';
import {useNavigate} from "react-router-dom";
import css from './Header.module.css'
const Header = () => {
    const navigate = useNavigate();
    return (
        <div className={css.Header}>
            <button className={css.HeaderButton} onClick={()=>navigate('todos')}>Todos</button>
            <button className={css.HeaderButton} onClick={()=>navigate('albums')}>Albums</button>
            <button className={css.HeaderButton} onClick={()=>navigate('comments')}>Comments</button>
        </div>
    );
};

export {Header};