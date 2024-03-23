import styles from './CollectionCard.module.css'
import { CollectionCardProps } from "./CollectionCard.props";
import { Button } from '../../../Button/Button'


export const CollectionCard:React.FC<CollectionCardProps> = ({discount = 30 ,title, urlImg}) => {
  return (
    <>
      <div className={styles.CollectionCard}>
        <div className={styles.CollectionCardLeft}>
        <p className={styles.Discount}>{`${discount}% Off`}</p>
          <p className={styles.Title}>{title}</p>
          <Button type='secondary' text='Comprar'/>
        </div>
        <img className={styles.CollectionImage} src={urlImg} alt="Imagem"/>
      </div >
    </>
  );
};