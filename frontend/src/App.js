import './App.css';
import {BrowserRouter} from "react-router-dom";
import RoutesContent from "./Components/RoutesContent/RoutesContent";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <RoutesContent/>
            </div>
        </BrowserRouter>
    );
}

export default App;
