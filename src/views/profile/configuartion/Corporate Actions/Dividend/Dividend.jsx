import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { cilArrowCircleLeft, cilArrowCircleRight } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CTable, CTableHead, CTableRow, CTableBody, CTableHeaderCell } from '@coreui/react'

function Dividend() {
  const [companyName, setcompanyName] = useState('')
  const [type, settype] = useState('')
  const [fv, setfv] = useState('')
  const [percentage,setpercentage] = useState('')
  const [dividendAmount,setdividendAmount] = useState('')
  const [announcement,setannouncement] = useState('')
  const [record,setrecord] = useState('')
  const [ex_dividend,setex_dividend] = useState('')

  const handleCreate = async () => {
    try {
      // Check if the company name already exists
      const response = await axios.get(`https://elon-dividend.onrender.com/config/dividend/get-all`)
      if (response.data.length > 0 && response.data[0].companyName === companyName) {
        alert('Company Name already exists!')
        // console.log("data",companyName);
        return
      }
  
      // If the company name does not exist, create a new entry
      if (companyName <= 3) {
        alert('Please Enter Company Name')
        return
      }
      if (type < 1) {
        alert('Please Enter Type Details')
        return
      }
      if (fv < 1) {
        alert('Please Enter FV Details')
        return
      }
      if (percentage < 1) {
        alert('Please Enter Premium Details')
        return
      }
      if (dividendAmount < -1) {
        alert('Please Enter dividend Amount Details')
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
      if (ex_dividend <= 3) {
        alert('Please Enter Ex-Dividend Details')
        return
      }
      
      await axios.post('https://elon-dividend.onrender.com/config/dividend/add', {
        companyName,
        type,
        fv,
        percentage,
        dividendAmount,
        announcement,
        record,
        ex_dividend
      })
      alert('Successfully Created . . .')
      setApiData([
        ...apiData,
        {
        companyName,
        type,
        fv,
        percentage,
        dividendAmount,
        announcement,
        record,
        ex_dividend
        }
      ])
      setcompanyName('')
      settype('')
      setfv('')
      setpercentage('')
      setdividendAmount('')
      setannouncement('')
      setrecord('')
      setex_dividend('')
      getApi()
    } catch (error) {
      alert(`Error: ${error.message}`)
    }
  }
  
  const [apiData, setApiData] = useState([])

  const handleDelete = async (id) => {
    try {
      await axios.delete('https://elon-dividend.onrender.com/config/dividend/' + id)
      console.log('Deleted Successfully')
      getApi()
    } catch (error) {
      alert(error)
    }
  }
  const getApi = async () => {
    await axios
      .get('https://elon-dividend.onrender.com/config/dividend/get-all')
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
    const calculateDividendAmount = () => {
      const result = (fv * percentage) / 100;
      setdividendAmount(result);
    };

    if (fv && percentage) {
      calculateDividendAmount();
    }
    getApi()
  }, [fv, percentage]);
  
  
        
  return (
    <div>
      <div>
      <div  style={{  paddingRight: '190px'}}> <h1 className="d-flex justify-content-center">Dividends Declared </h1> </div>
        <div className="search-input">
        <div className="BoardMeeting">
  <div className="form-group">
    <label htmlFor="companyName"><b>Company Name</b></label>
    <input
      required
      type="text"
      placeholder='Enter the Company Name'
      className="form-control"
      id="companyName"
      value={companyName}
      onChange={(e) => setcompanyName(e.target.value)}
    />
  </div>

  <div className="form-groupg">
  <label htmlFor="type"><b>Type</b></label>
  <select
    required
    className="form-controlg"
    id="type"
    value={type}
    onChange={(e) => settype(e.target.value)}
  >
    <option value="" >Select Type</option>
    <option value="Final" >Final</option>
    <option value="Special" >Special</option>
    <option value="Interim" >Interim</option>
    <option value="Misc.Income" >Misc.Income</option>
    <option value="ROC" >ROC</option>
  </select>
</div>
  <div className="form-group">
    <label htmlFor="fv"><b>FV</b></label>
    <input
      required
      type="number"
      placeholder='Enter the Face Value '
      className="form-control"
      id="fv"
      value={fv}
      onChange={(e) => setfv(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label htmlFor="percentage"><b>Percentage</b></label>
    <input
      required
      type="number"
      placeholder='Enter the Percentage'
      className="form-control"
      id="percentage"
      value={percentage}
      onChange={(e) => setpercentage(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label htmlFor="dividendAmount"><b>Dividend Amount</b></label>
    <input
      required
      type="number"
      placeholder='Enter the Dividend Amount'
      className="form-control"
      id="dividendAmount"
      value={dividendAmount}
      onChange={(e) => setdividendAmount(e.target.value)}
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
    <label htmlFor="fv"><b>Ex-Dividend</b></label>
    <input
      required
      type="date"
      className="form-control"
      id="ex_dividend"
      value={ex_dividend}
      onChange={(e) => setex_dividend(e.target.value)}
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
      <div className="dtable">
        <h5 className="table"><b>View Dividends declared by companies during the year</b></h5>
        <div className="mt-3">
          <CTable striped bordered hover borderColor="dark" style={{ cursor: "auto" }}>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col" className="BoardMeeting">
                  Company Name
                </CTableHeaderCell>
                <CTableHeaderCell scope="col">Type</CTableHeaderCell>
                <CTableHeaderCell scope="col">FV</CTableHeaderCell>
                <CTableHeaderCell scope="col">Percentage</CTableHeaderCell>
                <CTableHeaderCell scope="col">Dividend Amount</CTableHeaderCell>
                <CTableHeaderCell scope="col">Announcement</CTableHeaderCell>
                <CTableHeaderCell scope="col">Record</CTableHeaderCell>
                <CTableHeaderCell scope="col">Ex-Dividend</CTableHeaderCell>
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
                    <CTableHeaderCell scope="row">{data.type}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{data.fv}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{data.percentage}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{data.dividendAmount}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{data.announcement}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{data.record}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{data.ex_dividend}</CTableHeaderCell>
  
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
export default Dividend