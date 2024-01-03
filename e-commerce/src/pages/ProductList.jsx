import React from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';

const Container=styled.div``;
const Title=styled.h1`
    margin: 20px;
`;
const FilterContainer=styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter=styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
    ${mobile({flexDirection:"column" , alignItems:"start" })}
    gap: 10px;
`;
const FilterText=styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    margin-right:20px;
`;

const Select=styled.select`
    padding: 10px;
    border: none;
    background: teal;
    border-radius: 20px;
    color: white;
    margin-right: 20px;
    outline: none;
    cursor: pointer;
`;

const Option=styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
            <FilterText>Filter Products :</FilterText>
            <Select>
                <Option disabled selected>Color</Option>
                <Option>White</Option>
                <Option>black</Option>
                <Option>red</Option>
                <Option>blue</Option>
                <Option>yellow</Option>
                <Option>green</Option>
            </Select>
            <Select>
                <Option disabled selected>Size</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
            </Select>
        </Filter>
        <Filter>
            <FilterText>Sort Products :</FilterText>
            <Select>
                <Option disabled selected>Newest</Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
            </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
