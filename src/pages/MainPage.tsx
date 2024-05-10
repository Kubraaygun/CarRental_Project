import { useEffect } from "react"
import CustomFilter from "../components/CustomFilter"
import Hero from "../components/Hero"
import SearchBar from "../components/SearchBar"

const MainPage = () => {
    useEffect(()=>{},[])
    return (
        <div><Hero />
            <div id="catalogue" className="mt-12 padding-x padding-y max-width">
                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold"> Araba Koltuğu</h1>
                    <p>Beğenebileceğin arabaları keşfet</p>
                </div>
                {/* Filtreleme Alani */}
                <div className="home__filters">
                    <SearchBar/>
                    <div className="home__filter-container">
                        <CustomFilter/>
                        <CustomFilter/>
                    </div>
                </div>
                {/*Araba Listesi */}
            </div>
        </div>
    )
}

export default MainPage