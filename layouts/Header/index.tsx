import styles from './Header.module.css';
import Button from '@/components/Button';

export default function Header() {
    return (
      <>
        <header className={styles["header"]}>
          <div className="logo__combination">
            <img className={styles["header--logo__image"]} src="/icons/logo.png" alt="logo"/>
            <h4>TaoTech</h4>
          </div>
          <nav className={styles["header--nav"]}>
            <ul className={styles["header--ul"]}>
              <li>work</li>
              <li>services</li>
              <li>studio</li>
              <li>blog</li>
              <li>shop</li>
              <li className={styles["header--pages"]}>pages</li>
              <li className={styles["header--cart"]}>cart</li>
            </ul>
            <Button text="Let&apos;s Talk"/>
          </nav>
        </header>
      </>
    )
  }