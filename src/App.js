import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import MyContext from "./MyContext";


function App() {

  return (
    <div className='App'>

        <Header/>
        <MyContext>
            <Content/>
        </MyContext>
        <Footer/>
    </div>
  );
}

export default App;
