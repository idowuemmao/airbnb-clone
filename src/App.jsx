import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Homes from "./components/Homes";
import Navbar from "./components/Navbar";

export default function App(){
    return (
        <div className="relative">
            <Navbar />
            <Filters/>
            <Homes/> 
            <Footer/>
        </div>
    )
}