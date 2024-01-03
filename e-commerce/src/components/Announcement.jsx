import React from 'react';
import styled from "styled-components";
import { mobile } from '../responsive';


const Container=styled.div`
    height: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: teal;
    font-size: 1rem;
    font-weight:500;
    border-radius: 5px 5px 10px  10px;
    animation:announcement 30s ease-in-out infinite;
    ${mobile({animation:"none" })}


    @keyframes announcement {
        0%{
            transform: scale(1);
        }
        20%{
            transform:translateY(10px) scale(1.03);
        }
        40%{
            transform:translateY(0px) scale(1.06);
        }
        60%{
            transform:translateY(10px) scale(1.08);
        }
        80%{
            transform: scale(1.1) translateY(0px);
        }
        90%{
            transform:translateY(10px);
        }
        100%{
            transform: scale(1);
        }
    }
`;

const Announcement = () => {
    return (
        <Container>Super Deal ! Free Shipping on Orders Over $50</Container>
    );
};

export default Announcement;
