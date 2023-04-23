import React from 'react';
import Character from "../character/Character";


const Characters = ({list}) => {
    return (
        <div className='charsWrap'>
            {list.map(
                char => (
                    <Character char={char} key={char.id}/>
                    )
                )
            }
        </div>
    );
};


export default Characters;