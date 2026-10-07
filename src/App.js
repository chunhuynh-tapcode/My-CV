import "./App.scss";

import Header from "./components/Layouts/Header";
import Introduce from "./components/Layouts/Introduce";
import WebsitesProducts from "./components/Layouts/Websites-Products";
import Footer from "./components/Layouts/Footer";
import Background from "./components/Layouts/Background";
import Tools from "./components/Layouts/Tools";
import SocialProducts from "./components/Layouts/Social-Products";
import BlogsProducts from "./components/Layouts/Blogs-Products";

function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
        <Header />
        <Introduce />
        <Tools />
        <SocialProducts />
        <BlogsProducts />
        <WebsitesProducts />
        <Background />
        <Footer />
      </div>
    </div>
  );
}

export default App;
