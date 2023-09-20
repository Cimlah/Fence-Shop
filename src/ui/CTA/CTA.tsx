import styles from './CTA.module.css';

export type CTAProps = {
    iconPath: string
    iconAlt: string
    text: string
}

export function CTA({ iconPath, iconAlt, text }: CTAProps) {
    return(
        <button className={styles.cta}>
            <img src={iconPath} alt={iconAlt} />
            <p>{text}</p>
        </button>
    )
}