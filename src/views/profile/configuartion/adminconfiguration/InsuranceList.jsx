import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { cilArrowCircleRight } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CTable, CTableHead, CTableRow, CTableBody, CTableHeaderCell } from '@coreui/react'

function InsuranceList() {
  const [name, setName] = useState('')

  const handleCreate = async () => {
    if (name <= 3) {
      alert('Please Enter Valid Details')
    } else {
      await axios.post('https://elon-invest.onrender.com/api/add', {
        name,
      })
      alert('Succesfully Created . . .')
      setName('')
      getApi()
    }
  }

  const [apiData, setApiData] = useState([])

  const handleDelete = async (id) => {
    try {
      await axios.delete('https://elon-invest.onrender.com/api/users/' + id)
      console.log('Deleted Successfully')
      alert('Deleted Successfully')
      getApi()
    } catch (error) {
      alert(error)
    }
  }
  const getApi = async () => {
    const response = await axios.get('https://elon-invest.onrender.com/api/users')
    const r = response.data.data
    // console.log(r)
    setApiData(r)
  }

  useEffect(() => {
    getApi()
  }, [])

  return (
    <div>
      <h1 className="d-flex justify-content-center">Insurance Types</h1>
      <div className="search-input">
        <input required type="text" value={name} onChange={(e) => setName(e.target.value)} />
        &nbsp;
        <button className="btn btn-success" onClick={() => handleCreate()}>
          <CIcon icon={cilArrowCircleRight} /> <span>Add</span>
        </button>
      </div>
      <CTable striped bordered hover borderColor="dark" style={{ cursor: 'pointer' }}>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col" className="d-flex justify-content-center">
              Investment Type
            </CTableHeaderCell>

            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {apiData.map((data, index) => {
            return (
              <CTableRow key={index}>
                <CTableHeaderCell scope="row" className="d-flex justify-content-center">
                  {data.name}
                </CTableHeaderCell>
                <CTableHeaderCell>
                  <button
                    onClick={() => {
                      handleDelete(data._id)
                    }}
                    className="btn-danger btn"
                  >
                    Delete
                  </button>
                </CTableHeaderCell>
              </CTableRow>
            )
          })}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default InsuranceList
