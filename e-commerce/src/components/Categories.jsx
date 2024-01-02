import React from 'react'
import { categories } from "../data";
import CategoryItem from './CategoryItem';
import styled from "styled-components";

const Container=styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    gap: 10px;
`;


const Categories = () => {
  return (
    <Container>
      {categories.map((item , index)=>(
        <CategoryItem item={item} key={index}/>
        ))}
    </Container>
  )
}

export default Categories
