import React from 'react';
import { Route, Routes } from 'react-router-dom';
import useWindowSize from './hooks/useWindowSize';
import ContactsPage from './pages/contacts';
import ConveniencesPage from './pages/conveniences';
import FormGuestsPage from './pages/formGuests/form-guests-page';
import FormTravelPage from './pages/formTravel/form-travel-page';
import { NotAccessible } from './pages/NotAccessible';
import NotFoundPage from './pages/notFound/notFound-page';
import ProgramPage from './pages/program';
import HomePage from './pages/home';

const Router = () => {
  const { screenWidth } = useWindowSize();

  return (
    <Routes>
      <Route
        path="/accueil"
        element={screenWidth < 600 ? <HomePage /> : <NotAccessible />}
      />
      <Route
        path="/contacts"
        element={screenWidth < 600 ? <ContactsPage /> : <NotAccessible />}
      />
      <Route
        path="/commodités"
        element={screenWidth < 600 ? <ConveniencesPage /> : <NotAccessible />}
      />
      <Route
        path="/programme"
        element={screenWidth < 600 ? <ProgramPage /> : <NotAccessible />}
      />
      <Route path="/guests-form" element={<FormGuestsPage />} />
      <Route path="/travel-form" element={<FormTravelPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
