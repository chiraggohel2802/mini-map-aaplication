import React from 'react';
import mapImage from '../../assets/game-map.png'; // Ensure this path is correct
import MiniMap from '../core/mini-map/MiniMap';
import styles from './MapContainer.module.css';
import useMapContainer from './hooks/useMapContainer';

const MapContainer: React.FC = () => {
  const { cursorPosition } = useMapContainer();

  return (
    <div className='App'>
      <div className={styles.mapContainer} style={{ backgroundImage: `url(${mapImage})` }}>
        <MiniMap
          mapImage={mapImage}
          mapSize={2048} // Your map size
          miniMapSize={400}
          cursorPosition={cursorPosition}
        />
      </div>
    </div>
  );
};

export default MapContainer;
