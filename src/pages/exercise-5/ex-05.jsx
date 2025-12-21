import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import styles from './ex-05.module.css';

function Globe() {
  const group = useRef();
  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.5;
  });
  return (
    <group position={[0, 1, -3]} ref={group}>
      <mesh scale={1.001}>
        <icosahedronGeometry args={[1.5, 2, 2]} />
        <meshBasicMaterial color='white' wireframe />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.5, 2, 2]} />
        <meshStandardMaterial color='white' flatShading />
      </mesh>
    </group>
  );
}

function Ex05Page() {
  return (
    <div className={styles.container}>
      <div className={styles.canvasContainer}>
        <Canvas camera={{ position: [0, 1, 100], near: 0.1, far: 200, fov: 75 }}>
          <hemisphereLight color='#0099ff' groundColor='#aa5500' intensity={0.75} position={[0, 4, 2]} />
          <Globe />
        </Canvas>
      </div>
      <header className={styles.header}>
        <h1>Globe</h1>
      </header>
      <div className={styles.mainContainer}>
        <nav className={styles.nav}>dada</nav>
        <section className={styles.section}></section>
        <aside className={styles.aside}>dada</aside>
      </div>
      <footer className={styles.footer}>dada</footer>
    </div>
  );
}

export default Ex05Page;
