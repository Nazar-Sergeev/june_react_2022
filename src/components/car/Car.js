import {carService} from "../../services";

const Car = ({car:{id, model, price, year, photo},setCars}) => {

    const sendPhoto =async (e) => {
      const formData = new FormData;
      const [file] = e.target.files
        formData.append('photo', e.target.files);
        const {data} = await carService.addPhotoById(id, formData);
        setCars(cars => {
            const find = cars.find(car => car.id === id);
            Object.assign(find, {...data, photo: URL.createObjectURL(file)})
            return [...cars];
        })

    }

    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            {
                photo?
                    <img src={photo} alt={model}/>
                    :
                    <input type="file" onChange={sendPhoto}/>

            }
            <hr/>
        </div>
    );
};

export {Car};