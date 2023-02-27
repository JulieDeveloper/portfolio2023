import Background from 'components/background/Background';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';

import { device } from 'styles/device';
import '../styles/color.scss';

const Container = styled.div`
  .line {
    display: none;
  }
  .items-wrapper {
    width: 100%;
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
  font-weight: 700;
  font-size: 20px;
`;
const SubTitle = styled.div`
  font-weight: 300;
  font-size: 10px;
  margin-top: 15px;
  .email {
    font-weight: 700;
  }
`;

const ContactPage = () => {
  return (
    <Background>
      <Container>
        <div className="line"></div>
        <div className="items-wrapper">
          <Title>TALK TO ME.</Title>
          <SubTitle>
            Get in touch directly on <br></br>
            <span className="email">contact@julie-chou.com</span>
          </SubTitle>
          <ContactForm />
        </div>
      </Container>
    </Background>
  );
};

export default ContactPage;
