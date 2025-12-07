import gif from '@/assets/this-is-fine.gif';
import video from '@/assets/taison.mp4';
import styles from './ask3.module.css';

function Ex03bPage() {
  return (
    <div className={styles.container}>
      <h1>Περισσότερα</h1>
      <p>
        Lorem ispum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. <b>Ut enim ad minim veniam,</b> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irur e dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, <i>sunt in culpa</i> qui officia deserunt mollit anim
        id est laborum. Γυρίστε στην{' '}
        <a href='/ex-03b-start' rel='noopener noreferrer'>
          προηγούμενη σελίδα
        </a>
      </p>
      {/* image */}
      <img src={gif} alt='some gif' />
      <hr />
      <h3>Προσοχή:</h3>
      <ol type='a'>
        <li>Χθές</li>
        <li>Σήμερα</li>
        <li>Αύριο</li>
      </ol>
      <hr />
      <video width='480' height='auto' controls preload='auto' loop autoPlay src={video} />
      <hr />
      <h5>ΠΑΜΑΚ - ΕΠΜΣ ΑΕΣΛ</h5>
    </div>
  );
}
export default Ex03bPage;
