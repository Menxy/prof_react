import React from 'react';

function Car({car}) {
    const {id, brand, price, year} = car;
    return (
        <div>
            <div>Car ID: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <div>------</div>
        </div>
    );
}

export default Car;