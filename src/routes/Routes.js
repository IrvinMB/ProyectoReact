import { Routes,
    Route
     } from "react-router-dom";

import Peliculas from "../view/Peliculas";
import Series from "../view/Series";
import Home from "../view/Home";
  function RoutesApp() {
    return(
        <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/peliculas" element={<Peliculas />} />
             <Route path="/seires" element={<Series />} />
        </Routes > 
    )
  }
  export default  RoutesApp();
 