import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <Header />

      {/* Main Section */}
      <MainContent />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
