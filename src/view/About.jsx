import logo from "../image/love.png";
import PageNavbar from "../component/PageNavbar";
import Footer from "../component/Footer";

function About() {
    return (
        <div className="About">
            <img src={logo} className="App-logo" alt="logo"/>
            <label>About</label>
            <PageNavbar></PageNavbar>
            <Footer></Footer>
        </div>
    );
}

export default About;
