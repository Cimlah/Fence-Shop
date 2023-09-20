import styles from './Select.module.css';
import arrowIcon from '../../assets/arrowIcon.svg'

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
    return(
        <div className={styles.wrapper}>
            <select className={styles.select} name={selectName}>
                {optionNodes.map((node, index) => {
                    return <option key={index} value={node.value} exchange-rate={node.exchangeRate}>{node.optionText}</option>
                })}
            </select>
            <img src={arrowIcon} alt="Arrow Icon" />
        </div>
    )
}