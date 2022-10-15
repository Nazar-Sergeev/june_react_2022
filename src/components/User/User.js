import {useDispatch} from "react-redux";

import {userActions} from "../../redux/slices";

const User = ({user, user: {id, name, username, email}}) => {

    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>userName: {username}</div>
                <div>email: {email}</div>
                <button onClick={() => dispatch(userActions.getById({id}))}>Details</button>
                <button onClick={() => dispatch(userActions.deleteById(id))}>Delete</button>
                <button onClick={() => dispatch(userActions.setCurrentUser(user))}>Select</button>
            </div>
            <hr/>
        </div>
    );
};

export {User};