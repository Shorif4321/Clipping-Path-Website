import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Portfolio from "./Pages/Portfolio/Portfolio"
import Blog from './Pages/Blog/Blog';
import GetQuote from './Pages/GetQuote/GetQuote';
import FreeTrial from './Pages/FreeTrial/FreeTrial';


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
          <Route path="/all-services" element={<></>} />
          <Route path="/get-quote" element={<GetQuote></GetQuote>} />
          <Route path="/get-free-trial" element={<FreeTrial></FreeTrial>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
