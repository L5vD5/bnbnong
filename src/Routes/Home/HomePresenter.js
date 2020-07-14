import React from "react";
import styled from "styled-components";
import Product from "./components/Product"
import Loader from "../../Component/Loader";

const Container = styled.div`
  padding:100px;
`;


export default ({ data, getList, error, loading,numberWithCommas,initMap }) => {
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Product
            data={getList}
            numberWithCommas={numberWithCommas}
            dummyData={data}
            error={error}
          />
        </>
      )}
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
    </Container>
  );
};
