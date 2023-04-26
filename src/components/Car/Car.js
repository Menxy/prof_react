import React from 'react';


function Car({car, setCarUpdate, setAllCars}) {
    const {id, brand, price, year} = car;

    return (
        <div className={'carItem'}>
            <div>Car ID: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button className={'carButton'} onClick={()=>setCarUpdate(car)}>Update</button>
            <button className={'carButton'} /*onClick={()=> deleteCar()}*/>Delete</button>
        </div>
    );
}

export default Car;