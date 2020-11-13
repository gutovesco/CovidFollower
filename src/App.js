import './App.css';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Cases from './components/Cases';
import News from './components/News';
import Prevention from './components/Prevention';
import Footer from './components/Footer';

const App = () => {
  return (
    <div classNameName="App">
      <body className="bg-black muli">
        <Header />
        <Presentation />
        <Cases />
        <News />
        <Prevention />
        <Footer />
      </body>
    </div>
  );
}

export default App;
