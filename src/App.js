import {Navigate, Route, Routes} from "react-router";

import './App.css';
import {Layout} from "./layouts";
import {LoginPage, RegisterPage} from "./pages";
import {CarsPage} from "./pages/carsPage/CarsPage";

function App() {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'/register'}/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/register'} element={<RegisterPage/>}/>
                <Route path={'/cars'} element={<CarsPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
