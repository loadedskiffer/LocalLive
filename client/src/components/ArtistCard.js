import "../css/ArtistCard.css";

const ArtistCard = ({ name, genre }) => {
  return (
    <div className="artist-card">
      <h3>{name}</h3>
      <p>Genre: {genre}</p>
    </div>
  );
};

export default ArtistCard;
