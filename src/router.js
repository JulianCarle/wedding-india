import React from 'react';
import { Route, Routes } from 'react-router-dom';
import useWindowSize from './hooks/useWindowSize';
import ContactsPage from './pages/contacts';
import ConveniencesPage from './pages/conveniences';
import FormGuestsPage from './pages/formGuests/form-guests-page';
import FormTravelPage from './pages/formTravel/form-travel-page';
import HomePage from './pages/home';
import { NotAccessible } from './pages/NotAccessible';
import NotFoundPage from './pages/notFound/notFound-page';
import RSVPPage from './pages/RSVP';
import SchedulePage from './pages/schedule';
import OurStory from './pages/our-story';

const Router = () => {
  const { screenWidth } = useWindowSize();

  return (
    <Routes>
      <Route
        path="/accueil"
        element={screenWidth < 600 ? <HomePage /> : <NotAccessible />}
      />
      <Route
        path="/our-story"
        element={screenWidth < 600 ? <OurStory /> : <NotAccessible />}
      />

      <Route
        path="/commodités"
        element={screenWidth < 600 ? <ConveniencesPage /> : <NotAccessible />}
      />
      <Route
        path="/programme"
        element={screenWidth < 600 ? <SchedulePage /> : <NotAccessible />}
      />
      <Route
        path="/RSVP"
        element={screenWidth < 600 ? <RSVPPage /> : <NotAccessible />}
      />
      <Route
        path="/contacts"
        element={screenWidth < 600 ? <ContactsPage /> : <NotAccessible />}
      />
      <Route path="/guests-form" element={<FormGuestsPage />} />
      <Route path="/travel-form" element={<FormTravelPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
