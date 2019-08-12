import { dexmaDataFetchFunction } from './dexmaAPI'
const defaultparams = {
  limit: 500,
  start: 0
}

export const getLocation = async (params = defaultparams) => {
  const _url = `https://api.dexcell.com/v3/locations/?limit=${params.limit}&start=${params.start}`
  await dexmaDataFetchFunction(_url)
}
