import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useGetCharactersByNameQuery } from "../services/post";
import { useSelector } from "react-redux";
import Card from "./Card";
const CardContainer = () => {
  const name = useSelector((state) => state.search.search);

  const [characters, setCharacters] = useState([]);
  const { data, error, isLoading } = useGetCharactersByNameQuery(name);
  useEffect(() => {
    if (!isLoading) {
      setCharacters(data.results);
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
    }
  }, [data]);

  return (
    <Container>
      {characters && characters.map((val) => <Card data={val} />)}
    </Container>
  );
};

export default CardContainer;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background: #131417;
  flex-wrap: wrap;
`;
