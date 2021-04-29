import { connect } from 'react-redux'

import SwitchUser from './SU'
import { setSuUser, getSuUsers, getCompanySuUsers } from "../../actions"
import { getAdminCompanies } from '../../../Company/actions'
import { setSUType } from '../../../User/actions'
import "../../../../assets/scss/su.scss"

const mapStateToProps = ({ su, user, company }) => ({
  loading: su.suUserLoading,
  userData: su.data,
  userError: su.error,
  userEmail: su.userEmail,
  originalUserType: su.originalUserType,
  companiesList: company.adminCompanyDetailData
})

const mapDispatchToProps = {
  getSuUsers,
  setSuUser,
  setSUType,
  getAdminCompanies,
  getCompanySuUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(SwitchUser)