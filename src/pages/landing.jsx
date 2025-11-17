import styles from './landing.module.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className={styles.landingContainer}>
      <h1>Προγραμματισμός Διαδικτύου - ΕΠΜΣ</h1>
      <Link component={'button'} to='/ex-03-start'>
        Εργασία - 1ο σκέλος: η 3η Άσκηση
      </Link>
      <Link component={'button'} to='/ex-03b-start'>
        Εργασία - 2ο σκέλος: η 5η Άσκηση
      </Link>
      <a href='https://github.com/tBaronDar/ergasies-web-dev' target='_blank' rel='noopener noreferrer'>
        GitHub Repository
      </a>
    </div>
  );
}

export default LandingPage;
