import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HamburgerIcon from './HamburgerIcon.jsx';
import { useWindowSize } from 'context/WindowSizeContext';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar.jsx';
import clsx from 'clsx';

const NameStyled = styled.span`
  position: fixed;
  z-index: 500;
  top: ${(props) =>
    props.isHomePage ? `var(--header-height)` : 'var(--header-height)'};
  left: ${(props) => (props.isHomePage ? 'var(--page-marginX)' : '50%')};

  display: flex;
  align-items: flex-end;
  transform: translate(${(props) => (props.isHomePage ? '0' : '-50%')}, -100%);

  cursor: pointer;
  .name {
    font-size: 0.9em;
    font-weight: 400;
    letter-spacing: 0.12em;
    .italic {
      font-style: italic;
    }
  }

  &:hover,
  &:active {
    .name {
      font-size: 1em;
    }
  }
`;
const Name = () => {
  const { pathname } = useLocation();
  const content = (
    <Link to="/">
      <h1 className="name EN">
        JUL<span className="italic">I</span>E C<span className="italic">H</span>
        OU
      </h1>
    </Link>
  );
  return pathname === '/' ? (
    <NameStyled isHomePage>{content}</NameStyled>
  ) : (
    <NameStyled>{content}</NameStyled>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  z-index: 300;
  top: 0;
  display: flex;
  justify-content: flex-end;
  height: var(--header-height);
  width: 100vw;

  .menu {
    position: fixed;
    z-index: 301;
    width: 100vw;
    padding-top: 2rem;
    padding-left: 2rem;

    height: ${(props) => (props.active ? '100vh' : 'var(--header-height)')};
    clip-path: ${(props) =>
      props.active
        ? 'circle(200vh at 2rem 2rem)'
        : 'circle(40px at 2rem 2rem)'};
    transition: clip-path 1s linear, height 0.1s linear;

    background-color: ${(props) =>
      props.active ? 'var(--menu-bg)' : 'transparent'};
  }
  .navbar-wrapper {
    display: ${(props) => {
      return props.active ? 'block' : 'none';
    }};
    transition: 0.1s linear;
  }
`;

const Header = () => {
  const { pathname } = useLocation();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const isHomePage = pathname === '/';
  const { width } = useWindowSize();

  return (
    <StyledHeader active={isMenuActive} isHomePage={isHomePage}>
      {!isHomePage && width < 1024 && (
        <div className={clsx('menu', isMenuActive && 'active')}>
          <HamburgerIcon
            isMenuActive={isMenuActive}
            setIsMenuActive={setIsMenuActive}
          />
          <div className="navbar-wrapper">
            <Navbar isMenuActive={isMenuActive} />
          </div>
        </div>
      )}
      <Name />
    </StyledHeader>
  );
};

export default Header;
