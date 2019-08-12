import fetch from 'node-fetch'
import { DEXMA_PERMENANT_KEY } from 'babel-plugin-dotenv'
export const dexmaDataFetchFunction = async (_url, method = 'GET') => {
  console.log(_url, method, DEXMA_PERMENANT_KEY)
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
  // const body = await fetch(_url, options)
  console.log('body', body)
}
