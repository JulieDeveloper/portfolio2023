import styled from 'styled-components';
import SocialLinks from './SocialLinks';
import Navbar from './Navbar';

const Bar = styled.div`
  position: fixed;
  z-index: 600;
  top: var(--header-height);
  right: ${(props) => props.right && '0'};
  left: ${(props) => props.left && '0'};
  height: calc(100vh - var(--header-height) - var(--footer-height));
  width: 3rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.right ? 'center' : 'start')};
  align-items: center;
`;

const SideBars = () => {
  return (
    <>
      <Bar left>
        <Navbar />
      </Bar>
      <Bar right>
        <SocialLinks />
      </Bar>
    </>
  );
};
export default SideBars;
