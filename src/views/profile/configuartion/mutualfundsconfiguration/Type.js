import React, { useState } from 'react'
import {
  CButton,
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

const Type = () => {
  //   const [type, setType] = useState('')
  //   const [apidata, setApidata] = useState('')

  //   const handleSubmit = async () => {
  //     await axios
  //       .post(' ', { type })
  //       .then(() => {
  //         alert('Successfully Added')
  //         setType('')
  //       })
  //       .catch((error) => {
  //         alert(error)
  //       })
  //   }

  //   const getApi = async () => {
  //     await axios
  //       .get('')
  //       .then((response) => {
  //         setApidata(response.data)
  //       })
  //       .catch((error) => {
  //         alert(error)
  //       })
  //   }
  //   useEffect(() => {
  //     getApi()
  //   }, [])

  return (
    <div>
      <CCard className="mt-3">
        <CCardHeader>
          <h4>3.) Type CONFIGURATION</h4>
        </CCardHeader>
        <CCardBody>
          <CForm style={{ maxWidth: '500px' }}>
            <CFormLabel htmlFor="Type">Enter The Type : </CFormLabel>
            <CFormInput type="text" id="Type" />
            <CButton className="mt-3">Submit</CButton>
          </CForm>
        </CCardBody>
        <CTable
          striped
          bordered
          hover
          borderColor="dark"
          color="success"
          style={{ cursor: 'pointer', maxWidth: '500px', marginLeft: '5px' }}
        >
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">S.NO </CTableHeaderCell>

              <CTableHeaderCell scope="col">Types</CTableHeaderCell>
            </CTableRow>
          </CTableHead>

          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>data 1 </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCard>
    </div>
  )
}

export default Type
