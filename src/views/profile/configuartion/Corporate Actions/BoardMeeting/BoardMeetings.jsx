import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { cilArrowCircleLeft, cilArrowCircleRight } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CTable, CTableHead, CTableRow, CTableBody, CTableHeaderCell } from '@coreui/react'

function BoardMeetings() {
  const [companyName, setcompanyName] = useState('')
  const [date, setdate] = useState('')
  const [agenda, setagenda] = useState('')

  const handleCreate = async () => {
    try{
    if (companyName <= 3) {
      alert('Please Enter Company Name')
      return
    } 
    if(date<= 3){
      alert('Please Enter Date Details')
      return
    }
      if(agenda<= 3){
      alert('Please Enter Agenda Details')
    } 
  
        await axios.post('https://elon-boardmeeting.onrender.com/config/board_meeting/add', {
          companyName,
          date,
          agenda,
        })
        alert('Successfully Created . . .')
        setApiData([
          ...apiData, 
          { 
            companyName, 
            date, 
            agenda 
          }
        ])
        setcompanyName('')
        setdate('')
        setagenda('')
        getApi()
      }
      catch (error) {
        alert(`Error: ${error.message}`)
      }
    }
  
  const [apiData, setApiData] = useState([])

  const handleDelete = async (id) => {
    try {
      await axios.delete('https://elon-boardmeeting.onrender.com/config/board_meeting/' + id)
      console.log('Deleted Successfully')
      getApi()
    } catch (error) {
      alert(error)
    }
  }
  const getApi = async () => {
    await axios
      .get("https://elon-boardmeeting.onrender.com/config/board_meeting/get-all")
      .then((response) => {
        const r = response.data.data
        setApiData(r)
        console.log(r)
      })
      .catch((error) => {
        alert(error)
      })
  }

  useEffect(() => {
    getApi()
  }, []);
          
  return (
    <div>
      <div>
      <div  >
        <h1 className="d-flex justify-content-center" >Board Meeting Details</h1> </div>
        <div className="search-input">
        <div className="BoardMeeting">
  <div className="form-group">
    <label htmlFor="companyName"><b>Company Name</b></label>
    <input
      required
      type="text"
      className="form-control"
      id="companyName"
      value={companyName}
      onChange={(e) => setcompanyName(e.target.value)}
    />
  </div>
  <div className="form-group">
    <label htmlFor="date"><b>Date</b></label>
    <input
      required
      type="date"
      className="form-control"
      id="date"
      value={date}
      onChange={(e) => setdate(e.target.value)}
    />
  </div>
  <div className="form-group">
    <label htmlFor="agenda"><b>Agenda</b></label>
    <input
      required
      type="text"
      className="form-control"
      id="agenda"
      value={agenda}
      onChange={(e) => setagenda(e.target.value)}
    />
  </div>
  <div>
    
    <div className='but1'>
    <button className="btn btn-success"  onClick={() => handleCreate()}>
      <CIcon icon={cilArrowCircleRight} />
      <span >Add</span>
    </button>
    </div>
  </div>
</div>
</div>
      </div>
      <div className="table">
        <h5 className="table">Board Meeting Schedule</h5>
        <div className="mt-3">
          <CTable striped bordered hover borderColor="dark" style={{ cursor: "auto" }}>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col" className="BoardMeeting">
                  Company Name
                </CTableHeaderCell>
                <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                <CTableHeaderCell scope="col">Agenda</CTableHeaderCell>
                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {apiData.map((data, index) => {
                return (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row" className="BoardMeeting">
                      {data.companyName}
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="row">{data.date}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{data.agenda}</CTableHeaderCell>
  
                    <CTableHeaderCell>
                      <button
                        onClick={() => {
                          handleDelete(data._id);
                        }}
                        className="btn-danger btn"
                      >
                        Delete
                      </button>
                    </CTableHeaderCell>
                  </CTableRow>
                );
              })}
            </CTableBody>
          </CTable>
        </div>
      </div>
    </div>
  );
        }
export default BoardMeetings;