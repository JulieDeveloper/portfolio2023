import styled from 'styled-components';
import clsx from 'clsx';

const Icon = styled.div`
  width: fit-content;
  height: fit-content;
  cursor: pointer;

  &.active span:first-child {
    transform: translateY(3px) rotate(45deg);
    background-color: var(--hamburger-icon);
  }

  &.active span:last-child {
    transform: translateY(-3px) rotate(-45deg);
    background-color: var(--hamburger-icon);
  }

  span {
    display: block;
    height: 2px;
    width: 25px;
    margin-block: 4px;
    background-color: var(--hamburger-icon);
    border-radius: 4px;
    transition: transform 0.5s, opacity 0.25s;
  }
`;

const HamburgerIcon = ({ isMenuActive, setIsMenuActive }) => {
  return (
    <Icon
      className={clsx(isMenuActive && 'active')}
      onClick={() => {
        setIsMenuActive(!isMenuActive);
      }}
    >
      <span />
      <span />
    </Icon>
  );
};

export default HamburgerIcon;
