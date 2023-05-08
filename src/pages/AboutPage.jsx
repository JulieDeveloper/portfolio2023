import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';
import LightSpeed from 'react-reveal/LightSpeed';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { device } from 'styles/device';
import {
  ArrowRightIcon,
  LocationIcon,
  CheckWithBorderIcon,
} from '../assets/images/icons';
import Copyright from 'components/background/Copyright';
import Header from 'components/background/Header';
import Background from 'components/background';
import Themes from 'components/background/Themes';
import resume from '../assets/images/resume-JulieChou.pdf';

const Font = styled.span`
  font-size: ${(props) =>
    props.size === 'S'
      ? '1em'
      : props.size === 'M'
      ? '1.1em'
      : props.size === 'L' && '1.2em'};
  font-weight: ${(props) => props.w || 'normal'};
  font-style: ${(props) => (props.italic && 'italic') || 'normal'};
  color: ${(props) => props.color && `var(${props.color})`};
`;

const Style = styled.div`
  .page-container {
    height: 100vh;
    scroll-behavior: smooth;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
  }

  section {
    height: 100vh;
    display: flex;
    scroll-snap-align: center;
    padding: 15vh var(--page-paddingX);
  }
  .icon_arrow-right path {
    fill: var(--about_arrow-icon);
  }
  /* intro */
  section.intro {
    .container {
      height: 100%;
      padding-right: 10vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      white-space: pre-line;
      @media ${device.tablet} {
        flex-direction: row;
        justify-content: flex-end;
        align-items: end;
      }
    }
    .title {
      flex-basis: 30%;
      font-weight: 600;
      color: var(--home_nice-to-meet-you);
      @media ${device.tablet} {
        flex-basis: 40%;

        min-height: 35vh;
        line-height: 80%;
      }
    }
    .text-box {
      flex-basis: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      @media ${device.tablet} {
        justify-content: start;

        text-align: justify;
        flex-basis: 40%;
        min-height: 35vh;
        align-self: end;
      }
    }
  }

  /* developer & designer */
  section.dev-and-des {
    padding: 0;

    .container {
      position: relative;
      width: 100vw;
      min-height: 100vh;
      scroll-behavior: smooth;
      overflow-y: scroll;
      overflow-x: hidden;
      scroll-snap-type: y mandatory;
    }
    .as-developer,
    .as-designer {
      position: sticky;
      top: 0;
      width: 100vw;
      min-height: 100vh;
      padding: 0 15vw;
      display: flex;
      flex-direction: column;
      scroll-snap-align: center;
    }

    /* developer */
    .as-developer {
      background-color: var(--about_as-dev-bg);
      justify-content: flex-end;
      padding-bottom: 5rem;
      @media ${device.tablet} {
        padding-right: 50vw;
      }
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 8vw;
        z-index: 2;
        width: 0.5px;
        height: 60%;
        border-left: 0.5px solid var(--about_as-dev-line);
      }
    }
    .as-designer {
      justify-content: center;
      align-items: end;
      background-color: var(--about_as-des-bg);
      color: var(--about_as-des-content);

      @media ${device.tablet} {
        padding-left: 40vw;
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 8vw;
        z-index: 2;
        width: 0.5px;
        height: 30%;
        border: 0.5px solid var(--about_as-des-left-line);
      }
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 20vw;
        z-index: 2;
        width: 0.5px;
        height: 20%;
        border: 1px solid var(--about_as-des-right-line);
      }
    }

    .title {
      width: fit-content;
      margin-bottom: 1.2rem;
      font-weight: 800;
      color: var(--about_as-title);
    }

    .text-box {
      font-weight: 500;
      color: var(--about_as-dev-content);
    }

    .as-designer p {
      text-align: right;
      color: var(--about_as-des-content1);
      width: 80%;
    }
  }

  /* project */

  section.project {
    position: relative;
    background-color: var(--about_project-bg);
    padding: 0;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 20vw;
      z-index: 2;
      width: 0.5px;
      height: 20%;
      border: 1px solid var(--about_project-line);
    }

    .container {
      position: relative;
      z-index: 0;

      /* white box */
      .sub-box {
        height: 84vh;
        width: 50vw;
        margin-left: 15vw;
        background-color: var(--about_project-sub-box-bg);
        opacity: 0.6;

        @media ${device.laptop} {
          height: 95vh;
        }
      }

      /* line box */
      .link {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;

        &:hover .main-box {
          transform: skewX(-2deg);
          transform-origin: left bottom;
          .title {
            font-style: italic;
          }
          .icon-wrapper {
            transform: scale(2);
            transform-origin: left;

            @media ${device.tablet} {
              transform: scale(3);
            }
            @media ${device.laptop} {
              transform: scale(4);
            }
          }
        }
      }
      .main-box {
        position: absolute;
        z-index: 1;
        left: calc(15vw + 10%);
        bottom: calc(30vh - 10%);
        height: 50vh;
        width: 60vw;
        padding: 2vh 11vw 5vh 2vw;
        border: 1px solid var(--about_project-main-box-border);
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media ${device.tablet} {
          width: 40vw;
          min-height: 400px;

          padding-right: 20%;
          padding-top: 10%;
          padding-bottom: 0;
        }
        @media ${device.laptop} {
          width: 40vw;
          min-height: 500px;
          bottom: calc(20vh - 10%);
          padding-right: 10%;
          padding-bottom: 0;
        }

        .title {
          margin-bottom: 25%;

          font-size: 2em;
          font-weight: 600;

          @media ${device.tablet} {
            font-size: 3em;
          }
          @media ${device.laptop} {
            font-size: 4.5em;
            margin-bottom: 10%;
          }
        }
        .text {
          padding-bottom: 10%;
        }
        .icon-wrapper {
          @media ${device.tablet} {
            transform: scale(2);
            transform-origin: left;
          }
          @media ${device.laptop} {
            transform: scale(3);
          }
        }
      }
    }
  }

  /* core */
  section.core {
    padding: 0;
    .container {
      position: relative;
      width: 100vw;
      min-height: 100vh;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
    }
    .title-wrapper {
      height: 15vh;
      width: 100vw;
      padding: 0 2rem;
      position: absolute;
      z-index: 301;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      align-items: end;

      background-color: var(--primary-bg);

      .title {
        font-family: 'PPMonumentExtended';
        font-weight: 450;
        font-size: 2em;
        font-style: italic;
      }
    }

    .slide-box {
      position: relative;
      width: 100vw;
      min-height: 100vh;

      scroll-behavior: smooth;
      overflow-y: scroll;
      overflow-x: hidden;
      scroll-snap-type: y mandatory;
    }
    .slide-item {
      position: sticky;
      top: 0;
      left: 0;
      width: 100vw;
      min-height: 100vh;

      padding-top: 10vh;

      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      list-style-type: none;
      scroll-snap-align: center;
      background-color: var(--primary-bg);
      @media ${device.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0 10vw;
        padding-top: 10vh;
        align-content: space-evenly;
        align-items: flex-start;
        justify-items: end;
      }

      &:nth-child(1) {
        z-index: 0;
      }
      &:nth-child(2) {
        z-index: 1;
      }
      &:nth-child(3) {
        z-index: 2;
        color: var(--cream1);
        justify-content: center;
        align-items: flex-start;

        &::after {
          content: '';
          width: 1px;
          height: 30vh;
          border: 0.5px solid var(--about_core-fun-to-work-with);
          position: absolute;
          z-index: 3;
          bottom: 0;
          left: calc(var(--page-paddingX) + 2rem);
        }

        @media ${device.tablet} {
          justify-content: flex-start;
        }

        .fun-to-work {
          width: 30vw;
          margin-left: var(--page-paddingX);
          text-align: start;
          font-weight: 900;
          color: var(--about_core-fun-to-work-with);
          font-size: 1.2em;
          @media ${device.tablet} {
            margin-left: 0;
          }
        }
      }
    }

    .list {
      @media ${device.tablet} {
        flex: 1 1 40vw;
      }
    }
    .list-title {
      font-weight: 600;
      font-size: 1.125em;
      text-align: center;
      line-height: 80%;
    }
    .list-detail {
      font-weight: 300;
      text-align: center;
      padding: 0 15%;
      margin-top: 0.5em;
      opacity: 0.9;
    }
  }

  /* skills */
  section.skills {
    .container {
      width: 40vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: auto;
      @media ${device.tablet} {
        width: 100vw;

        flex-direction: row;
        justify-content: center;
      }
    }
    .title {
      margin-right: auto;

      flex-basis: 10%;
      font-weight: 600;

      @media ${device.tablet} {
        flex-basis: 30%;
        width: 40%;
      }
    }
    .grid-container {
      width: fit-content;
      display: grid;

      grid-template-columns: 150px;
      grid-auto-rows: auto;
      grid-auto-flow: row;

      justify-content: end;
      align-items: center;
      margin-right: auto;

      grid-gap: 2rem;

      @media ${device.tablet} {
        margin-left: auto;

        grid-template-rows: 1fr;
        grid-auto-columns: 1fr;
        grid-auto-flow: column;
        align-items: center;
        grid-gap: auto;
      }
    }
    .grid-item {
      @media ${device.tablet} {
        align-self: start;
      }
      .type {
        font-weight: 400;
        color: var(--about_skills-type);
        @media ${device.tablet} {
          height: 2em;
        }
      }
      .content {
        font-weight: 500;
        margin-top: 0.2rem;

        @media ${device.tablet} {
          margin-top: 0.7rem;
          line-height: 1.1rem;
        }
      }
    }
  }
  /* job */
  section.job {
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .title {
      font-size: 2em;
      font-weight: 600;
    }
    .btn-wrapper {
      flex-basis: 30%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: end;
      a {
        flex-basis: 40%;

        .link-text {
          font-size: 1em;
        }
        .icon_arrow-right-wrapper {
          width: fit-content;
          margin-right: auto;
        }
      }
      a:hover,
      a:active {
        font-style: italic;
        font-weight: 500;
        .icon_arrow-right-wrapper {
          margin-right: 0;
          margin-left: auto;
        }
      }
      @media ${device.tablet} {
        flex-basis: 60%;
        a .link-text {
          font-size: 1.5em;
        }
        a .icon_arrow-right-wrapper {
          transform: scale(2);
          transform-origin: left;
        }
        a:hover,
        a:active {
          transform-origin: right;
        }
      }
    }
    .info-wrapper {
      flex-basis: 50%;
      width: 85%;
      .title {
        margin-bottom: 15%;
      }

      @media ${device.tablet} {
        flex-basis: 20%;
        width: 45%;
      }
    }
    .info-wrapper .rows-wrapper {
      margin-top: 2em;
      margin-left: auto;
      .row {
        display: flex;
        &:last-child {
          margin-top: 1em;
        }
        .icon-wrapper {
          position: relative;
          flex-basis: 10%;
          padding: 0 auto;

          svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.8);
            transform-origin: center;
          }
          svg path {
            stroke: var(--about_job-row-icon);
          }
        }
        .row-text {
          font-weight: 600;
        }
      }
    }
  }
  s

  /* theme */
  .theme-wrapper {
    transition: opacity 0.3s ease-in-out;
    opacity: 1;
    &.hide {
      opacity: 0;
    }
  }
`;

