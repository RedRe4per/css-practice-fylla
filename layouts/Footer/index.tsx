import styles from './Footer.module.css';
import Button from '@/components/Button';

interface Data {
   type: string;
   categories: string[];
   id: number;
   url?: string;
};

const data: Data[] = [
    {
        type: "Pages",
        categories: ["home", "service", "studio", "contact"],
        id: 1,
    },
    {
        type: "CMS",
        categories: ["work", "work single", "blog", "blog post", "shop", "shop single"],
        id: 2,
    },
    {
        type: "Utility Pages",
        categories: ["404 error page", "password protected", "styleGuide", "licensing", "changelog"],
        id: 3,
    }
];

export default function Footer() {
    return (
      <>
        <footer className={styles["footer"]}>
            <aside className={styles["footer--aside"]}>
                <div>
                    <div className="logo__combination">
                        <img src="/icons/logo.png" alt="logo"/>
                        <h4>fylla</h4>
                    </div>
                    <p className={styles["footer--aside__address"]}>Main Street. 1 <br/> 22222 Berlin</p>
                </div> 
                <div className={styles["footer--aside__socials"]}>
                    <span>LN</span>
                    <span>IN</span>
                    <span>FB</span>
                </div> 
            </aside>
            <section className={styles["section"]}>
                {
                    data.map((element, index)=>{
                        return(
                            <div key={index} className={styles["section--element"]}>
                                <h4 className={styles["section--element__type"]}>{element.type}</h4>
                                <ul className={styles["section--element__category"]}>
                                    {element.categories.map((category)=>{
                                        return(
                                            <li key={category}>{category}</li>
                                        )
                                    })}
                                </ul>
                                {index === 0 && <Button text="more templates"/>}
                            </div>
                        )
                    })
                }
            </section>
        </footer>
        <div className={styles["footer--bottom"]}>
            <p>© 2022 Made by Pawel Gola. Powered by Webflow.</p>
            <div className={styles["footer--bottom__right"]}>
                <span>Privacy</span>
                <span>Imprint</span>
            </div>
        </div>
      </>
    )
  }