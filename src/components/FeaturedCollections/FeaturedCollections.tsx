import{ CollectionCard } from "./components/CollectionCard/CollectionCard";
import { CollectionIconsList } from "./components/ColletionsIconsList/CollectionsIconsList";
import styles from './FeaturedCollections.module.css'

export const FeaturesCollections = (): JSX.Element => {
  return(
    <>
      <div className={styles.CollectionsContainer}>
        <p className={styles.Title}>{"Coleções em destaque"}</p>
        <div className={styles.CardsList}>
          <CollectionCard discount={40} title='Novo Drop Supreme'urlImg="src/components/FeaturedCollections/components/CollectionCard/img/tShirtCollection.png"/>
          <CollectionCard discount={25} title='Coleção Adidas' urlImg="src/components/FeaturedCollections/components/CollectionCard/img/tennisCollection.png"/>
          <CollectionCard discount={15} title='Novo Beats Bass' urlImg="src/components/FeaturedCollections/components/CollectionCard/img/headPhoneCollection.png"/>
        </div>

        <p className={styles.SupTitle}>Categorias em destaque</p>
        <CollectionIconsList />
      </div>
    </>
  );
};