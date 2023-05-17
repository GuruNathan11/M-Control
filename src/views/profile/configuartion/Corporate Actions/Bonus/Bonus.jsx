import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { cilArrowCircleLeft, cilArrowCircleRight } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CTable, CTableHead, CTableRow, CTableBody, CTableHeaderCell } from '@coreui/react'

function Bonus() {
  const [companyName, setcompanyName] = useState('')
  const [bonusRatio, setbonusRatio] = useState('')
  const [announcement, setannouncement] = useState('')
  const [record, setrecord] = useState('')
  const [ex_bonus, setex_bonus] = useState('')

  const handleCreate = async () => {
    if (companyName <= 3) {
      alert('Please Enter Company Name')
    } else {
    if(bonusRatio<= 3){
      alert('Please Enter bonusRatio Details')
    }else {
      if(announcement<= 3){
      alert('Please Enter Announcement Details')
    } else {
      if(record<=3){
        alert('Please Enter record Details')
      }else{
        if(ex_bonus<=3){
          alert('Please Enter ex_bonus Details')
        }else{
      try {
        await axios.post('https://eloon-bonus.onrender.com/config/bonus/add', {
          companyName,
          bonusRatio,
          announcement,
          record,
          ex_bonus
        })
        alert('Successfully Created . . .')
        setApiData([...apiData, { companyName, bonusRatio, announcement, record, ex_bonus }])
        setcompanyName('')
        setbonusRatio('')
        setannouncement('')
        setrecord('')
        setex_bonus('')
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

  const [apiData, setApiData] = useState([])

  const handleDelete = async (id) => {
    try {
      await axios.delete('https://eloon-bonus.onrender.com/config/bonus/' + id)
      console.log('Deleted Successfully')
      getApi()
    } catch (error) {
      alert(error)
    }
  }
  const getApi = async () => {
    await axios
      .get("https://eloon-bonus.onrender.com/config/bonus/get-all")
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
      <div  style={{  paddingRight: '190px'}}> <h1 className="d-flex justify-content-center">Bonus</h1> </div>
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
    <label htmlFor="bonusRatio"><b>Bonus Ratio</b></label>
    <input
      required
      type="text"
      className="form-control"
      id="bonusRatio"
      value={bonusRatio}
      onChange={(e) => setbonusRatio(e.target.value)}
    />
  </div>
  <div className="form-group">
    <label htmlFor="announcement"><b>Announcement</b></label>
    <input
      required
      type="date"
      className="form-control"
      id="announcement"
      value={announcement}
      onChange={(e) => setannouncement(e.target.value)}
    />
  </div>
  <div className="form-group">
    <label htmlFor="record"><b>Record</b></label>
    <input
      required
      type="date"
      className="form-control"
      id="record"
      value={record}
      onChange={(e) => setrecord(e.target.value)}
    />
  </div>
  <div className="form-group">
    <label htmlFor="announcement"><b>Ex Bonus</b></label>
    <input
      required
      type="date"
      className="form-control"
      id="ex_bonus"
      value={ex_bonus}
      onChange={(e) => setex_bonus(e.target.value)}
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
      <div className="tableg">
        <h5 className="table">View Bonus declared by companies during the year</h5>
        <div className="mt-3">
          <CTable striped bordered hover borderColor="dark" style={{ cursor: "auto" }}>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col" className="BoardMeeting">
                  Company Name
                </CTableHeaderCell>
                <CTableHeaderCell scope="col">Bonus Ratio</CTableHeaderCell>
                <CTableHeaderCell scope="col">Announcement</CTableHeaderCell>
                <CTableHeaderCell scope="col">Record</CTableHeaderCell>
                <CTableHeaderCell scope="col">Ex Bonus</CTableHeaderCell>
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
                    <CTableHeaderCell scope="row">{data.bonusRatio}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{data.announcement}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{data.record}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{data.ex_bonus}</CTableHeaderCell>
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
export default Bonus