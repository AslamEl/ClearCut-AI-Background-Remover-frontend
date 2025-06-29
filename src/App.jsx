import Home from "./pages/Home.jsx";
import Menubar from "./components/Menubar.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";


const App =()=> {
    return(
        <div>
            <Menubar/>
            <Toaster/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App;