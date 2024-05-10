import { useEffect, useState } from "react"
import CustomFilter from "../components/CustomFilter"
import Hero from "../components/Hero"
import SearchBar from "../components/SearchBar"
import { fetchCars } from "../utils/fetchCars"
import { CarType } from "../types"
import Card from "../components/Card"

const MainPage = () => {
    //useState bizden state'de tutacagimiz verinin tipini ister
    //bizde "generic" yardimiyla ya bir CarType dizisi yada henuz
    //api'dan veri gelmediyse null tipinde olabilecegini soyledik
    const [cars, setCars] = useState<CarType[] | null>(null)
    const [isError, setIsError] = useState<boolean>(false)


    useEffect(() => {
        fetchCars()
            //istek basarili olursa
            .then((data) => setCars(data))
            //istek basarisiz olursa
            .catch(() => setIsError(true))
    }, [])
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
                        <CustomFilter />
                        <CustomFilter />
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
                            <div className="home__cars-wrapper">{cars.map((car,i) => (
                                <Card key={i} car={car}/>
                            ))}</div>
                        </section>
                    )
                }
            </div>
        </div>
    )
}

export default MainPage