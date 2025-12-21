import styles from './side-form.module.css';

export default function SideForm(props) {
  const { selectedDestination, formData, onChange, onSubmit } = props;

  return (
    <aside className={styles.aside}>
      {selectedDestination && (
        <>
          <h2>Submit your travel plan for {selectedDestination}</h2>
          <form className={styles.form} onSubmit={onSubmit}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' value={formData.name} onChange={onChange} />
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' value={formData.email} onChange={onChange} />
            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' value={formData.message} onChange={onChange} rows={5} />
            <button type='submit'>Submit</button>
          </form>
        </>
      )}
    </aside>
  );
}
