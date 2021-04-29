import * as constants from '../constants'
import { SET_USER_TYPE } from '../../User/constants'

const getSuUser = (state) => ({
  ...state,
  suUserLoading: true
})

const setSuUsersList = (state, action) => ({
  ...state,
  data: action.payload,
  suUserLoading: false
})

const setSuUserError = (state, action) => ({
  ...state,
  error: action.payload,
  suUserLoading: false
})

const setSuUser = (state, action) => ({
  ...state,
  userEmail: action.payload
})

const setOriginalUserType = (state, action) => ({
  ...state,
  originalUserType: action.payload
})

export const suUserHandlers = {
  [constants.GET_SU_USER_BEGIN]: getSuUser,
  [constants.SET_SU_USERS_LIST]: setSuUsersList,
  [constants.GET_SU_USER_FAILURE]: setSuUserError,
  [constants.SET_SU_USER]: setSuUser,
  [SET_USER_TYPE]: setOriginalUserType
}
