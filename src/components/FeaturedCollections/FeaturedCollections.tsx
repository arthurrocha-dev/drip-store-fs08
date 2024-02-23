import{ CollectionCard } from "./components/CollectionCard/CollectionCard";
import Card2 from "./components/cards2";
import { useState } from "react";
import styles from './FeaturedCollections.module.css'

export const FeaturesCollections = (): JSX.Element => {
  const [data, setData] = useState([]);

  const dataList = () => {
    setData
  }

  dataList

  return (
    <>
      <div className={styles.CollectionsContainer}>
        <p className={styles.Title}>{"Coleções em destaque"}</p>
        <div className={styles.CardsList}>
          <CollectionCard title='Novo Drop Supreme'/>
          <CollectionCard title='Coleção Adidas'/>
          <CollectionCard title='Novo Beats Bass'/>
        </div>

        <p className={styles.SupTitle}>Categorias em destaque</p>

        <div className={styles.IconsList}>
          {data.map((item: RequestData) => (
            <Card2 key={item.id} image={item.image} titulo={item.title} />
          ))}
        </div>
      </div>
    </>
  );
};

// const ContainerColecoes = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   padding: 34px 100.5px 124px;
//   overflow: hidden;

//   @media only screen and (max-width: 480px) {
//     padding: 34px 10px;
//   }
// `;
// const Title = styled.h3`
//   font-size: 24px;
//   font-weight: bold;
//   color: var(--Dark_Gray_2);
// `;
// const SupTitle = styled.h3`
//   font-size: 24px;
//   font-weight: bold;
//   color: var(--Dark_Gray_2);
//   text-align: center;
//   margin-top: 100px;
//   margin-bottom: 20px;
// `;
// const ListaCards = styled.ul`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 12px;
//   align-items: center;
//   justify-content: center;
// `;
// const ListaIcones = styled.ul`
//   width: 100%;
//   display: flex;
//   flex-wrap: nowrap;
//   gap: 50px;
//   align-items: center;
//   justify-content: center;
//   overflow-x: auto;

//   @media only screen and (max-width: 480px) {
//     padding-left: 380px;
//   }
//   @media only screen and (min-width: 481px) and (max-width: 768px) {
//     padding-left: 300px;
//   }
// `;

// export default Colecoes;
