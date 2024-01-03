import React from 'react'
import styled from "styled-components";
import { mobile } from '../responsive';

const Container=styled.div`
    flex: 1;
    height: 70vh;
    position: relative;
    width: 100%;
`;
const Image=styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
      ${mobile({height:"30vh"  ,margin:"0 auto"})}

`;
const Title=styled.div`
    color: white;
    text-align: center;
    margin-bottom: 1.4rem;
`;
const Info=styled.h1`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Button=styled.button`
    border: none;
    border-radius: 15px;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
