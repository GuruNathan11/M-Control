import { CCard, CCardHeader } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilSearch } from '@coreui/icons';
import { useState, useEffect } from "react";

function Rights1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://elon-rights.onrender.com/config/rights/get-all"
    );
    const data = await response.json();
    setData(data.data);
  };

  return (
    <div>
      <h1>Rights</h1>
      <Table data={data} />
    </div>
  );
}

function Table(props) {
  const { data } = props;
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <CCard>
      <CCardHeader>
        <h3 className="d-flex justify-content-center"> View Rights Offer during the year</h3>
        <div className="search-input">
          <CIcon icon={cilSearch} style={{ width: '50px', marginTop: '10px' ,paddingRight:"10px" }} />
          <input
            type="text"
            style={ {width: '210px'}}
            placeholder="Search by Company Name"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </CCardHeader>

      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Rights Ratio</th>
            <th> FV</th>
            <th>Premium</th>
            <th>Announcement</th>
            <th>Record</th>
            <th>Ex Rights</th>
          </tr>
        </thead>
        <tbody>
        {data.length === 0 ? (
              <tr>
                <td colSpan="3" className="no-results">
                  No Results Found
                </td>
              </tr>
            ) : (
              data
              .filter((item) => {
                if (searchTerm === '') {
                  return item;
                } else if (item.companyName.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return item;
                }
                return null;
              })
            .map((item, index) => (
              <tr key={item._id} className={index % 2 === 0 ? 'even' : 'odd'}>
                <td>{item.companyName}</td>
                <td>{item.rightsRatio}</td>
                <td>{item.fv}</td>
                <td>{item.premium}</td>
                <td>{item.announcement}</td>
                <td>{item.record}</td>
                <td>{item.ex_rights}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </CCard>
  );
}

export default Rights1;