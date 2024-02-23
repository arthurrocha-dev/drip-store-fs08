import{ CollectionCard } from "./components/CollectionCard/CollectionCard";
import { CollectionIconsList } from "./components/ColletionsIconsList/CollectionsIconsList";
import styles from './FeaturedCollections.module.css'

export const FeaturesCollections = (): JSX.Element => {
  return(
    <>
      <div className={styles.CollectionsContainer}>
        <p className={styles.Title}>{"Coleções em destaque"}</p>
        <div className={styles.CardsList}>
          <CollectionCard title='Novo Drop Supreme'/>
          <CollectionCard title='Coleção Adidas'/>
          <CollectionCard title='Novo Beats Bass'/>
        </div>

        <p className={styles.SupTitle}>Categorias em destaque</p>
        <CollectionIconsList />
      </div>
    </>
  );
};