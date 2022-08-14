import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { setSearch } from "../features/search/SearchSlice";
import { useDispatch } from "react-redux";
const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  return (
    <Container>
      <img src="./images/logo.png" alt="" />
      <SearchContainer>
        <input
          value={name}
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(setSearch(name));
            setName("");
          }}
        >
          SEARCH
        </button>
      </SearchContainer>
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  display: flex;
  margin-top: 70px;
  flex-direction: column;
  input[type="text"] {
    width: 800px;
    height: 50px;
    border: none;
    color: black;
    font-weight: bold;
    letter-spacing: 3px;
    font-size: 30px;
    outline: none;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  button {
    width: 120px;
    border: none;
    background: #bf1e98;
    color: white;
    font-weight: bold;
    letter-spacing: 2.5px;
  }
`;
