import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import HabitHelper from "./HabitHelper";

function StepTracker() {
    const [goal, setGoal] = useState(() => JSON.parse(localStorage.getItem("goal")) || "");
    const [steps, setSteps] = useState(() => JSON.parse(localStorage.getItem("steps")) || []);
    const [targetSteps, setTargetSteps] = useState(() => JSON.parse(localStorage.getItem("targetSteps")) || 10);
    const [stepInput, setStepInput] = useState("");
    const [goalInput, setGoalInput] = useState(goal);
    const [targetInput, setTargetInput] = useState(targetSteps);
    const [isEditingGoal, setIsEditingGoal] = useState(false);
    const [isEditingTarget, setIsEditingTarget] = useState(false);

    const completePercentage = steps.length > 0 ? ((steps.length / targetSteps) * 100).toFixed(1) : 0;

    useEffect(() => {
        localStorage.setItem("goal", JSON.stringify(goal));
    }, [goal]);

    useEffect(() => {
        localStorage.setItem("steps", JSON.stringify(steps));
    }, [steps]);

    useEffect(() => {
        localStorage.setItem("targetSteps", JSON.stringify(targetSteps));
    }, [targetSteps]);

    const handleGoalSubmission = (e) => {
        e.preventDefault();
        if (goalInput.trim() === "") return;
        setGoal(goalInput);
        setIsEditingGoal(false);
    };

    const handleTargetSubmission = (e) => {
        e.preventDefault();
        const target = parseInt(targetInput, 10);
        if (target > 0) {
            setTargetSteps(target);
            setIsEditingTarget(false);
        }
    };

    const handleAddStep = (e) => {
        e.preventDefault();
        if (stepInput.trim() === "") return;
        setSteps([...steps, stepInput]);
        setStepInput("");
    };

    const handleDeleteStep = (index) => {
        const updatedSteps = steps.filter((_, i) => i !== index);
        setSteps(updatedSteps);
    };

    return (
        <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", borderRadius: "15px", background: "white", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}>
            <h2 style={{ color: "var(--primary-color)" }}>🌟 Step Tracker 🌟</h2>

            {/* Goal Section */}
            {isEditingGoal || !goal ? (
                <form onSubmit={handleGoalSubmission}>
                    <input 
                        type="text" 
                        placeholder="Enter goal..."
                        value={goalInput}
                        onChange={(e) => setGoalInput(e.target.value)}
                    />
                    <button type="submit">Set Goal</button>
                </form>
            ) : (
                <div>
                    <h3>🎯 Goal: {goal}</h3>
                    <button onClick={() => setIsEditingGoal(true)}>Edit Goal</button>
                </div>
            )}

            {/* Target Steps */}
            {isEditingTarget ? (
                <form onSubmit={handleTargetSubmission}>
                    <input 
                        type="number"
                        placeholder="Set target steps..."
                        value={targetInput}
                        onChange={(e) => setTargetInput(e.target.value)}
                    />
                    <button type="submit">Save</button>
                </form>
            ) : (
                <div>
                    <h3>🏆 Target Steps: {targetSteps}</h3>
                    <button onClick={() => setIsEditingTarget(true)}>Edit Target</button>
                </div>
            )}

            {/* Progress Bar */}
            {goal && steps.length > 0 && (
                <>
                    <h3>💎 Progress: {completePercentage}% complete</h3>
                    <ProgressBar progress={completePercentage} />
                </>
            )}

            {/* Steps Section */}
            {goal && (
                <div>
                    <form onSubmit={handleAddStep}>
                        <input 
                            type="text" 
                            placeholder="Add a step..."
                            value={stepInput}
                            onChange={(e) => setStepInput(e.target.value)}
                        />
                        <button type="submit">➕ Add Step</button>
                    </form>

                    <ul>
                        {steps.map((step, index) => (
                            <li key={index} style={{ marginBottom: "10px" }}>
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
