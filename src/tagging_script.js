import taglist from '../data/taglist'
import locations from '../data/filteredlocations.json'
import fs from 'fs'

const PATH = '../data/tagdata.json'
const loadationdata = locations.data
const taglistdata = taglist.data
export const mergeLocationAndTaglist = () => {
  const finaldata = []
  loadationdata.forEach(location => {
    let name = location.name
    let id = location.id
    const tag = taglistdata.filter(row => {
      let cutname = row.siteName.split(' - ')[1]
      return name.toUpperCase().includes(cutname)
    })[0]
    if (tag) {
      finaldata.push({
        ...tag,
        id,
        dex_name: name
      })
    }
  })
  console.log(finaldata)

  fs.writeFileSync('./data.json', JSON.stringify({ data: finaldata }), () => {
    console.log('successfully written to the file')
  })
}
