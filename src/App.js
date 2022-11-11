import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SingleCountry from './pages/SingleCountry'
import Nav from "./components/Nav";

function App() {
   return (
      <BrowserRouter>
         <Nav />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="country/:id" element={<SingleCountry />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
