import ReactSelect from "react-select"
import { makes } from "../../constants"
import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { OptionType } from '../../types';

//1.bilesen
const SearchButton = ({ designs }: { designs: string }) =>
(<button className={`ml-3 z-10 ${designs}`}>
  <img src="/magnifying-glass.svg" width={40} height={40} alt="" />
</button>
)




//2.bilesen

const SearchBar = () => {
  const [make, setMake] = useState<string>('')
  const [model, setModel] = useState<string>('');

  const [searchParams, setSearchParams] = useSearchParams()


  /*
  Markalar dizisini select kutuphanesinin istedigi formata cevirmemiz gerekiyor
  'bmw' > {value:"bmw", label:"bmw"}
  */


  //Bilesen her render oldugunda gereksiz hesaplamalarin onune gecmek icin
  //useMemo kullanip veriyi cache'de sakladik
  const options: OptionType[] = useMemo(() => makes.map((make) => ({
    label: make,
    value: make,
  })), [])

  //form gonderilince calisir
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //verileri url'e arama parametresi olarak ekledik
    setSearchParams({ make, model })


  }

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item">
        <ReactSelect onChange={(e) => e && setMake(e.value)} className="w-full text-black" options={options} />
        <SearchButton designs="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <img width={25} src="/model-icon.png" alt="araç" className="absolute ml-4" />

        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setModel(e.target.value)
        } placeholder="örn:Civic" type="text" className="searchbar__input rounded text-black" />
        <SearchButton designs="sm:hidden" />
      </div>

      <SearchButton designs="max-sm:hidden" />
    </form>
  )
}

export default SearchBar