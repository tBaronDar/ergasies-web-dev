import { Outlet, useLocation } from 'react-router-dom';
import styles from './layout.module.css';

export default function Layout() {
  const isNeon = useLocation().pathname === '/ex-05';
  return (
    <main className={isNeon ? styles.mainContainerNeon : styles.mainContainer}>
      <Outlet />
    </main>
  );
}
