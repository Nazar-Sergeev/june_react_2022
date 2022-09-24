import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";
import {useEffect} from "react";

export default function CarForm({setCars, carUpdate, setCarUpdate}) {

    let {register, reset, handleSubmit, formState: {isValid, errors}, setValue} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    });


    const submit = async (car) => {
        if (carUpdate) {
            let {data} = await carService.updateCar(carUpdate.id, car);
            setCars(cars => {
                let finedCar = cars.find(value => value.id === carUpdate.id);
                Object.assign(finedCar, data);
                setCarUpdate(null);
                return [...cars]
            });
        } else {
            let {data} = await carService.create(car);
            setCars(cars => [...cars, data]);
        }

        reset();
    };
    useEffect(() => {
        if (carUpdate) {
            setValue('model', carUpdate.model, {shouldValidate: true});
            setValue('price', carUpdate.price, {shouldValidate: true})
            setValue('year', carUpdate.year, {shouldValidate: true})
        }
    }, [carUpdate, setValue]);

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')} />
                {errors.model && <span>{errors.model.message}</span>}
                <input type="text" placeholder={'price'} {...register('price')}/>
                {errors.price && <span>{errors.price.message}</span>}
                <input type="text" placeholder={'year'} {...register('year')}/>
                {errors.year && <span>{errors.year.message}</span>}
                <button disabled={!isValid}>{carUpdate ? 'update' : 'save'}</button>
            </form>

        </div>
    );
}