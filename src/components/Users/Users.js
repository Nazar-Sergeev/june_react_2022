import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {User} from "../User/User";
import {userActions} from "../../redux/slices";

const Users = () => {

    const dispatch = useDispatch();

    const {users, loading, error, userDetails} = useSelector(state => state.userReducer);

        useEffect(() => {
                dispatch(userActions.getAll())
            },[]);
    return (
        <div>
            {loading&& <h1>Loading.......</h1>}
            {error&&<h3>ERROR</h3>}
            {userDetails&& <h3>{userDetails.email}</h3>}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};