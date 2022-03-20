import logo from "../image/love.png";
import PageNavbar from "../component/PageNavbar";
import Footer from "../component/Footer";

function Contact() {
    return (
        <div className="Contact">
            <img src={logo} className="App-logo" alt="logo"/>
            <label>Contact</label>
            <PageNavbar></PageNavbar>
            <Footer></Footer>
        </div>
    );
}

export default Contact;
