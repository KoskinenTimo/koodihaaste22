import axios from "axios"

const restaurantsClient = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  withCredentials: true
})

export const getRestaurants = async (city: string) => {
  return await restaurantsClient.get(`/restaurants/${city}`)
}

export const voteRestaurant = async (id:string) => {
  return await restaurantsClient.post(`/vote/${id}`)
}

export const getResults = async () => {
  return await restaurantsClient.get(`/results`)
}

export const getResultsOnDate = async (date:string) => {
  return await restaurantsClient.get(`/results/${date}`)
}