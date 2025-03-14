import { useState, useEffect } from "react";


function HabitHelper({stepsCompleted, targetSteps}) {
     const [advice, setAdvice] = useState("");

     useEffect(() => {
          // advice updates based on steps taken
          if (stepsCompleted === 0) {
               setAdvice("The hardest part is starting. Take that first step today! 🚶‍♂️");
             } else if (stepsCompleted < targetSteps / 3) {
               setAdvice("Small, consistent actions lead to big changes. Keep going! 💪");
             } else if (stepsCompleted < targetSteps / 2) {
               setAdvice("You're building momentum! Try to make it a daily habit. 🔄");
             } else if (stepsCompleted < targetSteps) {
               setAdvice("You're close to your goal! Keep up the great work! 🚀");
             } else {
               setAdvice("You've reached your goal! Now, turn this into a lasting habit! 🌟");
             }
     }, [stepsCompleted, targetSteps]);

     return (
          <div style={{ 
            margin: "20px 0", 
            padding: "15px", 
            background: "#fff3cd", 
            borderRadius: "10px", 
            textAlign: "center", 
            fontWeight: "bold" 
          }}>
            <p>🌱 {advice}</p>
          </div>
     );
}


export default HabitHelper;