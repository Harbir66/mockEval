import React from 'react';
import './GenreCard.css';
import PropTypes from 'prop-types';
import bollywood from '../../assets/genre-bollywood.png';
import country from '../../assets/genre-country.png';
import pop from '../../assets/genre-pop.png';
import rock from '../../assets/genre-rock.png';

function GenreCard({ genre }) {
  let genreIcon = null;
  switch (genre) {
    case 'Bollywood': {
      genreIcon = bollywood;
      break;
    }
    case 'Country': {
      genreIcon = country;
      break;
    }
    case 'Pop': {
      genreIcon = pop;
      break;
    }
    default: {
      genreIcon = rock;
    }
  }

  return (
    <div className="genre-card">
      <img src={genreIcon} alt="Genre-icon" />
      <span className="genre-title">{genre}</span>
    </div>
  );
}

export default GenreCard;

GenreCard.propTypes = {
  genre: PropTypes.string.isRequired,
};
