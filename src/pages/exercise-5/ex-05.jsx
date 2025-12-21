import { Canvas } from '@react-three/fiber';
import styles from './ex-05.module.css';
function Ex05Page() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>dada</header>
      <div className={styles.mainContainer}>
        <nav className={styles.nav}>dada</nav>
        <section className={styles.section}>
          <Canvas>
            <hemisphereLight color='white' />
            <mesh>
              <sphereGeometry args={[1.5, 24, 24]} />
              <meshStandardMaterial color='red' />
            </mesh>
          </Canvas>
        </section>
        <aside className={styles.aside}>dada</aside>
      </div>
      <footer className={styles.footer}>dada</footer>
    </div>
  );
}

export default Ex05Page;
