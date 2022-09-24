import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";

import {carValidator} from "../../validators";
import {carService} from "../../services";

export default function CarForm({setCars}) {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });


        // useEffect(() => {
        //         setValue('model', 'Mercedes')
        //         setValue('price', 10000)
        //         setValue('year', 2013)
        //     },[]);

    const submit = async (car) => {
        const {data} = await carService.create(car);
        setCars(cars => [...cars, data])
        reset()
    }

    return (
        // <form onSubmit={handleSubmit(submit)}>
        //     <input type="text" placeholder={'model'} {...register('model',{required:true, minLength:{value:2, message:'min 2ch'}})}/>
        //     {errors.model && <span>{errors.model.message}</span>}
        //     <input type="text" placeholder={'price'} {...register('price',{valueAsNumber:true})}/>
        //     <input type="text" placeholder={'year'} {...register('year',{valueAsNumber:true})}/>
        //     <button disabled={!isValid}>save</button>
        // </form>
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            {errors.model && <span>{errors.model.message}</span>}
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>save</button>
        </form>
    );
}