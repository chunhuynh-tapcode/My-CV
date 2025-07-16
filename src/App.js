import './App.scss'

import Header from "./components/Layouts/Header";
import Introduce from "./components/Layouts/Introduce";
import Products from "./components/Layouts/Products";
import Footer from "./components/Layouts/Footer";
import Background from './components/Layouts/Background';

function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
        <Header/>
        <Introduce/>
        <Products/>
        <Background/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
