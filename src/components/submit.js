import React from 'react';
import stateContext from '../contexts/stateContext'
const Submit = () => {
    return (
      <stateContext.Consumer>
        {({ toggleStatus }) => (
          <div className={`game-main-stage-box`}>
            <div>
              <i
                className="fa fa-check fa-5x"
                style={{ color: "green" }}
                aria-hidden="true"
              ></i>
            </div>
            <p>Thank You For Taking Your Time To Complete The Quiz</p>
            <button onClick={toggleStatus} className="btn btn-outline-primary">
              Home
            </button>
          </div>
        )}
      </stateContext.Consumer>
    );
}
 
Submit.propTypes = {};
 
export default Submit;