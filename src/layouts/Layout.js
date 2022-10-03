import {Outlet} from "react-router";

import {Header} from "../components";

const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {Layout};