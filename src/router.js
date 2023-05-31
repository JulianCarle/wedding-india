import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FormGuestsPage from './pages/formGuests/form-guests-page';
import NotFoundPage from './pages/notFound/notFound-page';
import FormTravelPage from './pages/formTravel/form-travel-page';

const Router = () => {
  return (
    <Routes>
      {/* <Route exact path="/home" element={<div>HOME</div>} /> */}
      <Route path="/guests-form" element={<FormGuestsPage />} />
      <Route path="/travel-form" element={<FormTravelPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
