import { useEffect, useState } from "react";
import { getNonStaffUsers } from "../../services/userServices.js";
import "./Customers.css";
import { User } from "../users/User.js";
import { Link } from "react-router-dom";

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((customerArray) => {
      setCustomers(customerArray);
    });
  }, []);
  return (
    <div className="customers">
      {customers.map((customerObj) => {
        console.log(customerObj);
        return (
          <Link key={customerObj.id} to={`/customers/${customerObj.id}`}>
            <User user={customerObj} />
          </Link>
        );
      })}
    </div>
  );
};
