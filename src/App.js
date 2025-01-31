import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Login from "./components/Login";
import "./styles/App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null); // ✅ Ensure this state exists

  return (
    <Router>
      {isAuthenticated ? (
        <div className="app-container">
          <Sidebar onSelectCategory={setSelectedCategory} /> {/* ✅ Pass function */}
          <MainContent category={selectedCategory} setCategory={setSelectedCategory} />
        </div>
      ) : (
        <Routes>
          <Route path="*" element={<Login onLogin={setIsAuthenticated} />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
