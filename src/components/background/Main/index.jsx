import styled from 'styled-components';
import '../../../styles/color.scss';
import { useWindowSize } from 'context/WindowSizeContext';
import ContactLinks from '../ContactLinks';
import Themes from '../Themes';
import { device } from 'styles/device';

const StyledMain = styled.main`
  margin: 0 4.5%;
  overflow-y: scroll;
  /* padding: calc(66px + 15vh) 12vw 10vh 12vw; */

  background-color: var(--grey200);
  color: var(--dark);

  height: calc(100vh - 40px); /* 40x(footer height) */
  padding: calc(66px + 10vh) 12vw 5vh 12vw;

  @media ${device.laptop} {
    /* padding-top: calc(66px + 20vh); */
    padding: calc(66px + 20vh) 20% 0 20%;

    margin: 0 3%;
  }
`;

const RightSideBar = styled.div`
  position: fixed;
  top: 66px;
  right: 0;
  height: calc(100vh - 66px - 47px);
  width: 4.5%;
  padding: 5vh 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${device.laptop} {
    width: 3%;
  }
`;

const Main = ({ children }) => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <>
      <StyledMain>
        {children}
        {!isMobile && (
          <RightSideBar>
            <Themes />
            <ContactLinks />
          </RightSideBar>
        )}
      </StyledMain>
    </>
  );
};
export default Main;
