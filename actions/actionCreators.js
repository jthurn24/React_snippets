import {
  GET_SU_USER_BEGIN,
  SET_SU_USERS_LIST,
  GET_SU_USER_FAILURE,
  SET_SU_USER,
  GET_COMPANY_SU_USER_BEGIN,
  SET_COMPANY_SU_USERS_LIST,
} from '../constants'

export const getSuUserBegin = () => ({
  type: GET_SU_USER_BEGIN
})

export const setSuUsersList = users => ({
  type: SET_SU_USERS_LIST,
  payload: users
})

export const setSuUserError = error => ({
  type: GET_SU_USER_FAILURE,
  payload: error
})

export const setSuUser = userEmail => ({
  type: SET_SU_USER,
  payload: userEmail
})

