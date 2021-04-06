import React from "react";
import styled from "styled-components";
import { productData } from "Components/data";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background-color: black;
  color: white;
`;

const CenterTitle = styled.h1`
  font-size: clamp(2rem, 2.5vh, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  line-height: 2;
  width: 300px;
`;

const Image = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 1.5rem;
`;

const Desc = styled.p`
  margin-bottom: 1rem;
`;

const Price = styled.span`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  background-color: red;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.2s ease-in-out;
  &:hover {
    transition: 0.2s ease-in-out;
    color: black;
  }
`;

const Products = () => {
  return (
    <Container>
      <CenterTitle>heading</CenterTitle>
      <Wrapper>
        {productData.map((product, index) => {
          return (
            <Card key={index}>
              <Image src={product.image} alt={product.alt} />
              <Data>
                <Title>{product.name}</Title>
                <Desc>{product.desc}</Desc>
                <Price>{product.price}</Price>
                <Button>{product.button}</Button>
              </Data>
            </Card>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Products;
