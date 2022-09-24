import {Link, Route, Routes} from "react-router-dom";

import './App.css';
import {Albums, Comments, Home, Todos} from "./components";

function App() {

    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/todos'}>Todos</Link></li>
                <li><Link to={'/albums'}>Albums</Link></li>
                <li><Link to={'/comments'}>Comments</Link></li>
            </ul>

            <Routes>
                <Route index element={<Home/>}/>
                <Route path={'todos'} element={<Todos/>}>
                    <Route path={'todos/:id'}/>
                </Route>
                <Route path={'albums'} element={<Albums/>}/>
                <Route path={'comments'} element={<Comments/>}>
                    <Route path={'comments/:id'}/>
                    </Route>
            </Routes>
        </div>
    );
}

export default App;
