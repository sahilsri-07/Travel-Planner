# 🌍 Smart Travel Planner

A full-stack AI-powered web application that generates personalized travel itineraries based on destination, budget, and user interests.

---

## ✨ Features

* 🤖 AI-assisted place suggestions (Groq API)
* 📅 Dynamic day-wise itinerary (any number of days)
* 🎯 Interest-based recommendations (food, adventure, culture)
* 💰 Budget-aware planning
* ⚡ Fast and responsive UI
* 🔐 Secure API key handling using `.env`

---

## 🧠 How it works

1. User enters destination, number of days, budget, and interests
2. Backend sends request to Groq API
3. AI returns relevant places and activities
4. Server structures them into a clean day-wise itinerary
5. Frontend displays formatted travel plan

---

## 🛠 Tech Stack

* **Frontend:** React (Vite)
* **Backend:** Node.js, Express
* **API:** Groq (LLM)
* **HTTP Client:** Axios

---

## 🚀 Run Locally

### 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Travel-Planner.git
cd Travel-Planner
```

---

### 2. Setup Backend

```bash
cd server
npm install
node server.js
```

---

### 3. Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `server` folder:

```env
GROQ_API_KEY=your_api_key_here
```

> ⚠️ Do NOT upload `.env` file to GitHub

---

## 📌 Future Improvements

* 🗺 Map integration (Google Maps)
* 💾 Save and revisit itineraries
* 🔐 User authentication (login/signup)
* 📄 Export itinerary as PDF
* 🌐 Multi-city travel planning

---

## 👨‍💻 Author

**Sahil Srivastava**

---

## ⭐ If you like this project

Give it a star on GitHub ⭐
