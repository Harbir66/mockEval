import React from 'react';
import './SyncPage.css';
import { NavBar, SyncBody } from '../../components';

function SyncPage() {
  return (
    <div className="sync-page">
      <NavBar />
      <SyncBody />
    </div>
  );
}

export default SyncPage;
