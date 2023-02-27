import React from 'react';
import './GenreSongs.css';
import PropTypes from 'prop-types';
import getAllGenres from '../../utils/common';
import GenreCard from '../GenreCard';
import AllSongs from '../AllSongs';

function GenreSongs({ songs }) {
  const genres = getAllGenres(songs);
  return (
    <div className="genre-songs">
      {genres.map((genre) => {
        return (
          <div key={Math.random()}>
            <GenreCard genre={genre.name} />
            <AllSongs
              songs={songs.filter((song) => song.genre.name === genre.name)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default GenreSongs;

GenreSongs.propTypes = {
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
