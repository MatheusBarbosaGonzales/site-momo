import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PaginaRomantica from "./pages/PaginaRomantica";
import Gatuxa from "./pages/Gatuxa";

const App = () => {
    return (
        <BrowserRouter basename="/site-momo">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/EuTeAmo" element={<PaginaRomantica />} />
                <Route path="/gatuxa" element={<Gatuxa />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;