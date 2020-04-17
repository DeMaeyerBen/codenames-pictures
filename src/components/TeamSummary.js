import React from 'react';
import PropTypes from 'prop-types';
import './TeamSummary.css';

class TeamSummary extends React.Component {
  render() {
    const {color, teams, getGuessedCards, isSpyMaster, startingTeam } = this.props;
    const currentStaringTeam = startingTeam === color;
    const totalCards = currentStaringTeam ? 8 : 7;

    return (
      <div className={`team-summary team-${color}`}>
        {teams[color].length ?
          <>
            <h3 className="team-title">
              Team {color}
              <span className={`badge ${startingTeam ? 'has-total' : ''}`}>
                {getGuessedCards(color)}
                {startingTeam ? <>/ {totalCards}</> : null}
              </span>
            </h3>
            <ul className="names">
              {teams[color].map((player, index) => (
                <li key={index} className={`${isSpyMaster(color, index) ? 'spymaster' : ''}`}>
                  <p>{isSpyMaster(color, index) && '>'} {player}</p>
                </li>
              ))}
            </ul>
          </> : null}
      </div>
    );
  }
}

TeamSummary.propTypes = {
  color: PropTypes.string,
  startingTeam: PropTypes.string,
  teams: PropTypes.object,
  getGuessedCards: PropTypes.func,
  isSpyMaster: PropTypes.func,
};

export default TeamSummary;