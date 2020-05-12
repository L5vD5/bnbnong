import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  makeStyles,
  AppBar,
  Tabs,
  Tab,
} from "@material-ui/core";
import ProductSwipe from "../../Component/ProductSwipe";
import Banner from "../../Component/Banner";
import SaleProduct from "../../Component/SaleProduct";

const Container = styled.div``;

const Text = styled.span`
  color: rgb(0, 0, 0);
  display: block;
  overflow: hidden;
  padding-top: 3px;
  font-weight: 600;
  font-size: 14px;
  line-height: 2;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left:10px;
`;


//👁👁👁👁👁👁👁👁Material Ui Component 👁👁👁👁👁👁👁👁

//👁👁👁👁👁👁👁👁👁👁👁
export default ({ data }) => {
  console.log(data);

  return (
    <Container>
      <Banner/>
      <Text>추천 상품</Text>
      <ProductSwipe/>
      <SaleProduct/>
    </Container>
  );
};
