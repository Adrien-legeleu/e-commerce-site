import React from 'react'
import styled from "styled-components";
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("./img/fondregister.jpg") center/cover;
  display: flex;
  align-items: center;
    justify-content: center;
`;

const Wrapper=styled.div`
    padding: 20px;
    width: 40%;
    background: white;
    border-radius: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    ${mobile({width:"80%"})}
`;
const Title=styled.h1`
    font-size: 1.4rem;
    font-weight: 300;
`;
const Form=styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

`;
const Input=styled.input`
    flex:1;
    min-width: 50%;
    margin: 10px 0;
    padding: 10px;
    border: none;
    border-bottom: 1px solid teal;
    outline: none;
`;
const Button=styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color:teal;
    color: white;
    cursor: pointer;
    border-radius: 15px;
    margin: 15px auto;
    font-size: 1.2rem
`;

const Link=styled.a`
    text-align: center;
    font-size: 0.8rem;
    margin: 5px 0;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Button>send</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
