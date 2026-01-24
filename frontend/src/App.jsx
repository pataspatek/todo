import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/todos" element={<h1>Todos</h1>} />
                <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;