import {useNavigate} from "react-router";

import css from './Header.module.css';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className={css.Header}>
            <div className={css.btn}>
                <button onClick={() => navigate('/login')}>Login</button>
                <button onClick={() => navigate('/register')}>Register</button>
            </div>
        </div>
    );
};

export {Header};