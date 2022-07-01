import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);
  const [error, setError] = useState("");

  const submit = async () => {
    const url = "https://distress-backend.herokuapp.com/api/register";

    try {
      await axios
        .post(url, {
          userName,
          email,
          password,
        })
        .then((res) => {
          localStorage.setItem("data", JSON.stringify(res.data.data));
        });

      setUserName("");
      setEmail("");
      setPassword("");

      navigate("/signin");
    } catch (error) {
      setError("Please fill a valid email address");
    }
  };

  return (
    <Container>
      <Overlay>
        <Form>
          <Head>Welcome</Head>
          <Title>create an account</Title>
          <Inputs>
            <Input
              placeholder="name"
              type="text"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              cap
            />
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Error>{error}</Error>
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Inputs>
          <Agree>
            <Check
              type="checkbox"
              onChange={(e) => {
                setCheck(e.target.checked);
              }}
            />
            <Span>i agree to the terms & conditions </Span>
          </Agree>
          {check && userName !== "" && email !== "" && password !== "" ? (
            <Button onClick={submit}>Create account</Button>
          ) : (
            <Button onClick={submit} disabled op>
              Create account
            </Button>
          )}
          <Alt>
            Already have an account?
            <NavLink
              to="/signin"
              style={{
                textDecoration: "none",
              }}
            >
              <span>Log in</span>
            </NavLink>
          </Alt>
        </Form>
      </Overlay>
    </Container>
  );
};

export default Signup;

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
  justify-content: flex-end;
`;

const Form = styled.div`
  width: 100%;
  height: 70%;
  background: white;
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Head = styled.div`
  font-weight: 700;
  font-size: 30px;
`;

const Title = styled.div`
  font-size: 17px;
  opacity: 70%;
  font-weight: 500;
`;

const Inputs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 78%;
  height: 40px;
  background: #d9d9d9;
  border: none;
  border-radius: 5px;
  margin-top: 15px;
  padding-left: 20px;
  text-transform: ${({ cap }) => (cap ? "capitalize" : "unset")};
`;

const Agree = styled.div`
  display: flex;
  align-items: center;
  width: 84%;
  margin-top: 10px;
`;

const Check = styled.input``;

const Span = styled.div`
  margin-left: 10px;
  font-size: 13px;
  font-weight: 500;
`;

const Button = styled.button`
  background: #0a58ed;
  color: white;
  width: 84%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin-top: 20px;
  border-radius: 5px;
  text-decoration: none;
  border: none;
  opacity: ${({ op }) => (op ? "0.5" : "1")};
`;

const Alt = styled.div`
  margin-top: 10px;
  font-weight: 500;
  span {
    color: #0a58ed;
    margin-left: 5px;
  }
`;

const Error = styled.div`
  font-size: 12px;
  color: red;
  margin-top: 3px;
  width: 85%;
`;
