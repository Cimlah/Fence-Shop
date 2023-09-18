import styles from './Paragraph.module.css';

type ParagraphProps = {
    text: string
}

export function Paragraph({ text }: ParagraphProps) {
    return(
        <p className={styles.paragraph}>{text}</p>
    )
}