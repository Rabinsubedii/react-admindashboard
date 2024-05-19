// Import icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
// import bootstrap
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/dist/js/jquery.slim.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Header from './components/header/Header.js';

function App() {
  return (  
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route index element={<Home/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
