import React from "react";
import styled from "styled-components";
import { increment, decrement, firstPage } from "../features/pages/PageSlice";
import { useDispatch } from "react-redux";
const Footer = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <button
        onClick={() => {
          dispatch(firstPage());
        }}
      >
        FIRST
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        PREV
      </button>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        NEXT
      </button>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    margin: 30px 10px;
    border: none;
    background: #1e1f26;
    color: white;
    width: 100px;
    padding: 5px;
  }
`;
