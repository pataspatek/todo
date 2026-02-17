import { useEffect, useState } from "react";

function TodosView() {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            const response = await fetch("http://localhost:8000/todos/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            setTodos(data);
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, [])
    
    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <h3>
                            {todo.title}
                            <span>{todo.completed ? "✅" : "❌"}</span>
                        </h3>
                        <p>{todo.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodosView;