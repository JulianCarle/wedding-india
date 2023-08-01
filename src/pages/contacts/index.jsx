import React from 'react';
import Contact from '../../components/contact';
import agash from '../../images/contacts/agash.png';
import alice from '../../images/contacts/alice.png';
import alida from '../../images/contacts/alida.png';
import jerome from '../../images/contacts/jerome.png';
import william from '../../images/contacts/williian.png';

import './styles.scss';

export const ContactsPage = () => {
  return (
    <div className="margin130">
      <h2 className="title-page">Contacts</h2>

      <p className="description-text">
        Personnes pouvant être contactées pour toutes demandes
        d&apos;informations
      </p>
      <Contact
        firstName="Jérome"
        image={jerome}
        phone="+336 95 45 59 67"
        ties="(Frère d'Aurélia)"
      />
      <div className="separator-line-one"></div>
      <Contact
        firstName="William"
        image={william}
        phone="+336 77 49 48 94"
        ties="(Frère d'Aurélia)"
      />
      <div className="separator-line-two"></div>

      <Contact
        firstName="Alice"
        image={alice}
        phone="+336 81 82 41 25"
        ties="(Maman d'Aurélia)"
      />
      <div className="separator-line-one"></div>
      <Contact
        firstName="Alida"
        image={alida}
        phone="+337 60 51 36 59"
        ties="(Tata d'Aurélia)"
      />
      <div className="separator-line-two"></div>
      <Contact
        firstName="Agash"
        image={agash}
        phone="07 78 24 45 41"
        ties="(Cousin d'Aurélia)"
      />
    </div>
  );
};

export default ContactsPage;
