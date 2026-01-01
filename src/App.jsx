import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}
