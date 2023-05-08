import styled from 'styled-components';
import { device } from './device';

const Container = styled.div`
  .line {
    display: none;
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

export default Container;
