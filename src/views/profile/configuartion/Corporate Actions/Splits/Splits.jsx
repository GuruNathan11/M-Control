import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { cilArrowCircleLeft, cilArrowCircleRight } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CTable, CTableHead, CTableRow, CTableBody, CTableHeaderCell } from '@coreui/react'

function Splits() {
  const [companyName, setcompanyName] = useState('')
  const [oldFV, setoldFV] = useState('')
  const [newFV, setnewFV] = useState('')
  const [splitDate, setSplitDate] = useState('')

  const handleCreate = async () => {
    if (companyName <= 3) {
      alert('Please Enter Company Name')
    } else {
    if(oldFV<= 3){
      alert('Please Enter old FV Details')
    }else {
      if(newFV<= 3){
      alert('Please Enter new FV Details')
    } else {
        if(splitDate<=3){
            alert('Please Enter Split Date Details')
        }
        else{
      try {
        await axios.post('https://elon-splits.onrender.com/config/splits/add', {
          companyName,
          oldFV,
          newFV,
          splitDate 
        })
        alert('Successfully Created . . .')
        setApiData([...apiData, { companyName, oldFV, newFV, splitDate }])
        setcompanyName('')
        setoldFV('')
        setnewFV('')
        setSplitDate('')
        getApi()
      } catch (error) {
        alert(`Error: ${error.message}`)
      }
    }
  }
}
  }
}

  const [apiData, setApiData] = useState([])

  const handleDelete = async (id) => {
    try {
      await axios.delete('https://elon-splits.onrender.com/config/splits/' + id)
      console.log('Deleted Successfully')
      getApi()
    } catch (error) {
      alert(error)
    }
  }
  const getApi = async () => {
    await axios
      .get('https://elon-splits.onrender.com/config/splits/get-all')
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

       <div  style={{  paddingRight: '190px'}}> <h1 className="d-flex justify-content-center">Split Details</h1> </div>
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
    <label htmlFor="oldFV"><b>Old FV</b></label>
    <input
      required
      type="number"
      className="form-control"
      id="oldFV"
      value={oldFV}
      onChange={(e) => setoldFV(e.target.value)}
    />
  </div>
  <div className="form-group">
    <label htmlFor="newFV"><b>New FV</b></label>
    <input
      required
      type="number"
      className="form-control"
      id="newFV"
      value={newFV}
      onChange={(e) => setnewFV(e.target.value)}
    />
  </div>
  <div className="form-group">
    <label htmlFor="splitDate"><b>Split Date</b></label>
    <input
      required
      type="date"
      className="form-control"
      id="splitDate"
      value={splitDate}
      onChange={(e) => setSplitDate(e.target.value)}
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
      <div className="btable">
        <h5 className="table">View Company Splits during the year.</h5>
        <div className="mt-3">
          <CTable striped bordered hover borderColor="dark" style={{ cursor: "auto" }}>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col" className="BoardMeeting">
                  <b>Company Name</b>
                </CTableHeaderCell>
                <CTableHeaderCell scope="col"><b>Old FV</b></CTableHeaderCell>
                <CTableHeaderCell scope="col"><b>New FV</b></CTableHeaderCell>
                <CTableHeaderCell scope="col"><b>Split Date</b></CTableHeaderCell>
                <CTableHeaderCell scope="col" style={{ width: '100px' }}><b>Action</b></CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {apiData.map((data, index) => {
                return (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row" className="BoardMeeting">
                      {data.companyName}
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="row">{data.oldFV}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{data.newFV}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{data.splitDate}</CTableHeaderCell>
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
export default Splits;