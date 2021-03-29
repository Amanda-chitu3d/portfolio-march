import {Switch,Route, Redirect} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './page/Home';
import Services from './page/Services';
import Projects from './page/Projects';
import Doc from './page/Doc';
import Contact from './page/Contact';
import Footer from './components/Footer';
import About from './page/About';
import Register from './page/Register';
import Login from './page/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/style.css"
import Team from './components/Team';
import AdminDashboard from './page/AdminDashboard';

function App() {
  return (
    <div >
      <NavBar />
      <Switch>
      <Redirect exact from="/home" to="/" />
        <Route exact path="/"><Home /></Route>
        <Route path="/services"><Services /></Route>
        <Route path="/projects"><Projects /> </Route>
        <Route path="/doc"><Doc/> </Route>
        <Route path="/about"><About/></Route>
        <Route path="/contact"><Contact/></Route>
        <Route path="/register"><Register/></Route>
        <Route path="/login"><Login/></Route>
        <Route path="/team"><Team/></Route>
        <Route path="/admin"><Login/></Route>
        <Route path="/admin-dashboard"><AdminDashboard/></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
