import { Container, Row, Col } from 'react-bootstrap';
import "../css/ArtistCard.css";
import ArtistCard from './ArtistCard'; // Component for individual artist cards

const ArtistContainer = (artists) => {
  const artistList = artists['artists'];
  return (
    <div>
      {artistList.map((a, index) => 
        <ArtistCard 
          name={a.name} 
          genre={a.genre} 
          key={index}
        />
      )}
    </div>
  );
};

export default ArtistContainer;
