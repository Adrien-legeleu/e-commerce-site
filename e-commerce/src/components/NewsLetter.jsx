import React from 'react'
import styled from "styled-components";
import { Send } from '@mui/icons-material'
import { mobile } from '../responsive';

const Container=styled.div`
    height: 60vh;
    width: 100vw;
    max-width: 100vw;
    background: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    gap: 20px;
    ${mobile({maxWidth:"100%"})}

    
`;
const Title=styled.h1`
    font-size: 3.5rem;
`;
const Description=styled.div`
    font-size: 1.4rem;
      ${mobile({width:"50%" , textAlign:"center"})}

`;
const InputContainer=styled.div`
    width: 50%;
    height: 40px;
    background: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    border-radius: 15px;
    ${mobile({width:"60%"})}
`;
const Input=styled.input`
    border: none;
    outline: none;
    flex: 8;
    padding-left:15px;
    border-radius: 15px 1px 1px 15px;
`;
const Button=styled.button`
    flex: 1;
    border-radius: 1px 15px 15px 1px ;
    color: white;
    background: teal;
    border: none;
    cursor: pointer;
    ${mobile({flex:"2"})}
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder=" Your email"/>
        <Button>
            <Send/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter
