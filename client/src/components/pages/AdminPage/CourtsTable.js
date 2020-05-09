import React from 'react';
import { Link } from 'react-router-dom';

const CourtsTable = (props) => {
  const { courts } = props;
  return (
    <div className='admin-page-table'>
      {courts.length > 0 ? (
        <>
          <div className='admin-page-table-header'>
            <p className='heading-tertiary'>courts</p>
            <p className='text-admin-page-totalcourts'>
              {courts.length} total courts
            </p>
          </div>
          <table className='admin-page-table-container' cellSpacing='0'>
            {courts.map((court) => (
              <tr key={court._id}>
                <td className='u-text-align-left u-padding-left-sm'>
                  <Link
                    className='link text-admin-page-name '
                    to={`/court/${court._id}`}
                  >
                    {court.name}
                  </Link>
                </td>
                <td>{court.address.street}</td>
                <td>
                  {court.address.city}, {court.address.state}
                </td>
                <td>{court.reviews.length} Reviews</td>
                <td className='u-text-align-right'>
                  <div
                    className='stars-rating'
                    style={{
                      '--rating': `${court.rating}`,
                      '--star-size': '19px',
                    }}
                  ></div>
                </td>
                <td className='u-padding-right-sm u-text-align-right'>
                  <button className='btn btn-sm btn-sm--primary u-margin-right-xs'>
                    Edit
                  </button>
                  <button className='btn btn-sm btn-sm--danger'>Delete</button>
                </td>
              </tr>
            ))}
          </table>{' '}
        </>
      ) : null}
    </div>
  );
};

export default CourtsTable;
