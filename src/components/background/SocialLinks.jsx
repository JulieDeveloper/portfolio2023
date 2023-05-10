import { GithubIcon, LinkedInIcon, EmailIcon } from 'assets/images/icons';
import { device } from '../../styles/device.js';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const DefaultStyle = styled.div`
  display: flex;
  width: 40vw;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    width: 20vw;
    height: 15vh;
    flex-direction: row;
    justify-content: space-between;
    height: fit-content;
  }

  @media ${device.laptop} {
    height: 15vh;
    width: fit-content;
    flex-direction: column;
  }

  a {
    svg path {
      fill: var(--socialIcon-mobile);

      @media ${device.laptop} {
        fill: var(--socialIcon-laptop);
      }
    }

    &:hover svg path,
    &:active svg path {
      fill: var(--socialIcon-mobile--hover);
      @media ${device.laptop} {
        fill: var(--socialIcon-laptop--hover);
      }
    }
  }
`;

const SocialLinksJSX = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  return (
    <>
      <a href="mailto:contact@juliechou.com" className="EN">
        {isHomePage ? 'EMAIL' : <EmailIcon />}
      </a>
      <a href="https://github.com/JulieDeveloper" className="EN">
        {isHomePage ? 'GITHUB' : <GithubIcon />}
      </a>
      <a href="https://www.linkedin.com/in/julie-yuan-chou/" className="EN">
        {isHomePage ? 'LINKEDIN' : <LinkedInIcon />}
      </a>
    </>
  );
};

export default function SocialLinks() {
  return (
    <DefaultStyle>
      <SocialLinksJSX />
    </DefaultStyle>
  );
}

export { DefaultStyle, SocialLinksJSX };
