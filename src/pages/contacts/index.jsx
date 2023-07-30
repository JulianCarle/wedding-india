import React from 'react';
import Contact from '../../components/contact';
import Alida from '../../images/contacts/alida.png';
import William from '../../images/contacts/williian.png';
import './styles.scss';

export const ContactsPage = () => {
  return (
    <div className="margin130">
      <h2 className="title-page">Contacts</h2>

      <p className='description-text'>
        Personnes pouvant être contactées pour toutes demandes
        d&apos;informations
      </p>
      <Contact
        firstName="Jérome"
        // image={}
        phone="06.95.45.59.67"
        ties="(Frère d'Aurélia)"
      />
      <div className="separator-line-one"></div>
      <Contact
        firstName="William"
        image={William}
        phone="06.77.49.48.94"
        ties="(Frère d'Aurélia)"
      />
      <div className="separator-line-two"></div>
      <Contact
        firstName="Alida"
        image={Alida}
        phone="07.60.51.36.59"
        ties="(tante d'Aurélia)"
      />
      <div className="separator-line-one"></div>
      <Contact
        firstName="Agash"
        phone="07.78.24.45.41"
        ties="(cousin d'Aurélia)"
      />
    </div>
  );
};

export default ContactsPage;
