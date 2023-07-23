import React from 'react';
import Convenience from '../../components/convenience';
import change from '../../images/conveniences/change.png';
import hospital from '../../images/conveniences/hopital.png';
import nehruStreet from '../../images/conveniences/nehruStreet.png';
import mall from '../../images/conveniences/mall.png';
import pothys from '../../images/conveniences/pothys.png';
import home from '../../images/conveniences/home.jpg';

const ConveniencesPage = () => {
  return (
    <div>
      <h2 className="title-page">
        Adresses utiles durant votre séjour à Pondicherry
        {/* ADRESSES UTILES DURANT VOTRE SÉJOUR À PONDICHERRY */}
      </h2>
      <Convenience
        title="Notre adresse"
        adresse="37, Tippu Sahib Street, MG Road Area, Puducherry, 605001, Inde"
        link="https://goo.gl/maps/QryHgxsUcTERxMys9"
        image={home}

      />
      <div className="separator-line-one"></div>
      <Convenience
        title="New Medical Centre - Multispeciality Hospital In Pondicherry"
        adresse="470, Mahatma Gandhi Rd, Chinnakadai, MG Road Area, Puducherry, 605001, Inde"
        link="https://goo.gl/maps/mdnPAz6J7NJM1KsM8"
        image={hospital}
      />
      <div className="separator-line-two"></div>
      <Convenience
        title="Bureau de change: Muthu Forex p Ltd"
        adresse="161, Mission St, Heritage Town, Puducherry, 605001, Inde"
        link="https://goo.gl/maps/fF5YojcHgqqpQTpW9"
        image={change}
      />
      <div className="separator-line-one"></div>
      <Convenience
        title="Shopping : zone principale"
        adresse="Nehru Street"
        link="https://goo.gl/maps/Kbs5pRd3cCJ6pxsc6"
        image={nehruStreet}
      />
      <div className="separator-line-two"></div>
      <Convenience
        title="Shopping : Pothys (Grand supermarché à étages)"
        adresse="400, Anna Salai, near Ram International Hotel, Govindhasalai, Subbarayapillai Chathiram, Puducherry, 605001, Inde"
        link="https://goo.gl/maps/xRQ3qubKZG4zxsLX9"
        image={pothys}
      />
      <div className="separator-line-one"></div>

      <Convenience
        title="Providence Mall (Centre commercial type occidental / cinéma / McDonalds etc...)"
        adresse="Cuddalore Road, Ambedkar Nagar, Orleanpet, Puducherry, 605001, Inde"
        link="https://goo.gl/maps/UuVMXpinjKA3DhgP6"
        image={mall}
      />
      <div className="separator-line-two"></div>
    </div>
  );
};

export default ConveniencesPage;
