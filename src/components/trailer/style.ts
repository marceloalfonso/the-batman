import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    height: 570px;
    flex-direction: column;
  }
`;

const ContentContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content:space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 95%;
    flex-direction: column;
  }
`;

const Video = styled.video`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InformationContainer = styled.div`
  width: 50%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 95%;
    text-align: justify;
  }
`;

const Synopsis = styled.p`
  width: 100%;
  font-size: 18px;
  color: white;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  width: 200px;
  height: 60px;
  margin-top: 25px;
  padding: 8px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: red;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: 0.8s;
  
  &:hover {
    color: black;
    background-color: white;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0px;
  }
`;

export {
	MainContainer,
	ContentContainer,
	Video,
	InformationContainer,
	Synopsis,
	Button,
};
