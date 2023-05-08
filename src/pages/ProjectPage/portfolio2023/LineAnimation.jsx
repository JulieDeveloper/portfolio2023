import { v4 as uuidv4 } from 'uuid';
import { device } from 'styles/device.js';
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from 'context/WindowSizeContext';

const Style = styled.div`
  @media ${device.tablet} {
    position: absolute;
    top: 50%;
    left: 0;
    height: 1px;

    width: 100%;
    display: grid;
    grid-template-columns: 1fr 5fr 1.5fr 1fr 1.5fr;
    grid-template-rows: 1fr 1.5fr 3fr 1.5fr 1fr;
    animation: ${keyframes`
          to{
            height: 25vw;
          }
        `} 8s ease-out 1;
    animation-delay: 4s;
    animation-fill-mode: forwards;

    /* align center */
    top: 50%;
    transform: translateY(-50%);

    .lines-group {
      grid-row: 2/5;
      display: flex;
      justify-content: space-evenly;
      &:nth-child(1),
      &:nth-child(3),
      &:nth-child(5) {
        animation: ${keyframes`
              to{
                grid-row: 1/4;
              }
            `} 0.2s linear 1;
        animation-delay: 12s;
        animation-fill-mode: forwards;
      }
      &:nth-child(1) {
        grid-column: 1/2;
      }
      &:nth-child(2) {
        grid-column: 2/3;
      }
      &:nth-child(3) {
        grid-column: 3/4;
      }
      &:nth-child(4) {
        grid-column: 4/5;
        animation: ${keyframes`
              to{
                grid-row: 3/6;
              }
            `} 0.2s linear 1;
        animation-delay: 12s;
        animation-fill-mode: forwards;
      }
      &:nth-child(5) {
        grid-column: 5/6;
      }
    }
    .lines-group .line {
      width: 4px;
      border: 1px solid var(--dark);
    }
  }
  @media ${device.laptop} {
    height: 2px;
    animation: ${keyframes`
          to{
            height:22vw;
          }
        `} 8s ease-out 1;
    animation-delay: 4s;
    animation-fill-mode: forwards;
  }
`;

const LineAnimation = () => {
  const { width } = useWindowSize();

  const getLines = (group) => {
    const isTablet = width < 1024;
    let num;
    switch (group) {
      case 1:
        num = isTablet ? 8 : 10;
        break;
      case 2:
        num = isTablet ? 35 : 45;
        break;
      case 3:
        num = isTablet ? 10 : 15;
        break;
      case 4:
        num = isTablet ? 7 : 10;
        break;
      case 5:
        num = isTablet ? 10 : 15;
        break;

      default:
        console.log('getLines switch method error!');
        break;
    }
    const linesAmount = Array.from({ length: Number(num) });

    return linesAmount.map((emptyElement, index) => {
      return <div className="line" key={uuidv4()}></div>;
    });
  };
  return (
    <Style>
      <div className="lines-group">{getLines(1)}</div>
      <div className="lines-group">{getLines(2)}</div>
      <div className="lines-group">{getLines(3)}</div>
      <div className="lines-group">{getLines(4)}</div>
      <div className="lines-group">{getLines(5)}</div>
    </Style>
  );
};

export default LineAnimation;
