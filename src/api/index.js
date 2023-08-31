import axios from "axios";

const clientID = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

async function GetAuthorizationHeader() {
  const parameter = {
    grant_type: "client_credentials",
    client_id: clientID,
    client_secret: clientSecret
  };

  const auth_url = "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token";

  try {
    const res = await axios.post(auth_url, parameter, { headers: { "content-type": "application/x-www-form-urlencoded" }})
    const accesstoken = res.data;

    return {
      authorization: `Bearer ${accesstoken.access_token}`,
    }
  } catch (error) {
      console.log(error)
  }
}

const tdxHeaders = GetAuthorizationHeader()
export default tdxHeaders