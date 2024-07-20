import { countryOptions } from "../constant/countries"

export default function DropDown() {
  return (

    <div className="flex flex-col gap-2">
        <label className="text-white ">Country</label>
        <div className=" bg-white rounded-full w-full border px-4 py-2">
          <select name="country" className=" w-full "  required>
            <option value='' disabled >Select country</option>
            {countryOptions.map((country)=>(
                <option key={country.value} value={country.value}>
                    {country.label}
                </option>
            ))}
        </select>
        </div>
        
    </div>
  )
}
