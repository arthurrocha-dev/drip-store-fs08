import styled from "styled-components";

interface StyledProps {
    src: string,
    alt: string
}

type Props = {
    image: string,
    titulo: string
}

const Card2 = (props: Props): JSX.Element => {
    return (
        <>
            <ContainerCard>
                <ImageContainer>
                    <Picture src={props.image}  alt={props.titulo}/>
                </ImageContainer>
                <TitleCategory>{props.titulo}</TitleCategory>
            </ContainerCard>
        </>
    );
};

const ContainerCard = styled.div`
    width: 105px;
    display: flex;
    flex-direction: column;    
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 15px 0;
`;

const ImageContainer = styled.div`
    width: 104px;
    height: 104px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: var(--Slaved);
    background-color: var(--White);
    transition-duration: .1s;
        &:hover{
            box-shadow: var(--Slaved-hover);
        }
`;

const Picture = styled.img<StyledProps>`
    width: 60%;
    height: 60%;
    object-fit: contain;
`;

const TitleCategory = styled.h3`
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    color: var(--Dark_Gray_2);
`;



export default Card2;