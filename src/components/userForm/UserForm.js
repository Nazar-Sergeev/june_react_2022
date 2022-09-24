import {useForm} from "react-hook-form";

import {userService} from "../../services";

export default function UserForm({setUsers}) {

    let {register, handleSubmit, reset} = useForm();

    const submit = async (user) => {
        let {data} = await userService.create(user);
        setUsers(users => [...users, data]);
        reset();
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <button>create user</button>
        </form>
    );
}