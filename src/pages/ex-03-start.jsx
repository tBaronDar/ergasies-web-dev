import { Link } from 'react-router-dom';
import meme from '@/assets/acdbq9.jpg';
function Ex03StartPage() {
  return (
    <div>
      <h1>Θάλασσα - Βραχώδης Ακτή</h1>
      <p>
        <strong>Lorem ispum dolor</strong> sit amet, consectetur adipiscing elit.{' '}
        <a
          href='https://www.ionio.gr/index.php?categoryID=149&subcategoryID=218&objectID=6111'
          target='_blank'
          rel='noopener noreferrer'>
          ΕΠΜΣ: Ανάπτυξη Επιχειρησιακών Συστημάτων Λογισμικου
        </a>{' '}
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Μπορείτε να δείτε περισσότερα στην <Link to='/ex-03b-start'>επόμενη σελίδα.</Link>
      </p>
      <img src={meme} alt='Ocean' />
    </div>
  );
}

export default Ex03StartPage;
