import styled from "styled-components";

const MainContainer = styled.footer`
  height: 300px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  object-fit: contain;
`;

const Span = styled.span`
  text-align: center;
  font-size: 18px;
  color: #fff;
`;

const NavigationMenu = styled.nav`
  width: 60%;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const List = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.li`
  list-style: none;
  font-size: 20px;
  color: white;
  cursor: pointer;
  transition: 0.5s;
  
  &:hover {
    color: red;
  }
`;

export { MainContainer, Logo, Span, NavigationMenu, List, Item };
