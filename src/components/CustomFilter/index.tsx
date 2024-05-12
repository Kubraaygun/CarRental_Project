import { useEffect, useState } from "react";
import { OptionType } from "../../types";
import Select from "react-select"
import { useSearchParams } from "react-router-dom";


interface CustomProps {
  title: string;
  paramName: string;
  options: OptionType[]
}

const CustomFilter = ({ title, paramName, options }: CustomProps) => {
  const [selected, setSelected] = useState<OptionType | null>(null)
  const [params, setParams] = useSearchParams()
  //secilen filtreye gore url'i guncelle
  useEffect(() => {
    //url'e eklenecek parametreyii belirle
    if (selected?.value) { params.set(paramName, selected?.value.toLowerCase()) } else {
      //value'su yoksa url'den parametreyi kaldir
      params.delete(paramName)
    }

    //degisikligi url'e aktar
    setParams(params)
  }, [selected]);

  const defaultValue = {
    label: params.get(paramName),
    value: params.get(paramName),
  }
  return (
    <div className="text-black w-fit">
      <Select
        defaultValue={defaultValue}
        onChange={
          (e) => setSelected(e)
        } placeholder={title} className="min-w-[100px]" options={options} />
    </div>
  )
}

export default CustomFilter