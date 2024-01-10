import { useState, useEffect } from "react";
import { getAllTickets } from "../../services/ticketService.js";
import "./Ticket.css";
import { Ticket } from "./Ticket.js";
import { TicketFilterBar } from "./TicketFilterBar.js";

export const TicketList = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray);
      console.log("tickets set");
    });
  }, []);

  useEffect(() => {
    const foundTickets = allTickets.filter((ticket) => {
      return ticket.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    setFilteredTickets(foundTickets);
  }, [searchTerm, allTickets]);

  useEffect(() => {
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter(
        (ticket) => ticket.emergency === true
      );
      setFilteredTickets(emergencyTickets);
    } else {
      setFilteredTickets(allTickets);
    }
  }, [showEmergencyOnly, allTickets]);

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <TicketFilterBar
        setShowEmergencyOnly={setShowEmergencyOnly}
        setSearchTerm={setSearchTerm}
      />
      <article className="tickets">
        {filteredTickets.map((ticketObj) => {
          return <Ticket ticket={ticketObj} key={ticketObj.id} />;
        })}
      </article>
    </div>
  );
};
