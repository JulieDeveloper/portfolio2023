import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import styled, { keyframes } from 'styled-components';
import { device } from 'styles/device';

const Style = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  justify-self: center;

  @media ${device.tablet} {
    justify-self: start;
    margin-left: 20%;

    grid-row: 2/3;
    grid-column: 1/2;
  }

  display: flex;
  width: 6rem;
  height: 8rem;
  justify-content: space-between;

  .main-half,
  .sub-half {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: fit-content;
    height: 100%;
  }
  .main-line {
    border-right: 1px solid var(--01-darkmode-animation_line);
    flex-grow: 1;
  }

  .sub-line {
    border-left: 1px solid var(--01-darkmode-animation_line);
    flex-grow: 1;
  }

  .main-circle,
  .sub-circle {
    aspect-ratio: 1/2;
    border: 1px solid var(--01-darkmode-animation_circle-border);
  }
  .main-circle {
    width: 3rem;
    margin-top: 1rem;
    border-radius: 6rem 0 0 6rem;
  }
  .sub-circle {
    width: 2rem;
    margin-bottom: 1rem;

    border-radius: 0 4rem 4rem 0;
  }

  /* animation */
  &.animation {
    animation: ${keyframes`
      0%,25%{
        transform: rotate(0); 
        transform-origin: center;
      }
      50%{
        transform: rotate(90deg); 
        transform-origin: center;
      }
       75%,100%{
        transform: rotate(180deg); 
        transform-origin: center;
       }

    `} 1s linear 1;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;

    .main-line,
    .sub-line {
      animation: ${keyframes`
      0%,100%{
        opacity: 1;
      }
      10%,90%{
        opacity: 0;
      }
     
    `} 2s linear 1;

      animation-fill-mode: forwards;
    }

    .main-circle {
      animation: ${keyframes`
        10% {
          height:5rem;
          width: 2.5rem;
          margin-bottom: 0;
          border-radius: 5rem 0 0 5rem;
          transform: translate(0.5rem, -1.5rem) ;
          transform-origin: 100% center;
        }

       
        80%{
          transform: translate(0.5rem, -1.5rem);
          transform-origin: 100% center;
          margin-bottom: 0;
          width:2.5rem;
          border-radius: 5rem 0 0 5rem;


        }
        100%{
          transform: translate(0);
          transform-origin: 100% center;
          width: 2rem;
          margin-top: 1rem;
          border-radius: 4rem 0 0 4rem;

        }
      `} 1s linear 1;
      animation-delay: 0.5s;
      animation-fill-mode: forwards;
    }

    .sub-circle {
      animation: ${keyframes`
        10% {
          height:5rem;
          width: 2.5rem;
          border-radius:0 5rem 5rem 0;
          transform: translate(-0.5rem, 1.5rem);

        transform-origin: 0% center;

        }
       
    
        80%{
          margin-top: 0;
        height:5rem;
          width: 2.5rem;
          border-radius:0 5rem 5rem 0;
          transform: translate(-0.5rem, 1.5rem);
        transform-origin: 0% center;

        }
        100%{
           width:3rem;
          margin-top: 0;

          transform: translate(0);
          transform-origin: 0% center;
          margin-bottom: 1rem;
          border-radius: 0 6rem 6rem 0;

        }
      `} 1s linear 1;
      animation-fill-mode: forwards;
      animation-delay: 0.5s;
    }
  }
  &.turn-from-dark {
    .main-circle {
      background-color: var(--01-darkmode-animation_main-circle-bg);
    }

    .sub-circle {
      background-color: var(--01-darkmode-animation_sub-circle-bg);
    }
  }
  &.turn-from-light {
    .main-circle {
      background-color: var(--01-darkmode-animation_sub-circle-bg);
    }

    .sub-circle {
      background-color: var(--01-darkmode-animation_main-circle-bg);
    }
  }
`;
const DarkmodeAnimation = ({ isDark }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const containerEl = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          containerEl.classList.remove('animation');
          containerEl.classList.add('animation');
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(containerEl);

    return () => {
      observer.unobserve(containerEl);
    };
  }, [isDark]);

  return (
    <Style
      ref={containerRef}
      className={clsx(
        'container',
        isDark ? 'turn-from-light' : 'turn-from-dark',
      )}
    >
      <div className="main-half">
        <div className="main-line" />
        <div className="main-circle" />
      </div>
      <div className="sub-half">
        <div className="sub-circle" />
        <div className="sub-line" />
      </div>
    </Style>
  );
};
export default DarkmodeAnimation;
