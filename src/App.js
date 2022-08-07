import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Portfolio from "./Pages/Portfolio/Portfolio"
import Blog from './Pages/Blog/Blog';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/portfolio" element={<Portfolio></Portfolio>} />
          <Route path="/blog" element={<Blog></Blog>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
