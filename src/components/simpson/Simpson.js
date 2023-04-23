import React from 'react';


const Simpson = ({simpson}) => {
    return (
        <div className='simpsonWrap'>
            <h3>{simpson.name} Simpson</h3>
            <div>{simpson.age} years old.</div>
            <img src={simpson.photo} alt='simpson' className='simpsonPhoto'/>
            <div className='simpsonInfo'>{simpson.info}</div>
        </div>
    );
};


export default Simpson;