import React from 'react';
import {carService} from "../../services/car.service";


function Car({car, setCarUpdate, setAllCars}) {
    const {id, brand, price, year} = car;
    const deleteCar = async (car) => {
        await carService.deleteById(car.id)
        setAllCars(prev => !prev)
    }
    return (
        <div className={'carItem'}>
            <div>Car ID: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button className={'carButton'} onClick={()=>setCarUpdate(car)}>Update</button>
            <button className={'carButton'} onClick={()=> deleteCar(car)}>Delete</button>
        </div>
    );
}

export default Car;