import React from 'react';
import './TitleBar.css';
import PropTypes from 'prop-types';
import iconGrid from '../../assets/icon-grid.svg';
import iconGenre from '../../assets/icon-genre.svg';

function TitleBar({ toggle, handleToggle }) {
  const title = toggle ? 'genres' : 'all songs';
  const icon = toggle ? iconGrid : iconGenre;
  return (
    <div className="title-bar">
      <h1>{title}</h1>
      <button type="button" onClick={handleToggle}>
        <img src={icon} alt="Icon" />
      </button>
    </div>
  );
}

export default TitleBar;

TitleBar.propTypes = {
  toggle: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
