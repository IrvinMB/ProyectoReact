import {React} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './view/Home';
import  RoutesApp  from "./routes/Routes";
// import Splash from './view/Splash';
// Home()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
    <Home />
 </BrowserRouter>
  // <React.StrictMode>
  //   {/* <Splash /> */}

  // 
  // </React.StrictMode>
);


reportWebVitals();
