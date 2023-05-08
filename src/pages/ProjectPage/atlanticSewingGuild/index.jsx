import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from 'styles/device';

const ComingSoon = styled.div`
  width: 90vw;
  height: 100vh;
  margin: 0 auto;
  margin-top: 50vh;
  background-color: var(--primary-bg);
  color: var(--primary-text);
  .container {
    transform: translateY(-50%);
  }
  h1 {
    font-size: 20vw;
    @media ${device.tablet} {
      font-size: 15vw;
    }
    @media ${device.laptop} {
      font-size: 18vw;
    }
  }

  .link-wrapper {
    width: fit-content;
    margin-top: 2rem;
    margin-left: auto;
    padding: 1rem 3rem;
    border: 1px solid var(--primary-text);
    border-radius: 80%;
    @media ${device.tablet} {
      margin-top: 0;
    }
    &:hover {
      background-color: var(--project_comingSoon-btn-bg--hover);
      color: var(--project_comingSoon-btn-text--hover);
    }
  }
`;
const AtlanticSewingGuild = () => {
  return (
    <ComingSoon>
      <div className="container">
        <h1>COMING SOON!</h1>
        <div className="link-wrapper">
          <Link to="/projects">
            <h3>BACK</h3>
          </Link>
        </div>
      </div>
    </ComingSoon>
  );
};

export default AtlanticSewingGuild;
