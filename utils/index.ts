

export async function fetchCars(){
    const headers = {
		'X-RapidAPI-Key': '0f2047e7demsh29fc3b8236914fdp1dcb90jsn70d4d3ae9ce4',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response =await fetch  ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers:headers,
    });
    const result  = await response.json();
    return result;
}