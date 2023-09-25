import { useContext } from 'react';
import styles from './Input.module.css';
import { FenceContext } from '../../App';

type InputProps = {
    placeholder: string
    name: "width" | "length"
}

export function Input({ placeholder, name }: InputProps) {
    const { setFenceContext } = useContext(FenceContext)
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFenceContext?.((prev) => {
            return {
                ...prev,
                [name]: Number(e.target.value)
            }
        })
    }

    return(
        <input type="number" className={styles.input} placeholder={placeholder} name={name} onChange={handleChange} />
    )
}