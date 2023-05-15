import React from 'react';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={()=>navigate()}>Todos</button>
            <button onClick={()=>navigate()}>Albums</button>
            <button onClick={()=>navigate()}>Comments</button>
        </div>
    );
};

export {Header};