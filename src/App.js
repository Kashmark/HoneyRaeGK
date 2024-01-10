import "./App.css";
import { TicketList } from "./components/tickets/TicketList.js";
import { Routes, Route, Outlet } from "react-router-dom";
import { NavBar } from "./components/nav/NavBar.js";
import { CustomerList } from "./components/Customers/CustomerList.js";
import { EmployeeList } from "./components/Employees/EmployeeList.js";
import { Welcome } from "./components/Welcome/Welcome.js";
import { CustomerDetails } from "./components/Customers/CustomerDetails.js";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
        <Route path="employees" element={<EmployeeList />} />
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />{" "}
        </Route>
      </Route>
    </Routes>
  );
};
