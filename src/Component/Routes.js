import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React from "react";
import Home from "../Routes/Home";
import Deatail from "../Routes/Detail";
import Cart from "../Routes/Cart";
import Search from "../Routes/Search";
import Category from "../Routes/Category";
import { Header } from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const Container = styled.div`
  width:100%;
  max-width:1400px;
  margin : 0px auto;
  `;
const RouterContainer = styled.div`
`;


const Routes = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:category/:id" component={Deatail} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/category/:item" component={Category} />
          <Route exact path="/search/" component={Search} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
};


const appRouter = () => (
        <Routes /> 
    );


export default appRouter;
