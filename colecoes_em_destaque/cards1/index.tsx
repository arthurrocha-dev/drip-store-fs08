import styled, { IStyledComponent } from "styled-components";
import SVG from './assets/index.svg';

interface StyledProps {
  key?: string | number;
  src?: string | undefined;
  alt?: string | undefined;
}

type Props = {
    discount?: string,
    title?: string,
    imagem?: string,
    ctaButton?: string
}

const Card1 = (props: Props): JSX.Element => {
  return (
    <>
      <LiContainer>
        <Discount>{props.discount || "30% OFF"}</Discount>
        <Title>{props.title || "Novo Drop Supreme"}</Title>
        <Figure src={props.imagem || SVG} alt="Imagem"/>
        <Button>{props.ctaButton || "Comprar"}</Button>
      </LiContainer>
    </>
  );
};

const LiContainer: IStyledComponent<"web"> = styled.li<StyledProps>`
  position: relative;
  padding: 35px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 405px;
  height: 251px;
  background-color: var(--Special_Blue);
  overflow: hidden;
  border-radius: 8px;
`;

const Discount: IStyledComponent<"web"> = styled.h3<StyledProps>`
  max-width: 100px;
  padding: 5px 15px;
  border-radius: var(--Pill-Rounded);
  background-color: var(--Attention);
  color: var(--Dark_Gray_3);
  font-weight: bold;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title: IStyledComponent<"web"> = styled.h1<StyledProps>`
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: var(--Large-spaced);
  text-align: left;
  color: var(--Dark_Gray);
  max-width: 200px;
`;

const Figure = styled.img<StyledProps>`
    display: block;
    width: 350px;
    height: 240px;
    /* object-fit: contain; */
    position: absolute;
    bottom: 0;
    right: -80px;
    
`;

const Button = styled.button`
    width: 153px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--Light_Gray_3);
    color: var(--Primary);
    font-size: 16px;
    font-weight: 700;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition-duration: .1s;
      &:hover{
        background-color: var(--Light_Gray_2);
      }
`;

export default Card1;
