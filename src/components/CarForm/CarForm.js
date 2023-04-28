import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {joiResolver} from "@hookform/resolvers/joi"
import {carValidator} from "../../validators/car.validator";

function CarForm({setAllCars, carUpdate, setCarUpdate}) {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'onChange',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carUpdate) {
            setValue('brand', carUpdate.brand, {shouldValidate: true})
            setValue('price', carUpdate.price, {shouldValidate: true})
            setValue('year', carUpdate.year, {shouldValidate: true})
        }
    }, [carUpdate])
    const save = async (car) => {
        await carService.create(car)
        setAllCars(prev => !prev)
        reset()

    }
    const update = async (car) => {
        await carService.updateById(carUpdate.id, car)
        setAllCars(prev => !prev)
        setCarUpdate(null)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carUpdate ? update : save)} className={'carItem form'}>
            <input type="text" placeholder={'brand'} {...register('brand',
                /*{
                pattern: {
                    value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message: '1-20 літер'
                },
                required: {value: true, message: 'Обов\'язково'}
            }*/
            )}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price'/*, {
                valueAsNumber: true,
                min: {value: 0, message: 'Більше 0'},
                max: {value: 1000000, message: 'До 1 млн'},
                required: {value: true, message: 'Обов\'язково'}
            }*/
            )}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year', {
                valueAsNumber: true,
                min: {value: 1990, message: 'Більше 1990'},
                max: {value: new Date().getFullYear(), message: 'До 2023'},
                required: {value: true, message: 'Обов\'язково'}
            })}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button className={'carButton'} disabled={!isValid}>{carUpdate ? 'Update' : 'Create'}</button>
        </form>
    );
}

export default CarForm;