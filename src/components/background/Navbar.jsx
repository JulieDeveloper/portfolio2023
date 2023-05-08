import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import clsx from 'clsx';
import SocialLinks from './SocialLinks.jsx';
import { useContext } from 'react';
import { useWindowSize } from 'context/WindowSizeContext';

import ThemesContext from 'context/ThemesContext';

import { device } from 'styles/device';

const StyleNav = styled.nav`
  &.at-home-page {
    position: absolute;
    right: 2rem;
    flex-basis: 10%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
  &.drop-down {
    width: fit-content;
    height: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    top: 25%;

    @media ${device.tablet} {
      left: 50%;
      top: 25%;
      height: 35vw;
    }
  }
  &.sidebar {
    width: var(--page-marginX);
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
const StyleItem = styled.div`
  width: fit-content;
  cursor: pointer;
  font-weight: 300;

  &:not(.at-home-page) {
    color: var(--navItem_text-mobile);
    &:hover,
    &:active {
      color: var(--navItem_text-mobile--hover);
    }
    @media ${device.laptop} {
      color: var(--navItem_text);
      font-style: oblique;
      font-size: 1.5rem;

      &:hover {
        font-style: normal;
      }

      &.active {
        visibility: hidden;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: block;
          width: 0.5px;
          height: 120%;
          visibility: visible;
          background-color: var(--navItem_line-desktop);
        }
      }
      &.vertical {
        writing-mode: vertical-lr;
        transform: rotate(-180deg);
        text-align: center;
        line-height: var(--page-marginX);
        &.TC {
          transform: rotate(0);
        }
      }
    }
  }

  &.at-home-page {
    color: var(--navItem_home-sub-text);
    font-family: 'PPMonumentExtended';

    font-weight: 100;

    line-height: 1.5em;
    font-size: 1.3em;
    @media ${device.tablet} {
      line-height: 2em;
      font-size: 1.8em;
    }
    span {
      color: var(--navItem_text-desktop);
      font-weight: 100;
    }

    &:hover span,
    &:active span {
      letter-spacing: 0.2em;
      font-weight: 450;
    }
  }
`;

const Navbar = ({ isMenuActive }) => {
  const { width } = useWindowSize();
  const { pathname } = useLocation();
  const { t } = useTranslation([''], { keyPrefix: 'background.nav' });
  const { themes } = useContext(ThemesContext);
  const isHomePage = pathname === '/';

  const initialLinks = [
    { id: 0, url: '/', text: 'home' },
    { id: 1, url: '/about', text: 'about' },
    { id: 2, url: '/projects', text: 'projects' },
    { id: 3, url: '/contact', text: 'contact' },
  ];

  let showedLinks = [...initialLinks];
  // remove home link in laptop device or in home page
  if (width >= 1024 || isHomePage) {
    showedLinks = showedLinks.filter((data) => data.url !== '/');
  }

  const pageLinks = showedLinks.map((data) => {
    const content = <span className="link-content">{t(data.text)}</span>;
    return (
      <Link to={data.url} key={data.id}>
        <StyleItem
          className={clsx(
            `${data.text}`,
            pathname === data.url && 'active',
            isHomePage && 'at-home-page',
            pathname !== '/' && 'vertical',
            themes.language === 'tc' && 'TC',
          )}
        >
          {isHomePage ? <div>&lt;{content} /&gt;</div> : <div>{content}</div>}
        </StyleItem>
      </Link>
    );
  });

  if (isHomePage) {
    return <StyleNav className="at-home-page">{pageLinks}</StyleNav>;
  } else {
    return (
      <StyleNav
        className={clsx(
          width < 1024 ? 'drop-down' : 'sidebar',
          width < 1024 && isMenuActive && 'active',
        )}
      >
        {pageLinks}
        {width < 1024 && isMenuActive && <SocialLinks />}
      </StyleNav>
    );
  }
};

export default Navbar;
