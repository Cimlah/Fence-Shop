import styles from './HeadingOne.module.css';

type HeadingOneProps = {
    text: string
}

export function HeadingOne({ text }: HeadingOneProps) {
    return (
        <h1 className={styles.headingOne}>{text}</h1>
    );
}