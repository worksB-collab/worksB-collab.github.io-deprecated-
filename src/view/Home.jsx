import logo from "../image/love.png";
import PageNavbar from "../component/PageNavbar";
import TitleJumbotron from "../component/TitleJumbotron";
import PictureView from "../component/PictureView";
import CardView from "../component/CardView";
import PageCarousel from "../component/PageCarousel";
import Footer from "../component/Footer";
import Header from "../component/Header";
import flirt2 from "../image/flirt2.jpg";
import flirt3 from "../image/flirt3.jpg";
import flirt4 from "../image/flirt4.jpg";

function Home() {
    return (
        <div className="Home">
            <Header/>
            {/*<PictureView></PictureView>*/}
            <PageCarousel src={flirt2}/>
            <PageCarousel src={flirt3}/>
            <PageCarousel src={flirt4}/>
            <CardView/>
            <Footer/>
        </div>
    );
}

export default Home;
