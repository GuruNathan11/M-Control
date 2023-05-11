import React, { useState } from 'react'
import { CForm, CFormLabel, CFormSelect } from '@coreui/react'
import InvestConfiguration from './InvestConfiguration'
import SavingConfiguration from './SavingConfiguration'
import InsuranceConfiguration from './InsuranceConfiguration'

const Portfolio = () => {
  const options = [
    { id: 1, value: 'Savings' },
    { id: 2, value: 'Investment' },
    { id: 3, value: 'Insurance' },
  ]
  const [selectedOption, setSelectedOption] = useState([])

  const handleChange = (event) => {
    const selectedValue = event.target.value
    const selectedOption = options.find((option) => option.value === selectedValue)
    setSelectedOption(selectedOption)
  }
  let v = selectedOption.value
  return (
    <div>
      <h1 className="d-flex justify-content-center text-danger">Portfolio CONFIGURATION PAGE</h1>
      <CForm>
        <CFormLabel htmlFor="qwerty1" className="mode-label">
          Type : &nbsp;&nbsp;&nbsp;
        </CFormLabel>
        <CFormSelect id="qwerty1" onChange={handleChange} value={selectedOption?.value}>
          <option>SELECT THE TYPE</option>
          {options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.value}
            </option>
          ))}
        </CFormSelect>
      </CForm>
      {v === 'Investment' ? <InvestConfiguration /> : null}
      {v === 'Savings' ? <SavingConfiguration /> : null}
      {v === 'Insurance' ? <InsuranceConfiguration /> : null}
    </div>
  )
}

export default Portfolio
