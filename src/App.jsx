import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Header } from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import VideoUpload from "./components/VideoUpload";
import AnalyticsPage from "./components/Analytics";
import ReportPage from "./components/Report";
import SettingsPage from "./components/Setting";

export default function App() {
  return (
    <Router>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<VideoUpload />} />
          <Route path="/reports" element={<ReportPage/>} />
          <Route path="/analytics" element={<AnalyticsPage/>} />
          <Route path="/settings" element={<SettingsPage/>} />
          <Route path="*" element={<div className="p-4">404 Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}
