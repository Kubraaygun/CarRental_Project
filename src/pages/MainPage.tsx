import { useEffect, useState } from "react"
import CustomFilter from "../components/CustomFilter"
import Hero from "../components/Hero"
import SearchBar from "../components/SearchBar"
import { fetchCars } from "../utils/fetchCars"
import { CarType } from "../types"
import Card from "../components/Card"
import { useSearchParams } from "react-router-dom"
import ShowMore from "../components/ShowMore"
import { fuels, years } from "../constants"


const MainPage = () => {

    //useState bizden state'de tutacagimiz verinin tipini ister
    //bizde "generic" yardimiyla ya bir CarType dizisi yada henuz
    //api'dan veri gelmediyse null tipinde olabilecegini soyledik
    const [cars, setCars] = useState<CarType[] | null>(null)
    const [isError, setIsError] = useState<boolean>(false)
    //url'deki arama parametrelerine erisme
    const [params] = useSearchParams()
    //parametreler her degistiginde api istegi atiyoruz
    useEffect(() => {
        //url'deki butun arama parametrelerini objeye cevirdim
        const paramsObj = Object.fromEntries(params.entries())
        console.log(paramsObj)
        fetchCars(paramsObj)
            //istek basarili olursa
            .then((data) => setCars(data))
            //istek basarisiz olursa
            .catch(() => setIsError(true))
    }, [params])
    return (
        <div><Hero />
            <div id="catalogue" className="mt-12 padding-x padding-y max-width">
                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold"> Araba Koltuğu</h1>
                    <p>Beğenebileceğin arabaları keşfet</p>
                </div>
                {/* Filtreleme Alani */}
                <div className="home__filters">
                    <SearchBar />
                    <div className="home__filter-container">
                        <CustomFilter paramName={"fuel_type"} title="Yakıt Tipi" options={fuels}  />
                        <CustomFilter paramName={"year"} title="Üretim Yılı" options={years} />
                    </div>
                </div>
                {/*Araba Listesi
                1- Veri nullsa > henuz apidan cevap gelmemistir
                2- isError true ise > api'dan cevap alinirken hata olusmustur
                3- Veri boz diziyse > kriterlere uygun eleman bulunamamistir
                4- Veri dolu diziyse > api'dan veriler basariyla geldi
                 */}

                {
                    !cars ? (
                        <div className="warn-container">
                            <h2>Yükleniyor...</h2>
                        </div>
                    ) : isError ? (
                        <div className="warn-container">
                            <h2>Üzgünüz. Verileri alırken bir hata oluştu..</h2>
                        </div>
                    ) : cars.length < 1 ? (
                        <div className="warn-container">
                            <h2>Aradığınız kriterlere uygun araba bulunamadı...</h2>
                        </div>
                    ) : (
                        <section>
                            <div className="home__cars-wrapper">{cars.map((car, i) => (
                                <Card key={i} car={car} />
                            ))}</div>

                            <ShowMore />
                        </section>
                    )
                }
            </div>
        </div>
    )
}

export default MainPage