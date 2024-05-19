// Import icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';

function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} /> 
          {/* User route */}
            <Route path="users"> 
              <Route index element={<List/>} />
              <Route path=":userId" element={<Single/>} />
              <Route path="new" element={<New/>} />
            </Route> 

            {/*Product Route  */}
            <Route path="products"> 
              <Route index element={<List/>} />
              <Route path=":productId" element={<Single/>} />
              <Route path="new" element={<New/>} />
            </Route> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
