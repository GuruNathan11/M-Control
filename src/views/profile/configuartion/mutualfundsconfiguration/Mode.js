import React from 'react'
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
// import axios from 'axios'

const Mode = () => {
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
          <h4> Mode CONFIGURATION</h4>
        </CCardHeader>
        <CCardBody>
          <CForm style={{ maxWidth: '500px' }}>
            <CFormLabel htmlFor="mode">Enter The Name Of Mode : </CFormLabel>
            <CFormInput type="text" id="mode" />
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

              <CTableHeaderCell scope="col">Modes</CTableHeaderCell>
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

export default Mode
