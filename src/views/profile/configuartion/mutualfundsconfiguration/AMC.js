import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CFormLabel,
  CTable,
  CTableHead,
  CTableRow,
  CTableBody,
  CTableHeaderCell,
  CTableDataCell,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSearch } from '@coreui/icons'
import axios from 'axios'

const AMC = () => {
  const [amc, setAmc] = useState('')
  const [apidata, setApidata] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (window.confirm('Are You Sure to Submit this AMC ')) {
      await axios
        .post('https://elon-amc.onrender.com/config/amc/add', { amc })
        .then(() => {
          alert('Successfully Added')
          setAmc('')
          getApi()
        })
        .catch((error) => {
          alert(error)
        })
    }
  }

  const getApi = async () => {
    await axios
      .get('https://elon-amc.onrender.com/config/amc/get-all')
      .then((response) => {
        console.log(response.data.data)
        setApidata(response.data.data)
      })
      .catch((error) => {
        alert(error)
      })
  }
  useEffect(() => {
    getApi()
  }, [])

  return (
    <div>
      <CCard>
        <CCardHeader>
          <h4>AMC CONFIGURATION</h4>
        </CCardHeader>
        <CCardBody>
          <CForm style={{ maxWidth: '500px' }}>
            <CFormLabel htmlFor="amc">Enter The Name Of AMC : </CFormLabel>
            <CFormInput
              type="text"
              id="amc"
              value={amc}
              onChange={(e) => {
                setAmc(e.target.value)
              }}
            />
            <button className="mt-3 btn btn-outline-danger" onClick={handleSubmit}>
              Submit
            </button>
          </CForm>
        </CCardBody>
        <div className="mb-3 d-flex justify-content-center">
          <CIcon icon={cilSearch} style={{ width: '50px', marginTop: '10px' }} />
          <input
            type="text"
            placeholder="Search by AMC"
            onChange={(e) => {
              setSearchTerm(e.target.value)
            }}
          />
        </div>

        <CTable
          striped
          bordered
          hover
          borderColor="dark"
          color="success"
          style={{
            cursor: 'pointer',
            maxWidth: '500px',
            marginLeft: '5px',
            margin: 'auto',
            marginBottom: '20px',
          }}
        >
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">S.NO </CTableHeaderCell>

              <CTableHeaderCell scope="col">AMC</CTableHeaderCell>
            </CTableRow>
          </CTableHead>

          <CTableBody>
            {apidata
              .filter(
                (data) => !searchTerm || data.amc.toLowerCase().includes(searchTerm.toLowerCase()),
                // if (searchTerm === '') {
                //   return data
                // } else if (data.amc.toLowerCase().includes(searchTerm.toLowerCase())) {
                //   return data
                // }
                // return false
              )
              .map((data, index) => {
                return (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                    <CTableDataCell> {data.amc}</CTableDataCell>
                  </CTableRow>
                )
              })}
          </CTableBody>
        </CTable>
      </CCard>
    </div>
  )
}

export default AMC
