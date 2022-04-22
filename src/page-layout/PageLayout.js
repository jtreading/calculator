import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageLayout.module.css';

export default function PageLayout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <div className={styles.title}>
            <h1>Calculator</h1>
          </div>
        </NavLink>
        <p>It calculates.</p>
      </header>
      <main className={styles.main}>{ children }</main>
      <footer className={styles.footer}>Jonathon Reading, 2022</footer>
    </div>
  );
}
