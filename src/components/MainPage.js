import axios from "axios";
import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import styled from "styled-components";

const MainPage = () => {
  const [data, setData] = useState([]);
  const [phone, setPhone] = useState([]);

  const getUser = JSON.parse(localStorage.getItem("data"))._id;

  const getData = async () => {
    const url = `https://distress-backend.herokuapp.com/api/user/${getUser}`;

    const contactsUrl = `https://distress-backend.herokuapp.com/api/user/${getUser}/contact`;

    await axios
      .get(url)
      .then((res) => {
        const value = res.data.data;
        value.forEach((e) => {
          setData(e);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });

    await axios
      .get(contactsUrl)
      .then((res) => {
        setPhone(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getData();
    console.log("this is transcript", transcript);
    SpeechRecognition.startListening({ continuous: true });
  }, []);

  const commands = [
    {
      command: `${data.command}`,
      callback: async () => {
        await axios
          .post(`https://distress-backend.herokuapp.com/api/message`)
          .then(() => {
            document.getElementById("overlay").style.display = "flex";
            setInterval(() => {
              document.getElementById("overlay").style.display = "none";
            }, 4000);
          })
          .catch((err) => console.log(err.messagee));
      },
    },
  ];

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition(
    { commands }
  );

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition</span>;
  }

  return (
    <Container id="text">
      <Top>
        Say <span>{data.command}</span> <br />
        to Trigger the action
      </Top>
      <One>
        <H1>Your Contacts</H1>
        <Contacts>
          {phone.map((res) => (
            <C1 key={res._id}>
              <Name>{res.name}</Name>:<Contact>+234 {res.contact}</Contact>
            </C1>
          ))}
        </Contacts>
      </One>

      <Hold>
        <Two>
          <H1>Trigger action if</H1>
          <Ul>
            <Li>When about to be raped</Li>
            <Li>A child is being Abused</Li>
            <Li>Someone is in an Abusive relationship</Li>

            <Li>About to be trafficked</Li>
          </Ul>
        </Two>
        <Picture src="/image/8.jpg" />
      </Hold>
      <Hold>
        <Two>
          <H1>What this action will do</H1>
          <Ul>
            <Li>a mail would be sent to your contacts</Li>
            <Li>Would send sms to your 3 contacts</Li>
            <Li>Random Text Generator is a web</Li>
            <Li>It's better than Lorem ipsum because</Li>
          </Ul>
        </Two>
        <Picture src="/image/7.jpg" />
      </Hold>
      <Overlay id="overlay">
        <Box>
          <Icon src="/image/sent1.gif" />
          <Span>Message sent successfully</Span>
        </Box>
      </Overlay>
    </Container>
  );
};

export default MainPage;

const Hold = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Picture = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 5px;
`;
const Container = styled.div`
  padding: 10px;
`;

const Top = styled.div`
  font-weight: 500;
  font-size: 17px;
  span {
    color: #0a58ed;
  }
`;

const One = styled.div`
  margin-top: 40px;
`;

const H1 = styled.div`
  font-weight: 500;
  font-size: 17px;
`;

const Contacts = styled.div`
  margin-top: 10px;
`;

const C1 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const Name = styled.div`
  font-weight: 500;
  text-transform: capitalize;
  margin-right: 3px;
`;

const Contact = styled.div`
  margin-left: 10px;
  font-size: 14px;
  margin-top: 3px;
  color: #0a58ed;
`;

const Two = styled.div`
  margin-top: 40px;
  width: 100%;
`;

const Ul = styled.ul`
  padding-left: 20px;
`;

const Li = styled.li`
  margin-top: 5px;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  display: none;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 80%;
  height: 150px;
  background: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  width: 20%;
`;

const Span = styled.div`
  font-weight: 500;
`;

// const Container = styled.div``
