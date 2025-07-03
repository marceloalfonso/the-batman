import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const ContentContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  border-radius: 20px;

  @media (max-width: 480px) {
    width: 95%;
  }
`;

const Title = styled.h1`
  margin: 15px 10px 0 10px;
  text-align: center;
  font-size: 2em;

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

const SubTitle = styled.h2`
  margin: 10px 10px 20px 10px;
  text-align: center;
  font-size: 1em;

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const Input = styled.input`
  width: 85%;
  height: 30px;
  margin-top: 10px;
  padding: 8px 10px;
  font-size: 18px;
  color: black;
  background-color: white;
  border: none;
  border-radius: 5px;

  @media (max-width: 480px) {
    width: 80%;
    height: 15px;
  }
`;

const Button = styled.button`
  width: 40%;
  height: 60px;
  margin-top: 20px;
  margin-bottom: 15px;
  padding: 8px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: bold;
  color: rgb(255, 255, 255);
  background-color: #d21617;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: 0.8s;

  @media (max-width: 480px) {
    width: 70%;
    font-size: 0.9em;
  }
`;

export { MainContainer, ContentContainer, Title, SubTitle, Input, Button };
