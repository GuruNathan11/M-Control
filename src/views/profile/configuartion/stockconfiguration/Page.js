import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CCallout,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSearch } from '@coreui/icons'
const PAGE_SIZE = 500

function Page() {
  const [currentPage, setCurrentPage] = useState(1)
  const [apidata, setApiData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const inputref = useRef(null)

  const getApi = async () => {
    await axios
      .get('https://elon-stock.onrender.com/config/stock/get-all')
      .then((response) => {
        const result = response.data.data
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

  const totalPages = Math.ceil(apidata.length / PAGE_SIZE)
  const startIndex = (currentPage - 1) * PAGE_SIZE
  const endIndex = startIndex + PAGE_SIZE
  const currentData = apidata.slice(startIndex, endIndex)

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      <h1 className="text-center text-success">NSE and BSE Stock Lists</h1>

      <nav>
        <ul className="pagination">
          {[...Array(totalPages).keys()].map((pageNumber) => (
            <li
              key={pageNumber}
              className={pageNumber + 1 === currentPage ? 'active mx-2 text-dark' : 'mx-2'}
              onClick={() => handlePageChange(pageNumber + 1)}
            >
              <a href="#">{pageNumber + 1}</a>
            </li>
          ))}
        </ul>
      </nav>
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
      {/* {currentData.map((item) => (
          <li key={item.id}>{item.Symbol}</li>
        ))} */}
      <div className="card">
        <div className="card-header">List Of Stocks and Details</div>
        <div className="card-body">
          {/* {apidata.filter(
            (data) =>
              !searchTerm ||
              data['Instrument Name'].toString().toLowerCase().includes(searchTerm.toLowerCase()),
          )} */}
          {currentData.map((data, index) => {
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
                        <strong>
                          Stock Active Status : {data.active ? 'ACTIVE' : 'NON_ACTIVE'}
                        </strong>{' '}
                        <br />
                      </CCallout>
                    </CAccordionBody>
                  </CAccordionItem>
                </CAccordion>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Page
