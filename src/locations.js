import { dexmaDataFetchFunction } from './dexmaAPI'
import fs from 'fs'

const PATH = './src/data/location.json'
const defaultparams = {
  limit: 500,
  start: 0
}

export const getLocation = async (params = defaultparams) => {
  const _url1 = `https://api.dexcell.com/v3/locations/?limit=${params.limit}&start=${params.start}`
  const _url2 = `https://api.dexcell.com/v3/locations/?limit=${params.limit}&start=501`
  // const url = 'http://api.dexcell.com/v3/locations/'
  const finaldata1 = await dexmaDataFetchFunction(_url1)
  const finaldata2 = await dexmaDataFetchFunction(_url2)
  const mergeResults = {
    data: [...finaldata1, ...finaldata2]
  }
  // writing to a file
  await fs.writeFileSync(PATH, JSON.stringify(mergeResults), () => {
    console.log('successfully written to the file')
  })
}
