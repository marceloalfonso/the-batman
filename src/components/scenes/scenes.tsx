import { ContentContainer, MainContainer, Scene } from "./style";

function Scenes() {
	return (
		<MainContainer>
			<ContentContainer>
				<Scene
					style={{
						backgroundImage:
							"url('https://i0.wp.com/batman-news.com/wp-content/uploads/2022/02/The-Batman-2022-Official-Images-31.jpeg?fit=1200%2C800&quality=80&strip=info&ssl=1')",
					}}
				/>
				<Scene
					style={{
						backgroundImage:
							"url('https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/03/Riddler.jpg')",
					}}
				/>
				<Scene
					style={{
						backgroundImage:
							"url('https://www.usmagazine.com/wp-content/uploads/2022/03/the-batman-everything-to-know-about-the-robert-pattinson-movie-run-time.jpg?quality=86&strip=all')",
					}}
				/>
				<Scene
					style={{
						backgroundImage: "url('https://i.redd.it/g1cejornzku81.jpg')",
					}}
				/>
				<Scene
					style={{
						backgroundImage:
							"url('https://variety.com/wp-content/uploads/2022/03/MCDBATM_WB080.jpg?w=1024')",
					}}
				/>
				<Scene
					style={{
						backgroundImage:
							"url('https://www.denofgeek.com/wp-content/uploads/2022/03/the-batman-post-credit-scene.jpg?fit=2921%2C1605')",
					}}
				/>
			</ContentContainer>
		</MainContainer>
	);
}

export default Scenes;
