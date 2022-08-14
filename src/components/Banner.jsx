import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
const Banner = () => {
  return (
    <>
      <Container>
        <NavBar />
        <SearchBar />
      </Container>
    </>
  );
};

export default Banner;

const Container = styled.div`
  height: 600px;
  display: flex;
  align-items: space-between;
  justify-content: center;
  widht: 100vw;
  background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("./images/randm5.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
