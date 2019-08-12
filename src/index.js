// IMPORT sTATEMENTS
import { googleSheetJSON } from './googleSheetJSON'
import { getLocation } from './locations'

// CONSTANT_VARIABLES
const prefixname = 'https://spreadsheets.google.com/feeds/list/'
const sheetId = '1LHzGx9eInlmbdjmQhrhRUD3BrXrCWXplfDrf1UrhctU' // SheetId of the page
const postFix = '/od6/public/values?alt=json'
const url = `${prefixname}${sheetId}${postFix}`

// starting the server
export const start = async () => {
  // await googleSheetJSON(url)
  await getLocation()
}
start()
