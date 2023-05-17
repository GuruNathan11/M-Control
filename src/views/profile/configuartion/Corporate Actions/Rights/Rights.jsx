import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { cilArrowCircleLeft, cilArrowCircleRight } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CTable, CTableHead, CTableRow, CTableBody, CTableHeaderCell } from '@coreui/react'

function BoardMeetings() {
  const [companyName, setcompanyName] = useState('')
  const [rightsRatio, setrightsRatio] = useState('')
  const [fv, setfv] = useState('')
  const [premium,setpremium] = useState('')
  const [announcement,setannouncement] = useState('')
  const [record,setrecord] = useState('')
  const [ex_rights,setex_rights] = useState('')

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-UK',{ day: 'numeric',month:'long',year:'numeric'})
  }

  const handleCreate = async () => {
    try {
      // Check if the company name already exists
      const response = await axios.get(`https://elon-rights.onrender.com/config/rights/add`)
      if (response.data.length > 0) {
        alert('Company Name already exists!')
        return
      }
  
      // If the company name does not exist, create a new entry
      if (companyName <= 3) {
        alert('Please Enter Company Name')
        return
      }
      if (rightsRatio < 1) {
        alert('Please Enter Rights Ratio Details')
        return
      }
      if (fv < 1) {
        alert('Please Enter FV Details')
        return
      }
      if (premium < 1) {
        alert('Please Enter Premium Details')
        return
      }
      if (announcement <= 3) {
        alert('Please Enter Announcement Details')
        return
      }
      if (record <= 3) {
        alert('Please Enter record Details')
        return
      }
      if (ex_rights <= 3) {
        alert('Please Enter Ex-Rights Details')
        return
      }
  
      await axios.post('https://elon-rights.onrender.com/config/rights/add', {
        companyName,
        rightsRatio,
        fv,
        premium,
        announcement,
        record,
        ex_rights
      })
      alert('Successfully Created . . .')
      setApiData([
        ...apiData,
        {
          companyName,
          rightsRatio,
          fv,
          premium,
          announcement,
          record,
          ex_rights
        }
      ])
      setcompanyName('')
      setrightsRatio('')
      setfv('')
      setpremium('')
      setannouncement('')
      setrecord('')
      setex_rights('')
      getApi()
    } catch (error) {
      alert(`Error: ${error.message}`)
    }
  }
  
  const [apiData, setApiData] = useState([])

  const handleDelete = async (id) => {
    try {
      await axios.delete('https://elon-rights.onrender.com/config/rights/' + id)
      console.log('Deleted Successfully')
      getApi()
    } catch (error) {
      alert(error)
    }
  }
  const getApi = async () => {
    await axios
      .get("https://elon-rights.onrender.com/config/rights/get-all")
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
      <div  style={{  paddingRight: '190px'}}> <h1 className="d-flex justify-content-center">Rights Details</h1> </div>
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
    <label htmlFor="rightsRatio"><b>Rights Ratio</b></label>
    <input
      required
      type="text"
      className="form-control"
      id="rightsRatio"
      value={rightsRatio}
      onChange={(e) => setrightsRatio(e.target.value)}      
    />
  </div>
  
  <div className="form-group">
    <label htmlFor="fv"><b>FV</b></label>
    <input
      required
      type="number"
      className="form-control"
      id="fv"
      value={fv}
      onChange={(e) => setfv(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label htmlFor="premium"><b>Premium</b></label>
    <input
      required
      type="number"
      className="form-control"
      id="premium"
      value={premium}
      onChange={(e) => setpremium(e.target.value)}
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
    <label htmlFor="ex_rights"><b>Ex-Rights</b></label>
    <input
      required
      type="date"
      className="form-control"
      id="ex_rights"
      value={ex_rights}
      onChange={(e) => setex_rights(e.target.value)}
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
      <div className="ctable">
        <h5 className="table"><b>View Rights Offer during the year</b></h5>
        <div className="mt-3">
          <CTable striped bordered hover borderColor="dark" style={{ cursor: "auto" }}>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col" className="BoardMeeting">
                  Company Name
                </CTableHeaderCell>
                <CTableHeaderCell scope="col">Rights Ratio</CTableHeaderCell>
                <CTableHeaderCell scope="col">FV</CTableHeaderCell>
                <CTableHeaderCell scope="col">Premium</CTableHeaderCell>
                <CTableHeaderCell scope="col">Announcement</CTableHeaderCell>
                <CTableHeaderCell scope="col">Record</CTableHeaderCell>
                <CTableHeaderCell scope="col">Ex-Rights</CTableHeaderCell>
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
                    <CTableHeaderCell scope="row">{data.rightsRatio}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{data.fv}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{data.premium}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{data.announcement}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{data.record}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{data.ex_rights}</CTableHeaderCell>
  
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
export default BoardMeetings