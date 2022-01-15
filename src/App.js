import React, { useState } from 'react';
import About from './componenets/About'
import Portfolio from './componenets/Portfolio';
import Header from './componenets/Header'
import Footer from './componenets/Footer'
import Contact from './componenets/Contact'
import Resume from './componenets/Resume'
import './App.css';



function App() {

  const [currentTab, setCurrentTab] = useState("about");

  const renderTab = () => {
    switch (currentTab) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mobile-header">
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
      </div>

      <div>
        <main>
          {renderTab()}
        </main>
      </div>
      <div><Footer>
      </Footer></div>
    </div>
  );
}

export default App;
