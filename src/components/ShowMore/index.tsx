import { useSearchParams } from "react-router-dom"
import CustomButton from "../CustomButton"

const ShowMore = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    //1-Url'de limit parametresi yoksa:
    //kullanici projeye yeni girmistir ve ekranda 5 arac vardir
    //butona tiklaninca url'e limit parametresi 10 olarak eklenecek

    //2-Url'de limit parametresi varsa:
    //kullanici en az bir kez butona basmistir
    //butona basinca onceki parametrenin 5 fazlasina guncellicez

    //url'den limit parametresini al

    const limit = Number(searchParams.get("limit")) || 5

    const handleLimit = () => {
        //yeni limit belirler
        const newLimit = String(limit + 5);

        //parametreleri guncelle
        //ama guncellerken eski parametrelerin uzerine ekle
        searchParams.set("limit", newLimit)
        setSearchParams({ limit: newLimit })
    }


    return (
        <div className="w-full flex-center gap-5 my-10">
            {
                limit < 30 && (<CustomButton handleClick={handleLimit} title="Daha Fazla" />)
            }

        </div>
    )
}

export default ShowMore