import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateNews from "./pages/CreateNews";
import ManageNews from "./pages/ManageNews";
import PerformanceReportPage from "./pages/PerformanceReportPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <div className=" h-dvh bg-slate-100" >
        <BrowserRouter>
        <Navigation/>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create" element={<CreateNews />} />
            <Route path="/allnews" element={<ManageNews />} />
            <Route path="/report" element={<PerformanceReportPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
