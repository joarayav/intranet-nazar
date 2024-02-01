import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBAr from "./componente";
import App from "./App";
import './test.css';


function App() {
    return <div className="">

        <Router>
            <NavBAr />
            <Routes>
                <Route className="cabecera-button-crear" path="/App" element={<App/>}/>
            </Routes>
        </Router>
    </div>
}

export default App;