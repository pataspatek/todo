import { useEffect, useState } from "react";

function TodosView() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

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


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8000/todos/add/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Success")
            } else {
                console.warn("Failure")
            }

            setTitle("");
            setDescription("");

        } catch (error) {
            console.error("Error creating todo:", error);
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

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"    
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Add Todo</button>
            </form>

        </div>
    );
}

export default TodosView;