import {useDispatch} from "react-redux";

import {userActions} from "../../redux";

const User = ({user, user:{id, name, email, username}}) => {

    const dispatch = useDispatch();
    return (
        <div>
            <div>Id:{id}</div>
            <div>Name:{name}</div>
            <div>UserName:{username}</div>
            <div>Email:{email}</div>
            <button onClick={() => dispatch(userActions.setCurrentUser(user))}>select</button>
            <button onClick={() => dispatch(userActions.getById({id}))}>detali</button>
            <button onClick={() => dispatch(userActions.deleteById(id))}>delete</button>
            <hr/>
        </div>
    );
};

export {User};