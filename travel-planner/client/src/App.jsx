import { useState } from "react";
import axios from "axios";

function App() {
  const [form, setForm] = useState({
    destination: "",
    days: "",
    budget: "",
    interests: "",
  });

  const [itinerary, setItinerary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generatePlan = async () => {
    if (!form.destination || !form.days) {
      alert("Enter destination and days");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/generate-itinerary",
        {
          ...form,
          days: Number(form.days),
        }
      );

      setItinerary(res.data.itinerary);
    } catch (err) {
      alert("Error generating itinerary");
    }

    setLoading(false);
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🌍 Smart Travel Planner</h1>

      <div style={styles.card}>
        <input
          name="destination"
          placeholder="Destination (Goa, Paris...)"
          value={form.destination}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="days"
          placeholder="Number of Days"
          value={form.days}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="budget"
          placeholder="Budget"
          value={form.budget}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="interests"
          placeholder="Interests (food, adventure...)"
          value={form.interests}
          onChange={handleChange}
          style={styles.input}
        />

        <button onClick={generatePlan} style={styles.button}>
          {loading ? "Generating..." : "Generate Plan"}
        </button>
      </div>

      {itinerary && (
        <div style={styles.output}>
          {itinerary}
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0f172a",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
    fontFamily: "Arial",
  },

  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },

  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  },

  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    outline: "none",
    background: "#334155",
    color: "white",
  },

  button: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    background: "#3b82f6",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },

  output: {
    marginTop: "30px",
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    width: "300px",
    whiteSpace: "pre-wrap",
    lineHeight: "1.6",
  },
};

export default App;