import Filters from "./components/Filters";
import Homes from "./components/Homes";
import Navbar from "./components/Navbar";

export default function App(){
    return (
        <div>
            <Navbar/>
            <Filters/>
            <Homes/> 
        </div>
    )
}