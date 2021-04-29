import { createReducer } from './reduxUtils'
import { suUserHandlers } from "./suReducer"

const initialState = {
	suUserLoading: false,
	data: [],
	error: "",
	userEmail: "",
	originalUserType: {},
}

const handlers = {
	...suUserHandlers
}

const suReducer = createReducer(initialState, handlers)

export default suReducer
