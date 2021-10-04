import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Caro from './components/Carousel/Caro';
import NotFound from './components/NotFound/NotFound';
import Gallery from './components/Gallery/Gallery';


function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/about">
          <AboutUs></AboutUs>
        </Route>
        <Route path="/contact">
          <ContactUs></ContactUs>
        </Route>
        <Route path="/gallery">
          <Gallery></Gallery>
        </Route>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
        
    </div>
  );
}

export default App;
