import React from 'react';

const Launch = ({launch}) => {

    return (
    <div className='postWrap'>
        <div>Mission name - '{launch.mission_name}'</div>
        <div>Launch year - '{launch.launch_year}'</div>
        <img className='patch' src={launch.links.mission_patch_small} alt="patch"/>
    </div>)

};

export default Launch;