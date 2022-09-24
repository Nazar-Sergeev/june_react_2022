import {useEffect, useState} from "react";

import {todosService} from "../../services";
import {Link} from "react-router-dom";

const Todos = () => {

    let [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll().then(({data}) => setTodos(data))
    },[])
    
    return (
        <div>
            {
                todos.map(todo => <div key={todo.id}>
                    <Link to={`${todo.id}`}><h4>id: {todo.id} - title: {todo.title}</h4></Link>
                    <hr/>
                </div>)
            }
        </div>
    );
};

export {Todos};