import { useRef } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';

import styles from './globe.module.css';

function GlobeMesh({ selectedDestination }) {
  const group = useRef();
  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.1;
    if (!selectedDestination) {
      if (group.current.position.x > 0) {
        group.current.position.x -= 0.5 * delta;
      }
      if (group.current.position.z > 0 || group.current.position.x > 0) {
        group.current.position.z -= 0.9 * delta;
      }
    }
    if (selectedDestination) {
      if (group.current.position.x < 0.9 && group.current.position.z < 1.1) {
        group.current.position.x += 0.5 * delta;
        group.current.position.z += 0.8 * delta;
      }
    }
  });
  return (
    <group position={[0, 0, 1.1]} rotation={[Math.PI / 4, 0, 0]} ref={group}>
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
        <ambientLight intensity={0.1} />
        {/* mia pigi hromatos apo pano mia apo kato */}
        <directionalLight color='#0099ff' intensity={0.7} position={[0, 3, 1]} />
        <directionalLight color='#bf0ecf' intensity={0.7} position={[0, -3, 1]} rotation={[Math.PI, 0, 0]} />
        <GlobeMesh selectedDestination={selectedDestination} />
      </Canvas>
    </div>
  );
}
