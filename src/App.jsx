import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { HOME_ROUTE, SYNC_ROUTE } from './constants/routes';
// import { SyncPage } from './pages';
import { Home, SyncPage } from './pages';

function App() {
  // return <SyncPage />;
  // return <Home />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={SYNC_ROUTE} element={<SyncPage />} />
        <Route path={HOME_ROUTE} element={<Home />} />
        {/* <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Error />} /> */}
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
