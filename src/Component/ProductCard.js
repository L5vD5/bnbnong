import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Links = styled(Link)`
  border: 1px solid #eee;
  &:hover {
    top : -2px;
    transform: scale(1.02);
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const MarketImage = styled.div`
  height:450px;
  background-size:cover;
  background-position:center center;
  background-image: url('${(props) => props.src}');
  `;

  const ProductImage = styled.div`
  height:450px;
  background-size:cover;
  background-position:center center;
  background-image: url('${(props) => props.src}');
  `;

const GapMark = styled.span`
  display: ${(props) => (props.gap !== null ? "flex" : "none")};
  top: 0px;
  position: absolute;
  width:50px;
  height:50px;
  background-image: url('${(props) => props.src}');
  background-size:cover;
  background-position:center center;
  transition: opacity 0.1s ease-in-out;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${ProductImage} {
      opacity:0.4;
    }
    ${GapMark} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  color: #494848;
  display: block;
  overflow: hidden;
  padding-left: 7px;
  font-weight: 600;
  font-size: 22px;
  line-height: 2;
  white-space: pre-line;
  text-overflow: ellipsis;
`;

const Location = styled.span`
  color: #b9b5b5;
  display: block;
  overflow: hidden;
  font-weight: 600;
  font-size: 14px;
  padding-left: 7px;
  white-space: pre-line;
  text-overflow: ellipsis;
`;

const Chips = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  float: left;
`;

const Price = styled.span`
  color: #0f4c81;
  display: block;
  overflow: hidden;
  padding-left: 7px;
  font-weight: 600;
  font-size: 22px;
  line-height: 2;
  white-space: pre-line;
  text-overflow: ellipsis;
`;

const Chip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  margin: 5px;
  border-radius: 10px;
  border: 2px solid #eee;
  padding: 5px;
  font-size: 15px;
  font-weight: 400;
`;

const ProductCard = ({
  id,
  src,
  name,
  family,
  price,
  gap,
  numberWithCommas,
  isMarket,
}) => {
  return !isMarket ? (
    <Links to={`/detail/${id}`}>
      <Container>
        <ImageContainer>
          <ProductImage src={`http://bnbnong.com:4000/static/${src}`} />
          <GapMark
            gap={gap}
            src={"https://www.gap.go.kr/portal/images/content/gap_logo_01.gif"}
          />
        </ImageContainer>
        <Title>
          {name && name.length > 15 ? `${name.substring(0, 15)}` : name}
        </Title>
        <Location>경기도 광주시</Location>
        <Price>
          {price && price.length > 15
            ? `${price.substring(0, 15)}`
            : numberWithCommas(price)}
        </Price>
      </Container>
    </Links>
  ) : (
    <Links to={`/market/${id}`}>
      <Container>
        <ImageContainer>
          <MarketImage
            src={
              "https://www.shareicon.net/data/512x512/2016/05/26/770815_man_512x512.png"
            }
          />
        </ImageContainer>
        <Title>{name}</Title>
        <Location>{isMarket}</Location>
        <Title>
          <Chips>
            {family.split(",").map((list, index) => {
              if (index <= 6) {
                return <Chip>{list}</Chip>;
              }
            })}
          </Chips>
        </Title>
      </Container>
    </Links>
  );
};

export default ProductCard;
