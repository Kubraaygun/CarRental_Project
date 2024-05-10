const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '***REMOVED***',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
};

export async function fetchCars() {
    const res = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`, options)

    const data = await res.json()
    return data;
}