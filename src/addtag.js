import tag from '../data/tagdata'
import { dexmaDataFetchFunction } from './dexmaAPI'
import { DEXMA_PERMENANT_KEY } from 'babel-dotenv'

export const addtag = () => {
  let data = tag.data
  data.forEach(async row => {
    if (row.tagged === 'TRUE') {
      let core = row.type.toLowerCase().split(' - ')
      let customtype = [`${core[0]} ${core[1]}`]
      let type = JSON.stringify(customtype)
      let id = row.id
      const url = `https://api.dexcell.com/v3/locations/${id}/tags`
      const options = {
        method: 'PUT',
        body: type,
        headers: {
          'x-dexcell-token': DEXMA_PERMENANT_KEY,
          Accept: 'application/json',
          'Accept-Charset': 'utf-8',
          'Content-Type': 'application/json'
        }
      }
      await dexmaDataFetchFunction(url, options)
    }
  })
}
