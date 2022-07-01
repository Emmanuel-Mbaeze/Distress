import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Onboarding1 = () => {
  return (
    <Container>
      <Wrapper>
        <Image src="/image/1.webp" />
        <Textholder>
          <Title>Easy Accessibility To Help </Title>
          <Text>
            Abuse is that social evil which has ruined many lives and is
            gradually on the rise.Follow this 3 steps to finish creating an
            account
          </Text>
        </Textholder>
        <Button to="/onboarding2">Continue</Button>
        <Level>
          <Active />
          <NotActive />
          <NotActive />
        </Level>
      </Wrapper>
    </Container>
  );
};

export default Onboarding1;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 90%;
`;

const Textholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 23px;
`;

const Text = styled.div`
  padding: 0 10px;
  text-align: center;
  opacity: 72%;
  margin-top: 10px;
`;

const Button = styled(NavLink)`
  width: 85%;
  color: #0a58ed;
  height: 45px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid #0a58ed;
`;

const Level = styled.div`
  display: flex;
`;

const Active = styled.div`
  height: 2px;
  width: 20px;
  background: #0a58ed;
  margin: 10px;
`;

const NotActive = styled.div`
  height: 2px;
  width: 20px;
  background: rgba(0, 0, 0, 0.3);
  margin: 10px;
`;
