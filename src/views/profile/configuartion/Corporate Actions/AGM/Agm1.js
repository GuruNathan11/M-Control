import { CCard, CCardHeader } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilSearch } from '@coreui/icons';
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://agm-egms.onrender.com/config/agm/get-all"
    );
    const data = await response.json();
    setData(data.data);
  };

  return (
    <div>
      <h1>AGM/EGMs</h1>
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
        <h3 className="d-flex justify-content-center">AGM/EGMs Details</h3>
        <div className="search-input">
          <CIcon icon={cilSearch} style={{ width: '50px', marginTop: '10px' }} />
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
           <th>Date</th>
          <th>Purpose</th>
           <th>Book Closure Start</th>
            <th>Book Closure End</th> 
            <th>Agenda</th>
         </tr>
       </thead>
        <tbody>
          {data
            .filter((item) => {
              if (searchTerm === '') {
                return item;
              } else if (item.companyName.toLowerCase().includes(searchTerm.toLowerCase())) {
                return item;
              }
              return null;
            })
            .map((item) => (
              <tr key={item._id}>
                <td>{item.companyName}</td>
             <td>{item.date}</td>
             <td>{item.purpose}</td>
             <td>{item.bookClosureStart}</td>
             <td>{item.bookClosureEnd}</td>
             <td>{item.agenda}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </CCard>
  );
}

export default App;