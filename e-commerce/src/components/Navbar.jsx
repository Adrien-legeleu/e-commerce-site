import React from "react";
import styled from "styled-components";
import Badge from '@mui/material/Badge';
import { Search, ShoppingCart } from "@mui/icons-material"
import {mobile} from "../responsive"

const Container = styled.div`
  height: 60px;
  ${mobile({height:"50px"})}
`;
const Wrapper=styled.div`
  padding:10px 20px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  ${mobile({padding:"10px"})}
`;
const Left=styled.div`
flex:1;
display:flex;
align-items:center
`

const Language=styled.span`
  font-size:1rem;
  cursor:pointer;
    ${mobile({display:"none"})}

`;

const SearchContainer=styled.div`
  border:0.5px solid lightgray;
  display:flex;
  align-items:center;
  border-radius: 15px;
  margin-left:25px;
  padding:5px;
    ${mobile({marginLeft:"0px"})}

`;

const Input=styled.input`
  border:none;
    ${mobile({width:"50px"})}

`;


const Center=styled.div`
flex:1
`;

const Logo=styled.h1`
  font-weight: bold;
  text-align: center;
  ${mobile({fontSize:"1.2rem"})}

`
const Right=styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
  ${mobile({ flex:"2" , justifyContent:"center"})}

`
const MenuItem=styled.div`
  font-size: 1rem;
  cursor: pointer;
  margin-left: 25px;
    ${mobile({fontSize:"0.7rem" , marginLeft:"10px"})}

`;

const Navbar = () => {
  return (
  <Container>
    <Wrapper>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input placeholder="search"/>
          <Search style={{color:"gray", fontSize:"1rem" }}/>
        </SearchContainer>
      </Left>
      <Center>
        <Logo>LAMA.</Logo>
      </Center>
      <Right>
        <MenuItem>REGISTER</MenuItem>
        <MenuItem>SIGN IN</MenuItem>
        <MenuItem>
        <Badge badgeContent={4} color="primary">
          <ShoppingCart/>
        </Badge>
        </MenuItem>
      </Right>
    </Wrapper>
  </Container>
  );
};

export default Navbar;
