import Banner from "../components/banner/banner";
import Cards from "../components/cards/cards";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Trailer from "../components/trailer/trailer";

function Home() {
	return (
		<>
			<Header />
			<Banner />
			<Trailer />
			<Cards />
			<Footer />
		</>
	);
}

export default Home;
