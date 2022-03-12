import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logout from "./Logout";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <div className="logout">
 <Logout/>
      </div>
     
     
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #14171A;
  position:relative;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #1DA1F2;
    
  }
  .logout{
    top: 1.4%;
    left:93%;
    
    position: absolute;
  }
`;
