import styles from './Input.module.css';

type InputProps = {
    placeholder: string
}

export function Input({ placeholder }: InputProps) {
    return(
        <input type="number" className={styles.input} placeholder={placeholder} />
    )
}