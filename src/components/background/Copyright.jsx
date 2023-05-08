import styled from 'styled-components';

const Style = styled.p`
  width: 100%;
  height: var(--footer-height);

  text-align: center;
  line-height: var(--footer-height);
`;

const Copyright = () => {
  return (
    <Style>
      <p className="copyright">© / 2023</p>
    </Style>
  );
};

export default Copyright;
