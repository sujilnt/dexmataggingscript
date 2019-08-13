// IMPORT sTATEMENTS
/*
import { googleSheetJSON } from './googleSheetJSON'
import { getLocation } from './locations'
import { DEXMA_PERMENANT_KEY } from 'babel-dotenv'
import { filteredlocations } from './filteredlocations'

import { generatePermanentToken } from './utils/generatetoken'
*/
import { mergeLocationAndTaglist } from './tagging_script'
import { addtag } from './addtag'
// CONSTANT_VARIABLES
const prefixname = 'https://spreadsheets.google.com/feeds/list/'
const sheetId = '1LHzGx9eInlmbdjmQhrhRUD3BrXrCWXplfDrf1UrhctU' // SheetId of the page
const postFix = '/od6/public/values?alt=json'
const googledocurl = `${prefixname}${sheetId}${postFix}`

// starting the server
export const start = async () => {
  // await googleSheetJSON(googledocurl)
  // await getLocation() // only use to get all locations
  // await generatePermanentToken() only use to generate new token
  // await filteredlocations()

  // mergeLocationAndTaglist()
  await addtag()
}
start()
