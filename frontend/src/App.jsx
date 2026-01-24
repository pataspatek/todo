import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import each view to use in routes
import HomeView from "./views/home/HomeView";
import TodosView from "./views/todos/TodosView";
import NotFoundView from "./views/notfound/NotFoundView";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/todos" element={<TodosView />} />
                <Route path="*" element={<NotFoundView />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;