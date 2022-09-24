import {useEffect, useState} from "react";

import {carService} from "../../services";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";

export default function Cars() {

    let [cars, setCars] = useState([]);
    let [carUpdate, setCarUpdate] = useState(null);

    useEffect(() => {
        carService.getAll().then(value => setCars(value.data));
    }, []);

    return (
        <div>
            <CarForm setCars={setCars} carUpdate={carUpdate} setCarUpdate={setCarUpdate}/>
            <hr/>
            {
                cars.map(car => <Car key={car.id} car={car} setCars={setCars} setCarUpdate={setCarUpdate}/>)
            }
        </div>
    );
}