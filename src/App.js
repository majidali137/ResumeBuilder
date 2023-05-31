import './App.css';
import {
  BrowserRouter,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";
import Forms from './components/Forms';
import Home from './components/Home';
import Header from './components/menus/Header';
import NavBarVertical from './components/menus/NavBarVertical';

function App() {
  return (
    <>
    <Header/>
    <NavBarVertical/>
     {/* <BrowserRouter> */}
  <Routes>
    <Route path="/">
      <Route index element = {<Home/>}/>
      <Route path="resume" element = {<Forms/>}/>
    </Route>
  </Routes>  
  {/* </BrowserRouter>  */}
    </>
  
  );
}

export default App;
