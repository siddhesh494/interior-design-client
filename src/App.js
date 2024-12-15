import './App.css';
import Contact from './Components/ContactUs/Contact';
import Header from './Components/Header/Header';
import Introduction from './Components/Introduction/Introduction';

function App() {
  return (
    <div className="bg-background min-h-screen text-white">
      
      {/* header section */}
      <Header />


      {/* introduction */}
      <Introduction />

      {/* Project Showcase */}

      {/* Contact Us */}
      <Contact />


    </div>
  );
}

export default App;
