import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 600px;
  background-image: url("https://motivatevalmorgan.com/wp-content/uploads/2022/02/The-Batman-MVM-Website-Landing-Page-Banner.png");
  background-position: 50% 50%;
  background-size: cover;

  @media (max-width: 768px) {
    background-position: 40%;
  }
`;

export default MainContainer;
