import styles from './side-form.module.css';

export default function SideForm() {
  return (
    <aside className={styles.aside}>
      <h2>Submit your info</h2>
      <form>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' />
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' />
        <label htmlFor='message'>Message</label>
        <textarea id='message' name='message' />
        <button type='submit'>Submit</button>
      </form>
    </aside>
  );
}
