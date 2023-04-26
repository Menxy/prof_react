import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import Car from "../Car/Car";



function Cars(props) {
    let [cars,setCars] = useState([]);
    useEffect(()=>{
        carService.getAll().then(value => value.data).then(value => setCars(value))
    },[])
    /*console.log(cars)*/
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
}

export default Cars;