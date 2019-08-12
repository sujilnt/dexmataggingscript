import locations from './data/location.json'
import fs from 'fs'

const PATH = './src/data/filteredlocations.json'

export const filteredlocations = async (data = []) => {
  let filteredData = locations.data.filter(row => {
    return !row.name.includes('PFS')
  })

  const filteredResults = {
    data: filteredData
  }
  // writing to a file
  fs.writeFileSync(PATH, JSON.stringify(filteredResults), () => {
    console.log('successfully written to the file')
  })
  return filteredData
}
