import React from 'react';
import PropTypes from 'prop-types';
import stateContext from '../contexts/stateContext'
 
export const FrontButton = ({
  questionStatus,
  count,
  handleNext,
  handlePrevious,
}) => {
  return (
    <div className="row offset-md-2 mt-4">
      <div className="col-md-3">
        {count > 0 ? (
          <button onClick={handlePrevious} className="btn btn-outline-primary">
            Previous
          </button>
        ) : null}
      </div>
      <div className="col-md-3">
        {!questionStatus ? (
          <button onClick={handleNext} className="btn btn-outline-info">
            Next
          </button>
        ) : null}
      </div>
      <stateContext.Consumer>
        {({ toggleIsSubmit }) => (
          <div className="col-md-3">
            <button
              onClick={toggleIsSubmit}
              type="button"
              className="btn btn-outline-success"
            >
              Finish
            </button>
          </div>
        )}
      </stateContext.Consumer>
    </div>
  );
};

export const  BackButton= ({handleIsCorrect, handleIsWrong}) => {
  return (
    <>
      <div className="row offset-md-4 mt-4">
        <div className="col-3">
          <i
            onClick={handleIsCorrect}
            className="fa fa-check fa-3x"
            style={{ color: "green", cursor: "pointer" }}
            aria-hidden="true"
          ></i>
        </div>
        <div className="col-3">
          <i
            onClick={handleIsWrong}
            className="fa fa-times fa-3x"
            style={{ color: "red", cursor: "pointer" }}
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </>
  );
}
 
FrontButton.propTypes = {
  questionStatus: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrevious: PropTypes.func.isRequired,
};
BackButton.propTypes = {
  handleIsCorrect: PropTypes.func.isRequired,
  handleIsWrong: PropTypes.func.isRequired,
};
 