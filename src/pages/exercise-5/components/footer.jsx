import styles from './footer.module.css';

export default function Footer({ validationErrors = [] }) {
  const hasErrors = validationErrors && validationErrors.length > 0;

  // Debug logging
  console.log('Footer - validationErrors:', validationErrors, 'hasErrors:', hasErrors);

  return (
    <footer className={styles.footer}>
      {hasErrors ? (
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
