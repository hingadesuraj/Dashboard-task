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
      <div className=" h-dvh bg-slate-50" >
      <BrowserRouter>
        <div className="grid grid-cols-5 h-screen" >
            <div className=" border-r-2">
            <Navigation/>
            </div>
            <div className="col-span-4" >
            <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create" element={<CreateNews />} />
            <Route path="/allnews" element={<ManageNews />} />
            <Route path="/report" element={<PerformanceReportPage />} />
          </Routes>
            </div>
        </div>
        
       
         
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
