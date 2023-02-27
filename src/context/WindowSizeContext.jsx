import { createContext, useContext, useState, useEffect } from 'react';
const windowSizeContext = createContext({
  width: window.innerWidth,
  height: window.innerHeight,
});

const WindowSizeProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize]);

  return (
    <windowSizeContext.Provider value={windowSize}>
      {children}
    </windowSizeContext.Provider>
  );
};

const useWindowSize = () => useContext(windowSizeContext);

export { WindowSizeProvider, useWindowSize };
