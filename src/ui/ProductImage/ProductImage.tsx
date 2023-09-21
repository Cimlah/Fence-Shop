import styles from './ProductImage.module.css';

export type ImageProps = {
    source: string
    imageAlt: string
}

export function ProductImage({ imageAlt, source }: ImageProps) {
    return(
        <img className={styles.image} src={source} alt={imageAlt} />
    )
}