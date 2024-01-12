import { Route, Outlet, Routes } from "react-router-dom";
import { NavBar } from "../components/nav/EmployeeNav.js";
import { Welcome } from "../components/Welcome/Welcome.js";
import { EmployeeDetails } from "../components/Employees/EmployeeDetails.js";
import { EmployeeList } from "../components/Employees/EmployeeList.js";
import { TicketList } from "../components/tickets/TicketList.js";
import { CustomerList } from "../components/Customers/CustomerList.js";
import { CustomerDetails } from "../components/Customers/CustomerDetails.js";
import { useState, useEffect } from "react";
import { EmployeeForm } from "../components/forms/EmployeeForm.js";
import { EmployeeViews } from "./EmployeeViews.js";
import { CustomerViews } from "./CustomerViews.js";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObject = JSON.parse(localHoneyUser);

    setCurrentUser(honeyUserObject);
  }, []);

  return currentUser.isStaff ? (
    <EmployeeViews currentUser={currentUser} />
  ) : (
    <CustomerViews currentUser={currentUser} />
  );
};
