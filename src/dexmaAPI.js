import fetch from 'node-fetch'
import { DEXMA_PERMENANT_KEY } from 'babel-dotenv'
export const dexmaDataFetchFunction = async (_url, method = 'GET') => {
  const options = {
    url: _url,
    method: method,
    headers: {
      'x-dexcell-token': DEXMA_PERMENANT_KEY,
      Accept: 'application/json',
      'Accept-Charset': 'utf-8',
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(_url, options)
  const result = await response.json()
  return result
}
