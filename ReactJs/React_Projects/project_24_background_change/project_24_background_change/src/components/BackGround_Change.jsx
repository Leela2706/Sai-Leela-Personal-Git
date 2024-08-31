import React, { useState, useEffect } from 'react';


const BackgroundChanger = () => {
  const images = [
    './original.jpg',
    './jonatan-pie-3l3RwQdHRHg-unsplash.jpg',
    './1_xMuIOwjliGUPjkzukeWKfw.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change background every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]);

  return (
    <div className="background-container" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
      <u>
        <div style={{ marginRight: '20px', color: 'green', textAlign: 'center' }}>
          <h2>22. Background change</h2>
        </div>
      </u>
    </div>
  );
};

export default BackgroundChanger;
