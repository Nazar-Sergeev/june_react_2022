import css from './Car.module.css'
import {carService} from "../../services";

export default function Car({car, car: {id, model, price, year}, setCars, setCarUpdate}) {

    const deleteCar = async () => {
        await carService.deleteById(id)
        setCars(cars => {
            let index = cars.findIndex(car => car.id === id);
            cars.splice(index, 1);
            return [...cars];
        });
    };

    // const updateCar = async () => {
    //  await
    // }

    return (
        <div className={css.Car}>
            <div>
                <div>id: {id}</div>
                <div>model: {model}</div>
                <div>price: {price}</div>
                <div>year: {year}</div>
            </div>
            <div className={css.btn}>
                <button onClick={() => setCarUpdate(car)}>update</button>
                <button onClick={() => deleteCar()}>delete</button>
            </div>
        </div>
    );
}