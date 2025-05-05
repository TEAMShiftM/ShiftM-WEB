import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShiftDetail from "./pages/ShiftDetail";
import ShiftUpdate from "./pages/ShiftUpdate";
import AdminShift from "./pages/AdminShift";
import AdminAfterCheckin from "./pages/AdminAfterCheckin";
import AdminCompanyCreate from "./pages/AdminCompanyCreate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/shift" element={<Home />} />
        <Route path="/shift/detail" element={<ShiftDetail />} />
        <Route path="/admin/shift/update" element={<ShiftUpdate />} />
        <Route path="/admin/shift" element={<AdminShift />} />
        <Route path="/admin/shift/after-checkin" element={<AdminAfterCheckin />} />
        <Route path="/admin/company/create" element={<AdminCompanyCreate />} />
      </Routes>
    </Router>
  );
}

export default App;
