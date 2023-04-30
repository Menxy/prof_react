import React, {FC} from 'react';
import {ICar} from "../interfaces/car.interface";

interface IProps {
    car:ICar
}
/*FC інтерфейс експортується з react*/
const Car:FC<IProps> = ({car}) => {
    const {id,brand,price,year} = car;
    const update = ():void => {
        console.log('update!')
    };
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={update}></button>
        </div>
    );
};

export default Car;