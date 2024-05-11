import { CarType } from "../../types";
import { generateImage } from "../../utils/generateImage";
import { motion, AnimatePresence } from 'framer-motion';

type ModalPropsType = {
    car: CarType;
    isOpen: boolean;
    close: () => void;
}

const DetailModal = ({ car, isOpen, close }: ModalPropsType) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-25 z-20 grid place-items-center">
                    <motion.div
                    //baslangic degerleri
                    initial={{scale:0.3, opacity:0}}
                    //ekrana geldginde devreye giren
                    whileInView={{
                        scale:1,
                        opacity:1,
                    }}
                    //ekrandan giderken devreye giren animasyon
                    exit={{
                        scale:0,
                        opacity:0,
                    }}
                    //animaston suresi
                    transition={{
                        duration:0.3,
                    }}
                    className="p-6 relative bg-white w-full max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto">
                        {/*Kapama Butonu */}
                        <button onClick={close} className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full">
                            <img src="/close.svg" alt="close" />
                        </button>

                        {/*fotograflar */}
                        <div className="flex-1 flex flex-col gap-3">
                            {/*Buyuk Resim */}
                            <div className="w-full h-40 bg-pattern bg-center rounded-lg">
                                <img className="h-full mx-auto object-contain" src={generateImage(car)} alt={car.model} />
                            </div>
                            {/*Kucuk Resim */}
                            <div className="flex gap-3">
                                <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                                    <img className="h-full mx-auto object-contain" src={generateImage(car, '29')} alt={car.model} />
                                </div>

                                <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                                    <img className="h-full mx-auto object-contain" src={generateImage(car, '33')} alt={car.model} />
                                </div>

                                <div className="flex-1 flex relative h-24 bg-primary-blue-100">
                                    <img className="h-full mx-auto object-contain" src={generateImage(car, '13')} alt={car.model} />
                                </div>
                            </div>
                        </div>

                        {/* Arac Bilgileri */}
                        {
                            Object.entries(car)//objeyi diziye cevirme
                            .map(([key,value])=>(
                                <div className="flex justify-between">
                                    <h4 className="capitalize text-gray">{key.replace('_','')}</h4>
                                    <p className="capitalize text-black-100 font-semibold">{value}</p>
                                </div>)
                            )
                        }



                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default DetailModal