import styled from 'styled-components';
import '../../../styles/color.scss';
import { device } from 'styles/device';

const StyledFooter = styled.footer`
  font-weight: 300;
  font-size: 14px;
  height: 40px;
  width: 100%;
  padding: 0 4.5%;
  background-color: var(--light);
  @media ${device.laptop} {
    padding-left: 3%;
    padding-right: 3%;
  }
`;

const Footer = () => {
  return <StyledFooter>© / 2023</StyledFooter>;
};

export default Footer;
