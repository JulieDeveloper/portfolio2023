import { Link } from 'react-router-dom';

import Background from 'components/background/Background';
import styled from 'styled-components';
import clsx from 'clsx';
import { device } from 'styles/device';
import '../styles/color.scss';
import { useState } from 'react';
import { ArrowRightIcon } from '../assets/images';

const Container = styled.div`
  .line {
    display: none;
  }
  .items-wrapper {
    width: 100%;
  }

  @media ${device.tablet} {
    display: flex;
    width: 100%;

    .line {
      display: block;
      margin-right: 10vw;
      height: 150px;
      width: 1px;
      background-color: var(--grey600);
    }
  }
`;

const projectsData = [
  {
    id: 1,
    type: 'Personal Website',
    name: 'Portfolio 2023',
    role: 'Design / Development ',
    brief:
      'Clean and concise. Consists of three sections – the homepage with his bio, a dedicated project page, and a contact page.',
    techStack: 'HTML, SCSS, React',
    path: '/projects/portfolio2023',
  },
  {
    id: 2,
    type: 'E-commerce Website',
    name: 'GATE 6 CAFE',
    role: 'Design / Development',
    brief:
      'Clean and concise. Consists of three sections – the homepage with his bio, a dedicated project page, and a contact page.',
    techStack: 'HTML, SCSS, React',
    path: '/projects/Gate6-cafe',
  },
  {
    id: 3,
    type: 'Catering Cloud POS',
    name: 'POINT',
    role: 'Design / Development ',
    brief:
      'Clean and concise. Consists of three sections – the homepage with his bio, a dedicated project page, and a contact page.',
    techStack: 'HTML, SCSS, React',
    path: '/projects/point',
  },
  {
    id: 4,
    type: 'Personal Website',
    name: 'FUN-NI LEE',
    role: 'Development ',
    brief:
      'Clean and concise. Consists of three sections – the homepage with his bio, a dedicated project page, and a contact page.',
    techStack: 'HTML, SCSS, React',
    path: '/projects/Fun-Ni-Lee',
  },
];

const StyledProject = styled.div`
  display: flex;
  font-size: 8px;
  margin-bottom: 5vh;
  width: 100%;

  .num {
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;600&display=swap');

    font-family: 'Raleway', sans-serif;
    font-weight: 100;
    color: var(--grey800);
    margin-right: 2vh;
    height: 24px;
    line-height: 24px;
    vertical-align: baseline;
  }

  .wrapper {
    width: 100%;
    .row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding-bottom: 4px;
      border-bottom: 0.5px solid var(--grey600);

      .type {
        font-weight: 300;
        color: var(--grey800);
      }

      .name {
        font-weight: 400;
        font-size: 1.5em;
        color: var(--dark);
      }
    }
    .role {
      margin-top: 3px;
      font-weight: 300;
      color: var(--grey800);
      opacity: 50%;
      text-align: end;
    }
    .collapse {
      padding-left: 20%;
      text-align: end;
      font-weight: 300;

      .techStack {
        margin-top: 3vh;
      }
      .brief {
        margin-top: 1vh;
      }
      svg {
        margin-top: 3vh;
        path {
          fill: var(--dark);
        }
      }
    }
  }

  &.active {
    .num {
      font-size: 1.5em;
    }
    .wrapper {
      .row .type {
        color: var(--dark);
      }
      .role {
        opacity: 100%;
        color: var(--dark);
      }
    }
  }
  @media ${device.tablet} {
    font-size: 10px;
  }

  @media ${device.laptop} {
    font-size: 1em;
    .num {
      height: 32px;
      /* line-height: 32px */
      display: flex;
      align-items: flex-end;
    }
    &.active {
      .wrapper {
        .row {
          height: 32px;

          all: unset;
          display: flex;
          justify-content: space-between;

          .type {
            width: 40%;
            margin-top: auto;
            padding-bottom: 4px;
            border-bottom: 0.5px solid var(--grey600);
          }
          .name {
            font-size: 32px;
          }
        }
        .role {
          text-align: start;
        }
        .collapse .techStack {
          margin-top: 0;
        }
      }
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
  path,
  isShowed,
  setIsShowed,
  showedProject,
  setShowedProject,
}) => {
  const handleClick = (e) => {
    e.stopPropagation();
    setShowedProject(id);
    setIsShowed(true);
  };

  const detail = isShowed && showedProject === id && (
    <div className="collapse">
      <div className="techStack">{techStack}</div>
      <div className="brief">{brief}</div>
      <Link to={path}>
        <ArrowRightIcon />
      </Link>
    </div>
  );

  const number = num.toString().length < 2 ? '0' + num : num;

  return (
    <StyledProject
      className={clsx(isShowed && showedProject === id && 'active')}
      onClick={(e) => handleClick(e)}
    >
      <div className="num">{number}</div>
      <div className="wrapper">
        <div className="row">
          <div className="type">{type}</div>
          <div className="name">{name}</div>
        </div>
        <div className="role">{role}</div>
        {detail}
      </div>
    </StyledProject>
  );
};

const ProjectsPage = () => {
  const [showedProject, setShowedProject] = useState('');
  const [isShowed, setIsShowed] = useState(false);
  const handleOutsideClick = () => {
    if (!isShowed) {
      return;
    }
    setShowedProject('');
    setIsShowed(false);
  };

  return (
    <div onClick={handleOutsideClick}>
      <Background>
        <Container>
          <div className="line"></div>
          <div className="items-wrapper">
            {projectsData.map((data, index) => (
              <Project
                key={data.id}
                id={data.id}
                num={index + 1}
                type={data.type}
                name={data.name}
                role={data.role}
                brief={data.brief}
                techStack={data.techStack}
                path={data.path}
                isShowed={isShowed}
                setIsShowed={setIsShowed}
                showedProject={showedProject}
                setShowedProject={setShowedProject}
              />
            ))}
          </div>
        </Container>
      </Background>
    </div>
  );
};

export default ProjectsPage;
