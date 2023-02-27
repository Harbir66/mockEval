import React from 'react';
import './AllSongs.css';
import PropTypes from 'prop-types';
import SongCard from '../SongCard';

function AllSongs({ songs }) {
  return (
    <div className="all-songs">
      {songs.map((song, index) => (
        <SongCard key={Math.random()} index={index} songDetails={song} />
      ))}
    </div>
  );
}

export default AllSongs;

AllSongs.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      artist: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
      genre: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};
