import React from 'react'
import { useState } from 'react'
import axios from 'axios'
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

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [visibleLg, setVisibleLg] = useState(false)
  const [visibleLg1, setVisibleLg1] = useState(false)
  const [visibleLg2, setVisibleLg2] = useState(false)
  const [visibleLg3, setVisibleLg3] = useState(false)
  const [visibleLg4, setVisibleLg4] = useState(false)
  const [visibleLg5, setVisibleLg5] = useState(false)

  const navigate = useNavigate()

  const isValidate = () => {
    let isProceed = true
    let err_msg = 'Please Enter a Value of '
    if (firstName === '' || firstName === null) {
      isProceed = false
      err_msg += ' first name '
    }
    if (lastName === '' || lastName === null) {
      isProceed = false
      err_msg += ' last name '
    }
    if (mobile === '' || mobile === null) {
      isProceed = false
      err_msg += 'mobile '
    }
    if (email === '' || email === null) {
      isProceed = false
      err_msg += 'e-mail '
    }
    if (password === '' || password === null) {
      isProceed = false
      err_msg += 'password '
    }

    if (!isProceed) {
      alert(err_msg)
    }
    return isProceed
  }

  const postUser = async (e) => {
    e.preventDefault()
    if (isValidate()) {
      await axios
        .post('https://money-signin.onrender.com/api/signup', {
          firstName,
          lastName,
          email,
          password,
          mobile,
        })
        .then((res) => {
          alert('Registeration Successfull....')
          navigate('/login')
        })
        .catch((err) => {
          alert('Registeration Failed Reason :' + err)
        })
    }
  }

  return (
    <div className="">
      <nav className="navbar navbar-expand " style={{ minWidth: '100vw' }}>
        <div className="container">
          <a href="/" className="navbar-brand text-white" style={{ marginLeft: 0 }}>
            {' '}
            Elon M-Control{' '}
          </a>
          <button>
            <CDropdown variant="btn-group">
              <CDropdownToggle className="btn-f">FD Rates</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem className="m-0">
                  {' '}
                  <>
                    <CButton className="btn-d" onClick={() => setVisibleLg(!visibleLg)}>
                      Foreign Bank
                    </CButton>
                    <CModal size="lg" visible={visibleLg} onClose={() => setVisibleLg(false)}>
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
                    <CButton className="btn-d" onClick={() => setVisibleLg1(!visibleLg1)}>
                      Govt Banks & Post Office
                    </CButton>
                    <CModal size="lg" visible={visibleLg1} onClose={() => setVisibleLg1(false)}>
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
                    <CButton className="btn-d" onClick={() => setVisibleLg2(!visibleLg2)}>
                      Non-Banking Finance
                    </CButton>
                    <CModal size="lg" visible={visibleLg2} onClose={() => setVisibleLg2(false)}>
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
                    <CButton className="btn-d" onClick={() => setVisibleLg3(!visibleLg3)}>
                      Private Bank
                    </CButton>
                    <CModal size="lg" visible={visibleLg3} onClose={() => setVisibleLg3(false)}>
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
                    <CButton className="btn-d" onClick={() => setVisibleLg4(!visibleLg4)}>
                      Small Finance Bank
                    </CButton>
                    <CModal size="lg" visible={visibleLg4} onClose={() => setVisibleLg4(false)}>
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
                    <CButton className="btn-d" onClick={() => setVisibleLg5(!visibleLg5)}>
                      Urban Co-Op Bank
                    </CButton>
                    <CModal size="lg" visible={visibleLg5} onClose={() => setVisibleLg5(false)}>
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/login" className="text-white nav-link active" aria-current="page">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="register bg-light min-vh-100 d-flex flex-row align-items-center justify-content-center">
        <form>
          <div className="form-floating">
            <h2 className="">REGISTERATION FORM</h2>
          </div>
          <div className="form-floating">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="form-control m-1"
              placeholder="Enter Your First Name"
            />
            <label>FirstName</label>
          </div>
          <div className="form-floating">
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className="form-control m-1"
              placeholder="Enter Your First Name"
            />
            <label>LastName</label>
          </div>
          <div className="form-floating">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control m-1"
              placeholder="Enter Your First Name"
            />
            <label>E-mail</label>
          </div>
          <div className="form-floating">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control m-1"
              placeholder="Enter Your First Name"
            />
            <label>Create Password</label>
          </div>
          <div className="form-floating">
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              type="tel"
              className="form-control m-1"
              placeholder="Enter Your First Name"
            />
            <label>Mobile Number</label>
          </div>
          <div className="form-floating">
            <div className="form-check">
              <input
                className="form-check-input bg-danger m-1"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <span className="forget"> I agree terms & conditions </span>
              </label>
            </div>
          </div>
          <div className="">
            <button onClick={postUser} className="btn btn-primary form-floating mt-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
