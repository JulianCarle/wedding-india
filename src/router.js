import React from 'react';
import { Route, Routes } from 'react-router-dom';
import useWindowSize from './hooks/useWindowSize';
import ContactsPage from './pages/contacts';
import ConveniencesPage from './pages/conveniences';
import FormGuestsPage from './pages/formGuests/form-guests-page';
import FormTravelPage from './pages/formTravel/form-travel-page';
import HomePage from './pages/home';
import NotFoundPage from './pages/not-found';
import OurStory from './pages/our-story';
import RSVPPage from './pages/RSVP';
import SchedulePage from './pages/schedule';
import WarningScreenSize from './pages/warning-screen-size';

const Router = () => {
  const { screenWidth } = useWindowSize();

  return (
    <Routes>
      <Route
        path="/accueil"
        element={screenWidth < 600 ? <HomePage /> : <WarningScreenSize />}
      />
      <Route
        path="/our-story"
        element={screenWidth < 600 ? <OurStory /> : <WarningScreenSize />}
      />

      <Route
        path="/infos-pratiques"
        element={screenWidth < 600 ? <ConveniencesPage /> : <WarningScreenSize />}
      />
      <Route
        path="/programme"
        element={screenWidth < 600 ? <SchedulePage /> : <WarningScreenSize />}
      />
      <Route
        path="/RSVP"
        element={screenWidth < 600 ? <RSVPPage /> : <WarningScreenSize />}
      />
      <Route
        path="/contacts"
        element={screenWidth < 600 ? <ContactsPage /> : <WarningScreenSize />}
      />
      <Route path="/guests-form" element={<FormGuestsPage />} />
      <Route path="/travel-form" element={<FormTravelPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
