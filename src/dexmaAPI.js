import fetch from 'node-fetch'
import { DEXMA_PERMENANT_KEY } from 'babel-dotenv'

const defaultOptions = {
  method: 'GET',
  headers: {
    'x-dexcell-token': DEXMA_PERMENANT_KEY,
    Accept: 'application/json',
    'Accept-Charset': 'utf-8',
    'Content-Type': 'application/json'
  }
}
export const dexmaDataFetchFunction = async (_url, options = defaultOptions) => {
  console.log(_url, options)
  try {
    const response = await fetch(_url, options)
    console.log(response)
    const result = await response.json()
    return result
  } catch (e) {
    console.error(e)
  }
}
