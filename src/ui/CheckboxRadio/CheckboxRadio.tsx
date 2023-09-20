import styles from './CheckboxRadio.module.css';

type CheckboxRadioProps = {
    type: "checkbox" | "radio"
    name: string
    id: string
    labelText: string
}

export function CheckboxRadio({ type, name, id, labelText }: CheckboxRadioProps) {
    return(
        <div className={styles.wrapper}>
            <input type={type} name={name} id={id} />
            <label htmlFor={id}>{labelText}</label>
        </div>
    )
}