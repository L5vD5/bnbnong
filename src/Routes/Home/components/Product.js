import React from "react";
import styled from "styled-components";

import ProductCard from "./ProductCard";

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  @media only screen and (max-width: 768px) {
    width: 100%;
    height:100%;
    display: table;
    justify-content:center;
    margin: 0 auto;
  }
  @media only screen and  (width:768px) , (width:1024px) ,(width:1366px) {
    display:grid;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
    `;

const TextContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding-top:30px;
`;
const Text = styled.span`
  color: #000;
  display: block;
  overflow: hidden;
  padding-top: 3px;
  font-weight: 600;
  font-size: 25px;
  line-height: 2;
  cursor: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 10px;
  border-bottom: ${(props) => props.theme.boxBorder};
  `;

export default ({data}) => {
  return (
    <>
      <TextContainer>
        <Text>제주 농산물</Text>
      </TextContainer>
      <GridContainer>
        {data.map((p) => {
           if(p.category===1)  return (
            <ProductCard key={p.id} id={p.id} src={p.src} name={p.productname} price={p.price} category={p.category} content={p.content} />
          ); 
        })}
             {data.map((p) => {
           if(p.category===2)  return (
            <ProductCard key={p.id} id={p.id} src={p.src} name={p.productname} price={p.price} category={p.category} content={p.content} />
          ); 
        })}
              {data.map((p) => {
           if(p.category===3)  return (
            <ProductCard key={p.id} id={p.id} src={p.src} name={p.productname} price={p.price} category={p.category} content={p.content} />
          ); 
        })} 
      </GridContainer>
    </>
  );
};