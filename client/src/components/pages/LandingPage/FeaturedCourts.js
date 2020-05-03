import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCourts = (props) => {
  const { courts } = props;
  return (
    <div className='featured-courts-wrapper'>
      <div className='featured-courts container'>
        <div className='featured-courts-header'>
          <p className='heading-secondary'>featured courts</p>
        </div>
        <div className='courts-grid'>
          {/* <div className='courts-grid-box'>
            <div className='courts-grid-box__image'>
              <img
                src='https://www.courtsoftheworld.com/upload/courts/407/1/COTW_Henry-Schmidt-Park_1246825277.jpg'
                className='courts-grid-box__image__img'
              />
            </div>
            <div className='courts-grid-box__info'>
              <p className='text-courtinfo-name'>McBride Loop Court</p>
              <p className='text-courtinfo-location'>
                922 McBride Loop, San Jose, CA 95125
              </p>
            </div>
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

          <div className='courts-grid-box'>
            <div className='courts-grid-box__image'>
              <img
                src='https://www.courtsoftheworld.com/upload/courts/407/1/COTW_Henry-Schmidt-Park_1246825277.jpg'
                className='courts-grid-box__image__img'
              />
            </div>
            <div className='courts-grid-box__info'>
              <p className='text-courtinfo-name'>McBride Loop Court</p>
              <p className='text-courtinfo-location'>
                922 McBride Loop, San Jose, CA 95125
              </p>
            </div>
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

          <div className='courts-grid-box'>
            <div className='courts-grid-box__image'>
              <img
                src='https://www.courtsoftheworld.com/upload/courts/407/1/COTW_Henry-Schmidt-Park_1246825277.jpg'
                className='courts-grid-box__image__img'
              />
            </div>
            <div className='courts-grid-box__info'>
              <p className='text-courtinfo-name'>McBride Loop Court</p>
              <p className='text-courtinfo-location'>
                922 McBride Loop, San Jose, CA 95125
              </p>
            </div>
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

          <div className='courts-grid-box'>
            <div className='courts-grid-box__image'>
              <img
                src='https://www.courtsoftheworld.com/upload/courts/407/1/COTW_Henry-Schmidt-Park_1246825277.jpg'
                className='courts-grid-box__image__img'
              />
            </div>
            <div className='courts-grid-box__info'>
              <p className='text-courtinfo-name'>McBride Loop Court</p>
              <p className='text-courtinfo-location'>
                922 McBride Loop, San Jose, CA 95125
              </p>
            </div>
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

          <div className='courts-grid-box'>
            <div className='courts-grid-box__image'>
              <img
                src='https://www.courtsoftheworld.com/upload/courts/407/1/COTW_Henry-Schmidt-Park_1246825277.jpg'
                className='courts-grid-box__image__img'
              />
            </div>
            <div className='courts-grid-box__info'>
              <p className='text-courtinfo-name'>McBride Loop Court</p>
              <p className='text-courtinfo-location'>
                922 McBride Loop, San Jose, CA 95125
              </p>
            </div>
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

          <div className='courts-grid-box'>
            <div className='courts-grid-box__image'>
              <img
                src='https://www.courtsoftheworld.com/upload/courts/407/1/COTW_Henry-Schmidt-Park_1246825277.jpg'
                className='courts-grid-box__image__img'
              />
            </div>
            <div className='courts-grid-box__info'>
              <p className='text-courtinfo-name'>McBride Loop Court</p>
              <p className='text-courtinfo-location'>
                922 McBride Loop, San Jose, CA 95125
              </p>
            </div>
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
          </div> */}

          {courts.length > 0 ? (
            <>
              {courts.map((court) => (
                <div key={court._id} className='courts-grid-box'>
                  <div className='courts-grid-box__image'>
                    <img
                      src={court.images[0]}
                      className='courts-grid-box__image__img'
                    />
                  </div>
                  <div className='courts-grid-box__info u-text-capitalize'>
                    <p className='text-courtinfo-name'>{court.name}</p>
                    <p className='text-courtinfo-location'>
                      {court.address.street}, {court.address.city},{' '}
                      {court.address.state} {court.address.zipcode}
                    </p>
                  </div>
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
              ))}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourts;
