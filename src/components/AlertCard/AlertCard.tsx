import { AlertCardProps } from "./AlertCard.props";
import styles from "./AlertCard.module.css";

export const AlertCard: React.FC<AlertCardProps> = ({
  children,
  type,
  title,
}) => {
  return (
    <div className={`${styles.AlertCard} ${type}`}>
      <p className={`${styles.AlertCardTitle} ${type}`}>{title}</p>
      {children}
    </div>
  );
};
