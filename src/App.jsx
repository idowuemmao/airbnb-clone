import Filters from "./components/Filters";
import Navbar from "./components/Navbar";

export default function App(){
    return (
        <div className="text-5xl">
            <Navbar/>
            <Filters/>
        </div>
    )
}