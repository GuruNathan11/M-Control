import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { cilArrowCircleLeft, cilArrowCircleRight } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CTable, CTableHead, CTableRow, CTableBody, CTableHeaderCell } from '@coreui/react'

function Agm() {
  const [companyName, setcompanyName] = useState('')
  const [date, setdate] = useState('')
  const [purpose, setPurpose] = useState('')
  const [bookClosureStart,setbookClosureStart] = useState('')
  const [bookClosureEnd,setbookClosureEnd] = useState('')
  const [agenda, setagenda] = useState('')


  const handleCreate = async () => {
    if (companyName <= 3) {
      alert('Please Enter Company Name')
    } else {
    if(date<= 3){
      alert('Please Enter Date Details')
    }else {
      if(bookClosureStart<=3){
        alert('Please Enter bookClosureStart Details')
      }else{
        if(bookClosureEnd<=3){
          alert('Please Enter bookClosureEnd Details')
        }else{
          if(agenda<=3){
            alert('Please Enter Agenda Details')
          }else{
      if(purpose<= 3){
      alert('Please Enter Purpose Details')
    } else {
      try {
        await axios.post('https://elon-agm.onrender.com/config/agm/add', {
          companyName,
          date,
          agenda,
          purpose,
          bookClosureStart,
          bookClosureEnd

        })
        alert('Successfully Created . . .')
        setApiData([...apiData, { companyName, date, agenda, purpose, bookClosureEnd, bookClosureStart }])
        setcompanyName('')
        setdate('')
        setPurpose('')
        setagenda('')
        setbookClosureEnd('')
        setbookClosureStart('')
        getApi()
      } catch (error) {
        alert(`Error: ${error.message}`)
      }
    }
  }
}
  }
}
    }
  }
  const [apiData, setApiData] = useState([])

  const handleDelete = async (id) => {
    try {
      await axios.delete('https://elon-agm.onrender.com/config/agm/' + id)
      console.log('Deleted Successfully')
      getApi()
    } catch (error) {
      alert(error)
    }
  }
  const getApi = async () => {
    await axios
      .get("https://elon-agm.onrender.com/config/agm/get-all")
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
        <h1 className="d-flex justify-content-center">AGM/EGMs </h1>
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
    <label htmlFor="date"><b>Purpose</b></label>
    <input
      required
      type="text"
      className="form-control"
      id="purpose"
      value={purpose}
      onChange={(e) => setPurpose(e.target.value)}
    />
  </div>
  <div className="form-group">
  <label  htmlFor="bookClosure"><b>Book Closure</b></label>
  <div>
    <label htmlFor="bookClosureStart">Start:</label>
    <input
      required
      type="date"
      className="form-control"
      id="bookClosureStart"
      value={bookClosureStart}
      onChange={(e) => setbookClosureStart(e.target.value)}
    />
  </div>
  <div>
    <label htmlFor="bookClosureEnd" >End:</label>
    <input
      required
      type="date"
      className="form-control"
      id="bookClosureEnd"
      value={bookClosureEnd}
      onChange={(e) => setbookClosureEnd(e.target.value)}
    />
  </div>
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
      <div className="atable">
        <h5 className="table">AGM/EGMs - List of AGM/EGM's along with dates.</h5>
        <div className="mt-3">
          <CTable striped bordered hover borderColor="dark" style={{ cursor: "auto" }}>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col" className="BoardMeeting" style={{ width: '200px' }}>
                 <b>Company Name</b> 
                </CTableHeaderCell>
                <CTableHeaderCell scope="col" style={{ width: '150px' }}><b>Date</b></CTableHeaderCell>
                <CTableHeaderCell scope="col" style={{ width: '400px' }}><b>Purpose</b></CTableHeaderCell>
                <CTableHeaderCell scope="col" colSpan="2" style={{ borderBottom: '2px solid black',borderTop:'10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'center' , borderBottom: '1px solid black'}}><b>Book Closure</b></div>
    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
      <div className='bookc' style={{ borderRight: '1px solid black', paddingRight: '100px'}}><b>Start</b></div>
      
      <div className='bookd' ><b>End</b></div>
    </div>
  </CTableHeaderCell>
                <CTableHeaderCell scope="col" style={{ width: '400px' }}><b>Agenda</b></CTableHeaderCell>
                <CTableHeaderCell scope="col" style={{ width: '100px' }}><b>Action</b></CTableHeaderCell>
              </CTableRow>
              {/* <CTableRow >
      <CTableHeaderCell></CTableHeaderCell>
      <CTableHeaderCell></CTableHeaderCell>
      <CTableHeaderCell></CTableHeaderCell>
      <CTableHeaderCell scope="col">Start</CTableHeaderCell>
      <CTableHeaderCell scope="col">End</CTableHeaderCell>
      <CTableHeaderCell></CTableHeaderCell>
      <CTableHeaderCell></CTableHeaderCell>
    </CTableRow> */}
            </CTableHead>
            <CTableBody>
              {apiData.map((data, index) => {
                return (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row" className="Agm">
                      {data.companyName}
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="row">{data.date}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{data.purpose}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{data.bookClosureStart}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{data.bookClosureEnd}</CTableHeaderCell>
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
export default Agm