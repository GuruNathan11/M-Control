import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://elonnativesystem.com" target="_blank" rel="noopener noreferrer">
          Elon_Native_Systems
        </a>
        <span className="ms-1">&copy; 2023 All Rights Reserved.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
