import React, { useEffect, useRef, useState } from 'react';
import { BsList, BsX } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import titleSite from '../../images/Aurelia-et-Julian.png';
import './styles.scss';
import { SidebarData } from './utils';

const handleScrollToTop = () => {
  window.scrollTo(0, 0);
};

function Sidebar() {
  const navigate = useNavigate();

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const onNavigateHandler = (link) => {
    navigate(link);
  };

  const links = SidebarData.map((link) => {
    return (
      <div
        key={link.label}
        onClick={() => {
          handleScrollToTop();
          onNavigateHandler(link.value);
        }}
        className="sidebar-link-category"
      >
        {link.label}
      </div>
    );
  });

  const body = document.querySelector('body');

  if (sidebar) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }

  const nav = useRef();

  useEffect(() => {
    let oldScrollY;

    const handleScroll = () => {
      let st = window.scrollY;

      if (oldScrollY < st && oldScrollY > 10) {
        nav.current.classList.add('scrollDown');
      } else if (oldScrollY > st) {
        nav.current.classList.remove('scrollDown');
      }
      oldScrollY = st;
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={nav} className="sidebar">
      <div
        onClick={() => {
          handleScrollToTop();
          onNavigateHandler('/');
        }}
        className="image-title-site"
      >
        <img src={titleSite} alt="title" />
      </div>
      <div className="menu-bars">
        <BsList onClick={showSidebar} />
      </div>
      <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <div className="sidebar-open-container" onClick={showSidebar}>
          <div className="close-button">
            <BsX size={40} />
          </div>
          {links}
          <div className="image-title-site-active">
            <img src={titleSite} alt="title" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
