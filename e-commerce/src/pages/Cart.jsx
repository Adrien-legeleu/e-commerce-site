import React from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';

const Container=styled.div`

`;
const Wrapper=styled.div`
    padding: 20px;
    ${mobile({padding:"10px" })}
`;
const Title=styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
const TopButton=styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 15px;
    border: ${(props)=>props.type === "filled" && "none"};
    background-color: ${(props)=>props.type === "filled" ? "black" : "transparent"};
    color: ${(props)=>props.type === "filled" && "white"};
`;
const TopTexts=styled.div`
    ${mobile({display:"none"})}
`;
const TopText=styled.span`
    cursor: pointer;
    text-decoration: underline;
    margin: 0 10px ;
`;

const Bottom=styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`;
const Info=styled.div`
    flex: 3;
`;
const Product=styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column" , marginBottom:"20px"})}
`;
const ProductDetail=styled.div`
    flex: 2;
    display: flex;
    ${mobile({flexDirection:"column" , alignItems:"center" })}
`;
const Image=styled.img`
width: 200px;
padding: 20px;
object-fit: contain;
`;
const Details=styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;
`;
const Productname=styled.span`

`;
const ProductId=styled.span`

`;
const ProductColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props)=>props.color};
`;
const ProductSize=styled.span`

`;
const PriceDetail=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const ProductAmountContainer=styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 5px;
`;
const ProductAmount=styled.div`
    font-size: 1.4rem;
`;
const ProductPrice=styled.div`
    font-size: 1.8rem;
    `;

const Hr=styled.hr`
    background: #f3efef;
    border: none;
    height: 2px;
    `;
const Summary=styled.div`
        flex: 1;
        border: 0.5px solid lightgray;
        border-radius: 10px;
        padding: 20px;
        height: 50vh;
        text-align: center;
`;
const SummaryTitle=styled.h1`
    font-weight: 200;
`;
const SummaryItem=styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props)=>props.type === "total" && "500"};
    font-size: ${(props)=>props.type === "total" && "23px"};
`;
const SummaryItemText=styled.span`
`;
const SummaryItemPrice=styled.span`
`;
const SummaryButton=styled.button`
    border: none;
    background: teal;
    padding: 10px;
    border-radius: 20px;
    color: white;
    font-weight: 600;
`;


const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping bag(2)</TopText>
                <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://m.media-amazon.com/images/I/61DaYzPluYL._AC_UY780_.jpg" />
                        <Details>
                            <Productname><b>Product:</b> JESSIE THUNDER SHOES</Productname>
                            <ProductId><b>ID:</b> 89898415148</ProductId>
                            <ProductColor color='black'/>
                            <ProductSize><b>Size:</b> 37.5</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                        <Image src="https://m.media-amazon.com/images/I/710IigvpOYL._AC_UY780_.jpg" />
                        <Details>
                            <Productname><b>Product:</b> JESSIE THUNDER SHOES</Productname>
                            <ProductId><b>ID:</b> 89898415148</ProductId>
                            <ProductColor color='gray'/>
                            <ProductSize><b>Size:</b> 37.5</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ 80</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText >Total</SummaryItemText>
                    <SummaryItemPrice>$ 80</SummaryItemPrice>
                </SummaryItem>
                <SummaryButton>CHECKOUT NOW</SummaryButton>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
