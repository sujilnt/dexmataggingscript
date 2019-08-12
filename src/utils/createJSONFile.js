import fs from 'fs'

const PATH = './src/data_JSON/taglist.js'

const defaultValue = {
  gsx$sitename: { $t: 'no_data' },
  gsx$type: { $t: 'Core -Large' },
  gsx$tagged: { $t: 'true' }
}
/**
 * createJSONFile => A function that stores the data in the file
 *
 */
export const createJSONFile = async (arr = [defaultValue]) => {
  const finalData = arr.map(row => {
    const siteName = row.gsx$sitename['$t'] // Dexma siteName
    const type = row.gsx$type['$t'] // type of the siteName
    const tagged = row.gsx$tagged['$t'] // tagged siteName
    return {
      siteName,
      tagged,
      type
    }
  })

  await fs.writeFileSync(PATH, JSON.stringify(finalData), () => {
    console.log('successfully written to the file')
  })
}
