import { CarType } from "../../types"
import CustomButton from "../CustomButton";

interface IcardProps {
    car: CarType;
}

const Card = ({ car }: IcardProps) => {
const translate={
    fwd:"Önden Çeker",
    rwd:"Arkadan İtişli", "4wd" : "4 Çeker",
    awd:"4 Çeker",
}
    
    return (
        <div className="car-card group">

            {/*Araba Ismi */}
            <h2 className="car-card__content-title">
                {car.make} {car.model}
            </h2>
            {/*Araba Fiyati */}
            <p className="flex mt-6 text-[32px]">
                <span className="text-[19px] font-semibolds">₺</span>
                {Math.round(Math.random() * 7000) + 1500}
                <span className="text-[19px] self-end font-semibold">/gün</span>
            </p>

            {/*Resim Alani */}
            <div className="relative w-full h-40 my-3">
                <img src="/hero.png" alt="car" className="w-full h-full object-contain" />
            </div>


            {/*Alt Kisim */}

            <div className=" relative flex w-full mt-2 ">
                {/*Ikonlar Kisim */}
                <div className="group-hover:hidden flex w-full justify-between">
                    <div className="flex-center flex-col  ">
                        <img width={25} src="/steering-wheel.svg" />
                        <p>{car.transmission === "a" ? "Otomatik" : "Manuel"}</p>
                    </div>

                    <div className="flex-center flex-col  ">
                        <img width={25} src="/tire.svg" />
                        <p>{translate[car.drive]}</p>
                    </div>

                    <div className="flex-center flex-col  ">
                        <img width={25} src="/gas.svg" />
                        <p>{car.fuel_type}</p>
                    </div>

                </div>
                {/* Butonlar */}
                <div className="group-hover:flex hidden w-full">
                    <CustomButton title="Daha Fazla" designs="w-full py-[16px]" />
                </div>
            </div>
            {/* Model*/}
        </div>

    )
}

export default Card