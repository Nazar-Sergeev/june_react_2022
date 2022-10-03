import {Dog} from "../dog/Dog";

const Dogs = ({dogs,deleteDog}) => {
    return (
        <div>
            {
                dogs.map(dog => <Dog key={dog.id} dog={dog} deleteDog={deleteDog}/>)
            }
        </div>
    );
};

export {Dogs};