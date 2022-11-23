import Header from "../components/header/Header";
import Content from "../components/content/Content";
import Footer from "../components/footer/footer";

function HomePage() {
  
  return (
    <div className="App">
      <Header header='About Page'/>
      <Content />
      <Footer />
    </div>
  );
}

export default HomePage;
