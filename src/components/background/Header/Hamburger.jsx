import styled from 'styled-components';
import clsx from 'clsx';
import '../../../styles/color.scss';

const Icon = styled.div`
  cursor: pointer;

  &.active span:first-child {
    transform: translateY(3px) rotate(45deg);
  }

  &.active span:last-child {
    transform: translateY(-3px) rotate(-45deg);
  }

  span {
    display: block;
    height: 2px;
    width: 25px;
    margin-block: 4px;
    background-color: var(--dark);
    border-radius: 4px;
    transition: transform 0.5s, opacity 0.25s;
  }
`;

const Hamburger = ({ isMenuActive, setIsMenuActive }) => {
  return (
    <Icon
      className={clsx(isMenuActive && 'active')}
      onClick={() => {
        setIsMenuActive(!isMenuActive);
      }}
    >
      <span></span>
      <span></span>
    </Icon>
  );
};

export default Hamburger;
