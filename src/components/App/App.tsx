import React from 'react';
import Map from 'components/Map/Map'
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Map />
    </div>
  );
}

export default App;
