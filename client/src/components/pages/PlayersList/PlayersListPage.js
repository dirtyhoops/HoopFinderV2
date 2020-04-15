import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProfiles } from '../../../actions/profile';

import defaultAvatar from '../../../img/defaultavatar.png';

const PlayersListPage = ({ profile: { players }, getProfiles }) => {
  useEffect(() => {
    getProfiles(filterPosition);
  }, []);

  const [filterPosition, setFilterPosition] = useState('all players');

  // Filter the players list
  const handlePlayerFilter = (position) => {
    getProfiles(position);
  };

  // Set the state and filter the players list
  const onChange = (e) => {
    getProfiles(e.target.value);
    setFilterPosition(e.target.value);
  };

  return (
    <div className='players-wrapper'>
      <div className='players container'>
        <div className='players-filterbar'>
          <div className='players-filterbar__custom-select'>
            <select
              name='playerposition'
              value={filterPosition}
              onChange={(e) => onChange(e)}
            >
              <option value='all players' defaultValue>
                All Players
              </option>
              <option value='point guard'>Point Guard</option>
              <option value='shooting guard'>Shooting Guard</option>
              <option value='small forward'>Small Forward</option>
              <option value='power forward'>Power Forward</option>
              <option value='center'>Center</option>
            </select>
            {/* ALL PLAYERS <i className='fa fa-chevron-down'></i> */}
          </div>
        </div>
        {players.length > 0 ? (
          <div className='players-grid'>
            {players.map((player) => (
              <div key={player._id} className='players-grid__box'>
                <Link className='link' to={`/player/${player.user._id}`}>
                  <div className='players-grid__box__content'>
                    <div className='players-grid__box__content__image'>
                      <img
                        src={
                          player.avatar === '' ? defaultAvatar : player.avatar
                        }
                        className={`players-grid__box__content__image__img ${player.avatar_bg}`}
                      />
                    </div>
                    <div className='players-grid__box__content__info'>
                      <p className='players-text-name'>
                        {player.user.firstName} {player.user.lastName}
                      </p>
                      <p className='players-text-position'>{player.position}</p>
                      <p className='players-text-location'>
                        <i className='fa fa-map-marker'></i> {player.city},{' '}
                        {player.state}
                      </p>
                    </div>
                    <div className='players-grid__box__content__button'>
                      <button className='btn-block btn-inline-success'>
                        Add Player
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(PlayersListPage);
