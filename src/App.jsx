import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Header } from "./components/Navbar";

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}
