import {
	Button,
	ContentContainer,
	Input,
	MainContainer,
	SubTitle,
	Title,
} from "./style";

function Information() {
	return (
		<MainContainer>
			<ContentContainer>
				<Title>FALE CONOSCO</Title>
				<SubTitle>
					Ficaremos felizes em ajudar da melhor maneira possível :)
				</SubTitle>
				<Input type="text" id="name" name="name" placeholder="Nome" />
				<Input
					type="text"
					id="email"
					name="email"
					placeholder="Endereço de e-mail"
				/>
				<Input type="tel" id="phone" name="phone" placeholder="Telefone" />
				<Input
					type="text"
					id="message"
					name="message"
					placeholder="Mensagem"
					style={{ height: "200px" }}
				/>
				<Button>Enviar</Button>
			</ContentContainer>
		</MainContainer>
	);
}

export default Information;
