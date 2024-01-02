import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react'
import styled from "styled-components";

const Container=styled.div`
    flex: 1;
    margin: 5px;
    min-width:280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Circle=styled.div``;
const Image=styled.img`
    height: 75%;
`;
const Infos=styled.div``;
const Icon=styled.div``;

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
