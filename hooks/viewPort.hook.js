import React, { useState } from 'react';

const useViewPort = () => {
  const [viewPort, setViewPort] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    setViewPort({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    setIsMobile(window.innerWidth < 1024);
  };
  React.useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { viewPort, isMobile };
};

export default useViewPort;
