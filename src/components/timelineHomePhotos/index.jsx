import React from 'react';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { FaUserGraduate } from 'react-icons/fa';
import {
  GiBigDiamondRing,
  GiCherish,
  GiEngagementRing,
  GiLovers,
  GiMusicalNotes
} from 'react-icons/gi';

// import { PiFlowerTulipLight } from 'react-icons/pi';

import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import img1 from '../../images/home/timeline/img-timeline_1.jpg';
import img2 from '../../images/home/timeline/img-timeline_2.jpg';
import img3 from '../../images/home/timeline/img-timeline_3.jpg';
import img4 from '../../images/home/timeline/img-timeline_4.jpg';
import img5 from '../../images/home/timeline/img-timeline_5.jpeg';

import './styles.scss';

export const TimelinePhotos = () => {
  return (
    <div className="timeline-photos">
      <VerticalTimeline lineColor={'rgb(98, 0, 0)'}>
        <VerticalTimelineElement
          // dateClassName='date-timeline-photos'
          className="vertical-timeline-element--work"
          // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2014"
          iconStyle={{ background: 'rgb(177, 0, 0)', color: '#fff' }}
          icon={<FaUserGraduate />}
        >
          <img src={img1} alt="img" />
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, California
          </h4>
          <p>Notre rencontre, just friends...</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016"
          iconStyle={{ background: 'rgb(177, 0, 0)', color: '#fff' }}
          icon={<BsFillSuitHeartFill />}
        >
          <img src={img2} alt="img" />
          <h4 className="vertical-timeline-element-subtitle">
            De Orsay au Chesnay, le tout début
          </h4>
          <p>
            <GiMusicalNotes />
            &nbsp;&nbsp;&nbsp;L&apos;amour, l&apos;amour,
            l&apos;amour...&nbsp;&nbsp;&nbsp;&nbsp;
            <GiMusicalNotes />
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Mars 2022"
          iconStyle={{ background: 'rgb(177, 0, 0)', color: '#fff' }}
          icon={<GiEngagementRing />}
        >
          <img src={img3} alt="img" />
          <h4 className="vertical-timeline-element-subtitle">Guadeloupe</h4>
          <p>
            La fameuse demande en mariage... &nbsp;
            <GiBigDiamondRing />
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Avril 2022"
          iconStyle={{ background: 'rgb(177, 0, 0)', color: '#fff' }}
          icon={<GiLovers />}
        >
          <img src={img4} alt="img" />
          <h4 className="vertical-timeline-element-subtitle">
            Montereau, nos fiançailles
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="29 juillet 2023"
          iconStyle={{ background: 'rgb(177, 0, 0)', color: '#fff' }}
          icon={<GiCherish />}
        >
          <img src={img5} alt="img" />
          <h4 className="vertical-timeline-element-subtitle">
            Mairie de Chilly-Mazarin
          </h4>
          <p>Nous nous sommes dit oui! Officiellement mariés!</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default TimelinePhotos;
