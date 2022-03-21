import logo from "../image/love.png";
import PageNavbar from "../component/PageNavbar";
import Footer from "../component/Footer";
import TitleJumbotron from "../component/TitleJumbotron";

function About() {
    return (
        <div className="About">
            <img src={logo} className="App-logo" alt="logo"/>
            <PageNavbar></PageNavbar>
            <TitleJumbotron></TitleJumbotron>
            <Footer></Footer>
        </div>
    );
}

export default About;
