import styles from './footer.module.css';

export default function Footer({ validationErrors }) {
  return (
    <footer className={styles.footer}>
      {validationErrors.length > 0 ? (
        <div className={styles.errors}>
          <h3>Validation Errors:</h3>
          <ul>
            {validationErrors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </footer>
  );
}
