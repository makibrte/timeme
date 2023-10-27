import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  return (
    <ul className={styles.navbar}>
      <li className={styles.link}>
        <Link href="/">Home</Link>
      </li>
      <li className={styles.link}>
        <Link href="/addTask">Add Task</Link>
      </li>
      <li className={styles.link}>
        <Link href="/getTasks">Get Tasks</Link>
      </li>
    </ul>
  );
};

export default NavBar;
