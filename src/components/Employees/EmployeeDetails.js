import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEmployeeByUserId } from "../../services/EmployeeServices.js";
import "./Employee.css";

export const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});
  const { employeeId } = useParams();

  useEffect(() => {
    getEmployeeByUserId(employeeId).then((data) => {
      const employeeObj = data[0];
      if (employeeObj) {
        setEmployee(employeeObj);
      }
    });
  }, [employeeId]);

  //   // Check if customer or user is undefined before rendering
  //   if (!customer || !customer.user) {
  //     return <div>Loading...</div>; // or handle the loading state as you see fit
  //   }

  return (
    <section className="employee">
      <header className="employee-header">{employee.user?.fullName}</header>
      <div>
        <span className="customer-info">Email :</span>
        {employee.user?.email}
      </div>
      <div>
        <span className="customer-info">Specialty :</span>
        {employee.specialty}
      </div>
      <div>
        <span className="customer-info">Rate :</span>
        {employee.rate}
      </div>
      <footer className="employee-footer">
        Currently working on {employee.employeeTickets?.length} tickets.
      </footer>
    </section>
  );
};
