import React from 'react'
import authContext from '../context/AuthContext'
import { useContext } from 'react'
const VendorDashboard = () => {
    const vendor = useContext(authContext)
    console.log('vendor',vendor);
  return (
    <div>Dashboard
    <h1>{`CompanyName : ${vendor.companyName}`}</h1>
    <h1>{`ownerName : ${vendor.ownerName}`}</h1>
    <h1>{`emailId : ${vendor.emailId}`}</h1>
    </div>
  )
}

export default VendorDashboard