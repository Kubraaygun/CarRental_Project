import ReactSelect from "react-select"
import { makes } from "../../constants"

const SearchBar = () => {

  /*
  Markalar dizisini select kutuphanesinin istedigi formata cevirmemiz gerekiyor
  'bmw' > {value:"bmw", label:"bmw"}
  */

  const options = makes.map((make) => ({
    label: make,
    value: make,
  }))

  return (
    <form className="searchbar gap-3">
      <div className="searchbar__item">
        <ReactSelect className="w-full text-black" options={options} />
      </div>

      <div className="searchbar__item">
        <img width={25} src="/model-icon.png" alt="araç" className="absolute ml-4"/>

        <input placeholder="örn:Civic" type="text" className="searchbar__input rounded text-black" />

      </div>
    </form>
  )
}

export default SearchBar