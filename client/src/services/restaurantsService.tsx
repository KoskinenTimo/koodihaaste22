import axios from "axios"

const restaurantsClient = axios.create({ baseURL: 'http://localhost:8080/api/v1/restaurants/'})

export const getRestaurants = async (city: string) => {
  return await restaurantsClient.get(city)
}