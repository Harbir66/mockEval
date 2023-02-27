import React from 'react';
import './SongsContainer.css';
import TitleBar from '../TitleBar';
import makeRequest from '../../utils/makeRequest';
import { GET_ALL_RECORDS } from '../../constants/apiEndPoints';
import AllSongs from '../AllSongs';
import GenreSongs from '../GenreSongs';

function SongsContainer() {
  const [toggle, setToggle] = React.useState(false);
  const [songs, setSongs] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    makeRequest(GET_ALL_RECORDS, {})
      .then((data) => {
        setSongs(data.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const message = error || 'Loading...';
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="main-container">
      <TitleBar toggle={toggle} handleToggle={handleToggle} />
      {!songs ? (
        <div className="content">{message}</div>
      ) : (
        <div className="songs">
          {toggle ? <GenreSongs songs={songs} /> : <AllSongs songs={songs} />}
        </div>
      )}
    </div>
  );
}

export default SongsContainer;
