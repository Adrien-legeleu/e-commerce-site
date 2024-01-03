import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react'
import styled from "styled-components";

const Infos=styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.25s ease-in-out;
    border-radius: 50px;
    cursor: pointer;
`;
const Container=styled.div`
    flex: 1;
    margin: 5px;
    min-width:280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f9fbffb9;
    border-radius: 50px;
    position: relative;
    &:hover ${Infos}{
        opacity: 1;
        border-radius: 30px;
    }
`;
const Circle=styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;
const Image=styled.img`
    height: 75%;
    z-index: 2;
`;
const Icon=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: 0.5s ease-out;
    cursor: pointer;

    &:hover{
        background: #e9f5f5;
        transform: scale(1.1);
    }
`;

const Product = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.img}/>
      <Infos>
        <Icon>
            <ShoppingCartOutlined/>
        </Icon>
        <Icon>
            <SearchOutlined/>
        </Icon>
        <Icon>
            <FavoriteBorderOutlined/>
        </Icon>
      </Infos>
    </Container>
  )
}

export default Product
