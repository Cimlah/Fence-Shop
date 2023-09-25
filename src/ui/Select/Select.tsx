import styles from './Select.module.css';
import arrowIcon from '../../assets/icons/arrowIcon.svg'
import { useContext } from 'react';
import { FenceContext } from '../../App';

export type SelectOptionType = {
    value: string
    exchangeRate: number
    optionText: string
}

type SelectProps = {
    selectName: string
    optionNodes: SelectOptionType[]
}

export function Select({ selectName, optionNodes }: SelectProps) {
    const { setFenceContext } = useContext(FenceContext)
    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setFenceContext?.((prev) => {
            return {
                ...prev,
                currency: e.target.value
            }
        })
    }

    return(
        <div className={styles.wrapper}>
            <select className={styles.select} name={selectName} onChange={handleChange}>
                {optionNodes.map((node, index) => {
                    return <option key={index} value={node.value} exchange-rate={node.exchangeRate}>{node.optionText}</option>
                })}
            </select>
            <img src={arrowIcon} alt="Arrow Icon" />
        </div>
    )
}