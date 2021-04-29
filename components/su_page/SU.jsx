import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import Select from '../../../../sharedComponents/Select' 
import { getSelectBoxOptions } from '../../../../utils/helpers'
import { isArray } from '../../../../utils/lodashUtils'


const SwitchUser = ({
  loading,
  userData,
  userError,
  userEmail,
  getSuUsers,
  getAdminCompanies,
  getCompanySuUsers,
  setSuUser,
  setSUType,
  originalUserType,
  companiesList,
  history: { push }
}) => {
  const [companiesOptions, setCompaniesOptions ] = useState([])
  const [selectedCompanyOption, setSelectedCompanyOption] = useState(null)

  useEffect(() => {
    getSuUsers()
    getAdminCompanies()
  }, [])
  
  useEffect(() => {
    if (companiesList.length > 0) {
      const options = getSelectBoxOptions(companiesList, 'name', 'id')
      setCompaniesOptions(options)
    }
  }, [companiesList])

  const handleCompaniesOptionsChange = company => {
    if (company) getCompanySuUsers(company.value)
    else getSuUsers() // on clearing select box
    setSelectedCompanyOption(company)
  }

  const setCurrentSuUser = (username, user_type, supplyDemand) => {
    setSuUser(username)
    const data = {
      user_type,
      supply: supplyDemand.includes('1'),
      demand: supplyDemand.includes('0')
    }
    setSUType({ ...data })

    if (user_type !== 'admin') push('/dashboard')
  }

  const unsetUser = () => {
    setSuUser('')
    setSUType({ ...originalUserType })

    if (originalUserType.user_type !== 'admin') push('/dashboard')
  }

  return (
    <>
      <Helmet><title>Run My Business | Switch User</title></Helmet>
      <div className="page-header mt-0 mb-0 su-header">
        <div className="row m-0 pt-3 bg-white">
          <div className="col-md-6 col-12">
            <h1>Switch User</h1>
          </div>
          <div className='col-md-3 col-12 text-left'>
            {loading && <b>fetching...</b>}
          </div>
          <div className="col-md-3 col-12 mb-2">
            <Select
              onChange={handleCompaniesOptionsChange}
              value={selectedCompanyOption}
              options={companiesOptions}
              placeholder='Select Company'
              isClearable
            />
          </div>
        </div>
      </div>
      {userError && <tr><td className="text-center text-danger">{userError}</td></tr>}
      <div className="page-content px-3">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr className="table-grid headings">
                <th>User</th>
                <th>Email</th>
                <th>Type</th>
                <th />
              </tr>
            </thead>
          </table>
        </div>
        <div className="table-responsive">
          <table className="table table-grid-wrapper">
            <tbody>
              {userData && isArray(userData) && userData.map((user, i) => (
                <tr key={`user-${i}`}>
                  <td style={{ width: '25%' }}>{user.name}</td>
                  <td style={{ width: '35%' }}>{user.username}</td>
                  <td>{user.user_type.charAt(0).toUpperCase() + user.user_type.slice(1)}</td>
                  <td>
                    {userEmail === user.username ?
                      <button onClick={unsetUser}>unset</button>
                      :
                      <button onClick={() => setCurrentSuUser(
                          user.username, user.user_type, user.SupplyDemand
                      )}>
                        set
                      </button>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {!loading && userData && userData.length === 0 &&
            <div className="text-center">
              No data found
            </div>
          }
        </div>
      </div>
    </>
  )
}

SwitchUser.defaultProps = {
  userEmail: ''
}

SwitchUser.propTypes = {
  loading: PropTypes.bool.isRequired,
  userData: PropTypes.array.isRequired,
  getSuUsers: PropTypes.func.isRequired,
  getAdminCompanies: PropTypes.func.isRequired,
  setSuUser: PropTypes.func.isRequired,
  userEmail: PropTypes.string,
  setSUType: PropTypes.func.isRequired,
  originalUserType: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  companiesList: PropTypes.array.isRequired,
}

export default SwitchUser
