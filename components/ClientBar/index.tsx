import styles from './ClientBar.module.css';

export default function ClientBar() {
    return (
      <main className={styles["client-bar--main"]}>
        <div className={styles["client-bar--main__left"]}>
            <span className="subtitle-font">OUR CLIENTS</span>
        </div>
        <div className={styles["client-bar--main__right"]}>
            <img src="/icons/super-food.svg" alt="super food" />
            <img src="/icons/creative-studio.svg" alt="creative studio" />
            <img src="/icons/in-motion.svg" alt="in motion" />
            <img src="/icons/abstract.svg" alt="abstract" />
            <img src="/icons/vision-studio.svg" alt="vision studio" />
            <img src="/icons/invision.svg" alt="invision" />
        </div>
      </main>
    )
  }