import { Link } from 'react-router-dom';
import Background from 'components/background/Background';
import styled from 'styled-components';
import { device } from 'styles/device';
import '../styles/color.scss';
import { ArrowRightIcon } from '../assets/images';

const Container = styled.div`
  .line {
    display: none;
  }

  @media ${device.tablet} {
    display: flex;
    width: 80%;

    .line {
      display: block;
      margin-right: 10vw;
      height: 150px;
      width: 1px;
      background-color: var(--grey600);
    }
  }
`;

const Title = styled.h1`
  &.page {
    font-weight: 400;
    font-size: 24px;
  }
  &.section {
    width: fit-content;
    margin-top: 8vh;
    font-weight: 500;
    font-size: 18px;
    background-color: var(--grey400);
  }
  @media ${device.laptop} {
    &.page {
      font-size: 28px;
    }
    &.section {
    }
  }
`;

const HighLight = styled.span`
  height: auto;
  width: auto;
  background-color: var(--grey400);
  transform: translate(2px, 3px) scaleX(1.5);
`;

const Banner = styled.section`
  position: relative;
  margin-top: 20px;
  padding: 15% 5%;
  align-items: flex-end;
  color: var(--light);
  text-shadow: 0px 4px 4px var(--dark-shadow);
  z-index: 1;

  &.project {
    font-size: 16px;
    font-weight: 400;
  }
  &.job {
    font-size: 16px;
    font-weight: 700;
  }
  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: calc(100vw - 9vw);
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }

  &.project::before {
    /* width: 120%; */

    background-color: var(--grey600);
    z-index: -1;
  }
  &.job::before {
    background-color: var(--dark);
    z-index: -1;
  }

  .link-group {
    margin-top: 20%;
  }
  .link {
    text-align: end;
    padding-top: 5%;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .icon_arrow-right {
      visibility: visible;
    }
  }

  @media ${device.tablet} {
    position: relative;

    &.project::before {
      width: 120%;
      /* padding-top: 10%; */
    }
    &.job::before {
      width: 100vw;

      /* padding-top: 8%; */
      /* height: auto; */
    }
    .link-group {
      margin-top: 5%;
    }
  }

  @media ${device.laptop} {
    &.project {
      font-size: 18px;
    }
    &.job {
      /* height: 40vh; */
      left: 3%;
      width: 94%;
      .link-group {
        width: 40%;
        margin-left: auto;
        display: flex;
        justify-content: space-between;
      }
    }
    &.project::before {
      width: 120%;
    }

    .link {
      .icon_arrow-right {
        visibility: hidden;
      }
      &:hover .icon_arrow-right {
        visibility: visible;
      }
    }
  }
`;

const Feature = styled.section`
  ul {
    list-style-type: circle;
    /* padding-left: 6vw; */
  }
  li {
    margin-top: 5vh;
    padding-left: 2vw;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;

const Skills = styled.section`
  margin-top: 8vh;
  width: 50vw;

  .type {
    width: 80%;
    font-weight: 300;
    font-size: 16px;
    padding-top: 5vh;
    padding-bottom: 2px;
    border-bottom: 1px solid var(--grey600);
  }
  .skill {
    width: 80%;
    line-height: 1.5rem;
    font-size: 14px;
    margin-top: 10px;
    color: var(--grey600);
  }
  @media ${device.tablet} {
    .type,
    .skill {
      width: 60%;
    }
    .type {
      padding-top: 6vh;
    }
  }
  @media ${device.laptop} {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .row {
      width: 30%;
    }
    .type,
    .skill {
      width: 85%;
    }
    .type {
      width: fit-content;
      font-size: 18px;
      padding-bottom: 5px;
    }
    .skill {
      margin-top: 10px;
      font-size: 16px;
    }
  }
`;
const Text = styled.p`
  width: 80%;
  margin-top: 3vh;

  font-weight: 300;
  font-size: 16px;
  color: var(--dark);
  @media ${device.laptop} {
    width: 85%;
  }
`;
const BannerBtn = ({ children }) => {
  return (
    <div className="link">
      {children}
      <ArrowRightIcon className="icon_arrow-right" />
    </div>
  );
};

const AboutPage = () => {
  return (
    <Background>
      <Container>
        <div className="line"></div>
        <div className="wrapper">
          <Title className="page">Nice To Meet You.</Title>
          <Text>
            My name is <HighLight>Julie Chou,</HighLight>
            <br></br>I am a web developer, who enjoys challenging myself,
            learning new skills, planing and creating things.
            <br></br>
            <br></br>
            Born in 1997,and Grow up from Taiwan. Started traveling since 21
            years old.
            <br></br>
            Currently move to
            <HighLight> Brantford ON, Canada.</HighLight>
          </Text>
          <Title className="section">As a Developer,</Title>
          <Text>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.<br></br>
            <br></br>Self taught new skills have always been my passion. I’m
            always curious to learn more when it comes to new technologies and
            creative coding.
          </Text>
          <Title className="section">As a Designer,</Title>
          <Text>
            I might not be the best UI/UX designer, but I value simple content
            structure, clean design patterns, and thoughtful interactions.
          </Text>
          <Banner className="project">
            I've experience in design and develop digital product for both
            business and individual use.
            <div className="link-group">
              <Link to="/projects">
                <BannerBtn>projects</BannerBtn>
              </Link>
            </div>
          </Banner>
          <Feature>
            <ul>
              <li>Engaged in web creative design and development.</li>
              <li>
                Eager to tackle web development/design challenges to achieve
                lasting impacts on user experience.
              </li>
              <li>
                Worked through 1000+ hours of boot-camp/online courses
                structure, learning frontend techniques.
              </li>
              <li>
                Created 20+ mobile-first applications projects while learning
                new skills and frameworks.
              </li>
            </ul>
          </Feature>
          <Skills>
            <div className="row">
              <div className="type">Tech Stack</div>
              <p className="skill">
                HTML / CSS / Sass / Bootstrap / JavaScript / React.js
              </p>
            </div>
            <div className="row">
              <div className="type">Design Tool</div>
              <p className="skill">Figma / XD</p>
            </div>
            <div className="row">
              <div className="type">Language</div>
              <p className="skill">
                ENGLISH (Fluent)<br></br>MANDARIN (Native)
              </p>
            </div>
          </Skills>
          <Banner className="job">
            Open to Job opportunities where I can contribute, learn and grow.
            <div className="link-group">
              <Link to="/RESUME">
                <BannerBtn>resume</BannerBtn>
              </Link>
              <Link to="/CONTACT">
                <BannerBtn>contact</BannerBtn>
              </Link>
            </div>
          </Banner>
        </div>
      </Container>
    </Background>
  );
};

export default AboutPage;
