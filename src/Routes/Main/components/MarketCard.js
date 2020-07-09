import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Links= styled(Link)`
  display: table;
  width: 100%;
  height:100%;
  margin: 0 auto;
  margin-bottom:20px;
  margin-top:40px;
  z-index:1;
}
`;

const Img = styled.div`
  background-image: url('${(props) => props.src}');
  background-size: cover;
  width:100%;
  height:450px;
  background-position:center center;
  transition : opacity 0.3s linear;
`;


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    width: 230px;
    height: 230px;
    display: table;
    justify-content: center;
    margin: 0 auto;
  }
  &:hover {
    ${Img} {
      opacity: 0.3;
    }}

`;

const ProductName = styled.span`
  color: #494848;
  display: block;
  overflow: hidden;
  padding-top: 3px;
  font-weight: 600;
  font-size: 22px;
  line-height: 2;
  white-space: pre-line;
  text-overflow: ellipsis;
`;

const ProductPrice = styled.span`
  color: #727272;
  display: block;
  overflow: hidden;
  padding-top: 1px;
  font-weight: 500;
  font-size: 18px;
  line-height: 2;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ProductContent = styled.span`
color: #727272;
display: block;
overflow: hidden;
font-weight: 500;
font-size: 16px;
font-family:'Do Hyeon', sans-serif;
line-height: 2;
white-space: pre-line;
word-break:break-all;
text-overflow: ellipsis;
`;

const ImageContainer = styled.div`
  display:table;
`;

const MarketCard = ({ name, family, id }) => (
  <Links to={`/${id}`}>
    <Container >
      {/* <Img src={src}/> */}
      {family}
    </Container>
    <ImageContainer>
      <ProductName>{name}</ProductName>
      {/* <ProductPrice>{price}원</ProductPrice>
      <ProductContent>{content}</ProductContent> */}
    </ImageContainer>
  </Links>
);

export default MarketCard;