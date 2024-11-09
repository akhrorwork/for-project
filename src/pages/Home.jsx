import { FaTrash } from "react-icons/fa";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={`container ${styles.home}`}>
      <div>
        <h2>Transactions:</h2>
        <div className={styles.card}>
          <h4>for Tv</h4>
          <p>$300</p>
          <span className={styles.trash}>
            <FaTrash />
          </span>
        </div>
        <div className={styles.card}>
          <h4>for Tv</h4>
          <p>$300</p>
          <span className={styles.trash}>
            <FaTrash />
          </span>
        </div>
        <div className={styles.card}>
          <h4>for Tv</h4>
          <p>$300</p>
          <span className={styles.trash}>
            <FaTrash />
          </span>
        </div>
        <div className={styles.card}>
          <h4>for Tv</h4>
          <p>$300</p>
          <span className={styles.trash}>
            <FaTrash />
          </span>
        </div>
        <div className={styles.card}>
          <h4>for Tv</h4>
          <p>$300</p>
          <span className={styles.trash}>
            <FaTrash />
          </span>
        </div>
      </div>
      <div>
        <h2>Form</h2>
      </div>
    </div>
  );
}

export default Home;
