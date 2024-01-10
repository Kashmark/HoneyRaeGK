export const TicketFilterBar = ({ setShowEmergencyOnly, setSearchTerm }) => {
  return (
    <div className="filter-bar">
      <button
        className="filet-btn btn-primary"
        onClick={() => {
          setShowEmergencyOnly(true);
        }}
      >
        Emergency
      </button>
      <button
        className="filet-btn btn-info"
        onClick={() => {
          setShowEmergencyOnly(false);
        }}
      >
        Show All
      </button>
      <input
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        type="text"
        placeholder="Search Tickets"
        className="ticket-search"
      />
    </div>
  );
};
