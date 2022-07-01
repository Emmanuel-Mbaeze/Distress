import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Onboarding3 = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const [name1, setName1] = useState("");
  const [contact1, setContact1] = useState("");

  const [name2, setName2] = useState("");
  const [contact2, setContact2] = useState("");

  const getUser = JSON.parse(localStorage.getItem("data"))._id;

  const first = async () => {
    const url = `https://distress-backend.herokuapp.com/api/user/${getUser}`;

    const value = {
      name: name,
      contact: contact,
    };
    await axios
      .post(url, value)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const second = async () => {
    const url = `https://distress-backend.herokuapp.com/api/user/${getUser}`;

    const value = {
      name: name1,
      contact: contact1,
    };
    await axios
      .post(url, value)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const third = async () => {
    const url = `https://distress-backend.herokuapp.com/api/user/${getUser}`;

    const value = {
      name: name2,
      contact: contact2,
    };
    await axios
      .post(url, value)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
    navigate("/mainpage");
  };

  return (
    <Container>
      <Wrapper>
        <InputHolder>
          <Head>Set emergency contacts</Head>
          <Inputs>
            <Inputer>
              <Label>
                Contact 1<span>*</span>
              </Label>
              <Input
                placeholder="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Input
                placeholder="phone number"
                type="number"
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
            </Inputer>
            <Inputer>
              <Label>
                Contact 2<span>*</span>
              </Label>
              <Input
                placeholder="name"
                type="text"
                value={name1}
                onChange={(e) => {
                  setName1(e.target.value);
                }}
              />
              <Input
                placeholder="phone number"
                type="number"
                value={contact1}
                onChange={(e) => {
                  setContact1(e.target.value);
                }}
              />
            </Inputer>
            <Inputer>
              <Label>
                Contact 3<span>*</span>
              </Label>
              <Input
                placeholder="name"
                type="text"
                value={name2}
                onChange={(e) => {
                  setName2(e.target.value);
                }}
              />
              <Input
                placeholder="phone number"
                type="number"
                value={contact2}
                onChange={(e) => {
                  setContact2(e.target.value);
                }}
              />
            </Inputer>
          </Inputs>
          <Button
            onClick={() => {
              document.getElementById("modal").style.display = "flex";
              first();
              second();
              third();
            }}
          >
            Submit
          </Button>
        </InputHolder>
        <Level>
          <NotActive />
          <NotActive />
          <Active />
        </Level>
      </Wrapper>
      <Modal id="modal">
        <Box>
          <Image src="/image/progress.gif" />
          <span>Adding in progress</span>
        </Box>
      </Modal>
    </Container>
  );
};

export default Onboarding3;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const InputHolder = styled.div`
  width: 85%;
`;

const Head = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-top: 40px;
`;

const Inputs = styled.div`
  margin-top: 20px;
`;

const Inputer = styled.div`
  margin-top: 15px;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  span {
    color: red;
    /* padding-top: 5px; */
    margin-left: 5px;
    font-size: 16px;
  }
`;

const Input = styled.input`
  width: 94%;
  height: 45px;
  background: #d9d9d9;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  padding-left: 20px;
`;

const Button = styled.button`
  width: 100%;
  color: #0a58ed;
  height: 45px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid #0a58ed;
  margin-top: 20px;
  background: white;
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

const Modal = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1px);
  display: none;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 20%;
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
  span {
    font-weight: 500;
    margin-top: 10px;
  }
`;
