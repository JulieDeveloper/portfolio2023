import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../../styles/color.scss';
import { LogoIcon } from 'assets/images';
import Themes from '../Themes.jsx';
import Hamburger from './Hamburger.jsx';
import Menu from './Menu.jsx';
import { useWindowSize } from 'context/WindowSizeContext';
import { device } from 'styles/device';

const CursorPointer = styled.span`
  cursor: pointer;
`;
const Logo = () => {
  return (
    <Link to="/">
      <CursorPointer>
        <LogoIcon />
      </CursorPointer>
    </Link>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  height: 66px;
  width: 100vw;
  padding: 20px 4.5% 13px 4.5%;
  background-color: var(--light);
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  @media ${device.laptop} {
    padding-left: 3%;
    padding-right: 3%;
  }
`;

const Header = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const [isMenuActive, setIsMenuActive] = useState(false);
  // console.log(isMenuActive);

  return (
    <StyledHeader>
      {isMobile && isMenuActive ? <Themes /> : <Logo />}
      {isMobile && (
        <Hamburger
          isMenuActive={isMenuActive}
          setIsMenuActive={setIsMenuActive}
        />
      )}
      <Menu isMenuActive={isMenuActive} />
    </StyledHeader>
  );
};

export default Header;
