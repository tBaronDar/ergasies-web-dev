import { useRef } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';

import styles from './globe.module.css';

function GlobeMesh({ selectedDestination }) {
  const group = useRef();
  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.1;
    if (selectedDestination) {
      if (group.current.position.x < 1) {
        group.current.position.x += 0.5 * delta;
      }
    }
  });
  return (
    <group position={[0, 0, -1]} ref={group}>
      <mesh scale={1.001}>
        <icosahedronGeometry args={[2, 2, 2]} />
        <meshBasicMaterial color='white' wireframe />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color='white' flatShading />
      </mesh>
    </group>
  );
}

export default function Globe({ selectedDestination }) {
  return (
    <div className={styles.canvas}>
      <Canvas
        camera={{ position: [0, 0, 3.2], near: 0.1, far: 10, fov: 90, aspect: window.innerWidth / window.innerHeight }}>
        <ambientLight intensity={0.05} />
        <hemisphereLight color='#0099ff' groundColor='#aa5500' intensity={0.5} position={[0, 4, 2]} />
        <GlobeMesh selectedDestination={selectedDestination} />
      </Canvas>
    </div>
  );
}
