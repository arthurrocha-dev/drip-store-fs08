import styles from './CheckboxFilter.module.css'
import { CheckboxFilterProps } from './CheckboxFilter.props'

export const CheckBoxFilter: React.FC<CheckboxFilterProps> = ({
  inputId,
  textLabel
}) => {
    return (
        <div className={styles.DPcheckboxContainer}>
            <input className={styles.DPinput} id={`${inputId}`} type="checkbox" />
            <label htmlFor={`${inputId}`}>{textLabel}</label>
        </div>
    )
}