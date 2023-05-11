import React from 'react'
import InsuranceList from './InsuranceList'
import InvestmentList from './InvestmentList'
import SavingsList from './SavingsList'
const AdminConfiguration = () => {
  return (
    <div className="">
      <div className="">
        <h1 className="d-flex justify-content-center">ADMIN BASIC CONFIGURATION PAGE</h1>
        <div className="card">
          <div className="card-header">
            <p>
              <button
                className=" btn btn-primary m-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#multiCollapseExample1"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                Configure Savings
              </button>
              <button
                className=" btn-primary btn m-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#multiCollapseExample2"
                aria-expanded="false"
                aria-controls="multiCollapseExample2"
              >
                Configure Investment
              </button>
              <button
                className=" btn-primary btn m-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#multiCollapseExample3"
                aria-expanded="false"
                aria-controls="multiCollapseExample3"
              >
                Configure Insurance
              </button>
              <button
                className=" btn-primary btn m-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target=".multi-collapse"
                aria-expanded="false"
                aria-controls="multiCollapseExample1 multiCollapseExample2 multiCollapseExample3"
              >
                Toggle All
              </button>
            </p>
          </div>

          {/* CONFIGURE BODY */}
          <div className="row">
            <div className="card-body c-body ">
              <div className="col">
                <div className="collapse multi-collapse" id="multiCollapseExample1">
                  <div className="card card-body">
                    <SavingsList />
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body c-body">
              <div className="col">
                <div className="collapse multi-collapse" id="multiCollapseExample2">
                  <div className="card card-body">
                    <InvestmentList />
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body c-body">
              <div className="col">
                <div className="collapse multi-collapse" id="multiCollapseExample3">
                  <div className="card card-body">
                    <InsuranceList />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">BarCharts LineCharts</div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
export default AdminConfiguration
