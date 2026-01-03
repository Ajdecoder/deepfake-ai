# 🧠 Deepfake Detection AI
An advanced **AI-powered media authenticity verification system** that detects manipulated videos & audio using machine learning, signal analysis, and model intelligence. Built with **React + Flowbite + Modern UI**, designed for real-time verification and secure detection workflows.

---

## 🚀 Features

### 🎯 Core Capabilities
- ✅ Detects **Deepfake Videos, Images & Audio**
- ✅ Provides **Fake / Real Classification**
- ✅ Confidence Score (%) for reliability
- ✅ Real-time Scan Processing
- ✅ Secure & Privacy Focused
- ✅ Latency 600ms

### 🧩 Product Experience
- Modern Dashboard UI
- Upload & Scan Interface
- Detection History Tracking
- Analytics Overview
- Clean UX & Fast Performance

---

## 🏗️ Tech Stack

### 🌐 Frontend
- React / Vite
- Flowbite + TailwindCSS + ShadCn
- Lucide Icons
- Custom UI Components

### 🤖 AI / Backend (Pluggable)
- ML Model (Deepfake Detection)
- Python / Node backend
- API Integration Ready

---

## 📸 Screenshots
> Add screenshots later  
`/screenshots/home.png`  
`/screenshots/dashboard.png`  
`/screenshots/result.png`

---

## 📂 Project Structure
```bash
src/
 ├── components/
 │    ├── ForensicDashboard.jsx   # The Main UI
 │    ├── Auth/
 │    │    └── LoginModal.jsx     # Firebase Login UI
 │    └── Layout/
 │         └── Header.jsx         # Aegis Branded Header
 ├── context/
 │    ├── DeepfakeContext.jsx     # Scan & UI States
 │    └── AuthContext.jsx         # Firebase User States
 ├── lib/
 │    ├── firebase.js             # Firebase Config & Auth Init
 │    └── api.js                  # DetectApi & Mongo Save Logic
 ├── ui/                          # Shadcn/Flowbite Atoms
 ├── App.jsx                      # Main Router & Providers
 └── main.jsx
