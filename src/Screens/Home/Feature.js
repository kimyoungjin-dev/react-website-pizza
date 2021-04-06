import React from "react";
import styled from "styled-components";
import { FeatureData } from "Components/data";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 400px;
  position: relative;
`;

const Card = styled.div`
  color: white;
  line-height: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 900;
`;

const Desc = styled.p`
  font-size: 24px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background-color: yellow;
  transition: 0.2s ease-in-out;
  color: black;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 1rem 3rem;
  font-size: 20px;
`;

const Feature = () => {
  return (
    <Container>
      {FeatureData.map((feature, index) => (
        <Card key={index}>
          <Image src={feature.image} />
          <Title>{feature.title}</Title>
          <Desc>{feature.desc}</Desc>
          <Link to="/ordernow">
            <Button>{feature.button}</Button>
          </Link>
        </Card>
      ))}
    </Container>
  );
};

export default Feature;
