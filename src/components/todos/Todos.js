import {useEffect, useState} from "react";

import {todosService} from "../../services";

const Todos = () => {

    let [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll().then(({data}) => setTodos(data))
    },[])
    
    return (
        <div>
            {
                todos.map(todo => <div key={todo.id}>
                    <h4>id: {todo.id} - title: {todo.title}</h4>
                    <hr/>
                </div>)
            }
        </div>
    );
};

export {Todos};