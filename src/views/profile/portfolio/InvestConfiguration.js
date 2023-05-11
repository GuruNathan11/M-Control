import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CForm, CFormLabel, CFormSelect } from '@coreui/react'
import Loader from './Loader'

const InvestConfiguration = () => {
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState([])

  useEffect(() => {
    axios
      .get('https://elon-invest.onrender.com/api/users')
      .then((response) => {
        const users = response.data.data
        const options = users.map((user) => ({
          value: user.name,
          id: user.id,
        }))
        setOptions(options)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleChange = (event) => {
    const selectedValue = event.target.value
    const selectedOption = options.find((option) => option.value === selectedValue)
    setSelectedOption(selectedOption)
  }

  if (!options.length) {
    return <Loader />
  }

  let m = selectedOption.value
  let cont = (
    <div className="card cont-card">
      <h2>You&apos;ve Select {m} Mode</h2>
      <label htmlFor="a">{m} name : </label>
      <br />
      <input type="text" id="a" placeholder={m} />
      <label htmlFor="b">Quantity of {m} : </label>
      <br />
      <input type="text" id="b" placeholder={m} />
      <label htmlFor="c">Purchase Price of {m} : </label>
      <br />
      <input id="c" type="text" placeholder={m} />
      <button>Calculate</button>
    </div>
  )

  return (
    <div className="stock">
      <CForm>
        <CFormLabel htmlFor="qwerty" className="mode-label">
          Mode : &nbsp;&nbsp;&nbsp;
        </CFormLabel>
        <CFormSelect id="qwerty" onChange={handleChange} value={selectedOption?.value}>
          <option>SELECT THE MODE</option>
          {options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.value}
            </option>
          ))}
        </CFormSelect>
      </CForm>
      <div className="side-content">{cont}</div>
    </div>
  )
}

export default InvestConfiguration
