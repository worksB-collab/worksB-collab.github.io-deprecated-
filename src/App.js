import logo from './image/love.png';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from "./component/PageNavbar";
import TitleJumbotron from "./component/TitleJumbotron";
import PictureView from "./component/PictureView";
import CardView from "./component/CardView";
import Footer from "./component/Footer";
import PageCarousel from "./component/PageCarousel";

function App() {
    return (
        <div className="App">
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

export default App;
