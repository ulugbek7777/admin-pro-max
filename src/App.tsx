import React from 'react';
import './App.css';
import {Button} from "antd";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Login from "./Components/Auth/Login";

const App: React.FC = () => {
  return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>

  );
}

export default App;
