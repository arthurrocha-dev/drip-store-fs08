import { CollectionIconProps } from "./CollectionIconprops";
import styles from './CollectionIcon.module.css'

export const CollectionIcon:React.FC<CollectionIconProps> = ({ title, iconUrl}) => {
    return(

        <div className={styles.CollectionIcon}>
            <div className={styles.CollectionIconContainteImg}>
                <img className={styles.CollectionIconImg} src={iconUrl} alt="Icone da coleção"/>
            </div>
            <p className={styles.CollectionIconTitle}>{title}</p>
        </div>

    )
}