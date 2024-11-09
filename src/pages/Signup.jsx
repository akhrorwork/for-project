// styles
import styles from "./Auth.module.css";

function Signup() {
  return (
    <div className="container">
      <div className={styles.formWrapper}>
        <form className={styles.form}>
          <h2 className={styles.title}>Signup</h2>
          <label>
            <span>Display Name:</span>
            <input type="text" placeholder="display name" />
          </label>
          <label>
            <span>Email:</span>
            <input type="email" placeholder="email" />
          </label>
          <label>
            <span>Password:</span>
            <input type="password" placeholder="password" />
          </label>
          {true && <button>Signup</button>}
          {false && (
            <button className={styles.disabeled} disabled>
              Loading...
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Signup;
