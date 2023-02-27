import styled from 'styled-components';
import '../../../styles/color.scss';
import ContactLinks from '../ContactLinks';
import { device } from 'styles/device';

const Item = styled.div`
  display: flex;
  width: 100vw;
  padding-right: 20vw;
  justify-content: space-between;
  align-items: center;
  background-color: var(--light);
  cursor: pointer;

  &.page {
    padding-top: 3vh;
    padding-left: 40vw;
  }

  &.contact {
    padding-top: 5vh;
    padding-left: 50vw;
  }

  @media ${device.tablet} {
    all: unset;
    height: auto;
    display: flex;
    flex-direction: column-reverse;
    width: auto;

    &.page {
      all: unset;
      cursor: pointer;
    }
  }
`;
const Line = styled.span`
  width: 16px;
  height: 1px;
  background-color: var(--grey600);
  box-shadow: 0px 4px 4px var(--dark-shadow);

  &.active {
    transform: rotate(-40deg);
    background-color: var(--dark);
  }

  @media ${device.tablet} {
    all: unset;
    display: none;
  }
`;
const Text = styled.div`
  font-weight: 300;
  font-size: 14px;
  color: var(--grey800);
  text-shadow: 0px 4px 4px var(--dark-shadow);
  &.active {
    color: var(--dark);
  }

  @media ${device.tablet} {
    font-weight: 400;
    font-size: 16px;
    &.active {
      border-bottom: 1px solid var(--dark);
      padding-bottom: 5px;
    }
  }
`;

const NavItem = ({ type, isActive, text }) => {
  const status = isActive ? 'active' : '';

  if (type === 'page') {
    return (
      <Item className={type}>
        <Line className={status} />
        <Text className={status}>{text}</Text>
      </Item>
    );
  } else if (type === 'contact') {
    return (
      <Item className={type}>
        <ContactLinks />
      </Item>
    );
  }
};

export default NavItem;
