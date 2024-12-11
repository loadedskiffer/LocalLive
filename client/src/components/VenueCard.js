import "../css/VenueCard.css";

const VenueCard = ({ name, location }) => {
  return (
    <div className="venue-card">
      <h3>{name}</h3>
      <p>{location}</p>
    </div>
  );
};

export default VenueCard;
