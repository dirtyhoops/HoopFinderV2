import React from 'react';

const CourtViewPage = () => {
  return (
    <div className='court-view-wrapper'>
      <div className='court-view container'>
        <div className='court-view-info'>
          <p className='court-view-text-name u-text-uppercase'>rucker park</p>
          <p className='court-view-text-address u-text-capitalize'>
            155th street & frederick douglass blvd, new yord, NY 10039
          </p>
        </div>
        <div className='court-view-properties'>
          <p className='court-view-text-subheader'>court properties</p>
          <div className='court-view-properties__grid'>
            <div className='court-view-properties__grid-box'>surface type</div>
            <div className='court-view-properties__grid-box'>surface type</div>
            <div className='court-view-properties__grid-box'>surface type</div>
            <div className='court-view-properties__grid-box'>surface type</div>
            <div className='court-view-properties__grid-box'>surface type</div>
            <div className='court-view-properties__grid-box'>surface type</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourtViewPage;
