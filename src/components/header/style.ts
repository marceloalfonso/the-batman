import styled from 'styled-components';

const MainContainer = styled.header`
  height: 90px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
`;

const NavigationMenu = styled.nav`
  width: 60%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
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

export { MainContainer, Logo, NavigationMenu, List, Item };
