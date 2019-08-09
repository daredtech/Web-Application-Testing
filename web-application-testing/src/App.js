import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <Dashboard/>

    </div>
  );
}

export default App;


// const [balls, setBalls] = useState(0);
// const [strikes, setStrikes] = useState(0);

// function ballsCounting() {
//     console.log('inside ballsCounting');
//     if (balls >=4){
//         setBalls(0);
//     }
//     else{
//         setBalls(balls+1);
//     }
// }

// function strikesCounting() {
//     console.log('inside strikesCounting');
//     if (strikes >=4){
//         setStrikes(0);
//     }
//     else{
//         setStrikes(strikes+1);
//     }
// }
