import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import axios from "axios";

const Onboarding2 = () => {
  const [toggle, setToggle] = useState(true);

  const navigate = useNavigate();

  const updateUser = async () => {
    const getUser = JSON.parse(localStorage.getItem("data"))._id;
    const url = `https://distress-backend.herokuapp.com/api/user/${getUser}`;
    await axios.patch(url, {
      command: transcript,
    });
    navigate("/onboarding3");
  };

  const onToggle = () => {
    setToggle(!toggle);
  };

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition</span>;
  }

  console.log("this is transcript", transcript);

  return (
    <Container>
      <Wrapper>
        <SpeechHolder>
          <Back />
          <Speech
            id="speech"
            onClick={() => {
              onToggle();
              if (toggle) {
                SpeechRecognition.startListening();
              }
            }}
          >
            {toggle ? (
              <span>Click to record</span>
            ) : (
              <div>
                {transcript === "" ? (
                  <span>Say something....</span>
                ) : (
                  <span>{transcript}</span>
                )}
              </div>
            )}
          </Speech>
        </SpeechHolder>
        <Textholder>
          <Title>Easy Accessibility To Help</Title>
          <Text>
            Abuse is that social evil which has ruined many lives and is
            gradually on the rise.Follow this 2 steps to finish creating an
            account
          </Text>
        </Textholder>
        <Button onClick={updateUser}>Continue</Button>
        <Level>
          <NotActive />
          <Active />
          <NotActive />
        </Level>
      </Wrapper>
    </Container>
  );
};

export default Onboarding2;

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

const SpeechHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Back = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  border: 1px solid #0a58ed;
  border-radius: 100%;
  animation: blink infinite 500ms linear forwards;
  z-index: -1;
  @keyframes blink {
    100% {
      opacity: 0.2;
      height: 250px;
      width: 250px;
    }
  }
`;

const Speech = styled.div`
  width: 200px;
  height: 200px;
  background: #0a58ed;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
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

const Button = styled.div`
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
