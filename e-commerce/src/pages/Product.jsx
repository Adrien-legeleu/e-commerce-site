import React from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';

const Container=styled.div`

`;
const Wrapper=styled.div`
    padding: 50px;
    display: flex;
    ${mobile({flexDirection:"column" , padding:"20px"})}
`;
const ImgContainer=styled.div`
    flex: 1;
`;
const Image=styled.img`
    width: 100%;
    height: 85vh;
    object-fit: cover;
    border-radius: 40px;
    ${mobile({height:"45vh"})}
`;
const InfoContainer=styled.div`
    flex: 1;
    padding: 0 0 0 50px;
    ${mobile({padding:"10px" , textAlign:"center"})}
`;
const Title=styled.h1`
    font-weight: 200;
    letter-spacing: 3px;
`;
const Desc=styled.p`
    margin: 20px 0;
    letter-spacing: 1px;
    line-height: 25px;
`;
const Price=styled.span`
    font-weight: 100;
    font-size: 2rem;
`;

const FilterContainer=styled.div`
    width: 75%;
    padding: 15px;
    border-radius: 20px;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    background: #f3f0f0;
    gap: 5px;
    ${mobile({margin:"30px auto" , width:"90%"})}
`;
const Filter=styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle=styled.span`
    font-size: 1.2rem;
    font-weight: 200;
`;
const FilterColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${(props)=>props.color} ;
    margin: 0 5px;
    cursor: pointer;
`;
const FilterSize=styled.select`
    margin-left: 10px;
    padding: 5px;
    border-radius: 15px;
`;
const FilterSizeOption=styled.option``;
const AddContainer=styled.div`
    display: flex;
    align-items: center;
    width: 70%;
    justify-content: space-between;
    ${mobile({margin:"0 auto" , width:"90%"})}
`;
const AmountContainer=styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    gap: 5px;
`;
const Amount=styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Button=styled.button`
    border: none;
    padding: 10px;
    border-radius: 20px;
    background: teal;
    color: white;
    cursor: pointer;
    font-weight: 500;
    transition: 0.25s ease-in-out;

    &:hover{
        transform: scale(1.05) translateX(5px);
    }
`;

const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
            <Image src="https://www.patteblanche-atelier.com/cdn/shop/products/Mannequinhommechemise_1800x1800.jpg?v=1672236158"/>
        </ImgContainer>
        <InfoContainer>
            <Title>Denim Jumpsuit</Title>
            <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam distinctio odio excepturi dolore nam in, possimus voluptate illo tempore corporis eaque velit cum, non amet, eius quis qui saepe dolorum.</Desc>
            <Price>$ 20</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="white"/>
                    <FilterColor color="darkblue"/>
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}

export default Product
