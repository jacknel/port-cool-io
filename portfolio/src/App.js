import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Project from './components/Project';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

const App = () => {
  return (
    <Router>
      <Header />
      <Nav />
      <div>
        <p>paragraph
        </p>
      </div>
      <About />
      <Contact />
      <Portfolio />
      <Resume />
      <Project />
      <Footer />
    </Router>
  );
};



export default App;

// function App() {
//   return (
//     <div>
//       <Header>
//         <Nav />
//       </Header>
      
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     </div>
//   );
// }