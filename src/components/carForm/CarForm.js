import {useForm} from "react-hook-form";

const CarForm = () => {
    
    const {register, handleSubmit} = useForm();
    
    const submit = () => {

    }
    
    return (
        <form onSubmit={handleSubmit(submit)}>
            
        </form>
    );
};

export {CarForm};