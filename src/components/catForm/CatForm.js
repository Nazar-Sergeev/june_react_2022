import {useForm} from "react-hook-form";

const CatForm = ({addCat}) => {

    const {register, handleSubmit, reset} = useForm();

    const submit = (data) => {
        addCat(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Add Cat: <input type="text" placeholder={'cat name'} {...register('cat')}/></label>
            <button>add cat</button>
        </form>
    );
};

export {CatForm};