// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';
import Page6 from './pages/page6';


function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact component={Page1} />
		<Route path='/page1' component={Page1} />
		<Route path='/page2' component={Page2} />
		<Route path='/page3' component={Page3} />
		<Route path='/page4' component={Page4} />
		<Route path='/page5' component={Page5} />
		<Route path='/page6' component={Page6} />
	</Routes>
	</Router>
);
}

export default App;
