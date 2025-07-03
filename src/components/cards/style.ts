import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
  column-gap: 40px;

  @media (max-width: 768px) {
    margin-top: 50px;
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 600px;
  padding: 0 0 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 18px;
  color: white;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 5px;
  cursor: pointer;
  transition: 1s;
  
  &:hover{
    transform: scale(1.05);
  }
`;

export { MainContainer, ContentContainer, Card };
