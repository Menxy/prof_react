import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";

function CarForm({setAllCars, carUpdate}) {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode:'onChange'});

    useEffect(()=>{
        if(carUpdate){
            setValue('brand', carUpdate.brand)
            setValue('price', carUpdate.price)
            setValue('year', carUpdate.year)
        }
    },[carUpdate])
    const save = async (car) => {
        const {data} = await carService.create(car)
        setAllCars(prev=>!prev)
        /*console.log(car)*/
        reset()
    }
    const update = async (car) => {

    }
    return (
        <form onSubmit={handleSubmit(carUpdate?update:save)} className={'carItem form'}>
            <input type="text" placeholder={'brand'} {...register('brand', {
                pattern: {
                    value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message: '1-20 літер'
                },
                required: {value:true,message:'Обов\'язково'}
            })}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price', {
                valueAsNumber: true,
                min: {value: 0, message: 'Більше 0'},
                max: {value: 1000000, message: 'До 1 млн'},
                required: {value:true,message:'Обов\'язково'}
            })}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year', {
                valueAsNumber: true,
                min: {value: 1990, message: 'Більше 1990'},
                max: {value: new Date().getFullYear(), message: 'До 2023'},
                required: {value:true,message:'Обов\'язково'}
            })}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button className={'carButton'} disabled={!isValid}>Save</button>
        </form>
    );
}

export default CarForm;