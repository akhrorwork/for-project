// style
import styles from "./Navbar.module.css";

// rrd imports
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.header}>
      <div className="container">
        <Link className={styles.logo} to="/">
          myMoney
        </Link>

        <nav>
          {false && (
            <div className={styles.avatar}>
              <p>hello, Akhror</p>
              <img
                src="https://picsum.photos/100"
                alt=""
                width={50}
                height={50}
              />
              <button>Logout</button>
            </div>
          )}
          {true && (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Signup</NavLink>
            </>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
