import css from './Car.module.css'
import {carService} from "../../services";

export default function Car({car,setCars}) {

    const deleteCar = async () => {
        await carService.deleteById(car.id);
        setCars(cars => {
            let index = cars.findIndex(value => value.id === car.id);
            cars.splice(index, 1)
            return [...cars]
        })
    };

    const updateCar = async () => {
      await carService.upDateById(car)
    }

    return (
        <div className={css.Car}>
            <div>
                <div>Id: {car.id}</div>
                <div>Model: {car.model}</div>
                <div>Price: {car.price}</div>
                <div>Year: {car.year}</div>
            </div>
            <div className={css.btn}>
                <button>Update</button>
                <button onClick={deleteCar}>Delete</button>
            </div>
        </div>
    );
}