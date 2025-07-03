import { Link } from "react-router-dom";
import { Item, List, Logo, MainContainer, NavigationMenu } from "./style";

function Header() {
	return (
		<MainContainer>
			<Logo src={require("../../assets/logo.png")} />
			<NavigationMenu>
				<List>
					<Link to="/" style={{ textDecoration: "none" }}>
						<Item>Home</Item>
					</Link>
					<Link to="/fotos" style={{ textDecoration: "none" }}>
						<Item>Fotos</Item>
					</Link>
					<Link to="/contato" style={{ textDecoration: "none" }}>
						<Item>Contato</Item>
					</Link>
				</List>
			</NavigationMenu>
		</MainContainer>
	);
}

export default Header;
