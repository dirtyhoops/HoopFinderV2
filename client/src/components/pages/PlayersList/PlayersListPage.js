import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const PlayersListPage = () => {
  return (
    <div className='players-wrapper'>
      <div className='players container'>
        <div className='players-filterbar'>
          <p>
            ALL PLAYERS <i class='fa fa-chevron-down'></i>
          </p>
        </div>
        <div class='players-grid'>
          <div class='players-grid__box'>
            <div class='players-grid__box__image'>
              <img
                src='img/profile5.png'
                class='players-grid__box__image__img players-grid__box__image__img--red'
              />
            </div>
            <div class='players-grid__box__info'>
              <p class='players-text-name'>Kevin Durant</p>
              <p class='players-text-position'>Small Forward</p>
              <p class='players-text-location'>
                <i class='fa fa-map-marker'></i> San Francisco, CA
              </p>
            </div>
            <div class='players-grid__box__button'>
              <button class='btn-block btn-inline-success'>Add Player</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayersListPage;
