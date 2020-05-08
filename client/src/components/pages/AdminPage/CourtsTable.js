import React from 'react';
import { Link } from 'react-router-dom';

const CourtsTable = (props) => {
  const { courts } = props;
  return (
    <div className='admin-page-table'>
      <p className='heading-tertiary'>courts</p>
      <p className='text-admin-page-totalcourts'>50 total courts</p>
      {courts.length > 0 ? (
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
              <td>3 Reviews</td>
              <td>Rating ****</td>
              <td className='u-padding-right-sm u-text-align-right'>
                action buttons
              </td>
            </tr>
          ))}
        </table>
      ) : null}
    </div>
  );
};

export default CourtsTable;
