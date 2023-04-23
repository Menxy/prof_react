import React from 'react';
import Simpson from "../simpson/Simpson";


const Simpsons = ({simpsons}) => {
    let counter = 0;
    return (
        <div className='simpsonsWrap'>
            {simpsons.map(
                simpson => (
                    <Simpson simpson={simpson} key={++counter}/>
                )
            )}
        </div>
    );
};


export default Simpsons;


