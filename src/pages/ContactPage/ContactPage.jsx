import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { device } from 'styles/device';
import Fade from 'react-reveal/Fade';
import ContactForm from './ContactForm';
import Header from 'components/background/Header';
import Background from 'components/background';
import Themes from 'components/background/Themes';

const Style = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20vh var(--page-paddingX);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${device.tablet} {
    padding: 15vh var(--page-paddingX);

    flex-direction: row;
    align-items: center;
  }
  .scroll-snap-item {
    width: 100%;
    height: 100vh;
  }

  .text-wrapper,
  .message-wrapper {
    flex-basis: 50%;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }

  .message-wrapper {
    margin-top: 10vh;
    @media ${device.tablet} {
      flex-basis: 40%;
      margin-top: 10%;
    }

    .form-wrapper {
      @media ${device.tablet} {
        width: 90%;
      }
    }
  }
`;
const ContactPage = () => {
  const { t } = useTranslation([''], { keyPrefix: 'contactPage' });

  return (
    <>
      <Header />
      <Background>
        <Style>
          <Fade top>
            <div className="text-wrapper">
              <p>{t('emailMe')}</p>
              <h1 className="email">
                <a href="mailto:contact@julie-chou.com">
                  contact@juliechou.com
                </a>
              </h1>
            </div>
          </Fade>

          <Fade bottom>
            <div className="message-wrapper">
              <div className="form-wrapper">
                <ContactForm />
              </div>
            </div>
          </Fade>
        </Style>
        <Themes />
      </Background>
    </>
  );
};

export default ContactPage;
