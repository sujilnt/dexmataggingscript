import fetch from 'node-fetch'
import { APP_ID, APP_SECRET } from 'babel-dotenv'
const TEMP_TOKEN = '79313efd4073a8b2cdaf' // chnange Every Time for temporary token
const SECRET = APP_SECRET
const APP_ID_VALUES = APP_ID // MORISSION ID
const __url = `https://api.dexcell.com/v3/oauth/access-token?temp_token=${TEMP_TOKEN}&secret=${SECRET}&app_id=${APP_ID_VALUES}`

/**
 * generatePermanentToken : A script that geneartes permanent token.
 */
export const generatePermanentToken = async () => {
  console.log(__url)
  const data = await fetch(__url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/text'
    }
  })
  const token = await data.text()
  console.log('Final Token for the APP', token)
}
