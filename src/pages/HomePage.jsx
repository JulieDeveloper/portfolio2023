import styled, { keyframes } from 'styled-components';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { device } from '../styles/device';
import Header from 'components/background/Header';
import Copyright from 'components/background/Copyright';
import Navbar from 'components/background/Navbar.jsx';
import Themes from 'components/background/Themes';
import { SocialLinksJSX } from '../components/background/SocialLinks';
import resume from '../assets/images/resume-JulieChou.pdf';

const Style = styled.div`
  main {
    position: relative;
    height: 100vh;
    width: 100vw;
  }

  .landing-page {
    cursor: none;
    position: relative;
    height: 100vh;
    width: 100vw;
    color: var(--home_landing-text);

    /* bg */
    &:before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background-color: #22222245;
      background: radial-gradient(
        circle,
        var(--home_landing-bg-outline),
        var(--home_landing-bg-inline)
      );
    }

    .title-wrapper {
      position: relative;
      top: 50%;
      left: 50%;
      width: 70%;
      transform: translate(-50%, -50%);
    }
    .name {
      font-weight: 200;
      font-size: 10vw;
      letter-spacing: 0.2em;
      text-align: center;
      @media ${device.tablet} {
        font-size: 60px;
      }
    }
    .italic {
      font-style: italic;
      font-weight: 200;
      letter-spacing: 0.2em;
    }
    .statement {
      margin-top: 5vh;
      font-size: 3vw;
      font-size: 1em;

      text-align: center;
      opacity: 0.45;
      text-transform: uppercase;
      @media ${device.tablet} {
        font-size: 1em;
      }
    }
    .click-to-start {
      position: absolute;
      left: 50%;
      bottom: -100%;
      transform: translateX(-50%);
      text-align: center;
      animation: ${keyframes`
      0% {
    bottom: -100%;
  }
  25% {
    bottom: -105%;
  }
  50% {
    bottom: -100%;
  }
  75%{
    bottom: -95%;
  }
  100%{
    bottom: -100%;
  }
`} 3s linear infinite;
    }
  }

  .main-page {
    height: 100vh;
    width: 100vw;
    position: relative;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    overflow-x: hidden;
    animation: ${keyframes`
      from {
    top:100%;
  }
  to {
    top:0;
  }
`} 1s linear 1;

    .container {
      scroll-snap-align: center;
      height: 100vh;
      width: 100vw;
      padding: 2rem;
      padding-top: calc(var(--header-height) + 3rem);
      padding-bottom: 1rem;
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      @media ${device.tablet} {
        padding-bottom: 2rem;
      }
    }

    .hero-title-wrapper {
      flex-basis: 50%;
      flex: 1;
      display: flex;
      align-items: end;
      .hero-title {
        font-size: 16vw;
        line-height: 90%;
        font-family: 'Mori';
        font-weight: 400;
        white-space: pre-line;
        @media ${device.tablet} {
          font-size: 15vw;
        }
        @media ${device.laptop} {
          font-size: 13vw;
        }
      }
    }
    .expertise {
      flex-basis: 8%;
      font-family: 'Monument Grotesk';
      font-weight: 100;
      white-space: pre-line;
      line-height: 90%;

      @media ${device.tablet} {
        font-size: 1.2em;
        margin-top: 5vh;
        margin-bottom: 2vh;
      }
    }

    .flex {
      flex-basis: 30%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media ${device.tablet} {
        flex-basis: 20%;
        flex-direction: row;
        justify-content: space-between;
      }
      .what-i-do {
        max-width: 300px;
        font-size: 1.1em;
        line-height: 1.4em;
        @media ${device.tablet} {
          font-size: 1.3em;
        }
        @media ${device.laptop} {
          max-width: 800px;
        }
      }
      .links-container {
        max-width: 500px;
        display: flex;

        flex-direction: row;
        justify-content: space-between;
        align-items: end;

        @media ${device.tablet} {
          margin-top: 0;
          margin-right: 5vw;
          flex-direction: column;
          justify-content: flex-start;
          align-items: start;
        }

        a {
          font-weight: 400;
          @media ${device.tablet} {
            &:first-child {
              margin-bottom: 1em;
            }
          }

          &:hover,
          &:active {
            font-style: italic;
            font-weight: 600;
          }
        }
      }
    }
  }
`;

const Homepage = () => {
  const { t } = useTranslation();
  const [showMainPage, setShowMainPage] = useState(false);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const MainPage = () => {
    return (
      <>
        <Header />
        <Themes />
        <section className="main-page">
          <div className="container">
            <Navbar />
            <div className="hero-title-wrapper">
              <h1 className="hero-title">{t('background.position')}</h1>
            </div>

            <p className="expertise">{t('homePage.expertise')}</p>

            <div className="flex">
              <p className="what-i-do">{t('homePage.whatIDo')}</p>

              <div className="links-container">
                <a href={resume} download>
                  <div className="link-text">
                    {t('background.links.resume')}
                  </div>
                </a>
                <SocialLinksJSX />
              </div>
            </div>
          </div>
          <Copyright />
        </section>
      </>
    );
  };
  const LandingPage = () => {
    const handlePointerMove = (e) => {
      // Check if touch event
      if (e.touches && e.touches.length > 0) {
        // If touch event, get coordinates from first touch point
        setPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      } else {
        // If mouse event, get coordinates from mouse pointer
        setPosition({ x: e.clientX, y: e.clientY });
      }
    };

    return (
      <section
        onClick={handleEntryClick}
        onMouseMove={handlePointerMove}
        onTouchMove={handlePointerMove}
        className="landing-page"
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, var(--home_landing-cursor-inline), var(--home_landing-cursor-outline)) `,
        }}
      >
        <div className="title-wrapper">
          <h1 className="name EN">
            JUL<span className="italic">I</span>E<br /> C
            <span className="italic">H</span>OU
          </h1>
          <h2 className="statement">{t('homePage.brief')}</h2>
          <p className="click-to-start EN">click to start</p>
        </div>
      </section>
    );
  };
  const handleEntryClick = () => {
    setShowMainPage(true);
  };
  return (
    <Style>
      <main>{showMainPage ? <MainPage /> : <LandingPage />}</main>
    </Style>
  );
};

export default Homepage;
