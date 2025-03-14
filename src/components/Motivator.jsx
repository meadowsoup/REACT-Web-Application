import { useState, useEffect } from "react";


function Motivator({ stepsCompleted, targetSteps}) {
     const [quote, setQuote] = useState("");
     const [loading, setLoading] = useState(false);

     useEffect(() => {
          // fetching a random quote
          const fetchQuote = async () => {
               setLoading(true);
               try {
                    const response = await fetch("http://api.forismatic.com/api/1.0/");
                    const data = await response.json();
                    setQuote(data[0].q);
               } catch (error) {
                    console.error("Cannot fetch quote", error);
                    setQuote("Keep it up, you're doing great!");
               } finally {
                    setLoading(false);
               }
          };

          fetchQuote();
     }, []);

     useEffect(() => {
          // message based on progress
          if (stepsCompleted === 0) {
               setQuote("Getting started is never easy, but you got this! 💪🏽");
          } else if (stepsCompleted < targetSteps / 2) {
               // only if under half progress
               if (!loading) {
                    setQuote(quote);
               }
          } else if (stepsCompleted >= targetSteps) {
               setQuote("Incredible! You've achieved your goal! 🎉");
          } else {
               setQuote("Making good progress, keep going! 🚀");
          }
     }, [stepsCompleted, targetSteps, quote, loading]);

     return (
          <div style={{ 
               margin: "20px 0", 
               padding: "15px", 
               background: "#f9f9f9", 
               borderRadius: "10px", 
               textAlign: "center", 
               fontStyle: "italic" 
             }}>
               <p>💡 {loading ? "Loading quote..." : quote}</p>
           </div>
     );
}


export default Motivator;