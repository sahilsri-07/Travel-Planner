import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config({ path: "./.env" });

// Debug
console.log(
  "GROQ KEY:",
  process.env.GROQ_API_KEY ? "Loaded ✅" : "Missing ❌"
);

const app = express();
app.use(cors());
app.use(express.json());

// Groq client
const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

// Test route
app.get("/test", (req, res) => {
  res.send("Backend working");
});

// MAIN ROUTE
app.post("/generate-itinerary", async (req, res) => {
  console.log("API HIT:", req.body);

  const { destination, days, budget, interests } = req.body;

const prompt = `
Plan a ${days}-day trip to ${destination}.

Budget: ${budget}
Interests: ${interests}

Make it:
- Unique for each day
- Include famous AND hidden places
- Suggest food spots, experiences, and timing
- Avoid repeating the same activities

Make it feel like a real travel guide.

Format clean day-wise itinerary.
`;

  try {
    const completion = await client.chat.completions.create({
  model: "llama3-70b-8192",
  messages: [{ role: "user", content: prompt }],
  temperature: 1,
});

    const result =
      completion.choices?.[0]?.message?.content || "No AI response";

    return res.json({ itinerary: result });

  } catch (err) {
    console.error("GROQ ERROR:", err.message);

    // 🔥 dynamic fallback (works for ANY number of days)
    let plan = `Trip Plan for ${destination}\n\n`;

    for (let i = 1; i <= Number(days); i++) {
      plan += `Day ${i}:\n- Explore ${destination}\n- Enjoy ${interests}\n\n`;
    }

    return res.json({ itinerary: plan });
  }
});

// Start server
app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on http://localhost:5000");
});