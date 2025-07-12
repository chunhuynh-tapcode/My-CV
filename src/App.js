import './App.scss'

import Header from "./components/Layouts/Header";
import Introduce from "./components/Layouts/Introduce";
import Products from "./components/Layouts/Products";
import Footer from "./components/Layouts/Footer";

function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
        <Header/>
        <Introduce/>
        <Products/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
