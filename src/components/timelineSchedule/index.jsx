import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import './styles.scss';

const TimelineSchedule = () => {
  return (
    <div className="container-timeline">
      <Timeline lineColor={'#ddd'}>
        <TimelineItem
          key="001"
          dateText="18/08/2023 – Soirée"
          dateInnerStyle={{
            background: '#ff8902',
            color: '#fff',
            fontSize: 16
          }}
          style={{ color: '#ff8902', zIndex: 2, marginLeft: 1 }}
          bodyContainerStyle={{
            background: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
          }}
        >
          <h3 style={{ color: '#ff8902' }}>Title, Company</h3>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex
            nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
            magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
            irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
            qui duis Lorem est.
          </p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="21/08/2023 - Réception"
          dateInnerStyle={{
            background: '#138808',
            color: '#fff',
            fontSize: 16
          }}
          style={{ color: '#138808', zIndex: 2, marginLeft: 1 }}
          bodyContainerStyle={{
            background: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
          }}
        >
          <h3 style={{ color: '#138808' }}>Title, Company</h3>
          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex
            nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
            magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
            irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
            qui duis Lorem est.
          </p>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateText="21/08/2023 - Brunch"
          dateInnerStyle={{
            background: '#0055a4',
            color: '#fff',
            fontSize: 16
          }}
          style={{ color: '#0055a4', zIndex: 1, marginLeft: 1 }}
          bodyContainerStyle={{
            background: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
          }}
        >
          <h3 style={{ color: '#0055a4' }}>Visite d&apos;Oroville</h3>

          <p>
            Est incididunt sint eu minim dolore mollit velit velit commodo ex
            nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
            magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
            irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
            qui duis Lorem est.
          </p>
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="21/08/2023 - Oroville"
          dateInnerStyle={{
            background: '#ff6a5f',
            color: '#fff',
            fontSize: 16
          }}
          style={{ color: '#ff6a5f', zIndex: 2, marginLeft: 1 }}
          bodyContainerStyle={{
            background: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
          }}
        >
          <h3 style={{ color: '#ff6a5f' }}>Visite d&apos;Oroville</h3>
          {/* <img className="img-oroville" src={image} alt="img" /> */}
          <p>
            Auroville est une communauté internationale située dans le Tamil
            Nadu, au sud de l&apos;Inde. Fondée en 1968 par Mirra Alfassa, mieux
            connue sous le nom de &quot;Mère&quot;, Auroville a été conçue comme
            une utopie expérimentale visant à promouvoir l&apos;unité et la paix
            entre les peuples de toutes les cultures et nationalités. Le
            Matrimandir est le symbole le plus emblématique d&apos;Auroville.
            C&apos;est une structure dorée en forme de sphère géodésique
            entourée de jardins paisibles. Le Matrimandir est un lieu de
            méditation et de contemplation pour les résidents et les visiteurs
            d&apos;Auroville
          </p>
        </TimelineItem>
        <TimelineItem
          key="005"
          dateText="21/08/2023 - Mahabalipuram"
          dateInnerStyle={{
            background: '#986c06',
            color: '#fff',
            fontSize: 16
          }}
          style={{ color: '#986c06', zIndex: 2, marginLeft: 1 }}
          bodyContainerStyle={{
            background: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
          }}
        >
          <h3 style={{ color: '#986c06' }}>Visite de Mahabalipuram</h3>
          <p>
            Mahabalipuram, également connu sous le nom de Mamallapuram, est une
            ville côtière historique située dans l&apos;État du Tamil Nadu, en
            Inde. Célèbre pour son patrimoine architectural remarquable,
            Mahabalipuram abrite un groupe de temples et de monuments en pierre
            taillée datant du VIIe siècle, époque où la dynastie des Pallavas
            régnait sur la région.
          </p>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default TimelineSchedule;
