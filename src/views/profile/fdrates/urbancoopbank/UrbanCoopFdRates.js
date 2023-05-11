import { React, useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CTable,
  CTableHead,
  CTableRow,
  CTableBody,
  CTableHeaderCell,
  CTableDataCell,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSearch } from '@coreui/icons'
import { FdData } from './UrbanCoopFdData'
const UrbanCoopFdRates = () => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div>
      <CCard>
        <CCardHeader>
          <h3 className="d-flex justify-content-center">Urban Co-Operative Bank FD Rates</h3>
          <div className="search-input">
            <CIcon icon={cilSearch} style={{ width: '50px', marginTop: '10px' }} />
            <input
              type="text"
              placeholder="Search by Bank"
              onChange={(e) => {
                setSearchTerm(e.target.value)
              }}
            />
          </div>
        </CCardHeader>
        <CCardBody>
          <CTable
            striped
            bordered
            hover
            borderColor="white"
            color="danger"
            style={{ cursor: 'pointer' }}
          >
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Bank</CTableHeaderCell>

                <CTableHeaderCell scope="col">Highest Rate (%)</CTableHeaderCell>

                <CTableHeaderCell scope="col">Tenor For Highest Rate (%)</CTableHeaderCell>

                <CTableHeaderCell scope="col">Senior Citizen Rates (%)</CTableHeaderCell>
              </CTableRow>
            </CTableHead>

            <CTableBody>
              {FdData.filter((data) => {
                if (searchTerm === '') {
                  return data
                } else if (data.bank.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return data
                }
              }).map((data, index) => {
                return (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{data.bank}</CTableHeaderCell>
                    <CTableDataCell> {data.rate}</CTableDataCell>
                    <CTableDataCell> {data.tenor}</CTableDataCell>
                    <CTableDataCell> {data.senior}</CTableDataCell>
                  </CTableRow>
                )
              })}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </div>
  )
}
export default UrbanCoopFdRates
