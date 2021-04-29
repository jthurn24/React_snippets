import axios from "axios"
import RCFconfig from "../../../core/config"
import {
	GET_SU_USER_BEGIN,
} from "../constants"
import * as actions from './actionCreators'
import { convertSuUsers } from '../helpers'

const baseURL = process.env.REACT_APP_BASE_API || RCFconfig.baseURL

export const getSuUsers = () => dispatch => {
	dispatch({ type: GET_SU_USER_BEGIN });
	return axios.get(`${baseURL}/api/users/suList`)
		.then(({ data }) => {
			dispatch(actions.setSuUsersList(data));
		})
		.catch((error) => {
			dispatch(actions.setSuUserError(error))
		})
}

export const getCompanySuUsers = (id) => dispatch => {
	dispatch({ type: GET_SU_USER_BEGIN });
	return axios.get(`${baseURL}/api/company/${id}/users`)
		.then(({ data }) => {
			const users = convertSuUsers(data)
			dispatch(actions.setSuUsersList(users))
		})
		.catch((error) => {
			dispatch(actions.setSuUserError(error))
		})
}