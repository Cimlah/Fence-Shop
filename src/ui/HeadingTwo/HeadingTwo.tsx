import styles from './HeadingTwo.module.css';

type HeadingTwoProps = {
    text: string
}

export function HeadingTwo({ text }: HeadingTwoProps) {
    return(
        <h2 className={styles.headingTwo}>{text}</h2>
    )
}