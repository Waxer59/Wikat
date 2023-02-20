import { getEnvVariables } from '../helpers/getEnvVariables'

const { VITE_API_URL } = getEnvVariables()

export const getCatData = async (urlFragment: string): Promise<any> => {
  try {
    const response = await fetch(VITE_API_URL + urlFragment)
    const data = await response.json()
    return data
  } catch (err) {
    console.log(err)
    return []
  }
}
