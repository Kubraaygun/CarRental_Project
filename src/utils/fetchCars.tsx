import { CarType } from "../types";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '38fdc77f1dmsh3046ab43082aac9p19e8a0jsn4ad30d509a0e',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
};

export async function fetchCars():Promise<CarType[]> {
    const res = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`, options)

    const data = await res.json()
    return data;
}