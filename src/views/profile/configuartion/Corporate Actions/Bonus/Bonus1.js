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
      "https://eloon-bonus.onrender.com/config/bonus/get-all"
    );
    const data = await response.json();
    setData(data.data);
  };

  return (
    <div>
      <h1>Bonus</h1>
      <Table data={data} />
    </div>
  );
}

function Table(props) {
  const { data } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

  const filteredData = data.filter((item) =>
  item.companyName.toLowerCase().includes(searchTerm.toLowerCase())
);

const indexOfLastRow = currentPage * rowsPerPage;
const indexOfFirstRow = indexOfLastRow - rowsPerPage;
const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);
const pageNumbers = [];
for (let i = 1; i <= Math.ceil(filteredData.length / rowsPerPage); i++) {
  pageNumbers.push(i);
}

  return (
    <CCard>
       <CCardHeader>
        <div className="d-flex justify-content-between">
          {/* <h3 className="mb-0">Board Meetings Details</h3> */}
          <div className="d-flex align-items-right">
            <div className="search-input mr-3">
              <CIcon icon={cilSearch} style={{ width: "40px" }} />
              <input
                type="text"
                style={{ width: "210px" , marginRight:"40px" }}
                placeholder="Search by Company Name"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <CIcon icon={cilSearch} style={{ width: "40px" }} />
              <input
                type="text"
                style={{ width: "210px" , marginRight:"40px" }}
                placeholder="filter by year"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Pagination
              pageNumbers={pageNumbers}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </CCardHeader>

      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Bonus Ratio</th>
            <th>Announcement</th>
            <th>Record</th>
            <th>Ex Bonus</th>
          </tr>
        </thead>
        <tbody>
       
           {currentRows .map((item, index) => (
              <tr key={item._id} className={index % 2 === 0 ? 'even' : 'odd'}>
                <td>{item.companyName}</td>
                <td>{item.bonusRatio}</td>
                <td>{item.announcement}</td>
                <td>{item.record}</td>
              
                <td>{item.ex_bonus}</td>
               
              </tr>
                
            )
            )}
            
        </tbody>
      </table>
    </CCard>
  );
}

function Pagination(props) {
  const { pageNumbers, currentPage, setCurrentPage } = props;

  const linksToShow = 5; // Change this to control the number of links to show
  const firstIndex = Math.max(0, currentPage - linksToShow);
  const lastIndex = Math.min(firstIndex + linksToShow, pageNumbers.length);

  const getPageLinks = () => {
    const links = [];
    for (let i = firstIndex; i < lastIndex; i++) {
      const pageNumber = pageNumbers[i];
      links.push(
        <li
          key={pageNumber}
          className={`page-item${currentPage === pageNumber ? " active" : ""}`}
        >
          <button className="page-link" onClick={() => setCurrentPage(pageNumber)}>
            {pageNumber}
          </button>
        </li>
      );
    }
    return links;
  };

  return (
    <ul className="pagination mb-0">
      <li className={`page-item${currentPage === 1 ? " disabled" : ""}`}>
        <button
          className="page-link"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      </li>
      {getPageLinks()}
      {lastIndex < pageNumbers.length && (
        <li className="page-item disabled">
          <span className="page-link">...</span>
        </li>
      )}
      <li className={`page-item${currentPage === pageNumbers.length ? " disabled" : ""}`}>
        <button
          className="page-link"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === pageNumbers.length}
        >
          Next
        </button>
      </li>
    </ul>
  );
}

export default App;