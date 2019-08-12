import fetch from 'node-fetch'
import { createJSONFile } from './utils/createJSONFile.js'

const googleSheetJSON = async url => {
  const siteName = await fetch(url)
    .then(body => body.json())
    .then(data => {
      return createJSONFile(data.feed.entry)
    })
    .catch(error => {
      return error
    })
  return siteName
}
module.exports = {
  googleSheetJSON: googleSheetJSON
}
