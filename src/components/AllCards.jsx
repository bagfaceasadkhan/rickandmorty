import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Card from "./Card";
import Footer from "./Footer";
import { useGetAllCharactersQuery } from "../services/post";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, firstPage } from "../features/pages/PageSlice";
const AllCards = () => {
  const pageNo = useSelector((state) => state.page.pageNo);
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState([]);
  const { data, error, isLoading } = useGetAllCharactersQuery(pageNo);
  useEffect(() => {
    if (!isLoading) {
      setCharacters(data.results);
      window.scrollTo({
        top: 0,
        left: 100,
        behavior: "smooth",
      });
    }
  }, [data]);

  return (
    <Container>
      {characters && characters.map((val) => <Card data={val} />)}
      <Footer />
    </Container>
  );
};

export default AllCards;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background: #131417;
  flex-wrap: wrap;
`;
