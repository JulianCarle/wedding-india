import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import './styles.scss';

const TimelineSchedule = () => {
  return (
    <div className="container-timeline">
      <Timeline lineColor={'#ddd'}>
        <TimelineItem
          key="001"
          dateText="18/08/2023 – Soirée Villa"
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
          <h3 style={{ color: '#ff8902' }}>Let&apos;s party !!!</h3>
          <p>
            Soirée à la villa à partir de 19h00 afin de nous retrouver avant la
            réception et tous nous rencontrer.
          </p>
          <p>
            Comment s&apos;habiller ? Contexte informel, comme vous le
            souhaitez.
          </p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="21/08/2023 - Église / Réception"
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
          <h3 style={{ color: '#138808' }}>Jour J</h3>
          <p className="title-timeline">
            13h00 : Cérémonie religieuse à l&apos;Église Notre-Dame Des Anges de
            Pondicherry.
          </p>
          <p>Veuillez arriver pour 12h45</p>
          <p>
            Comment s&apos;habiller ? De préférence à l&apos;occidental, étant
            donné que nous serons en costume et robe de mariée, mais vous pouvez
            toujours vous faire un kiff et venir en tenue indienne.
          </p>
          <p className="title-timeline">
            16h00 (optionnel): Départ des navettes pour le K resort
          </p>
          <p>
            Point de départ: l&apos;Église Notre-Dame Des Anges de Pondicherry
          </p>
          <p>
            Les invités ont la possibilité de venir par leurs propres moyens
          </p>
          <p className="title-timeline">
            16h30 : Accueil des invités au K Resort
          </p>
          <p>
            Check-in des cottages: vous aurez un peu de temps pour récupérer vos
            clés, déposer vos affaires, vous raffraîchir et vous préparer dans
            votre cottage dans lequel vous passerez la nuit.
          </p>
          <p>
            Comment s&apos;habiller ? C&apos;est l&apos;heure de nous montrer
            vos plus belles tenues indiennes !
          </p>
          <p className="title-timeline">
            18h00: Cocktail / début de la réception.
          </p>
          <p className="title-timeline">19h30: Entrée des mariés</p>
          <p className="title-timeline">20h00: Dîner</p>
          <p className="title-timeline">23h00: Wedding cake</p>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateText="22/08/2023 - Brunch"
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
          <h3 style={{ color: '#0055a4' }}>Brunch au K Resort</h3>

          <p>
            Lendemain de la réception. Nous allons nous retrouver autour
            d&apos;un brunch, suivi d&apos;activités accessibles à tous,
            tout au long de la journée (prévoyez vos maillots de bains et des
            affaires de sport)
          </p>
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="23/08/2023 - Auroville"
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
          <h3 style={{ color: '#ff6a5f' }}>Visite d&apos;Auroville</h3>
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
          dateText="24/08/2023 - Mahabalipuram"
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
