import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import clsx from 'clsx';
import { device } from 'styles/device';
import Header from 'components/background/Header';
import Background from 'components/background';
import Themes from 'components/background/Themes';
import { ArrowRightIcon } from '../assets/images/icons';
import ProjectsData from '../data/ProjectsData';

const Style = styled.div`
  .container {
    position: relative;
    height: 100svh;
    width: 100vw;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  .hero-title-wrapper {
    position: absolute;
    top: 70svh;
    width: 100%;
    height: fit-content;
    padding-top: 1rem;

    transform-origin: center bottom;
    transform: ${({ scrolled }) =>
      scrolled
        ? `scale(${scrolled}) translateY(${scrolled}px)`
        : 'scale(1) translateY(0)'};

    text-align: center;
    @media ${device.tablet} {
      transform: ${({ scrolled }) =>
        scrolled
          ? `scale(${scrolled}) translateY(${scrolled}px)`
          : 'scale(3) translateY(0)'};
    }

    &.hidden {
      opacity: 0;
      transition: transform 0.5s ease-in;
    }

    .hero-title {
      font-weight: 600;
      line-height: 80%;

      &:first-child {
        font-size: 4rem;
        transform: skew(-5deg);
        transform-origin: bottom;
        transition: font-size 0.5s ease;

        span {
          display: inline-block;
          transform: skew(-15deg);
          font-weight: inherit;
        }
      }

      &:last-child {
        font-size: 5rem;
        transition: font-size 0.5s ease;

        transform: skew(-15deg);
        transform-origin: top;
        span {
          display: inline-block;
          transform: skew(15deg);
          transform-origin: top;

          font-weight: inherit;
        }
      }
    }
  }
  .list-wrapper {
    position: absolute;
    top: 100%;
    z-index: 1;
    width: 100vw;
    height: fit-content;
    padding-bottom: var(--footer-height);

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .copyright-wrapper {
    position: absolute;
    bottom: 0;
    z-index: 1;
    width: 100vw;
  }
`;
const StyledProject = styled.div`
  /* default */
  position: relative;
  width: 100vw;
  height: fit-content;
  padding: 5svh 2vw;

  display: flex;
  flex-direction: column;
  border-bottom: 0.5px solid var(--project_border);

  cursor: pointer;
  @media ${device.tablet} {
    padding: 5svh 5vw;
    padding-right: 0;
    flex-direction: row;
    align-items: center;
  }

  .num {
    position: absolute;

    top: 50%;
    transform: translateY(-50%);

    right: 1rem;
    font-size: 10vw;
    line-height: 10vw;

    font-weight: 100;
    color: var(--project_num);
    opacity: 50%;

    &:hover {
      opacity: 100%;
    }
    @media ${device.tablet} {
      font-size: 8vw;
      line-height: 8vw;
    }
  }

  .name {
    font-size: 8vw;
    white-space: nowrap;
    @media ${device.tablet} {
      font-size: 5vw;
    }
  }

  .info-row {
    @media ${device.tablet} {
      margin-inline: 2rem;
    }
    .info-row-text .role {
      font-weight: 100;
    }
    .control-collapse-btn {
      visibility: hidden;
      position: absolute;

      right: 1rem;
      bottom: 1rem;
      height: 5svh;
      width: 5svh;
      cursor: pointer;
      @media ${device.tablet} {
        right: 15vw;
        top: 50%;
        transform: translateY(-50%);
      }

      &::before,
      &::after {
        content: '';
        position: absolute;
        right: 50%;
        height: 5svh;
        width: 1px;
        background-color: var(--project_x-btn);
      }
      &::after {
        transform: rotate(90deg);
        right: 50%;

        transform-origin: center;
      }
    }
  }

  /* default hover style */
  &:hover:not(.is-select):not(.low-opacity),
  &:active:not(.is-select):not(.low-opacity) {
    background-color: var(--project-hover-bg);

    .num {
      opacity: 100%;
    }
    .name::first-letter {
      font-style: italic;
    }
    .control-collapse-btn {
      visibility: visible;
    }
  }

  /* isSelect */
  &.is-select {
    width: 100%;
    justify-content: center;
    padding: 8svh 10vw;
    padding-bottom: 5svh;
    background-color: var(--project_selected-bg);
    color: var(--project_selected-text);
    transition: 0.6s ease-in;

    cursor: default;
    border-top: 1px solid var(--project_selected-border);
    border-bottom: 1px solid var(--project_selected-border);

    @media ${device.tablet} {
      padding: 5svh 5vw;
      flex-direction: column;
      align-items: flex-start;
    }

    .num {
      visibility: hidden;
      right: 0;
      font-style: normal;
      opacity: 1;

      @media ${device.tablet} {
        visibility: visible;
        top: 5svh;
        right: 1rem;
        transform: translate(0);
      }
    }
    .name {
      font-style: italic;
      transition: 0.6s ease-in;
    }
    .info-row {
      margin-top: 1rem;
      @media ${device.tablet} {
        margin-top: 0;
        margin-inline: 0;
        flex-basis: 50%;
      }
    }

    .control-collapse-btn {
      visibility: visible;
      top: 2svh;

      &:hover,
      &:active {
        transform: rotate(180deg);
        transform-origin: center;
        transition: transform 0.5s ease-in;
        @media ${device.tablet} {
          transform: translateY(-50%) rotate(180deg);
        }
      }

      &::before,
      &::after {
        transform: rotate(45deg);
        transition: all 0.5s ease-in;
      }
      &::after {
        transform: rotate(135deg);
      }
      @media ${device.tablet} {
        top: 8svh;
        right: 20vw;
      }
      @media ${device.laptop} {
        top: 4.5rem;
        right: 15vw;
      }
    }
    .collapse {
      margin-top: 5svh;
      text-align: start;
      display: flex;
      flex-direction: column;
      color: var(--project_selected-collapse-text);

      .flex {
        display: flex;
        flex-direction: column;

        .text-wrapper {
          font-size: 0.85em;

          .techStack {
            margin-top: 0.5rem;

            width: fit-content;
            padding: 5px 10px;
            border-radius: 10px;
            border: 1px solid var(--project_techstack-border);
            color: var(--project_techstack-text);
            background-color: var(--project_techstack-bg);
          }
          .brief {
            @media ${device.tablet} {
              width: 60%;
            }
            @media ${device.laptop} {
              width: 40%;
            }
          }
        }
        a {
          display: inline-block;
        }
        .arrow-wrapper {
          opacity: 0;
          position: absolute;
          right: 1rem;
          bottom: 5svh;

          @media ${device.tablet} {
            right: 1rem;
            bottom: calc(5svh + 100px);
          }
          @media ${device.laptop} {
            right: 5vw;
            bottom: 5svh;
          }
          svg path {
            fill: var(--0grey);
          }
        }
      }

      .img-wrapper {
        height: 40vw;
        width: 100%;
        margin: 2rem 0;

        background-image: url(${(props) => props.imageUrl});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;

        @media ${device.tablet} {
          width: 55vw;
          max-height: 200px;
          opacity: 0.6;
        }
        @media ${device.laptop} {
          margin: 0;
          width: 30vw;
          height: 200px;
          position: absolute;
          left: 45%;
          bottom: 5svh;

          z-index: 1;
          background-position: bottom;
        }
      }
    }
    .link:hover,
    .link:active {
      .arrow-wrapper {
        opacity: 1;
        transform: scale(4);
        transform-origin: right;

        transition: opacity 0.6s ease-in;

        @media ${device.tablet} {
          transform: scale(5);
        }
        @media ${device.laptop} {
          transform: scale(6);
        }
      }
      .img-wrapper {
        opacity: 1;
      }
    }
  }
  /* low-opacity */
  /* when the items are not selected */
  &.low-opacity {
    opacity: 0.5;
    .name {
      font-size: 4vw;
    }
  }
  &.low-opacity:hover,
  &.low-opacity:active {
    opacity: 0.8;
    color: var(--project_low-hover-text);

    background-color: var(--project_low-hover-bg);
    border-bottom: 1px solid var(--project_low-hover-border);
    .num {
      color: var(--project_low-hover-num);
      opacity: 50%;
    }
    .name {
      font-size: 4.1vw;
    }
  }
  @media ${device.laptop} {
    .num {
      right: 5vw !important;
    }
  }
`;
const Project = ({
  id,
  num,
  type,
  name,
  role,
  brief,
  techStack,
  imageUrl,
  path,
  isSelect,
  setIsSelect,
  selectedId,
  setSelectedId,
}) => {
  const projectRef = useRef(null);

  const handleClick = (e) => {
    e.stopPropagation();
    if (!isSelect || selectedId !== id) {
      setSelectedId(id);
      setIsSelect(true);
    }
    projectRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const handleCollapseBtnClick = () => {
    if (!isSelect) {
      setSelectedId(id);
      setIsSelect(true);
    } else if (isSelect) {
      setIsSelect(false);
      setSelectedId(null);
    }
  };

  const detail = isSelect && selectedId === id && (
    <>
      <Link to={path} className="link">
        <div className="collapse">
          <div className="flex">
            <div className="text-wrapper">
              <div className="brief">{brief}</div>
              <div className="techStack">{techStack}</div>
            </div>
            <div className="arrow-wrapper">
              <ArrowRightIcon />
            </div>
          </div>

          <div className="img-wrapper"></div>
        </div>
      </Link>
    </>
  );

  const number = num.toString().length < 2 ? '0' + num : num;

  return (
    <StyledProject
      ref={projectRef}
      imageUrl={imageUrl}
      className={clsx(
        isSelect && selectedId === id && 'is-select',
        isSelect && selectedId !== id && 'low-opacity',
      )}
      onClick={(e) => handleClick(e)}
    >
      <div className="num">{number}</div>

      <h3 className="name">{name}</h3>
      <div className="info-row">
        <div className="info-row-text">
          <div className="type">{type}</div>
          <div className="role">{role}</div>
        </div>
        <div
          className="control-collapse-btn"
          onClick={handleCollapseBtnClick}
        ></div>
      </div>

      {detail}
    </StyledProject>
  );
};

const ProjectsPage = () => {
  const [selectedId, setSelectedId] = useState('');
  const [isSelect, setIsSelect] = useState(false);
  const [scrolled, setScrolled] = useState(0);
  const [isListAtCenter, setIsListAtCenter] = useState(false);
  const containerRef = useRef(null);
  const heroWrapperRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    function handleScroll() {
      setScrolled(container.scrollTop);

      if (container.scrollTop >= container.clientHeight * 0.5) {
        setIsListAtCenter(true);
      } else {
        setIsListAtCenter(false);
      }
    }
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      <Background>
        <Style scrolled={scrolled * 0.03} isSelect={isSelect}>
          <div className="container" ref={containerRef}>
            <div
              className={`hero-title-wrapper EN ${isListAtCenter && 'hidden'} `}
              scrolled={scrolled}
              ref={heroWrapperRef}
            >
              <h1 className="hero-title">
                <span>R</span>ECENT
              </h1>
              <h1 className="hero-title">
                <span>W</span>ORK
              </h1>
            </div>

            <div className="list-wrapper">
              {ProjectsData().map((data, index) => (
                <Project
                  key={data.id}
                  id={data.id}
                  num={index + 1}
                  type={data.type}
                  name={data.name}
                  role={data.role}
                  brief={data.brief}
                  techStack={data.techStack}
                  imageUrl={data.imageUrl}
                  path={data.path}
                  isSelect={isSelect}
                  setIsSelect={setIsSelect}
                  selectedId={selectedId}
                  setSelectedId={setSelectedId}
                />
              ))}
            </div>
          </div>
        </Style>

        <Themes />
      </Background>
    </>
  );
};

export default ProjectsPage;
