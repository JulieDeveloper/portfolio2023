import styled from 'styled-components';

import { device } from '../styles/device';
import { Link } from 'react-router-dom';
import Background from '../components/background/Background';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const LinkItemWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  .dash {
    height: 2px;
    width: 24px;
    background-color: var(--dark);
    transform: rotate(-42deg);
    box-shadow: 0px 4px 4px var(--dark-shadow);
    margin-right: 20px;
  }
  .title {
    width: auto;
    color: var(--dark);
    font-size: 30px;
    font-style: normal;
    font-weight: 300;
    text-shadow: 0px 4px 4px var(--dark-shadow);
  }
  @media ${device.tablet} {
    .dash {
      margin-right: 50px;
    }
  }
  @media ${device.laptop} {
    height: auto;
    .title {
      font-size: 64px;
      line-height: 90px;
    }

    &:hover {
      padding-top: 5%;
      padding-bottom: 3%;
      transform: translateX(30px);
      transition: transform 0.01s, opacity 0.25s;

      .dash {
        transform: scaleX(3.5) rotate(0deg);
        transition: transform 0.01s, opacity 0.25s;
      }

      .title {
        font-weight: 400;
        font-size: 128px;
        color: var(--light);
        -webkit-text-stroke: 1px var(--dark);
        text-shadow: 0px 4px 4px var(--dark-shadow);
        transition: all 0.01s ease-out;
      }
    }
  }
`;
const PageLink = ({ title }) => {
  return (
    <LinkItemWrapper>
      <span className="dash"></span>
      <h1 className="title">{title}</h1>
    </LinkItemWrapper>
  );
};

const Content = styled.div`
  margin-bottom: 0;
  width: 100%;
  text-align: right;
  font-size: 16px;

  .name {
    font-weight: 700;
  }

  .position {
    font-weight: 400;
    margin-top: -2px;
  }

  .brief {
    display: block;
    margin-top: 6px;
    margin-left: auto;
    font-weight: 300;
    font-size: 14px;
    color: var(--grey800);
  }
  @media ${device.tablet} {
    font-size: 24px;

    .brief {
      margin-top: 20px;
      max-width: 40vw;
      font-size: 18px;
    }
  }
  @media ${device.laptop} {
    .brief {
      font-size: 24px;
    }
  }
`;

const Homepage = () => {
  return (
    <Background>
      <Container>
        <div className="linksWrapper">
          <Link to="/about">
            <PageLink title="ABOUT" />
          </Link>
          <Link to="/projects">
            <PageLink title="PROJECTS" />
          </Link>
          <Link to="/contact">
            <PageLink title="CONTACT" />
          </Link>
        </div>
        <Content>
          <div className="name">JULIE CHOU</div>
          <div className="position">Web Developer</div>
          <div className="brief">
            I create visually aesthetic, responsive and accessible website for
            both individual and business used.
          </div>
        </Content>
      </Container>
    </Background>
  );
};

export default Homepage;
