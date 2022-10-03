import {Cat} from "../cat/Cat";

const Cats = ({cats, deleteCat}) => {
    return (
        <div>
            {
                cats.map(cat => <Cat key={cat.id} cat={cat} deleteCat={deleteCat}/>)
            }
        </div>
    );
};

export {Cats};