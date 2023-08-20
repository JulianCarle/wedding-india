import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import './styles.scss';

const TimelineSchedule = () => {
  return (
    <div>
      <Timeline lineColor={'#ddd'}>
        <TimelineItem
          key="000"
          dateText="18/08/2023 – Soirée retrouvailles"
          dateInnerStyle={{
            background: '#ff8902',
            color: '#fff',
            fontSize: 16
          }}
          style={{ color: '#ff8902', zIndex: 2, marginLeft: 1, paddingRight: 0 }}
          bodyContainerStyle={{
            background: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
          }}
        >
          <h3 style={{ color: '#ff8902' }}>Let&apos;s party !!!</h3>
          <p className="title-timeline">À partir de 19h00</p>
          <p>
            Soirée à la villa afin de nous retrouver avant la réception et tous
            nous rencontrer.
          </p>
          <p>Adresse: SHASUN ENTERPRISES LLP, ECR Road, Boomiyapalayam village, Vanur, Taluk, Puducherry, 605104. 
            (sur waze "SHASUN ENTERPRISES LLP" suffit)</p>
          <p>Un cuisinier italien viendra spécialement pour l&apos;ocasion afin de régaler vos papilles 
            gustatives avec des produits frais et BIO.</p>
          <p>
          <b>Apportez des boissons</b> et/ou des choses à grignoter.
          </p>
          <p><b>Aller:</b> Par vos propres moyens (TukTuk ou auto, taxis, scooters, Uber etc...).</p>
          <p><b>Retour:</b> Des navettes seront mises à votre disposition toutes les heures à partir de 00h00. 
          Vous pourrez évidemment rentrer par vos propres moyens.</p>
          <p>
            Comment s&apos;habiller ? Contexte informel, comme vous le
            souhaitez.
          </p>
        </TimelineItem>
        <TimelineItem
          key="001"
          dateText="20/08/2023 – Rituel mariage"
          dateInnerStyle={{
            background: 'rgb(0, 131, 102)',
            color: '#fff',
            fontSize: 16
          }}
          style={{ color: 'rgb(0, 131, 102)', zIndex: 2, marginLeft: 1 }}
          bodyContainerStyle={{
            background: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
          }}
        >
          <h3 style={{ color: 'rgb(0, 131, 102)' }}>Festivités</h3>
          <p className="title-timeline">15h30-20h</p>
          <p>
            Célébration et rituel avant le mariage: hénné, danses, musiques et
            surprises...
          </p>
          <p>Adresse: SHASUN ENTERPRISES LLP, ECR Road, Boomiyapalayam village, Vanur, Taluk, Puducherry, 605104. (sur waze "SHASUN ENTERPRISES LLP" suffit)</p>
          <p className="title-timeline">16h00: Rituel suivi du hénné et autres activités</p>
          <p className="title-timeline">18h00: Repas végétarien</p>
          <p>Comment s&apos;habiller ? Tenues indiennes basiques.</p>
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
            11h00 : Cérémonie religieuse à l&apos;Église Notre-Dame Des Anges de
            Pondicherry.
          </p>
          <p>Veuillez arriver pour 10h45.</p>
          <p>
            Comment s&apos;habiller ? De préférence à l&apos;occidental, étant
            donné que nous serons en costume et robe de mariée, mais vous pouvez
            toujours vous faire un kiff et venir en tenue indienne.
          </p>
          <p className="title-timeline">
            14h30 (optionnel): Départ des navettes pour le K resort
          </p>
          <p>
            Horaires des navettes: 14h30 / 15h00 / 15h30
          </p>
          <p>
            Point de départ: l&apos;Église Notre-Dame Des Anges de Pondicherry.
          </p>
          <p>
            Les invités ont la possibilité de venir par leurs propres moyens.
          </p>
          <p className="title-timeline">
            À partir de 15h00 : Accueil des invités au K Resort
          </p>
          <p>
            Check-in des cottages: à votre arrivée, dirigez vous vers la réception, un cottage vous sera attribué. 
            Vous pourrez y déposer vos affaires, vous rafraîchir, vous préparer et éventuellement profiter du Resort jusqu'au cocktail. Prenez votre <b>PASSEPORT</b>.
          </p>
          <p>
            Comment s&apos;habiller ? C&apos;est l&apos;heure de nous montrer
            vos plus belles tenues indiennes!
          </p>
          <p>
            Que ramener ? Vous passer la nuit sur place, prévoyez des affaires de rechange pour le lendemain. N'oubliez pas votre <b>MAILLOT DE BAINS</b>.
          </p>
          <p className="title-timeline">
            18h30: Cocktail / début de la réception
          </p>
          <p className="title-timeline">19h00: Entrée des mariés</p>
          <p className="title-timeline">20h30: Dîner</p>
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
            d&apos;un brunch, suivi d&apos;activités accessibles à tous, tout au
            long de la journée (prévoyez vos maillots de bains et des affaires
            de sport).
          </p>
          <p className="title-timeline">Jusqu'à 10h00: Check-out des cottages</p>
          <p>
            Vos bagages pourront être déposés dans des pièces dédiées.
          </p>
          <p className="title-timeline">10h00-13h00: Brunch</p>
          <p className="title-timeline">13h00-18h00: Chill and relax</p>
          <p className="title-timeline">À partir de 18h00: Navettes retour pour Pondicherry</p>
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
          <p className="title-timeline">Départ tôt le matin (heure exacte à venir), prévoir une demi journée</p>
          <p>
            Auroville est une communauté internationale située dans le Tamil
            Nadu, au sud de l&apos;Inde. Fondée en 1968 par Mirra Alfassa, aussi
            connue sous le nom de &quot;Mère&quot;, d&apos;origine française qui
            a étudié à l&apos;Académie Julian :D.
          </p>
          <p>
            Auroville a été conçue comme une utopie expérimentale visant à
            promouvoir l&apos;unité et la paix entre les peuples de toutes les
            cultures et nationalités. Le Matrimandir est le symbole le plus
            emblématique d&apos;Auroville. C&apos;est une structure dorée en
            forme de sphère géodésique entourée de jardins paisibles. Le
            Matrimandir est un lieu de méditation et de contemplation pour les
            résidents et les visiteurs d&apos;Auroville
          </p>
        </TimelineItem>
        <TimelineItem
          key="005"
          dateText="24/08/2023 - Mahabalipuram"
          dateInnerStyle={{
            background: 'rgb(80, 46, 0)',
            color: '#fff',
            fontSize: 16
          }}
          style={{ color: 'rgb(80, 46, 0)', zIndex: 2, marginLeft: 1 }}
          bodyContainerStyle={{
            background: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
          }}
        >
          <h3 style={{ color: 'rgb(80, 46, 0)' }}>Visite de Mahabalipuram</h3>
          <p className="title-timeline">Départ tôt le matin (heure exacte à venir), prévoir une demi journée</p>
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
