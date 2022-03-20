import logo from "../image/love.png";
import PageNavbar from "../component/PageNavbar";
import TitleJumbotron from "../component/TitleJumbotron";
import PictureView from "../component/PictureView";
import CardView from "../component/CardView";
import PageCarousel from "../component/PageCarousel";
import Footer from "../component/Footer";

function Home() {
    return (
        <div className="Home">
            <img src={logo} className="App-logo" alt="logo"/>
            <PageNavbar></PageNavbar>
            <TitleJumbotron></TitleJumbotron>
            <PictureView></PictureView>
            <CardView></CardView>
            <PageCarousel></PageCarousel>
            <Footer></Footer>
        </div>
    );
}

export default Home;
