import { useState } from "react";

function ReflectionSection() {
  const [reflection, setReflection] = useState("");

  return (
    <div style={{ margin: "20px 0", padding: "15px", background: "#e3f2fd", borderRadius: "10px" }}>
      <h2>📝 Reflection</h2>
      <textarea 
        value={reflection} 
        onChange={(e) => setReflection(e.target.value)} 
        placeholder="Write your thoughts here..."
        style={{ width: "100%", height: "100px", padding: "10px" }}
      />
    </div>
  );
}

export default ReflectionSection;
