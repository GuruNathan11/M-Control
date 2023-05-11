import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CDropdown,
  CDropdownItem,
  CDropdownToggle,
  CDropdownMenu,
  CModal,
  CButton,
  CModalBody,
  CModalHeader,
  CModalTitle,

} from '@coreui/react'

import {
  UrbanCoopFdRates,
  ForeignFdRates,
  GovtPoFdRates,
  PrivateFdRates,
  SmallFdRates,
  NbfcFdRates,
} from 'src/views/profile/fdrates'

// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import {
  BoardMeetings1,
  Agm1,
  Bonus1,
  Splits1,
  Rights1,
  Dividend1
} from 'src/views/profile/configuartion/config'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [showTabs, setShowTabs] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const toggleTabs = () => {
    setShowTabs(!showTabs);
  };
  
  
  const [visible, setVisible] = useState(Array(12).fill(false));

  const navigate = useNavigate('')

  const getUser = async (e) => {
    e.preventDefault()
    if (validate()) {
      await axios
        .post('https://money-signin.onrender.com/api/signin', {
          email,
          password,
        })
        .then((response) => {
          // console.log(response.data);
          const r = response.data
          console.log(r)
          {
            if (r.message === 'Signin Successfully') {
              alert('Login Successfully')
              navigate('/')
            }
          }
        })
        .catch((error) => {
          alert(error)
        })
    }
  }

  const validate = () => {
    let result = true

    if (email === '' || email === null) {
      result = false
      alert('Please Enter Your Username')
    }
    if (password === '' || password === null) {
      result = false
      alert('Please Enter Your Password')
    }
    return result
  }
  const toggleModal = (index) => {
    const visibleCopy = [...visible];
    visibleCopy[index] = !visibleCopy[index];
    setVisible(visibleCopy);
  };

  return (
    <div className="">
      <nav className="navbar navbar-expand " style={{ minWidth: '100vw' }}>
        <div className="container">
          <a href="/" className="navbar-brand text-white" style={{ marginLeft: 0 }}>
            {' '}
            Elon M-Control{' '}
          </a>

          <button >
            <CDropdown variant="btn-group">
              <CDropdownToggle className="btn-f">FD Rates</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem className="m-0">
                  {' '}
                  <>
                    <CButton className="btn-d" onClick={() => toggleModal(0)}>
                      Foreign Bank
                    </CButton>
                    <CModal size="lg" visible={visible[0]} onClose={() => toggleModal(0)}>
                      <CModalHeader>
                        <CModalTitle>FD Rates</CModalTitle>
                      </CModalHeader>
                      <CModalBody>
                        <ForeignFdRates />
                      </CModalBody>
                    </CModal>
                  </>
                </CDropdownItem>
                <CDropdownItem href="#">
                  <>
                    <CButton className="btn-d" onClick={() => toggleModal(1)}>
                      Govt Banks & Post Office
                    </CButton>
                    <CModal size="lg" visible={visible[1]} onClose={() => toggleModal(1)}>
                      <CModalHeader>
                        <CModalTitle>FD Rates</CModalTitle>
                      </CModalHeader>
                      <CModalBody>
                        <GovtPoFdRates />
                      </CModalBody>
                    </CModal>
                  </>
                </CDropdownItem>
                <CDropdownItem href="#">
                  <>
                    <CButton className="btn-d" onClick={() => toggleModal(2)}>
                      Non-Banking Finance
                    </CButton>
                    <CModal size="lg" visible={visible[2]} onClose={() => toggleModal(2)}>
                      <CModalHeader>
                        <CModalTitle>FD Rates</CModalTitle>
                      </CModalHeader>
                      <CModalBody>
                        <NbfcFdRates />
                      </CModalBody>
                    </CModal>
                  </>
                </CDropdownItem>
                <CDropdownItem href="#">
                  <>
                    <CButton className="btn-d" onClick={() => toggleModal(3)}>
                      Private Bank
                    </CButton>
                    <CModal size="lg" visible={visible[3]} onClose={() => toggleModal(3)}>
                      <CModalHeader>
                        <CModalTitle>FD Rates</CModalTitle>
                      </CModalHeader>
                      <CModalBody>
                        <PrivateFdRates />
                      </CModalBody>
                    </CModal>
                  </>
                </CDropdownItem>
                <CDropdownItem href="#">
                  <>
                    <CButton className="btn-d" onClick={() => toggleModal(4)}>
                      Small Finance Bank
                    </CButton>
                    <CModal size="lg" visible={visible[4]} onClose={() => toggleModal(4)}>
                      <CModalHeader>
                        <CModalTitle>FD Rates</CModalTitle>
                      </CModalHeader>
                      <CModalBody>
                        <SmallFdRates />
                      </CModalBody>
                    </CModal>
                  </>
                </CDropdownItem>
                <CDropdownItem href="#">
                  <>
                    <CButton className="btn-d" onClick={() => toggleModal(5)}>
                      Urban Co-Op Bank
                    </CButton>
                    <CModal size="lg" visible={visible[5]} onClose={() => toggleModal(5)}>
                      <CModalHeader>
                        <CModalTitle>FD Rates</CModalTitle>
                      </CModalHeader>
                      <CModalBody>
                        <UrbanCoopFdRates />
                      </CModalBody>
                    </CModal>
                  </>
                </CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </button>

          {/* Corporate Actions */}

          <div className="container1" style={{ position: 'absolute', top: '50px', left: 0, right: 0, bottom: 0, zIndex: 999 }}>     
           <button className="corporate-action-btn" onClick={toggleTabs}>
        CorporateActions
      </button>
      {showTabs && (
        <div className="container11">
          {/* <div>
            <p className="gl_15 PT10">
              <span className="b_20">
                <b>POWERED BY ELON NATIVE SYSTEMS </b>
              </span>
              @2023
            </p>
          </div> */}
          <div className="Board" style={{ paddingTop: '10px' }}></div>
          <div className="bloc-tabs">
            <button
              className={activeTab === 1 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggleTab(1)}
            >
              Board Meetings
            </button>

            <button
              className={activeTab === 2 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggleTab(2)}
            >
              AGM/EGMs
            </button>
            <button
              className={activeTab === 3 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggleTab(3)}
            >
              Bonus
            </button>
            <button
              className={activeTab === 4 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggleTab(4)}
            >
              Splits
            </button>
            <button
              className={activeTab === 5 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggleTab(5)}
            >
              Rights
            </button>
            <button
              className={activeTab === 6 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggleTab(6)}
            >
              Dividend
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={activeTab === 1 ? 'content active-content' : 'content'}
            >
              <BoardMeetings1 />
            </div>

            <div
              className={activeTab === 2 ? 'content active-content' : 'content'}
            >
              <Agm1 />
            </div>

            <div
              className={activeTab === 3 ? 'content active-content' : 'content'}
            >
              <Bonus1 />
            </div>

            <div
              className={activeTab === 4 ? 'content active-content' : 'content'}
            >
              <Splits1 />
            </div>

            <div
              className={activeTab === 5 ? 'content active-content' : 'content'}
            >
              <Rights1 />
            </div>

            <div
              className={activeTab === 6 ? 'content active-content' : 'content'}
            >
              <Dividend1 />
            </div>
          </div>
        </div>
      )}
    </div>
    

          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/register" className="text-white nav-link">
                Signup
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="login bg-light min-vh-100 d-flex flex-row align-items-center justify-content-center">
        <form>
          <div className="form-floating m-3">
            <h2 className=" mb-4">Login to Elon M-Control</h2>
          </div>
          <div className="form-floating">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter Your First Name"
            />
            <label> E-mail ID</label>
          </div>
          <div className="form-floating mt-3">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              placeholder="Enter Your First Name"
            />
            <label>Password</label>
          </div>
          <div className="form-floating mt-3">
            <a href="/" className="text-dark forget">
              Forget password?
            </a>
          </div>
          <div className="">
            <button onClick={getUser} className="btn btn-primary form-floating mt-2">
              Login
            </button>
          </div>
          <div className="form-floating mt-3">
            <span>
              Are you a new user ?&nbsp;
              <a href="/register" className="forget">
                &nbsp;click here&nbsp;
              </a>
              &nbsp;to signup
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login


