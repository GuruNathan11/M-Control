// import React from 'react'
// import Agm from './AGM/Agm'
// import Bonus from './Bonus/Bonus'
// import BoardMeetings from './BoardMeeting/BoardMeetings.jsx'
// import Splits from './Splits/Splits'
// import Rights from './Rights/Rights'
// import Dividend from './Dividend/Dividend'


// const CorporateActions = () => {
//   return (
//     <div className="">
//       <div className="">
//         <h1 className="d-flex justify-content-center">CORPORATE ACTIONS CONFIGURATION</h1>
//         <div className="card">
//           <div className="card-header">
//             <p>
//               <button
//                 className=" btn btn-primary m-2"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#multiCollapseExample1"
//                 aria-expanded="false"
//                 aria-controls="multiCollapseExample1"
//               >
//                 Board Meetings
//               </button>
//               <button
//                 className=" btn-primary btn m-2"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#multiCollapseExample2"
//                 aria-expanded="false"
//                 aria-controls="multiCollapseExample2"
//               >
//                 AGM / EGMs
//               </button>
//               <button
//                 className=" btn-primary btn m-2"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#multiCollapseExample3"
//                 aria-expanded="false"
//                 aria-controls="multiCollapseExample3"
//               >
//                 Bonus
//               </button>
//               <button
//                 className=" btn-primary btn m-2"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#multiCollapseExample4"
//                 aria-expanded="false"
//                 aria-controls="multiCollapseExample4"
//               >
//                 Splits
//               </button>
//               <button
//                 className=" btn-primary btn m-2"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#multiCollapseExample5"
//                 aria-expanded="false"
//                 aria-controls="multiCollapseExample5"
//               >
//                 Rights
//               </button>
//               <button
//                 className=" btn-primary btn m-2"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#multiCollapseExample6"
//                 aria-expanded="false"
//                 aria-controls="multiCollapseExample6"
//               >
//                 Dividend
//               </button>
//             </p>
//           </div>

//           {/* CONFIGURE BODY */}
//           <div className="row">
//             <div className="card-body c-body ">
//               <div className="col">
//                 <div className="collapse multi-collapse" id="multiCollapseExample1">
//                   <div className="card card-body">
//                     <BoardMeetings />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="card-body c-body">
//               <div className="col">
//                 <div className="collapse multi-collapse" id="multiCollapseExample2">
//                   <div className="card card-body">
//                     <Agm />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="card-body c-body">
//               <div className="col">
//                 <div className="collapse multi-collapse" id="multiCollapseExample3">
//                   <div className="card card-body">
//                     <Bonus />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="card-body c-body">
//               <div className="col">
//                 <div className="collapse multi-collapse" id="multiCollapseExample4">
//                   <div className="card card-body">
//                     <Splits />
//                   </div>
//                 </div>
//               </div>
//             </div>

//              <div className="card-body c-body">
//               <div className="col">
//                 <div className="collapse multi-collapse" id="multiCollapseExample5">
//                   <div className="card card-body">
//                     <Rights />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="card-body c-body">
//               <div className="col">
//                 <div className="collapse multi-collapse" id="multiCollapseExample6">
//                   <div className="card card-body">
//                     <Dividend />
//                   </div>
//                 </div>
//               </div>
//             </div>  

//           </div>
//           <div className="card-footer">BarCharts LineCharts</div>
//         </div>
//         <div></div>
//       </div>
//     </div>
//   )
// }
// export default CorporateActions

import React, { useState } from 'react';
import Agm from './AGM/Agm';
import Bonus from './Bonus/Bonus';
import BoardMeetings from './BoardMeeting/BoardMeetings.jsx';
import Splits from './Splits/Splits';
import Rights from './Rights/Rights';
import Dividend from './Dividend/Dividend';

const CorporateActions = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'BoardMeetings':
        return <BoardMeetings />;
      case 'Agm':
        return <Agm />;
      case 'Bonus':
        return <Bonus />;
      case 'Splits':
        return <Splits />;
      case 'Rights':
        return <Rights />;
      case 'Dividend':
        return <Dividend />;
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="">
        <h1 className="d-flex justify-content-center">CORPORATE ACTIONS CONFIGURATION</h1>
        <div className="card">
          <div className="card-header">
            <p>
              <button
                className=" btn btn-primary m-2"
                type="button"
                onClick={() => handleButtonClick('BoardMeetings')}
              >
                Board Meetings
              </button>
              <button
                className=" btn-primary btn m-2"
                type="button"
                onClick={() => handleButtonClick('Agm')}
              >
                AGM / EGMs
              </button>
              <button
                className=" btn-primary btn m-2"
                type="button"
                onClick={() => handleButtonClick('Bonus')}
              >
                Bonus
              </button>
              <button
                className=" btn-primary btn m-2"
                type="button"
                onClick={() => handleButtonClick('Splits')}
              >
                Splits
              </button>
              <button
                className=" btn-primary btn m-2"
                type="button"
                onClick={() => handleButtonClick('Rights')}
              >
                Rights
              </button>
              <button
                className=" btn-primary btn m-2"
                type="button"
                onClick={() => handleButtonClick('Dividend')}
              >
                Dividend
              </button>
            </p>
          </div>

          {/* RENDER ACTIVE COMPONENT */}
          {renderActiveComponent()}

          <div className="card-footer">BarCharts LineCharts</div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CorporateActions;
