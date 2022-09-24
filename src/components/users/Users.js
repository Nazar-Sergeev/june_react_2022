import {useEffect, useState} from "react";

import {userService} from "../../services";
import User from "../user/User";
import UserForm from "../userForm/UserForm";

export default function Users() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value.data))
    }, []);

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>

            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
}