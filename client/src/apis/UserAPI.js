import { api } from './configs/axiosConfig'
import { defineCancelApiObject } from './configs/axiosUtils'

const usersURLVersion = '/v1'
const usersURLRoute = '/users'
const usersURL = usersURLVersion + usersURLRoute

const getAll = async (q, cancel = false) => {
  const params = q ? { q } : undefined
  const signal = cancel
    ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal
    : undefined

  try {
    const response = await api.get(usersURL, { params, signal })
    return response.data.users
  } catch (error) {
    console.error('Error fetching users:', error)
  }
}

const signIn = async formData => {
  const signInURL = usersURL + '/signin'
  const response = await api.post(signInURL, formData)
  return response
}

export const UserAPI = {
  getAll,
  signIn,
}

// defining the cancel API object for UserAPI
const cancelApiObject = defineCancelApiObject(UserAPI)
