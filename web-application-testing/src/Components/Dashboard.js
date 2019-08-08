import React, {useState} from 'react';
import Display from './Display';

function Dashboard ()  {

    const [balls, setBalls] = useState(0);

    function ballsCounting() {
        console.log('inside ballsCounting');
        if (balls >=4){
            setBalls(0);
        }
        else{
            setBalls(balls+1);
        }
    }

    return(    
    <div className='dashboard'> 
    I am dashboard
    <Display/>
    <button onClick={ballsCounting} className='dashboard-button-balls'>balls</button>
    Balls value: {balls}
    </div>)

}
export default Dashboard;



// Count Rules
// balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// balls and strikes reset to 0 when a hit is recorded.
// a foul increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.

// Dashboard
// provide a button that the person in charge can press every time there is a strike, ball, foul or hit.
// there is NO need to specify the type of hit (single, double, etc).
// changes recorded on this component should update the information shown by the Display component.
// Feel free add other components and organize and name your components any way you want to satisfy the requirements. Make it up and make it happen developer!.


// Display
// display the count of balls and strikes for the at-bat.
// should be updated when the user records activity on the Dashboard component.