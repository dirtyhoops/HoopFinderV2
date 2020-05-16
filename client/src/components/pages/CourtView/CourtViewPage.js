import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCourt } from '../../../actions/court';

import CourtProperties from './CourtProperties';
import CourtCondition from './CourtCondition';

const CourtViewPage = ({
  court: { selectedCourt },
  getCourt,
  match: {
    params: { id },
  },
}) => {
  useEffect(() => {
    getCourt(id);
  }, []);

  return (
    <div className='courtview-wrapper'>
      {selectedCourt ? (
        <div className='courtview container'>
          <div className='courtview-info'>
            <p className='courtview-text-name u-text-uppercase'>rucker park</p>
            <p className='courtview-text-address u-text-capitalize'>
              {selectedCourt.address.street}, {selectedCourt.address.city},{' '}
              {selectedCourt.address.state} {selectedCourt.address.zipcode}
            </p>
          </div>

          <CourtProperties selectedCourt={selectedCourt} />
          {/* ADD THE IMAGE HER */}
          <CourtCondition />
        </div>
      ) : // change the null to a spinner that is saying COURT IS LOADING later
      null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  court: state.court,
});

export default connect(mapStateToProps, { getCourt })(CourtViewPage);
