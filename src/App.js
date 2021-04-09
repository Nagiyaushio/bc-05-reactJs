import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Carousel from "./components/Carousel.js";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js";
function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
