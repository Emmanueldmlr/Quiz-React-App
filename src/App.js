import React from 'react';
import QUIZ_SAMPLE_DATA from './data/quiz'
import Intro from './components/intro'
import Quiz from './components/quiz'
import Submit from './components/submit';
import stateContext from './contexts/stateContext'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      isSubmit: false,
      toggleStatus: ()=>{
        this.setState(({status})=>({
          status: !status,
          isSubmit: false,
        }))
      },
      toggleIsSubmit: () =>{
        this.setState(({isSubmit})=>({
          isSubmit: !isSubmit
        }))
      }
    }
  }

  render() {
    const { status, isSubmit } = this.state;
    const data = QUIZ_SAMPLE_DATA;
    return (
      <stateContext.Provider value={this.state}>
        {!status ? (
          <Intro></Intro>
        ) : !isSubmit ? (
          <Quiz
            data={data}
          ></Quiz>
        ) : (
          <Submit></Submit>
        )}
      </stateContext.Provider>
    );
  }
}

// function App() {
//   const [status,setStatus] = useState(false)
//   const [isSubmit, setIsSubmit] = useState(false)
//   const data = QUIZ_SAMPLE_DATA

//   const changeState = () =>{
//     setStatus(!status)
//     setIsSubmit(false)
//   }

//   const changeSubmitStatus = () => {
//     setIsSubmit(!isSubmit);
//   }
//   return (
//     <>
//       {!status ? (
//         <Intro changeState={() => changeState()}></Intro>
//       ) : !isSubmit ? (
//         <Quiz changeSubmitStatus={()=>changeSubmitStatus()}  data={data}></Quiz>
//       ) : (
//         <Submit changeState={() => changeState()}></Submit>
//       )}
//     </>
//   );
// }

export default App;
