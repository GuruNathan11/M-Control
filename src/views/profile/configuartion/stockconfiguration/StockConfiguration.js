import React, { useState } from 'react'
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody } from '@coreui/react'
import Stocko from './Stocko'
import Page from './Page'
const StockConfiguration = () => {
  const [visibleLg1, setVisibleLg1] = useState(false)
  return (
    <div className="d-flex ">
      <div className="card" style={{ width: '70vw' }}>
        <div className="card-header">
          <h3>Stock Configuration Page</h3>
        </div>
        <div className="card-body d-flex justify-content-center">
          <CButton className="" onClick={() => setVisibleLg1(!visibleLg1)}>
            Configure
          </CButton>
          <CModal
            // style={{ minHeight: '80vh' }}
            size="lg"
            visible={visibleLg1}
            onClose={() => setVisibleLg1(false)}
          >
            <CModalHeader>
              <CModalTitle>Elon M Control</CModalTitle>
            </CModalHeader>
            <CModalBody className="d-flex justify-content-center">
              {/* <Stocko /> */}
              <Page />
            </CModalBody>
          </CModal>
        </div>
      </div>
    </div>
  )
}

export default StockConfiguration
