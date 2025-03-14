


function ProgressBar({stepsCompleted, targetSteps}) {
     const progress = Math.min((stepsCompleted / targetSteps) * 100, 100);

     return (
          <div style={{ width: "100%", background: "#e0e0e0", borderRadius: "10px", margin: "10px 0", position: "relative", height: "25px" }}>
               <div
                    style={{
                    width: `${completePercentage}%`,
                    background: completePercentage === "100.0" ? "linear-gradient(90deg, #4CAF50, #2E7D32)" : "linear-gradient(90deg, #007bff, #0056b3)",
                    height: "100%",
                    borderRadius: "10px",
                    transition: "width 0.5s ease-in-out",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    color: "#fff",
                    }}
               >
                    {/* {completePercentage}% */}
                    <p>{stepsCompleted} / {targetSteps} steps completed</p>
               </div>
          </div>
     );
}


 export default ProgressBar;