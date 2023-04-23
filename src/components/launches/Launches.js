import React, {useEffect, useState} from 'react';
import Launch from "../launch/Launch";
/*=====
є API от SpaceX
https://api.spacexdata.com/v3/launches/
    потрібно вивести всі запуски кораблів окрім 2020 року
репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)*/
const Launches = () => {
    const [launch, setLaunch] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(result => result.json())
            .then(result=>setLaunch([...result]))
    },[]);
    let keyAtt = 1;
    return (
        <div className='postsWrap'>
            {launch.map(launch => (
                (launch.launch_year !== "2020") &&
                <Launch launch={launch} key={keyAtt++}/>
            ))}
        </div>
    )
};

export default Launches;