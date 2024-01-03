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
    width: 50%;
    background: white;
    border-radius: 45px;
    ${mobile({width:"80%"})}
`;
const Title=styled.h1`
    font-size: 1.4rem;
    font-weight: 300;
`;
const Form=styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input=styled.input`
    flex:1;
    min-width: 35%;
    width: 35%;
    margin: 20px 30px 0 0;
    padding: 10px;
    border: none;
    border-bottom: 1px solid teal;
    outline: none;
`;
const Agreement=styled.span`
    font-size: 0.8rem;
    margin: 20px 0;
`;
const Button=styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color:teal;
    color: white;
    cursor: pointer;
    border-radius: 15px;
    margin: 0 auto;
    font-size: 1.2rem
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="name" />
            <Input placeholder="last-name" />
            <Input placeholder="username" />
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Input placeholder="confirm password" />
            <Agreement>
                By creating an account, I consent to the processing of my personnal data in accordance with the <b>PRIVACY POLICE</b>
            </Agreement>
            <Button>send</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register