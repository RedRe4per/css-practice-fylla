import styles from './Hero.module.css';

export default function Hero() {
    return (
      <main className={styles["hero--main"]}>
        <section className={styles["hero--section"]}>
            <article>
                <p className="title-font">We are a <br/> digital agency <br/> from Melbourne.</p>
                <div className={styles["hero--p__content"]}>
                   <p className="normal-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
            </article>
            <img src="/icons/diamond.svg" alt="diamond logo" className={styles["hero--icon"]}></img>
        </section>
        <aside>
            <img src="/images/image1.png" alt="image1" className={styles["hero--image"]}></img>
        </aside>
      </main>
    )
  }