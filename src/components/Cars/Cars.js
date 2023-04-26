import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";



function Cars(props) {
    const [cars,setCars] = useState([]);
    const [allCars, setAllCars] = useState(null);
    const [carUpdate, setCarUpdate] = useState(null);
    useEffect(()=>{
        carService.getAll().then(value => value.data).then(value => setCars(value))
    },[allCars])
    /*console.log(cars)*/
    return (
        <div>
            <CarForm setAllCars={setAllCars} carUpdate={carUpdate}/>
            <div className={'carWrap'}>{cars.map(car => <Car key={car.id} car={car} setCarUpdate={setCarUpdate}/>)}</div>
        </div>
    );
}

export default Cars;