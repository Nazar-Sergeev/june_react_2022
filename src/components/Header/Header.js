import css from './Header.module.css'
import {useSelector} from "react-redux";

const Header = () => {

    const {currentUser} = useSelector(state => state.userReducer);
    const {currentPost} = useSelector(state => state.postReducer);

    return (
        <div className={css.Header}>
            {currentUser&&<h4>{currentUser.name}</h4>}
            {currentPost&&<h4>{currentPost.title}</h4>}
        </div>
    );
};

export {Header};