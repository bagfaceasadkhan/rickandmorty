import React from "react";
import styled from "styled-components";
const About = () => {
  return (
    <Container>
      <ImageContainer></ImageContainer>
      <AboutContainer>
        <h1>About</h1>
        <p>
          This is a simple rick and morty web app built using ReactJs.<br></br>
          Along with React other advance technologies such as Redux, Redux
          toolkit, Redux toolkit query and React Router is used.
        </p>
        <h5>Technologies Learned</h5>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>RTK Query</li>
          <li>React Router</li>
          <li>Styled components</li>
        </ul>
      </AboutContainer>
    </Container>
  );
};

export default About;

const Container = styled.div`
  height: 100vh;
  background: #131417;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ImageContainer = styled.div`
  height: 400px;
  width: 600px;
  display: flex;
  background: #1e1f26;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 10px 8px rgb(42, 43, 53);
  background: url("./images/randm2.jpg");
  background-size: cover;
  background-position: center;
`;

const AboutContainer = styled.div`
  height: 400px;
  box-shadow: 10px 10px 8px rgb(42, 43, 53);
  width: 600px;
  background: #1e1f26;
  padding: 20px;
  color: white;
  font-size: 20px;
  h1 {
    font-size: 50px;
  }
`;
