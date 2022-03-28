import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Main from './pages/main/main.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
