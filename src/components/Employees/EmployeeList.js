import { getStaffUsers } from "../../services/userServices.js";
import "./Employee.css";
import { useState, useEffect } from "react";
import { User } from "../users/User.js";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getStaffUsers().then((employeeArray) => {
      setEmployees(employeeArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employeeObj) => {
        return (
          <Link key={employeeObj.id} to={`/employees/${employeeObj.id}`}>
            <User user={employeeObj} />;
          </Link>
        );
      })}
    </div>
  );
};
