import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { FrontButton , BackButton} from "./buttons";
 
const Quiz  = ({data}) => {
    const [flip, setFlip] = useState(false);
    const [count, setCount] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isWrong, setIsWrong] = useState(false);
    useEffect(() => {
       const id = window.setInterval(() => {
          setIsCorrect(false)
          setIsWrong(false)         
      }, 6000);
      return () => {
        clearTimeout(id);
      }
    }, [isCorrect,isWrong])

    const handleIsCorrect = ()=>{
      setIsCorrect(!isCorrect)
    }
    const handleIsWrong = ()=>{
      setIsWrong(!isWrong)
    }

    const handleFlip = () => {
    setFlip(!flip);
    };
    const handleNext = ()=>{
        if (data.length-1 > count) {
            setCount(count+1)
        }
        else{
            setIsFinished(true)
        }
    }
    const handlePrevious = () =>{
        if (data.length > count) {
            setCount(count-1)
        }
        if (isFinished) setIsFinished(false)
    }

    return (
      <div>
        <div className={`game-main-stage-box`}>
          {
            isCorrect ?
              <div className="alert alert-success" role="alert">
                Nice One!, Lets Keep Rolling
              </div>
            :
            null
          }
          {
            isWrong ? 
            <div className="alert alert-danger" role="alert">
              Oops, You Can Do Better
            </div>
            :
            null
          }
      
          <div className={`card ${flip ? "flip" : ""}`} onClick={handleFlip}>
            <div className="back">{data[count].answer}</div>
            <div className="front">
              {data[count].question}
              <div className="flashcard-options">
                {data[count].options.map((option) => (
                  <div key={option} className="flashcard-option">
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {!flip ? (
            <FrontButton
              questionStatus={isFinished}
              count={count}
              handleNext={() => handleNext()}
              handlePrevious={() => handlePrevious()}
            ></FrontButton>
          ) : (
            <BackButton handleIsCorrect={()=>handleIsCorrect()} handleIsWrong={()=>handleIsWrong()}></BackButton>
          )}
        </div>
      </div>
    );
}

Quiz.propTypes = {
    data: PropTypes.array.isRequired,
};
 
export default Quiz;