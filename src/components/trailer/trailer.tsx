import {
	Button,
	ContentContainer,
	InformationContainer,
	MainContainer,
	Synopsis,
	Video,
} from "./style";

const trailer = require("../../assets/trailer.mp4");

function Trailer() {
	return (
		<MainContainer>
			<ContentContainer>
				<Video>
					<source src={trailer} type="video/mp4" />
					Seu navegador não possui suporte para vídeos.
				</Video>
				<InformationContainer>
					<Synopsis>
						Após dois anos espreitando as ruas como Batman, Bruce Wayne se
						encontra nas profundezas mais sombrias de Gotham City. Com poucos
						aliados confiáveis, o vigilante solitário se estabelece como a
						personificação da vingança para a população.
					</Synopsis>
					<Button>Comprar ingresso</Button>
				</InformationContainer>
			</ContentContainer>
		</MainContainer>
	);
}

export default Trailer;
