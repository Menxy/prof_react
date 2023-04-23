import React from 'react';

const Character = ({char}) => {
    return (
        <div className='charWrap'>
            <h4>Name: {char.name}</h4>
            <div>Status: {char.status}</div>
            <div>Species: {char.species}</div>
            <div>Gender: {char.gender}</div>
            <img src={char.image} alt="api" className={char.name}/>
        </div>
    );
};


export default Character;