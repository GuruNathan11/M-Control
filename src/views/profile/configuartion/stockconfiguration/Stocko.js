import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CCallout,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSearch } from '@coreui/icons'

const PAGE_SIZE = 80
const Stocko = () => {
  // const [after, setAfter] = useState({
  //   name: '',
  //   stock_key: '',
  //   stock_type: '',
  //   searchTerm: '',
  // })
  const [name, setName] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [stock_key, setStock_Key] = useState('')
  const [stock_type, setStock_Type] = useState('')
  const [apidata, setApiData] = useState([])
  const inputref = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios
      .post('https://elon-stock.onrender.com/config/stock/add', { name, stock_key, stock_type })
      .then((response) => {
        console.log(response.data.data)
        alert('Added Successfully')
        setName('')
        setStock_Key('')
        setStock_Type('')
        getApi()
      })
      .catch((error) => {
        alert('Failed to Add , Due to ' + error)
      })
  }

  // const handleDelete = async (id) => {
  //   await axios
  //     .delete('https://elon-stock.onrender.com/config/stock/' + id)
  //     .then((response) => {
  //       console.log(response)
  //       alert('deleted successfully')
  //     })
  //     .catch((error) => {
  //       alert(error)
  //     })
  // }
  const handleDelete = async (id) => {
    try {
      await axios.delete('https://elon-stock.onrender.com/config/stock/' + id)
      console.log('Deleted Successfully')
      getApi()
    } catch (error) {
      alert(error)
    }
  }

  const getApi = async () => {
    await axios
      .get('https://elon-stock.onrender.com/config/stock/get-all')
      .then((response) => {
        const result = response.data.data
        const name = response.data.data['Instrument Name']
        console.log(name)
        setApiData(result)
        console.log(result)
      })
      .catch((error) => {
        alert(error)
      })
  }
  useEffect(() => {
    getApi()
  }, [])

  return (
    <div className="">
      <div className="form-floating m-3">
        <h2 className=" mb-4">Configure Your Stocks</h2>
      </div>
      <div className="form-floating">
        <input
          ref={inputref}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
          placeholder=" "
        />
        <label>Name Of The Stock</label>
      </div>
      <div className="form-floating mt-3">
        <input
          value={stock_key}
          onChange={(e) => setStock_Key(e.target.value)}
          type="text"
          className="form-control"
          placeholder=" "
        />
        <label>Symbol Of The Above Stock</label>
      </div>
      <div className="form-floating mt-3">
        <input
          value={stock_type}
          onChange={(e) => setStock_Type(e.target.value)}
          type="text"
          className="form-control"
          placeholder=" "
        />
        <label>Type Of The Above Stock</label>
      </div>
      <div className="">
        <button onClick={handleSubmit} className="btn btn-primary form-floating mt-3">
          Submit
        </button>
      </div>
      <div>
        <h3 className="d-flex justify-content-center m-3 text-success">List Already Added</h3>
        <div className="search-input">
          <CIcon icon={cilSearch} style={{ width: '50px', marginTop: '10px' }} />
          <input
            type="text"
            placeholder="Search here"
            onChange={(e) => {
              setSearchTerm(e.target.value)
            }}
          />
        </div>
        {apidata
          .filter(
            (data) =>
              !searchTerm ||
              data.Symbol.toString().toLowerCase().includes(searchTerm.toLowerCase()),
            // if (searchTerm === '') {
            //   return data
            // } else if (data.amc.toLowerCase().includes(searchTerm.toLowerCase())) {
            //   return data
            // }
            // return false
          )
          .map((data, index) => {
            return (
              <div key={index}>
                <CAccordion>
                  <CAccordionItem>
                    <CAccordionHeader>
                      {data.Exch}&nbsp;&nbsp;-&nbsp;&nbsp;{data['Instrument Name']}
                    </CAccordionHeader>
                    <CAccordionBody>
                      <CCallout color="danger">
                        <strong>Stock Type : {data['Instrument Type']}</strong>
                        <br />
                        <strong>Stock Symbol : {data.Symbol}</strong>
                        <br />
                        <strong>Stock Token : {data.Token}</strong>
                        <br />
                        <strong>Stock Active Status : {data.active}</strong> <br />
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            handleDelete(data._id)
                          }}
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-warning"
                          onClick={() => {
                            setName(data.name)
                            setStock_Key(data.stock_key)
                            setStock_Type(data.stock_type)
                            inputref.current.focus()
                          }}
                        >
                          Edit
                        </button>
                      </CCallout>
                    </CAccordionBody>
                  </CAccordionItem>
                </CAccordion>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Stocko
