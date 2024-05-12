import { CarType } from "../types";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '***REMOVED***',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
};

type FilterType = {
    make?: string,
    model?: string,
    limit?:string,
}

export async function fetchCars(filters: FilterType): Promise<CarType[]> {
    //varsayilan deger atamasi yaptik
    //cunku objenin bu degerleri tanimsizda gelebilir
    //tanimsiz geldigi durumda direkt bmw arattik
    const {
        make = "bmw", model = "m3", limit='5'
    } = filters;
    const res = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&modelFamily=${model}&limit=${limit}`, options)

    const data = await res.json()
    return data;
}