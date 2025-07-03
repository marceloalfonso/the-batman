import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
  row-gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Scene = styled.div`
  width: 100%;
  height: 600px;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 5px;
`;

export { MainContainer, ContentContainer, Scene };
