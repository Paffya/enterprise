// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

// const PaginationComponent = ({ pagination, handlePageChange }) => {
//   const renderPageNumbers = () => {
//     const pageNumbers = [];
//     for (let i = 1; i <= pagination.totalPages; i++) {
//       pageNumbers.push(
//         <button
//           key={i}
//           className={`PaginatinNumberBtn ${pagination.page === i ? 'active' : ''}`}
//           onClick={() => handlePageChange(i)}
//         >
//           {i}
//         </button>
//       );
//     }
//     return pageNumbers;
//   };

//   return (
//     <div className='paginationBox'>
//       <button
//         className='PaginatinNextBtn'
//         disabled={pagination.page === 1}
//         onClick={() => handlePageChange(pagination.page - 1)}
//       >
//         <FontAwesomeIcon icon={faAngleLeft} />
//       </button>
//       {renderPageNumbers()}
//       <button
//         className='PaginatinNextBtn'
//         disabled={pagination.page === pagination.totalPages}
//         onClick={() => handlePageChange(pagination.page + 1)}
//       >
//         <FontAwesomeIcon icon={faAngleRight} />
//       </button>
//     </div>
//   );
// };

// export default PaginationComponent;
