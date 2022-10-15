import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userActions} from "../../redux";
import {User} from "../User/User";

const Users = () => {

    const dispatch = useDispatch();
    const {users, error, loading, userFromApi} = useSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(userActions.getAll())
        // userService.getAll().then(({data}) => dispatch(userActions.getAll(data)))
    }, []);

    return (
        <div>
            {loading && <h1>Loading...........</h1>}
            {error&&JSON.stringify(error) }
            {userFromApi&& <h1>{userFromApi.email}</h1>}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};