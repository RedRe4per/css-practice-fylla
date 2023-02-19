import styles from './Button.module.css';

interface Props {
    text: string;
}

export default function Button( props: Props ) {
    return (
      <>
        <button className={styles["button"]}>{props.text}</button>
      </>
    )
  }