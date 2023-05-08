import { useState } from 'react';
import clsx from 'clsx';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { WindowSizeProvider } from 'context/WindowSizeContext';
import ThemesContext from 'context/ThemesContext';

import './styles/reset.css';
import './styles/base.css';
import './styles/color.scss';
import './assets/fonts/monument-grotesk/stylesheet.css';

import { HomePage, AboutPage, ProjectsPage, ContactPage } from 'pages';
import { Portfolio2023 } from 'pages/ProjectPage';
import AtlanticSewingGuild from 'pages/ProjectPage/atlanticSewingGuild';

function GetProjectsPage() {
  const { projectName } = useParams();

  switch (projectName) {
    case 'portfolio2023':
      return <Portfolio2023 />;
    case 'atlantic-sewing-guild':
      return <AtlanticSewingGuild />;
    default:
      return <ProjectsPage />;
  }
}

function App() {
  const [themes, setThemes] = useState({
    isDark: false,
    language: 'en',
  });

  return (
    <div className={clsx('App', themes.language === 'tc' && 'TC')}>
      <BrowserRouter>
        <WindowSizeProvider>
          <ThemesContext.Provider value={{ themes, setThemes }}>
            <Routes>
              <Route path="/about" element={<AboutPage />} />
              <Route
                path="/projects/:projectName"
                element={<GetProjectsPage />}
              />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </ThemesContext.Provider>
        </WindowSizeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
