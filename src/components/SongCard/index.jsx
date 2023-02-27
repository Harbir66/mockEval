import React from 'react';
import './SongCard.css';
import PropTypes from 'prop-types';
import heartGrey from '../../assets/heart-gray.svg';
import heartRed from '../../assets/heart-red.svg';
import makeRequest from '../../utils/makeRequest';
import { GET_LIKES, UPDATE_LIKES } from '../../constants/apiEndPoints';

function SongCard({ index, songDetails }) {
  const [liked, setLiked] = React.useState(false);
  const [likeCount, setLikeCount] = React.useState();

  React.useEffect(() => {
    makeRequest(GET_LIKES(songDetails.id), {}).then((data) => {
      setLikeCount(data.data.count);
      setLiked(data.data.like);
    });
  }, []);
  const icon = liked ? heartRed : heartGrey;
  const handleLike = () => {
    makeRequest(UPDATE_LIKES(songDetails.id), {
      data: {
        like: !liked,
      },
    }).then((data) => {
      setLikeCount(data.data.count);
      setLiked(data.data.like);
    });
  };
  const cardColor = index % 2 === 0 ? 'color-1' : 'color-2';
  const cardClass = `songCard ${cardColor}`;
  return (
    <div className={cardClass}>
      <img src={songDetails.imageUrl} alt="Song Art" />
      <div className="song-details">
        <div className="song-info">
          <div className="song-name">{songDetails.name}</div>
          <div className="song-artist">{songDetails.artist.name}</div>
        </div>
        <button className="like-button" type="button" onClick={handleLike}>
          <img src={icon} alt="like-icon" />
          <span className="song-likes">{likeCount}</span>
        </button>
      </div>
    </div>
  );
}

export default SongCard;

SongCard.propTypes = {
  index: PropTypes.number.isRequired,
  songDetails: PropTypes.shape({
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
  }).isRequired,
};
