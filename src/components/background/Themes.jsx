import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { device } from '../../styles/device.js';
import { DarkThemeIcon, LightThemeIcon } from 'assets/images/icons';

import { useContext } from 'react';
import ThemesContext from 'context/ThemesContext';

const Wrapper = styled.div`
  position: fixed;
  right: 0;

  z-index: 500;

  width: fit-content;
  height: var(--footer-height);

  display: flex;
  align-items: center;

  color: var(--theme);

  &.home {
    top: var(--header-height);
    height: fit-content;
    padding-right: var(--page-marginX);
    transform: translateY(-100%);

    @media ${device.tablet} {
      padding: 0 var(--page-marginX);
    }
    @media ${device.laptop} {
      bottom: 0;
      padding: 0;
      padding-right: calc(1rem + var(--page-marginX));
    }
  }

  &:not(.home) {
    bottom: 0;
    padding: 1.5rem 2rem;

    @media ${device.laptop} {
      padding: 0 var(--page-marginX);
    }
  }
`;

const Line = styled.span`
  height: 1rem;
  width: 1px;
  background-color: var(--theme);
  margin: 0 1rem;
`;

const LanguageStyle = styled.span`
  font-weight: 100;

  cursor: pointer;
  &.TC {
    font-family: 'Noto Sans TC';
  }
  &:hover,
  &:active {
    color: var(--theme--hover);
  }
`;

const IconColor = styled.div`
  cursor: pointer;
  svg {
    height: 1rem;
    width: 1rem;

    path {
      stroke: var(--theme);
    }
  }

  &:hover svg path,
  &:active svg path {
    stroke: var(--theme--hover);
  }
`;

const DarkTheme = ({ themes, setThemes }) => {
  const handleDarkmode = () => {
    const nextDarkmode = !themes.isDark;
    setThemes({ ...themes, isDark: nextDarkmode });
    const body = document.querySelector('body');
    body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
  };
  let icon;

  if (themes.isDark) {
    icon = <LightThemeIcon onClick={handleDarkmode} />;
  } else {
    icon = <DarkThemeIcon onClick={handleDarkmode} />;
  }

  return <IconColor>{icon}</IconColor>;
};

const Language = ({ themes, setThemes }) => {
  const { t, i18n } = useTranslation();
  const style = t('background.theme.language') === '中文' ? 'TC' : '';

  const handleLanguage = () => {
    const nextLanguage = themes.language === 'en' ? 'tc' : 'en';
    i18n.changeLanguage(nextLanguage);
    setThemes({ ...themes, language: nextLanguage });
  };

  return (
    <LanguageStyle className={style} onClick={handleLanguage}>
      {t('background.theme.language')}
    </LanguageStyle>
  );
};

const Themes = () => {
  const { pathname } = useLocation();

  const { themes, setThemes } = useContext(ThemesContext);
  return (
    <Wrapper className={pathname === '/' && 'home'}>
      <Language themes={themes} setThemes={setThemes} />
      <Line />
      <DarkTheme themes={themes} setThemes={setThemes} />
    </Wrapper>
  );
};

export default Themes;
