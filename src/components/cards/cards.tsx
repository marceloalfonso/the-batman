import { Card, ContentContainer, MainContainer } from "../cards/style";

function Cards() {
	return (
		<MainContainer>
			<ContentContainer>
				<Card
					style={{
						backgroundImage:
							"url('https://img.olhardigital.com.br/wp-content/uploads/2022/01/The-Batman.jpg')",
					}}
				>
					Robert Pattison - Batman
				</Card>
				<Card
					style={{
						backgroundImage:
							"url('https://poltronanerd.com.br/wp-content/uploads/2022/03/poltrona-zoe-mulher-gato.jpg')",
					}}
				>
					Zoe Kravitz - Mulher gato
				</Card>
				<Card
					style={{
						backgroundImage:
							"url('https://cdn.ome.lt/RyTWxMVUwK84GT8gtnFFI9djcHw=/1200x630/smart/extras/conteudos/jeffrey-wright.jpg')",
					}}
				>
					Jeffrey Wright - Gordon
				</Card>
			</ContentContainer>
		</MainContainer>
	);
}

export default Cards;
