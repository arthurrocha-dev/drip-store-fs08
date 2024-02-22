import styled from "styled-components";
import Card1 from "./cards1";
import Card2 from "./cards2";
import { useState } from "react";

interface RequestData {
  id: number;
  image: string;
  title: string;
}

const Colecoes = (): JSX.Element => {
  const [data, setData] = useState([]);

  return (
    <>
      <ContainerColecoes>
        <Title>{"Coleções em destaque"}</Title>
        <ListaCards>
          <Card1 />
          <Card1 />
          <Card1 />
        </ListaCards>

        <SupTitle>{"Categorias em destaque"}</SupTitle>

        <ListaIcones>
          {data.map((item: RequestData) => (
            <Card2 key={item.id} image={item.image} titulo={item.title} />
          ))}
        </ListaIcones>
      </ContainerColecoes>
    </>
  );
};

const ContainerColecoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 34px 100.5px 124px;
  overflow: hidden;

  @media only screen and (max-width: 480px) {
    padding: 34px 10px;
  }
`;
const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: var(--Dark_Gray_2);
`;
const SupTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: var(--Dark_Gray_2);
  text-align: center;
  margin-top: 100px;
  margin-bottom: 20px;
`;
const ListaCards = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;
const ListaIcones = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  gap: 50px;
  align-items: center;
  justify-content: center;
  overflow-x: auto;

  @media only screen and (max-width: 480px) {
    padding-left: 380px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    padding-left: 300px;
  }
`;

export default Colecoes;
