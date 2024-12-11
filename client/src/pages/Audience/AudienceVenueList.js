import VenueContainer from '../../components/VenueContainer';

const venues = [
  { name: "Venue A", location: "City A" },
  { name: "Venue B", location: "City B" },
  { name: "Venue C", location: "City C" },
];

const VenueList = () => {
  return (
    <div>
      <h1>Venue List</h1>
      <VenueContainer venues={venues} />
    </div>
  );
};

export default VenueList;
