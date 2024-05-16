import { LinksSectionProps } from "./LinksSectionProps";
import styles from "./LinksSectio.module.css";

export const LinksSection: React.FC<LinksSectionProps> = ({
  title,
  children,
}) => {
  return (
    <div className={styles.LinskSection}>
      <p className={styles.LinksSection_Title}>{title}</p>
      <div className={styles.LinskSection_Container}>{children}</div>
    </div>
  );
};
