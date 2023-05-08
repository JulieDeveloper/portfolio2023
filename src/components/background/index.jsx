import { useWindowSize } from 'context/WindowSizeContext';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import SideBars from './SideBars.jsx';

const StyledMain = styled.main`
  width: 100vw;
  overflow: hidden;
  scroll-behavior: smooth;
`;

const Background = ({ children }) => {
  const { width } = useWindowSize();
  const { pathname } = useLocation();

  return (
    <>
      <StyledMain>
        {width >= 1024 && pathname !== '/' && <SideBars />}
        {children}
      </StyledMain>
    </>
  );
};
export default Background;
