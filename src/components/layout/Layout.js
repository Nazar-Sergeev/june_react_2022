import {useReducer} from "react";

import {CatForm, Cats, DogForm, Dogs} from "../index";
import css from './layout.module.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCat':
            return {...state, cats: [...state.cats, {name: action.payload, id: Date.now()}]};
        case 'deleteCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload)};
        case 'addDog':
            return {...state, dogs: [...state.dogs, {name: action.payload, id: Date.now()}]};
        case 'deleteDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload)};
    }

    return state;

};


const Layout = () => {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    const addCat = (data) => {
        dispatch({type: 'addCat', payload: data.cat});
    };

    const addDog = (data) => {
        dispatch({type: 'addDog', payload: data.dog});
    };

    const deleteDog = (id) => {
        dispatch({type: 'deleteDog', payload: id});

    };

    const deleteCat = (id) => {
        dispatch({type: 'deleteCat', payload: id});

    };

    return (

        <div>
            <div className={css.Form}>
                <CatForm addCat={addCat}/>
                <DogForm addDog={addDog}/>
            </div>
            <hr/>
            <div className={css.Form}>
                <Cats cats={state.cats} deleteCat={deleteCat}/>
                <Dogs dogs={state.dogs} deleteDog={deleteDog}/>
            </div>

        </div>
    );
};

export {Layout};