import style from "./InputBox.module.css";
import { InputBoxProps } from "./inputBox.props";

export const InputBox: React.FC<InputBoxProps> = ({
  label,
  placeholder,
  autoFocus,
  required,
  type,
  id,
  onBlur,
  value,
  ...rest
}) => {
  return (
    <div className={style.InputBox}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={style.InputBox_Input}
        type={type}
        placeholder={placeholder}
        autoFocus={autoFocus}
        required={required}
        onBlur={onBlur}
        value={value}
        {...rest}
      />
    </div>
  );
};
