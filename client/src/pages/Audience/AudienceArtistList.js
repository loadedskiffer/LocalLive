import ArtistContainer from '../../components/ArtistContainer';

const artists = [
  { name: "Artist A", genre: "Rock" },
  { name: "Artist B", genre: "Jazz" },
  { name: "Artist C", genre: "Pop" },
];

const AudienceArtistList = () => {
  return (
    <div>
      <h1>Artist List</h1>
      <ArtistContainer artists={artists} />
    </div>
  );
};

export default AudienceArtistList;
