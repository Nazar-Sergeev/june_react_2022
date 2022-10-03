import {useForm} from "react-hook-form";

const DogForm = ({addDog}) => {
    const {register, handleSubmit,reset} = useForm();
    
    const submit = (data) => {
        addDog(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Add Dog: <input type="text" placeholder={'dog name'} {...register('dog')}/></label>
            <button>add dog</button>
        </form>
    );
};

export {DogForm};