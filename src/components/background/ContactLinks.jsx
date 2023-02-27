import { GithubIcon, LinkedInIcon, EmailIcon } from 'assets/images';
import '../../styles/color.scss';
import { device } from '../../styles/device.js';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    height: 15vh;
    flex-direction: column;
  }
`;

const A = styled.a`
  color: var(--grey600);
`;

const ContactLinks = () => {
  return (
    <Wrapper>
      <A href="https://github.com/JulieDeveloper">
        <GithubIcon />
      </A>
      <A href="https://github.com/JulieDeveloper">
        <LinkedInIcon />
      </A>
      <A href="mailto:chouyuan424@gmail.com">
        <EmailIcon />
      </A>
    </Wrapper>
  );
};

export default ContactLinks;
