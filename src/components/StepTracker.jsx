import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import Motivator from "./Motivator";
import HabitHelper from "./HabitHelper";
import ReflectionSection from "./ReflectionSection";

function StepTracker() {
     const [goal, setGoal] = useState(() => {
          return localStorage.getItem("goal") || ""; // load goal from localStorage
     }); // stores goal(s)
     const [steps, setSteps] = useState(() => {
          return JSON.parse(localStorage.getItem("steps")) || []; // load steps from localStorage
     }); // stores steps taken
     const [targetSteps, seTargetSteps] = useState(() => {
          return JSON.parse(localStorage.getItem("targetSteps")) || 10; // default is 10
     })
     const [stepInput, setStepInput] = useState(""); // input for steps
     const [isEditingGoal, setIsEditingGoal] = useState(false); // track goal editing
     const [isEditingTarget, setIsEditingTarget] = useState(false);

     const completePercentage = steps.length > 0 ? ((steps.length / targetSteps) * 100).toFixed(1) : 0; // each step is plus ten percent, max being 100

     // save goal and steps to localStorage whenever they change
     useEffect(() => {
          localStorage.setItem("goal", goal);
     }, [goal]);
     useEffect (() => {
          localStorage.setItem("steps", JSON.stringify(steps));
     }, [steps]);
     useEffect(() => {
          localStorage.setItem("targetSteps", JSON.stringify(targetSteps));
     }, [targetSteps]);

     // making a function to handle submission of goal(s)
     const handleGoalSubmission = (e) => {
          e.preventDefault();
          if (goal.trim() === "") return;
          setGoal(goal);
          setIsEditingGoal(false); // hiding edit form after setting the goal
     };

     const handleTargetSubmission = (e) => {
          e.preventDefault();
          const target = parseInt(e.target.targetInput.value, 10);
          if (target > 0) {
               setTargetSteps(target);
               setIsEditingTarget(false);
          }
     };

     // making a function to add steps
     const handleAddStep =(e) => {
          e.preventDefault();
          if (stepInput.trim() === "") return;
          setSteps([...steps, stepInput]) // add said steps to a list
          setStepInput(""); // clear input field
     };

     // function to delete a step
     const handleDeleteStep = (index) => {
          const updatedSteps = steps.filter((_, i) => i !== index); // remove step at index
          setSteps(updatedSteps);
     };

     return (
          <div style={{padding: "20px", maxWidth: "400px", margin: "auto"}}>
               <h2>Step Tracker</h2>
               
               {/* goal input or display */}
               {isEditingGoal || !goal ? (
                    <form onSubmit={handleGoalSubmission}>
                         <input 
                              type="text" 
                              placeholder="Enter goal..."
                              value={goal}
                              onChange={(e) => setGoal(e.target.value)}
                          />
                         <button type="submit">Set Goal</button>
                    </form>
               ) : (
                    <div>
                         <h3>Goal: {goal}</h3>
                         <button onClick={() => setIsEditingGoal(true)}>Edit Goal</button>
                    </div>
               )}

               {/* target steps input */}
               {isEditingTarget ? (
                    <form onSubmit={handleTargetSubmission}>
                         <input 
                              type="number"
                              name="targetInput"
                              placeholder="Set target steps..."
                              defaultValue={targetSteps}
                         />
                         <button type="submit">Save</button>
                    </form>
               ) : (
                    <div>
                         <h3>Target Steps: {targetSteps}</h3>
                         <button onClick={() => setIsEditingTarget(true)}>Edit Target</button>
                    </div>
               )}

               {/* step completion % */}
               {goal && steps.length > 0 && (
                    <p>
                         Progress: {completePercentage}% complete
                    </p>
               )}

               {/* steps section */}
               {goal && (
                    <div>
                         {/* <h3>Goal: {goal}</h3> */}
                         <form onSubmit={handleAddStep}>
                              <input 
                                   type="text" 
                                   placeholder="Add a step..."
                                   value={stepInput}
                                   onChange={(e) => setStepInput(e.target.value)}
                              />
                              <button type="submit">Add Step</button>
                         </form>

                         <ul>
                              {steps.map((step, index) => (
                                   <li key={index}>
                                        {step}{" "}
                                        <button onClick={() => handleDeleteStep(index)}>❌</button>
                                   </li>
                              ))}
                         </ul>
                    </div>
                )}
          </div>
     );
}


export default StepTracker;