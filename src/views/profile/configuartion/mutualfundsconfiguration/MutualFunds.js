import React from 'react'
import AMC from './AMC'
import Mode from './Mode'
import Type from './Type'
import { CAccordion, CAccordionHeader, CAccordionItem, CAccordionBody } from '@coreui/react'

const MutualFunds = () => {
  return (
    <div>
      <CAccordion>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>
            <h5>1.) AMC Configuration</h5>
          </CAccordionHeader>
          <CAccordionBody>
            <AMC />
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>

      <CAccordion>
        <CAccordionItem itemKey={2}>
          <CAccordionHeader>
            <h5>2.) Mode Configuration</h5>
          </CAccordionHeader>
          <CAccordionBody>
            <Mode />
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>

      <CAccordion>
        <CAccordionItem itemKey={3}>
          <CAccordionHeader>
            <h5>3.) Type Configuration</h5>
          </CAccordionHeader>
          <CAccordionBody>
            <Type />
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </div>
  )
}

export default MutualFunds
