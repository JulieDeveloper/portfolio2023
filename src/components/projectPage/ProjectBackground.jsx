import Themes from 'components/background/Themes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowBackIcon, BtnPrevIcon, BtnNextIcon } from 'assets/images/icons';
import { device } from 'styles/device';

const BackBtn = () => {
  return (
    <Link to="/projects">
      <span className="circle">
        <ArrowBackIcon />
      </span>
    </Link>
  );
};

const SwitchPanel = () => {
  return (
    <>
      <div className="btns-wrapper">
        <BtnPrevIcon />
        <div className="name">PORTFOLIO 2023</div>
        <BtnNextIcon className="btn-next" />
      </div>
      <div className="nums-wrapper">
        <div className="current-num">01</div>
        <span className="line"></span>
        <div className="total-num">06</div>
      </div>
    </>
  );
};

const Style = styled.div`
  .control-panel-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 60px;
    padding: 0 4.5vw;
    z-index: 300;
    @media ${device.tablet} {
      flex-direction: column;
      height: 100vh;
      width: 4.5vw;
      padding: calc(66px + 5vh) 0 calc(5vh + 40px) 0;
    }
    @media ${device.laptop} {
      width: 3vw;
    }

    .circle {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 0.5px solid var(--blue);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btns-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: auto;
      @media ${device.tablet} {
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 250px;
        width: 4.5vw;
        margin-left: 0;
        margin-top: auto;
        svg {
          transform: rotate(90deg);
          text-shadow: 0px 1px 4px var(--dark-shadow);
        }
      }
      .name {
        width: 65px;
        font-size: 12px;
        font-weight: 300;
        text-align: right;
        color: var(--blue);
        margin: 0 5vw;
        @media ${device.tablet} {
          transform: rotate(-90deg);
          width: 30vh;
          text-align: center;
          font-size: 18px;
          margin: 0 5vh;
        }
      }
    }

    .nums-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 32px;
      margin-left: 5vw;
      font-family: 'Raleway', sans-serif;
      line-height: 12px;
      font-size: 12px;
      font-weight: 300;
      color: var(--blue);
      @media ${device.tablet} {
        height: auto;
        font-size: 18px;
        line-height: normal;
        margin-left: 0;
        margin-top: 20px;
      }

      .line {
        width: 100%;
        height: 0.1px;
        background-color: var(--blue);
        @media ${device.tablet} {
          width: 26px;
          margin: 5px 0;
        }
      }
    }
  }
`;

const ProjectBackground = ({ children }) => {
  return (
    <Style>
      <div className="control-panel-container">
        <BackBtn />
        <SwitchPanel />
      </div>
      {children}
      <Themes />
    </Style>
  );
};

export default ProjectBackground;
