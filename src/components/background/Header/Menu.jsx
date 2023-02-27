import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import clsx from 'clsx';
import '../../../styles/color.scss';
import NavItem from './NavItem';

import { useWindowSize } from 'context/WindowSizeContext';
import { device } from 'styles/device';

const contents = [
  { id: 0, url: '/', text: 'HOME' },
  { id: 1, url: '/about', text: 'ABOUT' },
  { id: 2, url: '/projects', text: 'PROJECTS' },
  { id: 3, url: '/contact', text: 'CONTACT' },
];

const Nav = styled.nav`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100vw;
  padding-top: 1vh;
  padding-bottom: 5vh;
  background: var(--light);
  transform-origin: top;
  transition: transform 0.3s ease-out;
  transform: scale(1, 0);

  &.active {
    transform: scale(1, 1);
  }

  @media ${device.tablet} {
    all: unset;
    width: 45vw;
    display: flex;
    justify-content: space-between;
  }
  @media ${device.laptop} {
    width: 30vw;
  }
`;

const Menu = ({ isMenuActive }) => {
  const { width } = useWindowSize();
  const { pathname } = useLocation();

  const pageLinks =
    pathname !== '/' &&
    contents.map((content) => (
      <Link to={content.url} key={content.id}>
        <NavItem
          type="page"
          text={content.text}
          isActive={content.url === pathname}
        />
      </Link>
    ));

  return (
    <Nav className={clsx(isMenuActive && 'active')}>
      {pageLinks}
      {width < 768 && <NavItem type="contact" />}
    </Nav>
  );
};

export default Menu;
