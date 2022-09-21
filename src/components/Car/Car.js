import css from './Car.module.css'

export default function Car({car}) {

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
                <button>Delete</button>
            </div>
        </div>
    );
}