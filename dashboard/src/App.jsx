import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import CreateNews from "./pages/CreateNews";
import ManageNews from "./pages/ManageNews";
import PerformanceReportPage from "./pages/PerformanceReportPage";

function App() {
  return (
    <>
     <BrowserRouter>
     <h1>hello</h1>
     <Routes>
       <Route path="/" element={<Dashboard />} />
       <Route path="/create" element={<CreateNews />} />
       <Route path="/allnews" element={<ManageNews />} />
       <Route path="/report" element={<PerformanceReportPage />} />
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
