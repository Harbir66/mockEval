import React from 'react';
import './Home.css';
import { NavBar, SongsContainer } from '../../components';

function Home() {
  return (
    <div className="home-page">
      <NavBar />
      <SongsContainer />
    </div>
  );
}

export default Home;
