import React,{} from "react";
import "./App.css";

import Home from "./components/Home"
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
function App() {
return (
<div className="App">
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />}>

            </Route>
        </Routes>
    </Router>
</div>
);
}

export default App;
