import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCourts = (props) => {
  const { courts } = props;
  return (
    <div className='featured-courts-wrapper'>
      <div className='featured-courts container'>
        <div className='featured-courts-header u-margin-bottom-md'>
          <p className='heading-secondary'>featured courts</p>
        </div>
        {courts.length > 0 ? (
          <div className='courts-grid'>
            {courts.map((court) => (
              <div key={court._id} className='courts-grid-box'>
                <Link className='link' to={`/court/${court._id}`}>
                  <div className='courts-grid-box__image'>
                    <img
                      src={court.images[0]}
                      className='courts-grid-box__image__img'
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
                    <span className='fa fa-star icon-star star-checked'></span>
                    <span className='fa fa-star icon-star star-checked'></span>
                    <span className='fa fa-star icon-star star-checked'></span>
                    <span className='fa fa-star icon-star star-checked'></span>
                    <span className='fa fa-star icon-star'></span>
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
    </div>
  );
};

export default FeaturedCourts;
