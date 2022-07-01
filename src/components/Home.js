import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Overlay>
        <Logo src="/image/logo.png" />
        <Title>Distress</Title>
        <Text>
          One of the problems afflicting most Nations of world is abuse. It's a
          social evil which can destroy the very vitals of the society and
          nibble it gradually.
        </Text>
        <Buttons>
          <Button1 to="/signin">Log in</Button1>
          <Button2 to="/signup">Sign up</Button2>
        </Buttons>
      </Overlay>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-image: url("/image/back.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Logo = styled.img`
  width: 100px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 30px;
  margin-top: 10px;
`;

const Text = styled.div`
  text-align: center;
  margin-top: 10px;
  opacity: 72%;
  padding: 0 10px;
`;

const Buttons = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button1 = styled(NavLink)`
  width: 85%;
  background: white;
  color: #0a58ed;
  height: 45px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  text-decoration: none;
`;

const Button2 = styled(NavLink)`
  width: 85%;
  color: white;
  background: #0a58ed;
  height: 45px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  text-decoration: none;
  margin-top: 20px;
`;
