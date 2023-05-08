import styled from 'styled-components';

import colorList from './colorList';
import { device } from 'styles/device';

const CardStyle = styled.div`
  position: absolute;
  top: calc(8vh * ${(props) => props.index});
  left: 10%;
  display: flex;
  justify-content: space-between;
  padding: 4px;
  width: 80%;
  aspect-ratio: 5/3;

  border-radius: 5px;
  box-shadow: 4px 4px 8px var(--01-color_cards-shadow);

  background-color: var(${(props) => props.color});

  z-index: ${(props) => props.index};
  transition: 0.3s;
  cursor: pointer;
  @media ${device.tablet} {
    border-radius: 10px;
    width: 60%;
    aspect-ratio: 7/3;
  }

  &:hover,
  &:active {
    box-shadow: 8px 8px 8px var(--01-color_cards-shadow);
    transform: translateY(-15%) translateX(20%);
    @media ${device.tablet} {
      transform: translateY(-20%) translateX(30%);
    }
  }
  &:hover ~ &,
  &:active ~ & {
    transform: translateY(50%);
    @media ${device.tablet} {
      transform: translateY(45%);
    }
  }
  .color-area {
    flex-basis: 90%;
    width: 100%;

    background-color: var(${(props) => props.color});
    border-radius: 5px;
  }
  .Aa {
    margin-left: auto;
    margin-top: auto;
    font-family: 'Menlo';
    font-size: 2em;
    color: ${(props) =>
      props.color === '--white' || props.color === '--cream'
        ? 'var(--01-color_cards-Aa-sub)'
        : 'var(--01-color_cards-Aa)'};
  }
`;

const ColorCards = ({ handleDemoChange }) => {
  return (
    <div className="cards">
      {colorList.map((data) => {
        return (
          //TODO
          <CardStyle
            color={'--' + data.name}
            key={data.id}
            index={data.id}
            onClick={handleDemoChange({
              type: 'color',
              value: {
                name: data.name,
                hex: data.hex,
                rgb: data.rgb,
              },
            })}
          >
            {/* <div className="color-area"></div> */}
            {/* <div className="hole"></div> */}
            <div className="Aa">Aa</div>
          </CardStyle>
        );
      })}
    </div>
  );
};
export default ColorCards;
