import React from 'react';
import '../Styles/app.css'
import stateContext from '../contexts/stateContext'
 
const Intro = () => {
    return (
      <stateContext.Consumer>
        {({ toggleStatus }) => (
          <div className="game-main-stage-box">
            <h4>Quiz Rules:</h4>
            <p className="game-rules-copy">
              Kindly Be Sincere With The Questions
            </p>
            <button
              onClick={toggleStatus}
              className="play-button"
              id="quiz-game-btn"
            >
              Proceed<i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
        )}
      </stateContext.Consumer>
    );
}
 
 
export default Intro;