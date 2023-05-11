import React from 'react'
import { CFormInput } from '@coreui/react'
const Form = () => {
  return (
    <div className="form">
      <CFormInput
        id="floatingInputValid"
        floatingClassName="mb-3"
        floatingLabel="Email addresss"
        placeholder="name@example.com"
        defaultValue="test@example.com"
      />

      <CFormInput
        type="email"
        id="floatingInputInvalid"
        floatingLabel="Email addresss"
        placeholder="name@example.com"
        defaultValue="test@example.com"
        invalid
      />
    </div>
  )
}
export default Form
