import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import React from 'react';
import styled from "styled-components";

const Container =styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow=styled.div`
    width: 50px;
    height: 50px;
    background: #faf8f8;
    border-radius: 50%;
    display: flex;
    align-items:center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=>props.direction === "left" && "10px"};
    right: ${props=>props.direction == "right"&& "10px"};
    cursor: pointer;
    opacity: 0.65;
`;

const Wrapper=styled.div`
    height: 100%;
    display: flex;
    transform: translateX(-100px);
`;
const Slide=styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`;
const ImgContainer=styled.div`
    flex:1;
`;
const Image =styled.img`
    height: 80%;
`;
const InfoContainer=styled.div`
    flex: 1;
    padding: 50px;
`;
const Title=styled.h1`
    font-size: 3rem;
`;
const Description=styled.p`
    margin: 50px 0;
    font-size: 1.3rem;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button=styled.button`
    padding: 10px;
    font-size: 1.3rem;
    background: transparent;
    border-radius: 10px;
    cursor: pointer;
`;



const Slider = () => {

    const handleClick=(direction)=>{

    }

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeft/>
      </Arrow>
      <Wrapper>
        <Slide bg="f5fafd">
        <ImgContainer>
            <Image src='https://www.nicepng.com/png/full/8-88585_women-fashion-png-example-of-magazine-cover.png'/>
        </ImgContainer>
        <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Description>DON'T COMPROMISE ON STYLE !  GET FLAT 30% OFF FOR NEW ARRIVALS</Description>
            <Button>SHOW NOW</Button>
        </InfoContainer>
        </Slide>
        <Slide bg="f5f1ed">
        <ImgContainer>
            <Image src='https://img.freepik.com/photos-gratuite/femme-brune-sacs-provisions-multicolores_329181-9193.jpg'/>
        </ImgContainer>
        <InfoContainer>
            <Title>WINTER SALE</Title>
            <Description>DON'T COMPROMISE ON STYLE !  GET FLAT 30% OFF FOR NEW ARRIVALS</Description>
            <Button>SHOW NOW</Button>
        </InfoContainer>
        </Slide >
        <Slide bg="fbf0f4">
        <ImgContainer>
            <Image src='https://img.freepik.com/photos-gratuite/femme-brune-sacs-provisions-multicolores_329181-9193.jpg'/>
        </ImgContainer>
        <InfoContainer>
            <Title>POPULAR SALE</Title>
            <Description>DON'T COMPROMISE ON STYLE !  GET FLAT 30% OFF FOR NEW ARRIVALS</Description>
            <Button>SHOW NOW</Button>
        </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRight/>
      </Arrow>
    </Container>
  )
}

export default Slider
