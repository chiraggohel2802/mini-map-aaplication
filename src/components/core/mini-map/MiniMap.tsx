import React from 'react';
import './MiniMap.css';

type MiniMapProps = {
  mapImage: string;
  mapSize: number;
  miniMapSize: number;
  cursorPosition: { x: number; y: number };
};

const MiniMap: React.FC<MiniMapProps> = ({ mapImage, mapSize, miniMapSize, cursorPosition }) => {
  // Calculate the starting position for the background image based on cursor position
  const startX = Math.max(0, (cursorPosition.x / mapSize) * mapSize - miniMapSize / 2);
  const startY = Math.max(0, (cursorPosition.y / mapSize) * mapSize - miniMapSize / 2);

  return (
    <div
      className='mini-map-container'
      style={{
        backgroundImage: `url(${mapImage})`,
        backgroundSize: `${mapSize}px ${mapSize}px`,
        backgroundPosition: `-${startX}px -${startY}px`,
      }}
    />
  );
};

export default MiniMap;
