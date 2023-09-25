import { useContext } from 'react';
import { FenceContext } from '../../App';
import styles from './CheckboxRadio.module.css';

export type CheckboxRadioProps = {
    type: "checkbox" | "radio"
    name: string
    id: string
    labelText: string
    value: string | number
}

export function CheckboxRadio({ type, name, id, labelText, value }: CheckboxRadioProps) {
    const { setFenceContext } = useContext(FenceContext)
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFenceContext?.((prev) => {
            if(type == "radio") return { ...prev, fenceType: e.target.value }
            else return { ...prev, discount: { isApplied: e.target.checked, value: Number(e.target.value) } }
        })
    }

    return(
    <div className={styles.wrapper}>
        <input type={type} name={name} id={id} value={value} onChange={handleChange} />
        <label htmlFor={id}>{labelText}</label>
    </div>
    )
}