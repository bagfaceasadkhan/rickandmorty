import React from "react";
import styled from "styled-components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
const Card = (props) => {
  console.log(props.data);
  return (
    <Container>
      <ImageContainer style={{ background: "url(" + props.data.image + ")" }}>
        <button
          style={{
            background: props.data.status == "Alive" ? "#72C100" : "red",
          }}
        >
          {props.data.status.toUpperCase()}
        </button>
      </ImageContainer>
      <InformationContainer>
        <h4>{props.data.name}</h4>
        <p>Location : {props.data.origin.name}</p>
        <p>
          <p> {props.data.gender}</p>
          <p> {props.data.species}</p>
        </p>
      </InformationContainer>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  height: 470px;
  width: 300px;
  color: white;
  margin: 50px 60px;
  background: #1e1f26;
  box-shadow: 10px 10px 8px rgb(42, 43, 53);
  p {
    display: flex;
    justify-content: space-between;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 300px;
  button {
    height: 30px;
    margin: 10px;
    border: none;
    color: white;
    font-weight: bold;
    letter-spacing: 2px;
    border-radius: 5px;
  }
`;

const InformationContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 10px;
  h4 {
    font-family: "Silkscreen", cursive;
  }
`;
