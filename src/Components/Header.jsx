import logo from '../assets/logo.svg';
import {useState} from "react";
import { FaSearchLocation} from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";


const Header = ({onSearch}) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
            event.target.blur();
            event.target.value = '';

        }
    };


    return (
        <header className="App-header  w-full h-12 p-2 flex justify-between items-center text-lg">
            <div className="logo flex ">
                <img src={logo} className="App-logo w-6 mr-1" alt="logo"/>
                <h3 className={""}><strong>Rain</strong>Vine</h3>
            </div>

            <div className={"w-1/4 search"}>

                <input
                    type="text"
                    className="search_input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for a city..."
                    onKeyDown={handleKeyDown}
                />
                <FaSearchLocation  onClick={handleSearch} className="ml-2   p-1 inline text-3xl text-gray-300 cursor-pointer"/>
            </div>


            <div className="location bg-gray-300 rounded-xl px-2 mr-2 cursor-pointer current_location" onClick={""} >
                <BiCurrentLocation className={"inline mb-1 mr-1 text-black"}/>
                <h3 className={"open-sans text-black inline font-thin"}> Current Location</h3>
            </div>
        </header>
    )
}
export default Header
