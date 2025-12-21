import { useState } from 'react';
import SideForm from './components/side-form';
import styles from './ex-05.module.css';
import Globe from './components/globe';

function Ex05Page() {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <>
      <Globe selectedDestination={selectedDestination} />
      <div className={styles.container}>
        {/* <Globe /> */}

        {/* <div className={styles.canvasContainer}>
        <Globe />
        </div> */}
        <header className={styles.header}>
          <h1>Globe</h1>
        </header>
        <div className={styles.mainContainer}>
          <nav className={styles.nav}>
            <h2>Destinations</h2>
            <ul>
              <li>
                <button onClick={() => handleDestinationClick('San Deloitto')}>San Deloitto</button>
              </li>
              <li>
                <button onClick={() => handleDestinationClick('Kingdom of Pamakistan')}>Kingdom of Pamakistan</button>
              </li>
              <li>
                <button onClick={() => handleDestinationClick('El Camundo')}>El Camundo</button>
              </li>
            </ul>
          </nav>
          <section className={styles.section}>hf</section>
          <SideForm />
        </div>
        <footer className={styles.footer}>dada</footer>
      </div>
    </>
  );
}

export default Ex05Page;
