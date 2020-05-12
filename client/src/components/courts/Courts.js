import React from 'react';
import { Link } from 'react-router-dom';

const Courts = (props) => {
  const { courts } = props;

  return (
    <div>
      {courts.length > 0 ? (
        <div className='courts-grid'>
          {courts.map((court) => (
            <div key={court._id} className='courts-grid-box'>
              <Link className='link' to={`/court/${court._id}`}>
                <div className='courts-grid-box__image'>
                  <img
                    src={court.images[0]}
                    className='courts-grid-box__image__img'
                    alt='court_main_img'
                  />
                </div>
              </Link>
              <div className='courts-grid-box__info u-text-capitalize'>
                <Link className='link' to={`/court/${court._id}`}>
                  <p className='text-courtinfo-name'>{court.name}</p>
                </Link>
                <p className='text-courtinfo-location'>
                  {court.address.street}, {court.address.city},{' '}
                  {court.address.state} {court.address.zipcode}
                </p>
              </div>
              <div className='courts-grid-box__footer'>
                <div className='courts-grid-box__footer__left'>
                  <div
                    className='stars-rating'
                    style={{
                      '--rating': `${court.rating}`,
                      '--star-size': '22px',
                    }}
                  ></div>
                </div>
                <div className='courts-grid-box__footer__right'>
                  3{' '}
                  <span className='icon-user'>
                    <i className='fa fa-user'></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Courts;
