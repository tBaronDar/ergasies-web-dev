import styles from './landing.module.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className={styles.landingContainer}>
      <h1>Προγραμματισμός Διαδικτύου - ΕΠΜΣ</h1>
      <Link component={'button'} to='/ex-03-start'>
        Εργασία - 3η Άσκηση - 1ο σκέλος
      </Link>
      <Link component={'button'} to='/ex-03b-start'>
        Εργασία - 3η Άσκηση - 2ο σκέλος
      </Link>
      <Link component={'button'} to='/ex-05'>
        Εργασία - 5η Άσκηση
      </Link>
      <a href='https://github.com/tBaronDar/ergasies-web-dev' target='_blank' rel='noopener noreferrer'>
        GitHub Repository
      </a>
    </div>
  );
}

export default LandingPage;
