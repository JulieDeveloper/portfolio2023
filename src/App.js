import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { WindowSizeProvider } from 'context/WindowSizeContext';
import './styles/reset.css';
import './styles/base.css';
import './styles/color.scss';

// import { HomePage, AboutPage, ProjectsPage } from './pages/index';
import { HomePage, AboutPage, ProjectsPage, ContactPage } from 'pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <WindowSizeProvider>
          <Routes>
            <Route path="about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            {/* <Route path="/projectId" element={<ProjectPage />} /> */}
            {/* </Route> */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </WindowSizeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
