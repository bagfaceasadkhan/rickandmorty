import React from "react";
import styled from "styled-components";
const NavBar = () => {
  return (
    <Container>
      <List>
        <a href="/allcards">All Characters</a>
        <a href="/about">About</a>
      </List>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  width: 100vw;

  position: absolute;
`;
const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  a {
    color: white;
    margin: 10px 30px;
    text-decoration: none;
    font-size: 20px;
    font-weight: bolder;
  }
`;