const RenderCoreList = ({ start, end }) => {
  const { t } = useTranslation('', { keyPrefix: 'aboutPage' });

  const items = [];
  for (let i = start; i <= end; i++) {
    items.push(
      <li key={i} className="list">
        <h3 className="list-title">{t(`core.list${i}`)}</h3>
        <p className="list-detail">{t(`core.detail${i}`)}</p>
      </li>,
    );
  }
  return items;
};

const AboutPage = () => {
  const { t } = useTranslation('', { keyPrefix: 'aboutPage' });

  const [isThemeVisible, setIsThemeVisible] = useState(true);
  const snapRef = useRef(null);

  useEffect(() => {
    const snapNode = snapRef.current;
    if (snapNode) {
      let isScrolling;
      const handleScroll = () => {
        clearTimeout(isScrolling);
        setIsThemeVisible(false);
        isScrolling = setTimeout(() => {
          setIsThemeVisible(true);
        }, 300);
      };
      snapNode.addEventListener('scroll', handleScroll);
      return () => snapNode.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      <Header />
      <Background>
        <Style>
          <div className="page-container" ref={snapRef}>
            <section className="intro">
              <div className="container">
                <h1 className="title EN">
                  {' '}
                  <Fade top>{t('greeting')}</Fade>
                </h1>
                <div className="text-box">
                  <Fade bottom>
                    <p>
                      <Trans i18nKey="intro.line1" t={t}>
                        <Font>Hey, I'm </Font>
                        <Font w={500} className="EN">
                          {t('name')}
                        </Font>
                        , a Web Developer who loves working on projects from
                        start to finish, including user research, design, and
                        coding.
                      </Trans>
                    </p>
                    <p>
                      <Trans i18nKey="intro.line2" t={t}>
                        I'm originally from <Font w={500}>Taiwan</Font> and
                        passionate about exploring new cultures. With travel
                        experience from around the world, I bring a global
                        perspective and deep appreciation for diversity to my
                        work as a web developer.
                      </Trans>
                    </p>
                    <p>
                      <Trans i18nKey="intro.line3" t={t}>
                        I recently moved to
                        <Font w={500}>Brantford, Ontario</Font>
                        and I'm looking forward to continuing my journey in web
                        development.",
                      </Trans>
                    </p>
                  </Fade>
                </div>
              </div>
            </section>

            <section className="dev-and-des">
              <div className="container">
                <div className="as-developer">
                  <h2 className="title EN">As a Developer,</h2>
                  <Slide right>
                    <div className="text-box">
                      <p>{t('developer.line1')}</p>
                      <br />
                      <p>{t('developer.line2')}</p>
                      <br />
                      <p>{t('developer.line3')}</p>
                    </div>
                  </Slide>
                </div>

                <div className="as-designer">
                  <Slide bottom>
                    <h2 className="title EN">As a Designer,</h2>
                    <p>{t('designer.line1')}</p>
                  </Slide>
                </div>
              </div>
            </section>

            {/* project */}
            <section className="project">
              <div className="container">
                <Slide top>
                  <div className="sub-box"></div>
                </Slide>

                <Link to="/projects" className="link">
                  <div className="main-box">
                    <h2 className="title">{t('projects.title')}</h2>
                    <p className="text">{t('projects.info')}</p>
                    <div className="icon-wrapper">
                      <ArrowRightIcon className="icon_arrow-right" />
                    </div>
                  </div>
                </Link>
              </div>
            </section>

            {/* core */}
            <section className="core">
              <div className="container">
                <div className="title-wrapper">
                  <h2 className="title">
                    <LightSpeed left>{t('core.title')}</LightSpeed>
                  </h2>
                </div>
                <Fade bottom>
                  <div className="slide-box">
                    <ul className="slide-item">
                      <RenderCoreList start={1} end={4} />
                    </ul>
                    <ul className="slide-item">
                      <RenderCoreList start={5} end={8} />
                    </ul>

                    <ul className="slide-item">
                      <li className="fun-to-work">
                        <Fade right>{t('core.funToWorkWith')}</Fade>
                      </li>
                    </ul>
                  </div>
                </Fade>
              </div>
            </section>
            {/* skills */}
            <section className="skills">
              <div className="container">
                <h2 className="title">{t('skills.title')}</h2>
                <Slide right>
                  <div className="grid-container">
                    <div className="grid-item">
                      <div className="type">{t('skills.tech')}</div>
                      <p className="content Menlo">
                        HTML, CSS, Sass, Bootstrap, JavaScript, React.js
                      </p>
                    </div>
                    <div className="grid-item">
                      <div className="type"> {t('skills.design')}</div>
                      <p className="content Menlo">Figma</p>
                    </div>
                    <div className="grid-item">
                      <div className="type">{t('skills.language')}</div>
                      <p className="content">
                        {t('skills.eng')}
                        <br />
                        {t('skills.tc')}
                      </p>
                    </div>
                  </div>
                </Slide>
              </div>
            </section>
            {/* job */}
            <section className="job">
              <div className="container">
                <Bounce right>
                  <div className="btn-wrapper">
                    <a href={resume} download>
                      <div className="link-text">{t('job.resumeLink')}</div>
                      <div className="icon_arrow-right-wrapper">
                        <ArrowRightIcon className="icon_arrow-right" />
                      </div>
                    </a>
                    <Link to="/contact" className="link">
                      <div className="link-text">{t('job.contactLink')}</div>
                      <div className="icon_arrow-right-wrapper">
                        <ArrowRightIcon className="icon_arrow-right" />
                      </div>
                    </Link>
                  </div>
                </Bounce>
                <Fade bottom>
                  <dix className="info-wrapper">
                    <h2 className="title EN">Work With Me</h2>

                    <p className="text">{t('job.info')}</p>
                    <div className="rows-wrapper">
                      <div className="row">
                        <div className="icon-wrapper">
                          <LocationIcon />
                        </div>
                        <p className="row-text">{t('job.location')}</p>
                      </div>
                      <div className="row">
                        <div className="icon-wrapper">
                          <CheckWithBorderIcon />
                        </div>
                        <p className="row-text">{t('job.eligible')}</p>
                      </div>
                    </div>
                  </dix>
                </Fade>
              </div>
            </section>
            <Copyright />
          </div>
        </Style>
        <div className={('theme-wrapper', isThemeVisible ? '' : 'hide')}>
          {isThemeVisible && <Themes />}
        </div>
      </Background>
    </>
  );
};

export default AboutPage;
