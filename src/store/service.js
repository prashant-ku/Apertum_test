// import jwtDecode from 'jwt-decode'
// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();
const fetch = window.fetch

export const apiCall = {
  getRequest: (apiUrl, callHeaders) => {
    return fetch(apiUrl, {
      method: 'GET',
      headers: callHeaders
    }).then(async res => {
      if (res.status === 200) {
        return res.json()
      } else {
        return { error: 'There was a problem sending your request' }
      }
    }).catch(err => {
      return err
    })
  },
  loginCall: async (apiUrl, callHeaders, callBody) => {
    const tokenSet = await fetch(apiUrl, {
      method: 'POST',
      headers: callHeaders,
      body: callBody
    }).then(async res => {
      if (res.status === 200) {
        return res.json()
      } else {
        return { error: 'There was a problem sending your request' }
      }
    }).catch(err => {
      return err
    })
    // const decodedToken = jwtDecode(tokenSet.token)

    // const user = {
    //   uuid: decodedToken.sub,
    //   orgUuid: decodedToken.org,
    //   orgName: decodedToken.org_name,
    //   entitlements: JSON.parse(decodedToken.isl),
    //   email: decodedToken.email,
    //   userType: decodedToken.userType,
    // }

    const res = {
      token: tokenSet.token,

    }
    return res
  }
}
