import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import POS from "./pages/POS";
import Inventory from "./pages/Inventory";
import Sales from "./pages/Sales";
import Purchase from "./pages/Purchase";
import Customers from "./pages/Customers";
import Suppliers from "./pages/Suppliers";
import Employees from "./pages/Employees";
import Finance from "./pages/Finance";
import Reports from "./pages/Reports";
import Offers from "./pages/Offers";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";


function App() {
  return (
    <Routes>

      <Route path="/" element={<Dashboard />} />

      <Route path="/pos" element={<POS />} />

      <Route path="/inventory" element={<Inventory />} />

      <Route path="/sales" element={<Sales />} />

      <Route path="/purchase" element={<Purchase />} />

      <Route path="/customers" element={<Customers />} />

      <Route path="/suppliers" element={<Suppliers />} />

      <Route path="/employees" element={<Employees />} />

      <Route path="/finance" element={<Finance />} />

      <Route path="/reports" element={<Reports />} />

      <Route path="/offers" element={<Offers />} />

      <Route path="/notifications" element={<Notifications />} />

      <Route path="/settings" element={<Settings />} />

    </Routes>
  );
}

export default App;