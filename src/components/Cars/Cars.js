import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";



function Cars(props) {
    let [cars,setCars] = useState([]);
    useEffect(()=>{
        carService.getAll().then(value => value.data).then(value => setCars(value))
    },[])
    /*console.log(cars)*/
    return (
        <div>
            <CarForm/>
            <div className={'carWrap'}>{cars.map(car => <Car key={car.id} car={car}/>)}</div>
        </div>
    );
}

export default Cars;