import { useState } from 'react';
import styled from 'styled-components';
import '../../styles/color.scss';
import { device } from '../../styles/device.js';

import { DarkThemeIcon, LightThemeIcon } from 'assets/images';

const Wrapper = styled.div`
  display: flex;
  width: 25vw;
  justify-content: space-between;
  align-items: center;
  color: var(--dark);

  @media ${device.tablet} {
    width: 4.5vw;
    height: 12vh;
    flex-direction: column;
  }
`;

const Line = styled.span`
  height: 17px;
  width: 1px;
  background-color: var(--dark);

  @media ${device.tablet} {
    height: 1px;
    width: 17px;
  }
`;

const Text = styled.span`
  font-weight: 100;
  font-size: 14px;
  cursor: pointer;
  &.TC {
    font-family: 'Noto Sans TC';
  }

  @media ${device.tablet} {
    writing-mode: vertical-lr;
  }
`;

const IconColor = styled.div`
  color: var(--dark);
  cursor: pointer;
`;

const DarkTheme = ({ theme, setTheme }) => {
  const handleDarkmode = () => {
    const nextDarkmode = theme.darkmode === 'default' ? 'dark' : 'default';
    setTheme({ ...theme, darkmode: nextDarkmode });
  };
  let icon;
  if (theme.darkmode === 'default') {
    icon = <DarkThemeIcon onClick={handleDarkmode} />;
  } else {
    icon = <LightThemeIcon onClick={handleDarkmode} />;
  }

  return <IconColor>{icon}</IconColor>;
};

const Language = ({ theme, setTheme }) => {
  const content = theme.language === 'ENG' ? '中文' : 'ENG';
  const style = content === '中文' ? 'TC' : '';

  const handleLanguage = () => {
    const nextLanguage = theme.language === 'ENG' ? 'CH' : 'ENG';
    setTheme({ ...theme, language: nextLanguage });
  };

  return (
    <Text className={style} onClick={handleLanguage}>
      {content}
    </Text>
  );
};

const Themes = () => {
  const [theme, setTheme] = useState({ darkmode: 'default', language: 'ENG' });

  return (
    <Wrapper>
      <DarkTheme theme={theme} setTheme={setTheme} />
      <Line />
      <Language theme={theme} setTheme={setTheme} />
    </Wrapper>
  );
};

export default Themes;
