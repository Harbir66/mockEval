import React from 'react';
import './SyncBody.css';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../../constants/routes';

function SyncBody() {
  const navigate = useNavigate();
  const handleSync = () => {
    navigate(HOME_ROUTE);
  };
  return (
    <div className="sync-body">
      <div className="sad-face">:((</div>
      <div className="sync-line">seems a bit empty in here...</div>
      <button
        data-testid="sync-button"
        className="sync-button"
        type="button"
        onClick={handleSync}
      >
        <span>sync</span>
      </button>
    </div>
  );
}

export default SyncBody;
