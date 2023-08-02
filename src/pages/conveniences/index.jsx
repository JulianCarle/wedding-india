import React from 'react';
import Convenience from '../../components/convenience';
import change from '../../images/conveniences/change.png';
import home from '../../images/conveniences/home.jpg';
import hospital from '../../images/conveniences/hopital.png';
import MAEA from '../../images/conveniences/MAEA.png';
import mall from '../../images/conveniences/mall.png';
import nehruStreet from '../../images/conveniences/nehruStreet.png';
import pothys from '../../images/conveniences/pothys.png';

const ConveniencesPage = () => {
  return (
    <div className="margin130">
      <h2 className="title-page">Infos pratiques</h2>

      <p className="description-text">
        Informations et adresses utiles durant votre séjour à Pondicherry
      </p>
      <Convenience
        title="Informations sur la legislation indienne"
        linkLaw="https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/conseils-par-pays-destination/inde/#complements"
        image={MAEA}
      />
      <div className="separator-line-two"></div>

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
