import styles from './InputRadio.module.css'
import { InputRadioProps } from './InputRadio.props'
export const DpInputRadio:React.FC<InputRadioProps> = ({id, label, name}) => {
    return(
        <div className={styles.InputRadio}>
            <input className={styles.InputRadioInput} type="radio" id={id} name={name} />
            <label className={styles.InputRadioLabel} htmlFor={id}>{label}</label>
        </div>
    )
}