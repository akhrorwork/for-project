// style
import styles from "./Auth.module.css";

function Login() {
  return (
    <div className="container">
      <div className={styles.formWrapper}>
        <form className={styles.form}>
          <h2 className={styles.title}>Login</h2>
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

export default Login;
