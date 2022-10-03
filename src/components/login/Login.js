import {useForm} from "react-hook-form";
import {useNavigate} from "react-router";

import {authService} from "../../services";
import {useSearchParams} from "react-router-dom";

const Login = () => {
    const {register, handleSubmit} = useForm();

    const navigate = useNavigate();
    const [query,] = useSearchParams();

    const submit = async (user) => {
        try {
            const {data} = await authService.login(user);
            authService.setTokens(data)
            navigate('/cars')
        } catch (e) {
            console.log(e);
        }

    }

    return (
        <div>
            {query.has('expSession') && <h1>Session end!!!</h1>}
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>Login</button>
            </form>
        </div>
    );
};

export {Login};