import { createContext } from 'react';

const ThemesContext = createContext({
  isDark: false,
  language: 'en',
});

export default ThemesContext;
